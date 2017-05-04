import React, { Component } from 'react';

class GroupsList extends Component {
  render() {
    return(
      <div className="groups-list">
        <div className="single-group">
          <span className="group-circle one">
            <img className="squiggle" src="/images/not-busy-icon.png" alt="squiggle"/>
          </span>
          <div className="group-label">
            <p>The hiking group</p>
          </div>
        </div>

        <div className="single-group">
          <span className="group-circle two"></span>
          <div className="group-label">
            <p>The hiking group</p>
          </div>
        </div>

        <div className="single-group">
          <span className="group-circle three">
            <img className="squiggle" src="/images/busy-icon.png" alt="squiggle"/>
          </span>
          <div className="group-label">
            <p>The hiking group</p>
          </div>
        </div>

        <div className="single-group">
          <span className="group-circle four">
            <span className="notification notification-active">3</span>
          </span>
          <div className="group-label">
            <p>The hiking group</p>
          </div>
        </div>

        <div className="single-group">
          <span className="group-circle five">
            <img className="squiggle" src="/images/kinda-busy-icon.png" alt="squiggle"/>
          </span>
          <div className="group-label">
            <p>The hiking group</p>
          </div>
        </div>

        <div className="single-group">
          <span className="group-circle six">
            <span className="notification notification-active">2</span>
            <img className="squiggle" src="/images/busy-icon.png" alt="squiggle"/>
          </span>
          <div className="group-label">
            <p>The hiking group</p>
          </div>
        </div>

      </div>
    );
  }
}

export default GroupsList;
