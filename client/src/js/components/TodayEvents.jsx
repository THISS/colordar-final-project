import React, {Component} from 'react';
import EventList from '../containers/event-list';
import moment from 'moment';


export default class TodayEvents extends Component {

  render() {
    return (
      <div className="row">
        <div className="four column todayevents-container">
          <EventList />
        </div>
        <button>Add an event</button>
      </div>
    );
  }
}
