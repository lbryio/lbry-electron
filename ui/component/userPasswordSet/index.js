import { connect } from 'react-redux';
import {
  doUserPasswordSet,
  selectPasswordSetSuccess,
  selectPasswordSetIsPending,
  selectPasswordSetError,
} from 'lbryinc';
import UserSignIn from './view';

const select = state => ({
  passwordSetSuccess: selectPasswordSetSuccess(state),
  passwordSetIsPending: selectPasswordSetIsPending(state),
  passwordSetError: selectPasswordSetError(state),
});

export default connect(select, {
  doUserPasswordSet,
})(UserSignIn);
