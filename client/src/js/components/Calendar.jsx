import React, {Component} from 'react';
import CalendarSelector from './CalendarSelector.jsx';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <CalendarSelector />
      </div>
    );
  }
}

export default Calendar;
