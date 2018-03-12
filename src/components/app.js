/**
 * Created by rakeshuvsn on 3/8/18.
 */
import React, {PropTypes} from 'react';
import Header from './common/header';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
