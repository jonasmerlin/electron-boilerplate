import React from 'react';

import { hot } from 'react-hot-loader';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';

import styled from 'styled-components';
import anime from 'animejs';

import PageOne from './components/PageOne.jsx';
import PageTwo from './components/PageTwo.jsx';

const pageOnePath = `${__dirname}/index.html`;

const ScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
`

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  position: relative;
  text-align: center;
`

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route render={
            ({ location} ) => {
              return (
                <ScreenWrapper>
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
                        <Switch location={ location }>
                          {/* define all page routes here */}

                          <Route path={ pageOnePath } component={ PageOne } />
                          <Route path="/pagetwo" render={
                            () => <PageTwo pageOnePath={ pageOnePath } />
                          } />

                        </Switch>
                      </Transition>
                    </TransitionGroup>
                  </Screen>
                </ScreenWrapper>
              )
            }
          } />
      </Router>
    );
  }
}
