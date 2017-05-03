import React, {Component} from 'react';

// Import fullcalendar.js
import fullcalendar from 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';

import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import $ from 'jquery';
import Modal from 'react-modal';

import EventForm from './EventForm.jsx';

import { addEvent } from '../actions/index'

// connect to redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    // this.props.addEvent({
    //
    // });
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    const {calendar} = this.refs;

    $(calendar).fullCalendar({
      header: {
        left: 'prev',
        center: 'title',
        right : 'next'
      },

      events: this.props.events,
      editable: true,
      selectable: true,
      height: 'parent',

      // dayClick: (date, jsEvent, view) => {
      //   this.setState({
      //     modalIsOpen: true
      //   })
      // }

      dayClick: function(date, allDay, jsEvent, view) {
        $("#dialog").dialog("option", "position", {
          my: "bottom-10",
          of: jsEvent
        });
        $("#dialog").dialog("open");
      }
      
    });
  }


  componentWillUnmount() {
    const {calendar} = this.refs;

    $(calendar).fullCalendar('destroy');
  }

  render() {
    return (
      <div ref="calendar" className="calendar">
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
          <h2>Add an event</h2>
          <EventForm />
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return {events: state.events};
}

export default connect(mapStateToProps)(Calendar);
