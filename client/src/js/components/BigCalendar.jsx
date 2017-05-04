import React, { Component } from 'react';

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
import { addEvent } from '../actions/event-actions';

// connect to redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
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
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div ref="calendar" className="calendar">
        <BigCalendar
          events={this.props.events}
          defaultDate={new Date(2017, 4, 4)}
        />
          <Modal 
            isOpen={ this.state.modalIsOpen } 
            onRequestClose={ this.closeModal } 
            style={ customStyles } 
            contentLabel="Add an Event">

            <h2>Add an event</h2>
            <form>
              <input/>
              <button>Submit</button>
            </form>
            <button onClick={this.closeModal}>Close</button>

          </Modal>
      </div>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return { events: state.events.events };
}

export default connect(mapStateToProps)(Calendar);
