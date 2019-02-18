import React from 'react';

import { hot } from 'react-hot-loader';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import anime from 'animejs';

import PageOne from './components/PageOne.jsx';
import PageTwo from './components/PageTwo.jsx';


const pageOnePath = `${__dirname}/index.html`;
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route render={
            ({ location} ) => {
              return (
                <div>
                  <TransitionGroup>
                    <Transition
                      key={ location.key }
                      timeout={ 500 }
                      onEntering={
                        (node) => {
                          anime({
                            targets: node,
                            translateX: ['-100%', '0']
                          })
                        }
                      }
                    >
                      <Switch location={ location }>
                        <Route path={ pageOnePath } component={ PageOne } />
                        <Route path="/pagetwo" render={
                          () => <PageTwo pageOnePath={ pageOnePath } />
                        } />
                      </Switch>
                    </Transition>
                  </TransitionGroup>
                </div>
              )
            }
          } />
      </Router>
    );
  }
}
