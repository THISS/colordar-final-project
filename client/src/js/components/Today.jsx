import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Calendar from './Calendar.jsx';
import TodayEvents from './TodayEvents.jsx';
import moment from 'moment';

export default class Today extends Component {

  render() {

    const now = moment().format("DD MMMM YYYY");
    const nowDay = moment().format("dddd");

    return (
      <div className="container">
        <Nav />

        <TodayEvents />

        <div className="date-section">
          <h5>It's {nowDay}.</h5>
          <p className="current-date">{now}</p>
        </div>


        <Calendar />
      </div>
    );
  }
}
