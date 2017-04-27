import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectEvent} from '../actions/index';
import moment from 'moment';

class EventList extends Component {

  createListItems() {
    return this.props.events.map((event) => {
      if (moment(event.start).isSame('2017-4-25', 'day')){
        return (
          <li
            key={event.id}
            onClick={() => this.props.selectEvent(event)}
          >
            {moment(event.start).format('LT')} - {event.title}
          </li>
        );
      }
    });
  }

  render(){
    return(
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}

// Send a piece of state from your store to your component as props
function mapStateToProps(state) {
  return {
    events: state.events
  };
}

//
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectEvent: selectEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
