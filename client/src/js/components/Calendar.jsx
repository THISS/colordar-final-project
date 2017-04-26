import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class Calendar extends Component {

  render() {
    return (
      <div>
        <BigCalendar
          events={[{
            'title': 'Making Chicken Wings',
            'allDay': true,
            'start': new Date(2017, 3, 10),
            'end': new Date(2017, 3, 11)
          },
          {
            'title': 'Hot Pot',
            'start': new Date(2017, 3, 16),
            'end': new Date(2017, 3, 17)
          }]}
          startAccessor='start'
          endAccessor='end'
          views={['month', 'week', 'day']}
        />
      </div>
    );
  }
}

export default Calendar;
