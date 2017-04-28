import React, {Component} from 'react';
import fullcalendar from 'fullcalendar';
import moment from 'moment';
import $ from 'jquery';

// connect to redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Calendar extends Component {

  componentDidMount() {
    const {calendar} = this.refs;

    $(calendar).fullCalendar({
      events: this.props.events
    });
  }

  componentWillUnmount() {
    const {calendar} = this.refs;

    $(calendar).fullCalendar('destroy');
  }

  render() {
    return (
      <div ref="calendar" className="calendar"></div>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(Calendar);
