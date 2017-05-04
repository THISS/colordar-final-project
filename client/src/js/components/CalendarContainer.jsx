import React, { Component } from 'react';

import CalendarSelector from './CalendarSelector.jsx';
import Calendar from './BigCalendar.jsx';
// import Calendar from './Calendar.jsx';

class CalendarContainer extends Component {
  render() {
    return (
      <div className="calendar-container">
        <CalendarSelector />
        <Calendar />
      </div>
    );
  }
}

export default CalendarContainer;
