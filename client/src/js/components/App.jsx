import React from 'react';
import Nav from './Nav.jsx';
import Today from './Today.jsx';

export default function App(props) {
  return (
    <div className="main-container sidebar-shown">
    {/*  <Nav />
      <Today />*/}

      <div className="nav">
        <span className="round-button search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
        <div className="user">
          <span className="greeting">Good morning, Jake</span>
          <span className="user-avatar"><img src="http://rivista-cdn.pittsburghmagazine.com/Best-of-the-Burgh-Blogs/The-412/May-2014/Want-to-Win-a-Free-Flight-to-San-Francisco/c117ecd8acbe616668fea6528829433a.jpg?ver=1400627273" /></span>
        </div>
        <span className="round-button chat-button">
          <i className="fa fa-comments" aria-hidden="true"></i>
        </span>
      </div>

      <div className="sidebar">
      </div>

      <div className="page-1">
        <div className="agenda">
          <button className="add-event-button">Add an event</button>
        </div>
        <div className="day-info">
          <p className="current-day">It's Tuesday.</p>
          <p className="current-date">27 April 2017</p>
        </div>
        <div className="bubbles">
          <span className="bubble bubble-1"></span>
          <span className="bubble bubble-2">
            <img src="http://media02.hongkiat.com/black-white-portraits/warmth.jpg" alt="avatar" />
          </span>
          <span className="bubble bubble-3 bubble-active">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/ff/13/a1/ff13a12a250b6e3cfef2ce26b61a755c.jpg" alt="avatar" />
            <span className="notification">3</span>
            <div className="bubble-name">Chat with Morgan</div>
          </span>
          <span className="bubble bubble-4"></span>
          <span className="bubble bubble-5"></span>
          <span className="bubble bubble-6">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/d8/69/3a/d8693a767c0752ab495a1dc353f4c3c5.jpg" alt="avatar" />
          </span>
        </div>
      </div>

      <div className="page-2">
        <div className="calendar">
          <div className="calendar-selectors">
            <span className="calendar-selector selector-1 selector-active"></span>
            <span className="calendar-selector selector-2 selector-active"></span>
            <span className="calendar-selector selector-3 selector-active"></span>
            <span className="calendar-selector selector-4 selector-active"></span>
            <span className="calendar-selector selector-5"></span>
            <span className="calendar-selector selector-6"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
