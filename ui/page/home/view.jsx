// @flow
import * as ICONS from 'constants/icons';
import * as PAGES from 'constants/pages';
import { SITE_NAME, SIMPLE_SITE } from 'config';
import React from 'react';
import Page from 'component/page';
import Button from 'component/button';
import ClaimTilesDiscover from 'component/claimTilesDiscover';
import Icon from 'component/common/icon';
import useGetLivestreams from 'effects/use-get-livestreams';

type Props = {
  authenticated: boolean,
  followedTags: Array<Tag>,
  subscribedChannels: Array<Subscription>,
  showNsfw: boolean,
  homepageData: any,
};

function HomePage(props: Props) {
  const { followedTags, subscribedChannels, authenticated, showNsfw, homepageData } = props;
  const showPersonalizedChannels = (authenticated || !IS_WEB) && subscribedChannels && subscribedChannels.length > 0;
  const showPersonalizedTags = (authenticated || !IS_WEB) && followedTags && followedTags.length > 0;
  const showIndividualTags = showPersonalizedTags && followedTags.length < 5;
  const { default: getHomepage } = homepageData;
  const { livestreamMap } = useGetLivestreams();

  const rowData: Array<RowDataItem> = getHomepage(
    authenticated,
    showPersonalizedChannels,
    showPersonalizedTags,
    subscribedChannels,
    followedTags,
    showIndividualTags,
    showNsfw
  );

  return (
    <Page fullWidthPage>
      {IS_WEB && (
        <div className="notice-message--loud">
          <h1 className="section__title">PRs in this instance</h1>
          <p className="section__subtitle">
            <ul>
              <li>Odysee [84f2e616] +</li>
              <li>
                <Button
                  label={'Muted Words Settings Page #5934'}
                  button="link"
                  href="https://github.com/lbryio/lbry-desktop/pull/5934"
                />
              </li>
            </ul>
          </p>
        </div>
      )}
      <br />

      {!SIMPLE_SITE && (authenticated || !IS_WEB) && !subscribedChannels.length && (
        <div className="notice-message">
          <h1 className="section__title">
            {__("%SITE_NAME% is more fun if you're following channels", { SITE_NAME })}
          </h1>
          <p className="section__actions">
            <Button
              button="primary"
              navigate={`/$/${PAGES.CHANNELS_FOLLOWING_DISCOVER}`}
              label={__('Find new channels to follow')}
            />
          </p>
        </div>
      )}

      <h1 className="home__meme">
        <Button button="link" href="https://helplbrysavecrypto.com">
          {__("i got 99 securities but LBC ain't one.")}
        </Button>
      </h1>

      {rowData.map(({ title, route, link, icon, help, options = {} }, index) => (
        <div key={title} className="claim-grid__wrapper">
          {index !== 0 && title && typeof title === 'string' && (
            <h1 className="claim-grid__header">
              <Button navigate={route || link} button="link">
                {icon && <Icon className="claim-grid__header-icon" sectionIcon icon={icon} size={20} />}
                <span className="claim-grid__title">{__(title)}</span>
                {help}
              </Button>
            </h1>
          )}

          <ClaimTilesDiscover
            {...options}
            liveLivestreamsFirst
            livestreamMap={livestreamMap}
            hasSource
            pin={route === `/$/${PAGES.GENERAL}`}
          />
          {(route || link) && (
            <Button
              className="claim-grid__title--secondary"
              button="link"
              navigate={route || link}
              iconRight={ICONS.ARROW_RIGHT}
              label={__('View More')}
            />
          )}
        </div>
      ))}
    </Page>
  );
}

export default HomePage;
