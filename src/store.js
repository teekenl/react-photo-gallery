import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducer/root';

import comments from './data/comments'; // same here
import posts from './data/posts'; // read data from database in the future instead store it locally

const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;







