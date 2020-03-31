// @flow
import * as React from 'react';
import { stopContextMenu } from 'util/context-menu';
import IframeReact from 'component/IframeReact';

type Props = {
  source: string,
};

class PdfViewer extends React.PureComponent<Props> {
  render() {
    const { source } = this.props;
    const src = IS_WEB ? source : `file://${source}`;
    return (
      <div className="file-render__viewer file-render__viewer--document" onContextMenu={stopContextMenu}>
        <div className="file-render__viewer file-render__viewer--iframe">
          <IframeReact title={__('File preview')} src={src} />
        </div>
      </div>
    );
  }
}

export default PdfViewer;
