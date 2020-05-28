// @flow
import React, { useState } from 'react';
import Button from 'component/button';
import { FormField } from 'component/common/form';
import Page from 'component/page';

type Props = {
  claimId: string,
};

const ModalDmca = (props: Props) => {
  const { claimId } = props;
  const [authorName, setAuthorName] = useState(''),
    [originalLink, setOriginalLink] = useState(''),
    [email, setEmail] = useState(''),
    [anythingElse, setAnythingElse] = useState('');

  const [nameError, setNameError] = useState(''),
    [linkError, setLinkError] = useState(''),
    [emailError, setEmailError] = useState('');

  const confirmReport = e => {
    e.preventDefault();

    if (authorName === '') return setNameError('This field is required');
    else setNameError('');

    if (originalLink === '') return setLinkError('This field is required');
    else setLinkError('');

    if (email === '') return setEmailError('This field is required');
    else setEmailError('');

    console.log(anythingElse);
  };

  return (
    <Page>
      <blockquote>
        <b>claimId</b>: {claimId}
      </blockquote>
      <br />
      <hr />
      <br />
      <React.Fragment>
        <FormField
          onChange={e => setAuthorName(e.target.value)}
          error={nameError}
          type="text"
          name="Name of the Original Author"
          label={__('Name of the Original Author')}
        />
        <FormField
          onChange={e => setOriginalLink(e.target.value)}
          error={linkError}
          type="text"
          name="Link to the original content"
          label={__('Link to the original Content')}
        />
        <FormField
          onChange={e => setEmail(e.target.value)}
          error={emailError}
          type="email"
          name="Your Email for Further Contact"
          label={__('Your Email for Further Contact (invalid emails will be rejected)')}
        />
        <FormField
          onChange={e => setAnythingElse(e.target.value)}
          type="text"
          name="Anything more we should know?"
          label={__('Anything more we should know?')}
        />
      </React.Fragment>
      <br />
      <p>
        Please <b>Double Check</b> All Fields, Invalid Reports Will Be Rejected
      </p>
      <hr />
      <br />
      <div>
        Read more in our <a href={'https://lbry.com/faq/dmca'}>FAQ</a>
      </div>
      <div className="card__actions">
        <Button button="primary" onClick={confirmReport} label={__('Report')} />
      </div>
    </Page>
  );
};

export default ModalDmca;