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
          <span className="user-avatar">
            <img src="http://rivista-cdn.pittsburghmagazine.com/Best-of-the-Burgh-Blogs/The-412/May-2014/Want-to-Win-a-Free-Flight-to-San-Francisco/c117ecd8acbe616668fea6528829433a.jpg?ver=1400627273" />
          </span>
        </div>
      </div>

      <div className="sidebar">
        <div className="nav-height-container">
          <span className="round-button chat-button">
            <i className="fa fa-comments" aria-hidden="true"></i>
          </span>
        </div>
        <span className="round-button add-button">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </span>
        <div className="sidebar-chat-container">
          <span className="user-avatar">
            <img src="https://s-media-cache-ak0.pinimg.com/736x/ea/3b/22/ea3b223f94bb8e484ddf57f5f925f0ff.jpg" />
          </span>
          <span className="user-avatar">
            <img src="http://www.popphoto.com/sites/popphoto.com/files/styles/large_1x_/public/import/2014/files/_images/201412/pph1214_hw_005.jpg?itok=hkru7jAV" alt="avatar" />
          </span>
          <span className="user-avatar">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/ff/13/a1/ff13a12a250b6e3cfef2ce26b61a755c.jpg" alt="avatar" />
          </span>
          <span className="user-avatar">
            <img src="http://greatinspire.com/wp-content/uploads/2012/10/portrait-photography-about-female-by-mariyavetrova.jpg" alt="avatar" />
          </span>
          <span className="user-avatar">
            <img src="http://assets.feministing.com/wp-content/uploads/2016/06/DianeGuerrero.jpg" />
          </span>
          <span className="user-avatar">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/cf/21/0e/cf210e2ca31d6562bbd7d554ac425274.jpg" alt="avatar" />
          </span>
          <span className="user-avatar">
            <img src="http://www.violetmarshphotography.com/wp-content/uploads/2011/12/VMP_5958.jpg" alt="avatar" />
          </span>
          <span className="user-avatar">
            <img src="http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_2589.jpg" alt="avatar" />
          </span>
          <span className="user-avatar">
            <img src="https://zacharyjleduc.files.wordpress.com/2011/06/portrait-lighting-color-gel-photography1.jpg" alt="avatar" />
          </span>
          <span className="user-avatar">
            <img src="http://media02.hongkiat.com/black-white-portraits/warmth.jpg" alt="avatar" />
          </span>
          <span className="user-avatar">
            <img src="http://www.popphoto.com/sites/popphoto.com/files/styles/large_1x_/public/import/2014/files/_images/201412/pph1214_hw_005.jpg?itok=hkru7jAV" alt="avatar" />
          </span>
          <span className="user-avatar">
            <img src="http://greatinspire.com/wp-content/uploads/2012/10/portrait-photography-about-female-by-mariyavetrova.jpg" alt="avatar" />
          </span>
          <span className="more-users">. . .</span>
        </div>
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
            <span className="notification notification-active">3</span>
            <div className="bubble-name">Chat with Morgan</div>
          </span>
          <span className="bubble bubble-4"></span>
          <span className="bubble bubble-5"></span>
          <span className="bubble bubble-6">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/d8/69/3a/d8693a767c0752ab495a1dc353f4c3c5.jpg" alt="avatar" />
            <span className="notification">2</span>
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
