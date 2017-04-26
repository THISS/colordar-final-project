import React, {Component} from 'react';
import Today from './Today.jsx';
import Calendar from './Calendar.jsx';
import SelectCalendar from './SelectCalendar.jsx';
import Nav from './Nav.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Today todayEvents={this.props.data.todayEvents}/>
      </div>
    );
  }
}

export default App;
