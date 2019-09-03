// @flow
import React from 'react';
import * as ICONS from 'constants/icons';
import Button from 'component/button';
import Tooltip from 'component/common/tooltip';
import { stopContextMenu } from 'util/context-menu';
import butterchurn from 'butterchurn';
import detectButterchurnSupport from 'butterchurn/lib/isSupported.min';
import * as musicMetadata from 'music-metadata-browser';
import WaveSurfer from 'wavesurfer.js';

import styles from './audioViewer.module.scss';

const isButterchurnSupported = detectButterchurnSupport();

type Props = {
  source: {
    url: string,
    stream: string => void,
    downloadCompleted: string,
    downloadPath: string,
    status: string,
  },
  contentType: string,
  poster?: string,
  claim: StreamClaim,
};

const presets = [
  require('butterchurn-presets/presets/converted/Flexi - when monopolies were the future [simple warp + non-reactive moebius].json'),
  require('butterchurn-presets/presets/converted/Rovastar & Loadus - FractalDrop (Active Sparks Mix).json'),
  require('butterchurn-presets/presets/converted/shifter - tumbling cubes (ripples).json'),
  require('butterchurn-presets/presets/converted/ORB - Blue Emotion.json'),
  require('butterchurn-presets/presets/converted/shifter - urchin mod.json'),
  require('butterchurn-presets/presets/converted/Stahlregen & fishbrain + flexi + geiss - The Machine that conquered the Aether.json'),
  require('butterchurn-presets/presets/converted/Zylot - Crosshair Dimension (Light of Ages).json'),
];

class AudioVideoViewer extends React.PureComponent {
  // audioNode: ?HTMLAudioElement;
  // player: ?{ dispose: () => void };

  state = {
    playing: false,
    enableMilkdrop: isButterchurnSupported,
    showEqualizer: false,
    showSongDetails: true,
    enableArt: true,
    artLoaded: false,
    artist: null,
    title: null,
    album: null,
  };

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const { source } = this.props;

    const audioNode = this.audioNode;

    this.audioNode.src = source;

    audioNode.crossOrigin = 'anonymous';
    audioNode.autostart = true;

    const canvasHeight = this.canvasNode.offsetHeight;
    const canvasWidth = this.canvasNode.offsetWidth;

    // Required for canvas, nuance of rendering
    this.canvasNode.height = canvasHeight;
    this.canvasNode.width = canvasWidth;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    const audioSource = audioContext.createMediaElementSource(audioNode);
    audioSource.connect(audioContext.destination);

    if (isButterchurnSupported) {
      const visualizer = (this.visualizer = butterchurn.createVisualizer(audioContext, this.canvasNode, {
        height: canvasHeight,
        width: canvasWidth,
        pixelRatio: window.devicePixelRatio || 1,
        textureRatio: 1,
      }));

      visualizer.connectAudio(audioSource);
      visualizer.loadPreset(presets[Math.floor(Math.random() * presets.length)], 2.0);

      this._frameCycle = () => {
        requestAnimationFrame(this._frameCycle);

        if (this.state.enableMilkdrop === true) {
          visualizer.render();
        }
      };
      this._frameCycle();
    }

    const wavesurfer = WaveSurfer.create({
      barWidth: 3,
      container: this.waveNode,
      waveColor: '#000',
      progressColor: '#fff',
      mediaControls: true,
      responsive: true,
      normalize: true,
      backend: 'MediaElement',
      minPxPerSec: 100,
      height: this.waveNode.offsetHeight,
    });

    wavesurfer.load(audioNode);

    this.audioNode.play();

