// @flow
import * as MODALS from 'constants/modal_types';
import React from 'react';
import Button from 'component/button';
import { Form, FormField } from 'component/common/form';
import { Formik } from 'formik';
import { validateSendTx } from 'util/form-validation';
import { validateSendTxToUri } from 'util/form-validation-uri';
import Card from 'component/common/card';
import I18nMessage from 'component/i18nMessage';
import LbcSymbol from 'component/common/lbc-symbol';
import WalletSpendableBalanceHelp from 'component/walletSpendableBalanceHelp';
import classnames from 'classnames';
import ChannelSelector from 'component/channelSelector';
import ClaimPreview from 'component/claimPreview';

type DraftTransaction = {
  destination: string,
  amount: ?number, // So we can use a placeholder in the input
};

type Props = {
  openModal: (id: string, { destination: string, amount: number }) => void,
  balance: number,
  isAddress: boolean,
  setIsAddress: () => boolean,
  contentUri: string,
  setEnteredContentUri: () => string
};

class WalletSend extends React.PureComponent<Props> {
  constructor() {
    super();

    (this: any).handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values: DraftTransaction) {
    const { openModal, isAddress } = this.props;
    const { destination, amount } = values;

    if (amount && destination) {
      const isClaim = false;
      const modalProps = { destination, amount, isClaim };
      if (!isAddress) modalProps.isClaim = true;
      openModal(MODALS.CONFIRM_TRANSACTION, modalProps);
    }
  }

  render() {
    const { balance, isAddress, setIsAddress, contentUri, setEnteredContentUri } = this.props;

    return (
      <Card
        title={__('Send Credits')}
        subtitle={
        <I18nMessage tokens={{ lbc: <LbcSymbol /> }}>
          Send LBRY Credits to your friends or favorite creators.
        </I18nMessage>}
        actions={
          <Formik
            initialValues={{
              destination: '',
              amount: '',
            }}
            onSubmit={this.handleSubmit}
            validate={isAddress ? validateSendTx : validateSendTxToUri}
            render={({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <div>
                <div className="section">
                  <Button
                    key="Address"
                    label={__('Address')}
                    button="alt"
                    onClick={() => setIsAddress(true)}
                    className={classnames('button-toggle', { 'button-toggle--active': isAddress })}
                  />
                  <Button
                    key="Search"
                    label={__('Search')}
                    button="alt"
                    onClick={() => setIsAddress(false)}
                    className={classnames('button-toggle', { 'button-toggle--active': !isAddress })}
                  />
                </div>
                
                <div className="section">
                  {!isAddress && <ChannelSelector />}

                  <Form onSubmit={handleSubmit}>

                    {!isAddress && <FormField
                      type="text"
                      name="search"
                      placeholder="Search for content, @username or lbry://url"
                      className="form-field--address"
                      label={__('Recipient search')}
                      onChange={event => setEnteredContentUri(event.target.value)}
                      onBlur={handleBlur}
                      value={values.search}
                    />}

                    {!isAddress && <fieldset-section>
                      <ClaimPreview key={contentUri} uri={contentUri} actions={''} type={'small'} showNullPlaceholder />
                    </fieldset-section>}

                    <fieldset-group class="fieldset-group--smushed">
                      <FormField
                        autoFocus
                        type="number"
                        name="amount"
                        label={__('Amount')}
                        className="form-field--price-amount"
                        affixClass="form-field--fix-no-height"
                        min="0"
                        step="any"
                        placeholder="12.34"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.amount}
                      />
                      <FormField
                        type="text"
                        name="destination"
                        placeholder={isAddress ? "bbFxRyXXXXXXXXXXXZD8nE7XTLUxYnddTs" : "@name, @name/content, lbry://url"}
                        className="form-field--address"
                        label={isAddress ? __('Recipient Address') : __('Recipient Name/URL')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.destination}
                      />
                    </fieldset-group>

                    <div className="card__actions">
                      <Button
                        button="primary"
                        type="submit"
                        label={__('Send')}
                        disabled={
                          !values.destination ||
                          !!Object.keys(errors).length ||
                          !(parseFloat(values.amount) > 0.0) ||
                          parseFloat(values.amount) === balance
                        }
                      />
                      {!!Object.keys(errors).length || (
                        <span className="error__text">
                          {(!!values.destination && touched.destination && errors.destination) ||
                            (!!values.amount && touched.amount && errors.amount) ||
                            (parseFloat(values.amount) === balance &&
                              __('Decrease amount to account for transaction fee')) ||
                            (parseFloat(values.amount) > balance && __('Not enough Credits'))}
                        </span>
                      )}
                    </div>
                    <WalletSpendableBalanceHelp />
                  </Form>
                </div>
              </div>
            )}
          />
        }
      />
    );
  }
}

export default WalletSend;
