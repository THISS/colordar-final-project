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
          component="select"
          placeholder="Current month">
          <option></option>
          </Field>
          <Field 
          name="new-date"
          component="select"
          placeholder="Current day">
          <option></option>
          </Field>
        </label>
        <div>
          <button type="submit">Go to date </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newDate'
})(NewDate);