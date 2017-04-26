import React from 'react'
import { Field, reduxForm } from 'redux-form'

class AddUser extends React.Component {
  onSubmit (props) {
    alert('User added');
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add users by email</h1>
        <label>
          <Field 
          name="new-user"
          type="email"
          component="input"
          placeholder="Someone@gmail.com"/>
        </label>
        <div>
          <button type="submit">Add user</button>
        </div>
      </form>
    );
  }
}

Export default reduxForm({
  form: 'addUser'
})(addEvent);