// @flow
import { regexAddress } from 'lbry-redux';

type DraftTxValues = {
  destination: string,
  // amount: number
};

export const validateSendTx = (formValues: DraftTxValues) => {
  const { destination } = formValues;
  const errors = {};

  // All we need to check is if the destination address is valid
  // If values are missing, users wont' be able to submit the form
  if (!process.env.NO_ADDRESS_VALIDATION && !regexAddress.test(destination)) {
    errors.address = __('Not a valid LBRY address');
  }

  return errors;
};
