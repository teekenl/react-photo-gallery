import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducer/root';
import {combineReducers} from 'redux';

import comments from './data/comments'; // same here
import posts from './data/posts'; // read data from database in the future instead store it locally

const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);


// Reducer hot auto-reloading middleware
if(module.hot) {
    module.hot.accept('./reducer/root',() => {
      const nextRootReducer = require('./reducer/root').default;
      store.replaceReducer(nextRootReducer);
    });
}

export default store;







