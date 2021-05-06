// @flow
import { regexInvalidURI } from 'lbry-redux';

type DraftTxValues = {
  destination: string,
  // amount: number
};

export const validateSendTxToUri = (formValues: DraftTxValues) => {
  const { destination } = formValues;
  const errors = {};

  // All we need to check is if destination URI is valid
  // If values are missing, users wont' be able to submit the form
  if (!process.env.NO_ADDRESS_VALIDATION && !regexInvalidURI.test(destination)) {
    errors.address = __('Not a valid LBRY URL');
  }

  return errors;
};
