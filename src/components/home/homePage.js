/**
 * Created by rakeshuvsn on 3/8/18.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React redux sample app</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps. </p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
