import React, {Component} from 'react';

// Import fullcalendar.js
import fullcalendar from 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';

import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import $ from 'jquery';
import jQuery from 'jquery';
import Modal from 'react-modal';

import EventForm from './EventForm.jsx';

import { addEvent } from '../actions/index'

// connect to redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { findDOMNode } from 'react-dom';

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

      dayClick: (date, jsEvent, view) => {
        this.setState({
          modalIsOpen: true

          // callback function contains thibgns you want to happen after state is setState
          // set position inside callback
        })

        setTimeout(function(){$('.event-modal').css({top: jsEvent.clientY+'px', left: jsEvent.clientX+document.body.scrollLeft+'px'}); }, 0);
        setTimeout(function(){$('.flatpickr-calendar').css({top: jsEvent.clientY+'px', left: jsEvent.clientX+document.body.scrollLeft+'px'}); }, 0);

        console.log('mouse position', jsEvent.clientX, $(document.body).scrollLeft());
      }
    });
  }


  componentWillUnmount() {
    const {calendar} = this.refs;

    $(calendar).fullCalendar('destroy');
  }

  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };

  render() {
    return (
      <div ref="calendar" className="calendar">
        <Modal className="event-modal" overlayClassName="event-modal-overlay" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="Example Modal">
          <EventForm />
          <span onClick={this.closeModal} className="close-modal"><i className="fa fa-times" aria-hidden="true"></i></span>
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
