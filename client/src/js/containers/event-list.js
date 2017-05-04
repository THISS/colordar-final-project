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

      { this.props.events.map(event => (
          <tr key={ event.id }>
            <td>
              <p className="agenda-time">{ moment(event.start).format('LT') }</p>
            </td>
            <td className="agenda-list-group">
              <strong className="agenda-title">{ event.title }</strong>
              <p className="agenda-location">{ event.location }</p>
            </td>
          </tr>
        )
      )}
      </tbody>
    );
  }
}

// Send a piece of state from your store to your component as props
function eventsForCurrentDate({ events, currentDate, calendars }) {
  const todaysEvents = events.events.filter(({ start, end }) => {
    return moment(start).isSameOrAfter(moment(currentDate).startOf('day')) &&
      moment(end).isSameOrBefore(moment(currentDate).endOf('day'))
  });
  return {
    events: todaysEvents,
    calendars: calendars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectEvent: selectEvent,
    getMasterEvents: reqGetMasterEvents
  }, dispatch)
}

export default connect(eventsForCurrentDate, mapDispatchToProps)(EventList);
