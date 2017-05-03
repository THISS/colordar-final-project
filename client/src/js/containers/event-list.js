import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectEvent, reqGetMasterEvents } from '../actions/event-actions';
import moment from 'moment';

class EventList extends Component {
  componentWillMount() {
    this.props.getMasterEvents();
  }

  createListItems() {
    return this.props.events.map((event) => {
      // TODO: make this date dynamic
      if (moment(event.start).isSame(moment(), 'day')){
        return (
          <li
            key={ event.id }
            onClick={() => this.props.selectEvent(event)}
          >
            { moment(event.start).format('LT') } - { event.title }
          </li>
        );
      }
    });
  }

  render(){
    return(
      <ul>
        { this.createListItems() }
      </ul>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return {
    events: state.events.events,
    calendars: state.events.calendars
  };
}

//
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectEvent: selectEvent,
    getMasterEvents: reqGetMasterEvents
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
