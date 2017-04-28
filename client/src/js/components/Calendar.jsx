import React, {Component} from 'react';
import fullcalendar from 'fullcalendar';
import moment from 'moment';
import $ from 'jquery';

import EventModal from './EventModal.jsx';
import Modal from 'react-modal';

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
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    const {calendar} = this.refs;

    $(calendar).fullCalendar({
      events: this.props.events, editable: true, selectable: true

      // dayClick: function(date, jsEvent, view) {
      //   $(this).toggleClass('event-active');
      //   $('.modal').toggleClass('active');
      // }
    });
  }

  componentWillUnmount() {
    const {calendar} = this.refs;

    $(calendar).fullCalendar('destroy');
  }

  render() {
    return (
      <div>
        <div ref="calendar" className="calendar">
          <EventModal/>
        </div>

        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">

            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input/>
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>

      </div>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return {events: state.events};
}

export default connect(mapStateToProps)(Calendar);
