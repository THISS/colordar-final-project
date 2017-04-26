import React from 'react'
import { Field, reduxForm } from 'redux-form'

class NewDate extends React.Component {
  onSubmit (props) {
    alert('Date was submitted');
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h1>Pick a new date</h1>
        <label>
          <Field 
          name="new-date"
          component="select">
          </Field>
        </label>
        <div>
          <button type="submit">Go to date </button>
        </div>
      </form>
    );
  }
}

Export default reduxForm({
  form: 'newDate'
})(addEvent)