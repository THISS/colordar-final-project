import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Calendar from './Calendar.jsx';
import EventList from '../containers/event-list';
import moment from 'moment';

class Today extends Component {

  render() {

    const now = moment().format("MMMM Do, YYYY");

    return (
      <div className="container">

        <Nav />

        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 text-center">
            <h3 className="current-date">{now}</h3>
          </div>
        </div>

        <section>
          <div className="row">
            <div className="col-sm-1">
              <h5>Today</h5>
            </div>
            <div className="col-sm-3">
              <button className="btn btn-default">+ Add an event</button>
            </div>
          </div>

          <div className="today-event-container">
            <EventList />
          </div>
        </section>

        <section>
          <Calendar events={this.props.events}/>
        </section>
      </div>
    );
  }
}

export default Today;