    musicMetadata
      .fetchFromUrl(source)
      .then(metadata => {
        const { album, artist, title, picture } = metadata.common;

        if (picture && picture.length >= 1) {
          const cover = picture[0]; // ToDo: select cover smart
          const byteArray = new Uint8Array(cover.data);
          const blob = new Blob([byteArray], { type: cover.format });
          this.artNode.src = URL.createObjectURL(blob);

          this.setState({ artLoaded: true });
        }

        this.setState({
          album,
          artist,
          title,
        });

      })
      .catch(error => {
        console.log(':(', error.type, error.info);
      });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }

    // Kill the render loop
    this._frameCycle = () => {};
  }

  handleClickPlay = () =>  {
    if (this.audioNode.paused) {
      this.audioNode.play();
    } else {
      this.audioNode.pause();
    }
  };

  render() {
    const { contentType, poster, claim, source } = this.props;
    const {
      album,
      artist,
      title,
      enableMilkdrop,
      showEqualizer,
      showSongDetails,
      enableArt,
      artLoaded,
      playing,
      userActive,
    } = this.state;

    const renderArt = enableArt && artLoaded;

    const playButton = (
      <div
        onClick={this.handleClickPlay}
        className={playing ? styles.playButtonPause : styles.playButtonPlay}
      />
    );

    return (
      <div
        className={userActive ? styles.userActive : styles.wrapper}
        onMouseEnter={() => this.setState({ userActive: true })}
        onMouseLeave={() => this.setState({ userActive: false })}
        onContextMenu={stopContextMenu}
      >
        <div className={enableMilkdrop ? styles.containerWithMilkdrop : styles.container}>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <Tooltip onComponent body={__('Toggle Visualizer')}>
              <Button
                icon={enableMilkdrop ? ICONS.VISUALIZER_ON : ICONS.VISUALIZER_OFF}
                onClick={() => {
                  if (!isButterchurnSupported) {
                    return;
                  }

                  // Get new preset
                  this.visualizer.loadPreset(presets[Math.floor(Math.random() * presets.length)], 2.0);

                  this.setState({ enableMilkdrop: !enableMilkdrop });
                }}
              />
            </Tooltip>
            <Tooltip onComponent body={__('Toggle Album Art')}>
              <Button
                icon={enableArt ? ICONS.MUSIC_ART_ON : ICONS.MUSIC_ART_OFF}
                onClick={() => this.setState({ enableArt: !enableArt })}
              />
            </Tooltip>
            <Tooltip onComponent body={__('Toggle Details')}>
              <Button
                icon={showSongDetails ? ICONS.MUSIC_DETAILS_ON : ICONS.MUSIC_DETAILS_OFF}
                onClick={() => this.setState({ showSongDetails: !showSongDetails })}
              />
            </Tooltip>
            <Tooltip onComponent body={__('Equalizer')}>
              <Button icon={ICONS.MUSIC_EQUALIZER} onClick={() => this.setState({ showEqualizer: !showEqualizer })} />
            </Tooltip>
          </div>
          <div ref={node => (this.waveNode = node)} className={styles.wave} />
          <div className={styles.infoContainer}>
            <div className={renderArt ? styles.infoArtContainer : styles.infoArtContainerHidden}>
              <img className={styles.infoArtImage} ref={node => (this.artNode = node)} />
              {renderArt && playButton}
            </div>
            <div
              className={
                showSongDetails
                  ? renderArt
                    ? styles.songDetailsContainer
                    : styles.songDetailsContainerNoArt
                  : styles.songDetailsContainerHidden
              }
            >
              <div className={renderArt ? styles.songDetails : styles.songDetailsNoArt}>
                {artist && (
                  <div className={styles.detailsLineArtist}>
                    <Button icon={ICONS.MUSIC_ARTIST} className={styles.detailsIconArtist} />
                    {artist}
                  </div>
                )}
                {title && (
                  <div className={styles.detailsLineSong}>
                    <Button icon={ICONS.MUSIC_SONG} className={styles.detailsIconSong} />
                    {title}
                  </div>
                )}
                {album && (
                  <div className={styles.detailsLineAlbum}>
                    <Button icon={ICONS.MUSIC_ALBUM} className={styles.detailsIconAlbum} />
                    {album}
                  </div>
                )}
              </div>
            </div>
          </div>
          {!renderArt && <div className={styles.playButtonDetachedContainer}>{playButton}</div>}
        </div>
        <canvas
          ref={node => (this.canvasNode = node)}
          className={enableMilkdrop ? styles.milkdrop : styles.milkdropDisabled}
        />
        <audio
          ref={node => (this.audioNode = node)}
          style={{ position: 'absolute', top: '-100px' }}
          onPlay={() => this.setState({ playing: true })}
          onPause={() => this.setState({ playing: false })}
        />
      </div>
    );
  }
}

export default AudioVideoViewer;
