import React, {Component} from 'react';
import TodayList from './TodayList.jsx';
import Nav from './Nav.jsx';

class Today extends Component {
  render() {
    return (
      <div className="today-event">

        <Nav />

        <h3 className="current-date">April 25th, 2017</h3>
        <button>+ Add an event</button>

        <section className="today-container">
          <TodayList todayEvents={this.props.todayEvents} />
        </section>
      </div>
    );
  }
}

export default Today;
