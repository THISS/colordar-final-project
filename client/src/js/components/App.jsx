import React from 'react';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx';
import Agenda from './Agenda.jsx';
import DayInfo from './DayInfo.jsx';
import Bubbles from './Bubbles.jsx';
import Calendar from './Calendar.jsx';

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
        <Calendar />
      </div>
    </div>
  );
}
