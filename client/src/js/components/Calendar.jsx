import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends Component {

  render() {
    return (
      <div className="calendar">
        <BigCalendar
          selectable
          popup
          onSelectEvent={event => alert(event.title)}

          events={this.props.events}
          startAccessor='start'
          endAccessor='end'
          views={['month', 'week', 'day']}
        />
      </div>
    );
  }
}

export default Calendar;
