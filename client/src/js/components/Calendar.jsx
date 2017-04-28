import React, {Component} from 'react';
import fullcalendar from 'fullcalendar';
import moment from 'moment';
import $ from 'jquery';

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
      <div ref="calendar"></div>
    );
  }
}

export default Calendar;
