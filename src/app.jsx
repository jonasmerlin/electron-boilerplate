import React from 'react';

import { hot } from 'react-hot-loader';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import anime from 'animejs';

import PageOne from './components/PageOne.jsx';
import PageTwo from './components/PageTwo.jsx';

const pageOnePath = `${__dirname}/index.html`;


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('./static/Montserrat/Montserrat-Bold.ttf');
  }
`

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  position: absolute;
  text-align: center;
`

const HMRWrapper = styled.div`
`

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route render={
            ({ location} ) => {
              return (
                  <Screen>
                    <TransitionGroup
                      childFactory={
                        (child) => {
                          return React.cloneElement(
                            child,
                            {
                              onEntering:
                                (node) => {
                                  console.log(location.state);
                                  if (location.state.transition == 'back') {
                                    node.style.zIndex = 1;
                                    anime({
                                      targets: node,
                                      translateX: ['-100%', '0'],
                                      easing: 'easeOutExpo'
                                    })
                                  }
                                },
                              onExiting:
                                (node) => {
                                  if (location.state.transition == 'forward') {
                                    node.style.zIndex = 1;
                                    anime({
                                      targets: node,
                                      translateX: ['0', '-100%'],
                                      easing: 'easeOutExpo'
                                    })
                                  }
                                }
                            }
                          )
                        }
                      }
                    >
                      <Transition
                        key={ location.key }
                        timeout={ 1200 }
                      >
                      <ThemeProvider
                        theme={{
                          colors: {
                            grassCourtGreen:    '#4ABD88',
                            hardCourtLightBlue: '#218F9B',
                            hardCourtDarkBlue:  '#104153',
                            clayCourtRed:       '#FC8173',
                            warmYellow:         '#E0C885',
                            black:              '#000000',
                            darkGrey:           '#3A3A3A',
                            mediumGrey:         '#939393',
                            lightGrey:          '#CECECE',
                            ultraLightGrey:     '#F9F9F9',
                            white:              '#FFFFFF',
                            warmGrey01:         '#CCC3C0',
                            warmGrey02:         '#E9DEDA',
                            warmGrey03:         '#FCF0EB',
                            warmGrey04:         '#F8F8F4'
                          },
                          shadows: {
                            level01: '0 5px 10px 0 #757575, 0 4px 5px 0 #a8a8a8;'
                          }
                        }}
                      >
                        <React.Fragment>
                          {/* <GlobalStyle /> */}
                            <Switch location={ location }>
                              {/* define all page routes here */}

                              <Route path={ pageOnePath } component={ PageOne } />
                              <Route path="/pagetwo" render={
                                () => <PageTwo pageOnePath={ pageOnePath } />
                              } />

                            </Switch>
                        </React.Fragment>
                      </ThemeProvider>
                      </Transition>
                    </TransitionGroup>
                  </Screen>
              )
            }
          } />
      </Router>
    );
  }
}
