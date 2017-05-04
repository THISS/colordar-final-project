import React, { Component } from 'react';
import EventList from '../containers/event-list';

class Agenda extends Component {
  render() {
    return (
      <div className="agenda">
        <img className="busy-squiggle" src="./images/busy-squiggle.png" alt="busy-squiggle" />
        <div className="agenda-list-container">
          <table className="agenda-table">

            <EventList />

          </table>
        </div>
        <button className="add-event-button">Add an event</button>
      </div>
    );
  }
}



export default Agenda;
