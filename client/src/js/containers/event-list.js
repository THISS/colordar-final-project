import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectEvent, reqGetMasterEvents } from '../actions/event-actions';
import moment from 'moment';

class EventList extends Component {
  componentWillMount() {
    this.props.getMasterEvents();
  }

  render(){
    return(
      <div>
        <div className="today-event-line"></div>
        <ul>
          {this.props.events.map(event => (
            <li key={event.id} className="today-events-list">
              <p className="today-event-time">{moment(event.start).format('LT')}</p>
              <div className="today-event-seperator">
                <div className="today-event-circle"></div>
              </div>
              <p className="today-event-title">{event.title}</p>
            </li>
            )
          )}
        </ul>
      </div>
    );
  }
}

// Send a piece of state from your store to your component as props
function eventsForCurrentDate({ events, currentDate }) {
  const todaysEvents = events.events.filter(({start_time, end_time}) => {
    return moment(start_time).isSameOrAfter(moment(currentDate).startOf('day')) &&
      moment(end_time).isSameOrBefore(moment(currentDate).endOf('day'))
  });
  return {
    events: todaysEvents,
    calendars: state.calendars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectEvent: selectEvent,
    getMasterEvents: reqGetMasterEvents
  }, dispatch)
}

export default connect(eventsForCurrentDate, mapDispatchToProps)(EventList);
