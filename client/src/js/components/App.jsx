import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx';
import Agenda from './Agenda.jsx';
import DayInfo from './DayInfo.jsx';
import Bubbles from './Bubbles.jsx';
import CalendarContainer from './CalendarContainer.jsx';

export default function App(props) {
  return (
    <Router>
      <div className="main-container sidebar-shown">

        <Nav />
        <Sidebar />
        <Route path='/' >
          <div className="page-1">
            <Agenda />
            <DayInfo />
            <Bubbles />
          </div>
        </Route>
        <Route path='/calendar'>
          <div className="page-2">
            <CalendarContainer />
          </div>
        </Route>
      </div>
    </Router>
  );
}
