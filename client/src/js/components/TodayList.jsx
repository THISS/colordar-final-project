import React, {Component} from 'react';

class TodayList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todayEvents.map((todayEvent) => {
            return (
              <li key={todayEvent.id}>{todayEvent.time} - {todayEvent.event}</li>
            );
          })
        }
      </ul>
    );
  }
}

export default TodayList;
