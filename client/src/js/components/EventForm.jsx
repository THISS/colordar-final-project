import React, {Component} from 'react';
import moment from 'moment';
import $ from 'jquery';

import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';

// @connect(null, mapDispatchToProps)
// @form({form: 'CreateEventForm'})
// export default
class EventForm extends Component {

  handleSubmit(e) {
    e.preventDefault();

    let eventTitle = this.refs.eventtitle.value;
    let eventStart = this.state.eventstart;
    let eventEnd = this.state.eventend;

    console.log("pls work", eventTitle, eventStart, eventEnd);

    // $.ajax({
    //   url: '/events',
    //   type: 'post',
    //   data: {title: eventTitle, start: eventStart, end: eventEnd},
    //     success: (response) => {
    //       console.log('it worked', response);
    //       // todo receive event with id added from server
    //       // todo make ,redux action to send response to the store
    //     }
    // });
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