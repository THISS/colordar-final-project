import React, {Component} from 'react';
import Calendar from './Calendar.jsx';
import TodayEvents from './TodayEvents.jsx';
import moment from 'moment';

export default class Today extends Component {

  render() {

    const now = moment().format("DD MMMM YYYY");
    const nowDay = moment().format("dddd");

    return (

      <div className="flex-container">
        <TodayEvents />

        <div className="todaydate-container">
          <h5>It's {nowDay}.</h5>
          <p className="current-date">{now}</p>
        </div>

        {/*<Calendar />*/}
      </div>


      /*<div className="container">
        <div className="row">
          <div className="three columns">
            <TodayEvents />
          </div>

          <div className="three columns">
            <h5>It's {nowDay}.</h5>
            <p className="current-date">{now}</p>
          </div>

          <div className="eight columns calendar-container">
            <Calendar />
          </div>
        </div>
      </div>*/
    );
  }
}
