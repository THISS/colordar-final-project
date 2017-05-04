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
        })

        $('.event-modal').css({top: jsEvent.clientY+'px', left: jsEvent.clientX+document.body.scrollLeft+'px'});
        console.log('mouse position', jsEvent.clientX, $(document.body).scrollLeft());
      }

      //
      // eventClick: function (calEvent, jsEvent, view) {
      //   console.log(typeof $("#dialog").dialog);
      //   $("#dialog").dialog({
      //       autoOpen: false,
      //     }
      //   );
      // }

      // dayClick: function(date, allDay, jsEvent, view) {
      //   $("#dialog").dialog("option", "position", {
      //     my: "bottom-10",
      //     of: jsEvent
      //   });
      //   $("#dialog").dialog("open");
      // }

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
          <h2>Add an event</h2>
          <EventForm />
          <button onClick={this.closeModal}>close</button>
        </Modal>

      {/*<ul className="profile-info">
        <li>
          <span className="info-title">User Name : </span> Shuvo Habib
          </li>
      </ul>

      <ul className="profile-info additional-profile-info-list" ref="toggle">
        <li>
          <span className="info-email">Office Email</span>   me@shuvohabib.com
        </li>
      </ul>

      <div className="ellipsis-click" onClick={this.handleToggle}>
        <p> CLICK ON MEEE </p>
      </div>*/}

      </div>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return {events: state.events};
}

export default connect(mapStateToProps)(Calendar);
