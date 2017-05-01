import moment from 'moment';
import { DATE_SELECTED } from '../actions/action_types.js';

const defaultState = moment().startOf('day');

export default (state = defaultState, { type, payload }) => {
  switch(type) {
    case DATE_SELECTED:
      return payload;
  }
  return state;
}
