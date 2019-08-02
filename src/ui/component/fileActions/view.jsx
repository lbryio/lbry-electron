// @flow
import * as MODALS from 'constants/modal_types';
import * as ICONS from 'constants/icons';
import React from 'react';
import Button from 'component/button';
import Tooltip from 'component/common/tooltip';

type FileInfo = {
  claim_id: string,
};

type Props = {
  uri: string,
  claimId: string,
  openModal: (id: string, { uri: string }) => void,
  claimIsMine: boolean,
  fileInfo: FileInfo,
};

class FileActions extends React.PureComponent<Props> {
  render() {
    const { fileInfo, uri, openModal, claimIsMine, claimId } = this.props;
    const showDelete = claimIsMine || (fileInfo && Object.keys(fileInfo).length > 0);
    // fix me
    // const showDelete = claimIsMine || (fileInfo && fileInfo.writtenBytes > 0 || fileInfo.blobs_completed;

    return (
      <React.Fragment>
        {showDelete && (
          <Tooltip label={__('Remove from your library')}>
            <Button
              button="link"
              icon={ICONS.DELETE}
              description={__('Delete')}
              onClick={() => openModal(MODALS.CONFIRM_FILE_REMOVE, { uri })}
            />
          </Tooltip>
        )}
        {!claimIsMine && (
          <Tooltip label={__('Report content')}>
            <Button button="link" icon={ICONS.REPORT} href={`https://lbry.com/dmca?claim_id=${claimId}`} />
          </Tooltip>
        )}
      </React.Fragment>
    );
  }
}

export default FileActions;
