import React, { Component } from 'react';
// connect to redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CalendarSelector extends Component {

  renderCalendarLinks() {
    return this.props.calendars.map((calendar, index) => {
      return <span key={ calendar.id } className={`calendar-selector selector-${index + 1} ${ calendar.merged ? 'selector-active': '' }`}></span>
    });
  }

  render() {
    return (
      <div className="calendar-selectors">
        <span className="calendar-selector selector-1 selector-active"></span>
        <span className="calendar-selector selector-2 selector-active"></span>
        <span className="calendar-selector selector-3 selector-active"></span>
        <span className="calendar-selector selector-4 selector-active"></span>
        <span className="calendar-selector selector-5"></span>
        <span className="calendar-selector selector-6"></span>
        { this.renderCalendarLinks() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    calendars: state.calendars.calendars
  };
}

// TODO: make the selectors clickable
// function mapDispatchToProps(dispatch) {
//   return {
//     bindActionCreators({

//     }, dispatch)
//   };
// }

export default connect(mapStateToProps)(CalendarSelector);
