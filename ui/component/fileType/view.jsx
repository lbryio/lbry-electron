// @flow
import * as ICONS from 'constants/icons';
import React from 'react';
import Icon from 'component/common/icon';

type Props = {
  uri: string,
  mediaType: string,
  isLivestream: boolean,
};

function FileType(props: Props) {
  const { mediaType, isLivestream } = props;

  if (mediaType === 'image') {
    return <Icon icon={ICONS.IMAGE} />;
  } else if (mediaType === 'audio') {
    return <Icon icon={ICONS.AUDIO} />;
  } else if (mediaType === 'video' || isLivestream) {
    return <Icon icon={ICONS.VIDEO} />;
  } else if (mediaType === 'text') {
    return <Icon icon={ICONS.TEXT} />;
  }

  return <Icon icon={ICONS.DOWNLOADABLE} />;
}

export default FileType;
