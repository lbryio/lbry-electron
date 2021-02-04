import { connect } from 'react-redux';
import {
  makeSelectClaimIsMine,
  makeSelectTitleForUri,
  makeSelectThumbnailForUri,
  makeSelectCoverForUri,
  selectCurrentChannelPage,
  makeSelectClaimForUri,
  makeSelectClaimIsPending,
  makeSelectTagsForUri,
} from 'lbry-redux';
import { selectChannelIsBlocked } from 'redux/selectors/blocked';
import { selectBlackListedOutpoints, doFetchSubCount, makeSelectSubCountForUri } from 'lbryinc';
import { selectYoutubeChannels } from 'redux/selectors/user';
import { makeSelectIsSubscribed } from 'redux/selectors/subscriptions';
import { doOpenModal } from 'redux/actions/app';
import ChannelPage from './view';

const select = (state, props) => ({
  title: makeSelectTitleForUri(props.uri)(state),
  thumbnail: makeSelectThumbnailForUri(props.uri)(state),
  cover: makeSelectCoverForUri(props.uri)(state),
  channelIsMine: makeSelectClaimIsMine(props.uri)(state),
  page: selectCurrentChannelPage(state),
  claim: makeSelectClaimForUri(props.uri)(state),
  isSubscribed: makeSelectIsSubscribed(props.uri, true)(state),
  channelIsBlocked: selectChannelIsBlocked(props.uri)(state),
  blackListedOutpoints: selectBlackListedOutpoints(state),
  subCount: makeSelectSubCountForUri(props.uri)(state),
  pending: makeSelectClaimIsPending(props.uri)(state),
  youtubeChannels: selectYoutubeChannels(state),
  tags: makeSelectTagsForUri(props.uri)(state),
});

const perform = dispatch => ({
  openModal: (modal, props) => dispatch(doOpenModal(modal, props)),
  fetchSubCount: claimId => dispatch(doFetchSubCount(claimId)),
});

export default connect(select, perform)(ChannelPage);
