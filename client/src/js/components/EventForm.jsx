import React, {Component} from 'react';
import moment from 'moment';
import $ from 'jquery';

import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';

class EventForm extends Component {

  handleSubmit(e) {
    e.preventDefault();

    const eventTitle = this.refs.eventtitle.value;
    const eventStart = this.state.eventstart;
    const eventEnd = this.state.eventend;
    const eventLocation = this.refs.eventlocation.value;

    const newEvent = {
      name: eventTitle,
      location: eventLocation,
      start_time: eventStart,
      end_time: eventEnd,
      color_id: 3,
      calendar_id: 1
    };

    this.props.submitFunc(newEvent);
  }


  render() {
    const eventStartOnChange = (_, str) =>{
      console.log('eventOnChange', str);
      this.setState({'eventstart': str});
    }

    const eventEndOnChange = (_, str) =>{
      console.log('eventOnChange', str);
      this.setState({'eventend': str});
    }

    return (
      <form name="CreateEventForm" className="create-event-form">

        <input placeholder="Title" ref="eventtitle" type="text" className="form-input" />

        <br />

        <input placeholder="Location" ref="eventlocation" type="text" className="form-input" />

        <br />

        <Flatpickr ref="eventstart"
          onChange={eventEndOnChange}
          className="form-input"
          placeholder="Starts"
        />

        <br />

        <Flatpickr ref="eventend"
          onChange={eventStartOnChange}
          className="form-input"
          placeholder="Ends"
        />

        <br />

        <input type="submit" value="Submit" className="form-submit" onClick={this.handleSubmit.bind(this)}/>
      </form>

    );
  }
}

export default EventForm;
// export default form({ form: 'CreateEventForm'} )(connect(null, mapDispatchToProps)(EventForm));
