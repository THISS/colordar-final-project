// Redux imports
import promise from 'redux-promise';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

// reducers
import allReducers from './reducers';

export default createStore(allReducers, applyMiddleware(promise, logger));

// {/*<Router history={ browserHistory } >
//        <Nav />
//       {/*<Route path='/register' component={ Register } />*/}
//       {/*<Route path='/login' component={ Login } />*/}
//       {/*<Route component={ ensureLoggedIn } > // TODO: make sure we are passing down the isLoggedIn*/}
//         {/*<Route path='/logout' component={ Logout } />*/}
//          <Route path='/' component={ Today } />
//          <Route path='/today' component={ Today } />
//         {/*<Route path='/groups' component={ Groups } />*/}
//         {/*<Route path='/chat' component={ Chat } />*/}
//       {/*</Route>*/}
//     </ Router>*/}