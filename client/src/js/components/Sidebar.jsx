import React, {Component} from 'react';

class Sidebar extends Component {
  render() {
    return (
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
    );
  }
}

export default Sidebar;
