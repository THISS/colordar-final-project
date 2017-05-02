import React, {Component} from 'react';
import EventList from '../containers/event-list';
import moment from 'moment';


export default class TodayEvents extends Component {

  render() {
    return (
      <div className="todayevents-container">
        <EventList />
        <button className="add-event-btn">Add an event</button>
      </div>

    );
  }
}
