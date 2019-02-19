import React from 'react';

import PageLink from './PageLink.jsx'

import Page from './Page.jsx'
export default class PageOne extends React.Component {
  render() {
    return (
      <Page>
        <h1>Page One!</h1>
        <PageLink path="/pagetwo" direction="forward" text="Click for page two!" />
      </Page>
    )
  }
}
