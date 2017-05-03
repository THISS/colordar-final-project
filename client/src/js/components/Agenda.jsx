import React, {Component} from 'react';

class Agenda extends Component {
  render() {
    return (
      <div className="agenda">
        <img className="busy-squiggle" src="./images/busy-squiggle.png" alt="busy-squiggle" />
        <div className="agenda-list-container">
          <table className="agenda-table">
            <tbody>
              <tr>
                <td>
                  <p className="agenda-time">10:00</p>
                </td>
                <td className="agenda-list-group">
                  <strong className="agenda-title">Yoga</strong>
                  <p className="agenda-location">Calm studio</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="agenda-time">11:30</p>
                </td>
                <td className="agenda-list-group">
                  <strong className="agenda-title">Breakfast</strong>
                  <p className="agenda-location">Purebread</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="agenda-time">13:00</p>
                </td>
                <td className="agenda-list-group">
                  <strong className="agenda-title">Second breakfast</strong>
                  <p className="agenda-location">Chambar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="agenda-time">16:30</p>
                </td>
                <td className="agenda-list-group">
                  <strong className="agenda-title">Meeting</strong>
                  <p className="agenda-location">Some building</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="agenda-time">19:00</p>
                </td>
                <td className="agenda-list-group">
                  <strong className="agenda-title">Dinner</strong>
                  <p className="agenda-location">Hawksworth</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="add-event-button">Add an event</button>
      </div>
    );
  }
}

export default Agenda;
