import React, { Component } from 'react';

// Import fullcalendar.js
import fullcalendar from 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';

import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
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

  renderCalendar(events) {
    const { calendar } = this.refs;
    setTimeout(() => {
      console.log(events);
      $(calendar).fullCalendar({
        header: {
          left: 'prev',
          center: 'title',
          right : 'next'
        },

        events: events,
        editable: true,
        selectable: true,
        height: 'parent',

        dayClick: function(date, allDay, jsEvent, view) {
          $("#dialog").dialog("option", "position", {
            my: "bottom-10",
            of: jsEvent
          });
          $("#dialog").dialog("open");
        }
      });
    }, 1);
  }

  componentDidUpdate() {
    this.renderCalendar(this.props.events);
  }

  componentDidMount() {
    this.renderCalendar(this.props.events);
  }

  componentWillUnmount() {
    const { calendar } = this.refs;

    $(calendar).fullCalendar('destroy');
  }

  render() {
    return (
      <div ref="calendar" className="calendar">
        <div>
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
      </div>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return { events: state.events.events };
}

export default connect(mapStateToProps)(Calendar);
