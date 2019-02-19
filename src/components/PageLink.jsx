import React from 'react';
import { Link } from 'react-router-dom';

export default class PageLink extends React.Component {
  render() {
    return (
      <Link to={{
        pathname: this.props.path,
        state: {
          transition: this.props.direction
        }
      }}>{ this.props.text }</Link>
    )
  }
}
