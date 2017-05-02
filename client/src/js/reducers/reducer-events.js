const defaultState = [
  {
    "id": 1,
    "title": "Brunch with mom",
    "start": new Date(2017, 4, 1, 10, 0),
    "end": new Date(2017, 4, 1, 11, 30)
  },
  {
    "id": 2,
    "title": "Meeting at work",
    "start": new Date(2017, 4, 1, 12, 30),
    "end": new Date(2017, 4, 1, 14, 30)
  },
  {
    "id": 3,
    "title": "Drinks with Jeff and Batman",
    "start": new Date(2017, 4, 1, 17, 0),
    "end": new Date(2017, 4, 1, 18, 30)
  },
  {
    "id": 4,
    "title": "Dessert time",
    "start": new Date(2017, 4, 1, 19, 30),
    "end": new Date(2017, 4, 1, 20, 30)
  },
  {
    "id": 5,
    "title": "Making Chicken Wings",
    "start": new Date(2017, 3, 10),
    "end": new Date(2017, 3, 11)
  },
  {
    "id": 6,
    "title": "Hot Pot",
    "start": new Date(2017, 3, 16),
    "end": new Date(2017, 3, 18)
  },
  {
    "id": 7,
    "title": "Meetings with important people",
    "start": new Date(2017, 3, 17, 14, 30),
    "end": new Date(2017, 3, 17, 16, 30)
  },
  {
    "id": 8,
    "title": "DEMO DAY D:",
    "start": new Date(2017, 4, 4, 19, 0),
    "end": new Date(2017, 4, 4, 21, 0)
  },
  {
    "id": 9,
    "title": "Important presentation",
    "start": new Date(2017, 3, 29, 19, 0),
    "end": new Date(2017, 3, 29, 21, 0)
  },
  {
    "id": 10,
    "title": "Do taxes",
    "start": new Date(2017, 3, 29, 16, 0),
    "end": new Date(2017, 3, 29, 17, 0)
  }
];

import { EVENT_SELECTED, ADD_EVENT } from '../actions/action_types.js';

export default function(state = defaultState, { type, payload }) {
  switch(type) {
    case ADD_EVENT:
      // const { id, start, end, title } = payload;
      return [...state, payload];
  }
  return state;
}
