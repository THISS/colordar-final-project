
import {
  GET_MY_GROUPS,
  GET_GROUP_BY_ID,
  GET_GROUP_BY_ID_WITH_USERS,
  ADD_ME_TO_GROUP,
  ADD_USERS_BY_EMAIL,
  POST_GROUP,
  UPDATE_GROUP
} from '../actions/group-actions';

const initialState = {
  groups: [],
  selected: null,
  error: null
};

export default function(state=initialState, action) {
  const replace = function(val, index) {
    if (val.id === action.payload.id) {
      return action.payload;
    }
    return val;
  }

  switch(action.type) {
    case GET_MY_GROUPS:
      return {
        ...state,
        groups: action.payload.groups
      };
      break;
    case GET_GROUP_BY_ID:
      return {
        ...state,
        selected: action.payload
      };
      break;
    case GET_GROUP_BY_ID_WITH_USERS:
      return {
        ...state,
        selected: action.payload,
        groups: state.groups.map(replace)
      };
      break;
    // case ADD_ME_TO_GROUP: TODO: when we add notifications
    //   return {
    //     ...state,
    //     selected: state.groups['users'].concat(action.payload)
    //   };
    case ADD_USERS_BY_EMAIL:
      return state;
      break;
    case POST_GROUP:
      return {
        ...state,
        groups: state.groups.concat(action.payload.groups)
      };
      break;
    case UPDATE_GROUP:
      return {
        ...state,
        groups: state.groups.map(replace)
      };
      break;
    default:
      return state;
  }
}
