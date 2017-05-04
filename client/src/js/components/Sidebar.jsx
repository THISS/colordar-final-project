import React, {Component} from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import { findDOMNode } from 'react-dom';



class Sidebar extends Component {
  componentDidMount(){
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  }
  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };

  render() {
    const sideHeads = this.props.groupMembers.map((elm) => {
      return (
        <span key={ elm.id }className="user-avatar">
          {/*<img src="https://s-media-cache-ak0.pinimg.com/736x/ea/3b/22/ea3b223f94bb8e484ddf57f5f925f0ff.jpg" />*/}
        </span>
      );
    });

    return (
      <div className="sidebar">
        <div className="nav-height-container">
          <span className="round-button chat-button" onClick={this.handleToggle}>
            <i className="fa fa-comments" aria-hidden="true"></i>
          </span>
        </div>

        <iframe ref="toggle" className="chat-box" src="http://localhost:3002" width="400" height="300" frameBorder="0"></iframe>

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


          { sideHeads }
{/*TODO: Need to make things clickable eg. below and the side heads and the top buttons */}
          <span className="more-users">. . .</span>
        </div>
      </div>
    );
  }
}

export default Sidebar;
