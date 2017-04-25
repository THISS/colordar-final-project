import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import allReducers from './reducers';
import App from './components/App.jsx';
import FakeData from '../data/fake-data.json';

// const store = createStore(allReducers);

ReactDOM.render(<App data={FakeData}/>, document.getElementById('react-root'));
