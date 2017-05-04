import React, {Component} from 'react';
import moment from 'moment';

class DayInfo extends Component {
  render() {

    const nowDay = moment().format("dddd");
    const nowFullDate = moment().format("DD MMMM YYYY");

    return (
      <div className="day-info">
        <p className="current-day">It's {nowDay}.</p>
        <p className="current-date">{nowFullDate}</p>
      </div>
    );
  }
}

export default DayInfo;
