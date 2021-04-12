// @flow
import * as React from 'react';
import Page from 'component/page';

export default function SettingsCreatorPage(/* props: Props */) {
  return (
    <Page
      noFooter
      noSideNavigation
      backout={{
        title: __('Creator settings'),
        backLabel: __('Done'),
      }}
      className="card-stack"
    >
      Blah
    </Page>
  );
}
