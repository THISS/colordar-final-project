import React, {Component} from 'react';

class TodayList extends Component {
  render() {
    return (
      <div>
        <h2>TODAY</h2>
        <button>+ Add an event</button>

        <main className="today-container">
          <ul>
            {
              this.props.todayEvents.map((todayEvent) => {
                return (
                  <li key={todayEvent.id}>{todayEvent.time} - {todayEvent.event}</li>
                );
              })
            }
          </ul>
        </main>
      </div>
    );
  }
}

export default TodayList;
