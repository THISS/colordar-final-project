import React, { Component } from 'react';

import moment from 'moment';
window.moment = moment;
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


let MyOtherNestedComponent = React.createClass({
  render(){
    return (<div>Back</div>)
  }
})

let MyCustomHeader = React.createClass({
  render(){
    const { label } = this.props
    return (
      <div>
        <div>{ label }</div>
        <MyOtherNestedComponent />
      </div>
    )
  }
})

// CUSTOM toolbar

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate('prev');
  };

  const goToNext = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() + 1);
    toolbar.onNavigate('next');
  };

  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate('current');
  };

  const label = () => {
    const date = moment(toolbar.date);
    return (
      <span><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>
    );
  };

  return (
    <div className='toolbar-container'>

      <div className='back-next-buttons'>
        <label className='label-date'>{label()}</label>
        <button className='btn-back' onClick={goToBack}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <button className='btn-next' onClick={goToNext}>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
//CUSTOM TOOLBAR ENDS


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
            },
            toolbar: CustomToolbar
          }}
          onSelectEvent={ event => console.log(event.title)}
          onSelectSlot={ (slotInfo) => console.log(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
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
