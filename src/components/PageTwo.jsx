import React from 'react';

import { Link } from 'react-router-dom';

export default class PageTwo extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Two!</h1>
        <Link to={ this.props.pageOnePath }>Click for page one!</Link>
      </div>
    )
  }
}
