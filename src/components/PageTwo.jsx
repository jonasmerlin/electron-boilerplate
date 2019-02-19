import React from 'react';

import Page from './Page.jsx'
import PageLink from './PageLink.jsx'


export default class PageTwo extends React.Component {
  render() {
    return (
      <Page>
        <h1>Page Two!</h1>
        <PageLink path={this.props.pageOnePath} direction="back" text="Click for page one!" />
      </Page>
    )
  }
}
