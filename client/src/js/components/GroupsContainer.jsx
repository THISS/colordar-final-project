import React, { Component } from 'react';
import GroupsList from './GroupsList.jsx';
import GroupForm from './GroupForm.jsx';

class GroupsContainer extends Component {
  render() {
    return(
      <div className="groups-container">

        <div className="group-border">
          <div className="groups-slide-up">
            <p className="groups-heading">You have 6 groups.</p>
            <GroupsList />
          </div>
          <button>Add one more</button>
        </div>
        
        <GroupForm />
      </div>
    );
  }
}

export default GroupsContainer;
