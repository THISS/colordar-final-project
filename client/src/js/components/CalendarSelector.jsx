import React, {Component} from 'react';

class CalendarSelector extends Component {
  render() {
    return (
      <div className="calendar-selectors">
        <span className="calendar-selector selector-1 selector-active"></span>
        <span className="calendar-selector selector-2 selector-active"></span>
        <span className="calendar-selector selector-3 selector-active"></span>
        <span className="calendar-selector selector-4 selector-active"></span>
        <span className="calendar-selector selector-5"></span>
        <span className="calendar-selector selector-6"></span>
      </div>
    );
  }
}

export default CalendarSelector;
