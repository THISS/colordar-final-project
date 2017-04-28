import React, {Component} from 'react';
import fullcalendar from 'fullcalendar';
import moment from 'moment';
import $ from 'jquery';

import Modal from 'react-modal';

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
      events: this.props.events,
      editable: true,
      selectable: true,

      dayClick: (date, jsEvent, view) => {
        this.setState({
          modalIsOpen: true
        })
      }
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

          <div>
            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
              <h2>Add an event</h2>
              <form>
                <input/>
                <button>Submit</button>
              </form>
              <button onClick={this.closeModal}>close</button>
            </Modal>
          </div>

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
