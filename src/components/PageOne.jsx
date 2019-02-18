import React from 'react';

import { Link } from 'react-router-dom';

export default class PageOne extends React.Component {
  render() {
    return (
      <div>
        <h1>Page One!</h1>
        <Link to="/pagetwo">Click for page two!</Link>
      </div>
    )
  }
}
