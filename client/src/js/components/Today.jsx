import React, {Component} from 'react';
import TodayList from './TodayList.jsx';
import Nav from './Nav.jsx';

class Today extends Component {
  render() {
    return (
      <div className="container">

        <Nav />

        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 text-center">
            <h3 className="current-date">April 25th, 2017</h3>
          </div>
        </div>

        <section className="today-container">
          <div className="row">
            <div className="col-sm-1">
              <h5>Today</h5>
            </div>
            <div className="col-sm-3">
              <button className="btn btn-default">+ Add an event</button>
            </div>
          </div>

          <div className="today-event-container">
            <TodayList todayEvents={this.props.todayEvents} />
          </div>
        </section>

      </div>
    );
  }
}

export default Today;
