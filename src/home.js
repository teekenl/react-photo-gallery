import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import ReactDOM from 'react-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';
import App from './App';

import { Provider } from 'react-redux';
import store, { history } from './store';

import css from './style.css';

class Root extends Component {
    render(){
        return(
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/' component={App}>
                        <IndexRoute component={PhotoGrid} />
                        <Route path="/view/:postId" component={Single}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('app'));
