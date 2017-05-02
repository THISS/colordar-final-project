import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectEvent} from '../actions/index';
import moment from 'moment';

class EventList extends Component {

  // createListItems() {
  //   return this.props.events.map((event) => {
  //
  //       return (
  //         <li
  //           key={event.id}
  //           onClick={() => this.props.selectEvent(event)}
  //         >
  //           {moment(event.start).format('LT')} - {event.title}
  //         </li>
  //       );
  //     }
  //   });
  // }

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
  // console.log('MapStateToProps for EventList');
  const todaysEvents = events.filter(({start, end}) => {
    // console.log(start, new Date(currentDate));
    return moment(start).isSameOrAfter(moment(currentDate).startOf('day')) &&
      moment(end).isSameOrBefore(moment(currentDate).endOf('day'))
  });
  // console.log(todaysEvents);
  return {
    events: todaysEvents
  };
}

//
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectEvent: selectEvent}, dispatch)
}

export default connect(eventsForCurrentDate, mapDispatchToProps)(EventList);
