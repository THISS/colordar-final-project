import React, { Component } from 'react';
// connect to redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import moment from 'moment';
// Import fullcalendar.js
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

import 'react-dates/lib/css/_datepicker.css';
import $ from 'jquery';
import Modal from 'react-modal';

import EventForm from './EventForm.jsx';
import { reqAddEvent } from '../actions/event-actions';

const customStyles = {
  content: {
    zIndex: 10,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    zIndex: 9
  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.addNewEventModal = this.addNewEventModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  addEvent(event) {
    this.props.reqAddEvent(event);
    this.closeModal();
  }

  Event({ event }) {
    return (
      <span style={{ backgroundColor: event.color }}>
        <strong>
        { event.title }
        </strong>
        { event.location && (':  ' + event.location)}
      </span>
    )
  }

  addNewEventModal(selectSlot) {
    this.openModal();
  }

  EventAgenda({ event }) {
    return <span>
      <em style={{ color: 'crimson'}}>{event.title}</em>
      <p>{ event.location }</p>
    </span>
  }

  render() {
    return (
      <div ref="calendar" className="calendar">
        <BigCalendar
          popup
          selectable
          events={this.props.events}
          defaultDate={new Date()}
          components={{
            event: this.Event,
            agenda: {
              event: this.EventAgenda
            }
          }}
          onSelectEvent={ this.updateEvent }
          onSelectSlot={ this.addNewEventModal }
        />
        
          <Modal
            isOpen={ this.state.modalIsOpen }
            onRequestClose={ this.closeModal }
            style={ customStyles }
            contentLabel="Add an Event">

            <h2>Add an event</h2>
            <EventForm submitFunc={ this.addEvent }/>
            <button onClick={ this.closeModal }>Close</button>

          </Modal>
      </div>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return { events: state.events.events };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    reqAddEvent: reqAddEvent
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
