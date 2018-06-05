import { connect } from 'react-redux';
import {
  selectBalance,
  selectPageTitle,
  selectIsBackDisabled,
  selectIsForwardDisabled,
  selectNavLinks,
} from 'lbry-redux';
import { doNavigate, doHistoryBack, doHistoryForward } from 'redux/actions/navigation';
import { doDownloadUpgrade } from 'redux/actions/app';
import { selectIsUpgradeAvailable } from 'redux/selectors/app';
import { formatCredits } from 'util/formatCredits';
import Page from './view';

const select = state => ({
  pageTitle: selectPageTitle(state),
  navLinks: selectNavLinks(state),
  isBackDisabled: selectIsBackDisabled(state),
  isForwardDisabled: selectIsForwardDisabled(state),
  isUpgradeAvailable: selectIsUpgradeAvailable(state),
  balance: formatCredits(selectBalance(state) || 0, 2),
});

const perform = dispatch => ({
  navigate: path => dispatch(doNavigate(path)),
  back: () => dispatch(doHistoryBack()),
  forward: () => dispatch(doHistoryForward()),
  downloadUpgrade: () => dispatch(doDownloadUpgrade()),
});

export default connect(
  select,
  perform
)(Page);
