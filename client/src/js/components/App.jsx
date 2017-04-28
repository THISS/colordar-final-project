import React, {Component} from 'react';
import Today from './Today.jsx';
import Calendar from './Calendar.jsx';
import Nav from './Nav.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Today />
      </div>
    );
  }
}

export default App;
