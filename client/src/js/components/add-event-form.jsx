import React from 'react'
import { Field, reduxForm } from 'redux-form'

class AddEvent extends React.Component {
  onSubmit (props) {
    alert('Event added');
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h1>Add an Event</h1>
        <label>
          Event Name
          <Field
            name="event-name"
            type="text"
            component="input" />
        </label>
        <br />
        <label>
          Start
          <Field
            name="start-time"
            type="text"
            component="input" />
        </label>
        <br />
        <label>
          End
          <Field
            name="end-time"
            type="text"
            component="input" />
        </label>
        <br />
        <label>
          Location
          <Field
            name="location"
            type="text"
            component="input" />
        </label>
        <br />
        <label>
          Calendar
          <Field
            name="calendar"
            component="select">
            <option></option>
          </Field>
        </label>
        <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
      </form>
    );
  }
}

Export default reduxForm({
  form: 'addEvent'
})(addEvent);