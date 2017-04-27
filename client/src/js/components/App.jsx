import React, {Component} from 'react';
import Today from './Today.jsx';
import Calendar from './Calendar.jsx';
import Nav from './Nav.jsx';

// connect to redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        <Today events={this.props.events}/>
      </div>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(App);
