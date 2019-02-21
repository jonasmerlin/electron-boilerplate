import React from 'react';
import anime from 'animejs';

import styled from 'styled-components';
import { TouchApp } from 'styled-icons/material/TouchApp';

import PageLink from './PageLink.jsx'

const SizedTouchApp = styled(TouchApp)`
  width: 200px;
  height: 200px;
`

import Page from './Page.jsx'
export default class PageOne extends React.Component {

  constructor(props) {
    super(props);
    this.linkRef = React.createRef();
  }

  // mouseOver() {
  //   anime({
  //     targets: this.linkRef.current,
  //     // easing: 'easeOutExpo',
  //     duration: 500,
  //     keyframes: [
  //       {
  //         translateY: '20px',
  //         duration: 150
  //       },
  //       {translateY: '0'},
  //     ]
  //   })
  // }

  // mouseOut() {
  //   anime({
  //     targets: this.linkRef.current,
  //     translateY: ['20px', '0']
  //   })
  // }

  render() {
    return (
      <Page>
        <PageLink  path="/pagetwo" direction="forward">
          <SizedTouchApp
            // onClick={ () => this.mouseOver() }
            // onMouseLeave={ () => this.mouseOut() }
            ref={ this.linkRef }

          />
        </PageLink>
      </Page>
    )
  }
}
