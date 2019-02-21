import React from 'react';

import Page from './Page.jsx'
import PageLink from './PageLink.jsx'
import Header from './typography/Header.jsx'

export default class PageTwo extends React.Component {
  render() {
    return (
      <Page>
        <Header>Hallo :)</Header>
        <PageLink path={this.props.pageOnePath} direction="back" >Click for page one!</PageLink>
      </Page>
    )
  }
}
