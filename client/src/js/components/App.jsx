import React from 'react';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx';
import Agenda from './Agenda.jsx';
import DayInfo from './DayInfo.jsx';
import Bubbles from './Bubbles.jsx';
import CalendarContainer from './CalendarContainer.jsx';

export default function App(props) {
  return (
    <div className="main-container sidebar-shown">

      <Nav />
      <Sidebar />

      <div className="page-1">
        <Agenda />
        <DayInfo />
        <Bubbles />
      </div>

      <div className="page-2">
        <CalendarContainer />
      </div>
    </div>
  );
}
