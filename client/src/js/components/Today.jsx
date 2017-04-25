import React, {Component} from 'react';
import TodayList from './TodayList.jsx';

class Today extends Component {
  render() {
    return (
      <div className="today-event">
        <TodayList todayEvents={this.props.todayEvents} />
      </div>
    );
  }
}

export default Today;
