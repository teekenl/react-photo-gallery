import React, { Component } from 'react';
import {Router, Router, IndexRoute, browserHistory, Link} from 'react-router';
import ReactDOM from 'react-dom';
import Single from 'Single';
import PhotoGrid from 'PhotoGrid';
import App from './App';

import { Provider } from 'react-redux';
import store, {history} from './store';


import css from 'style.css';


class router extends Component {
    render(){
        return(
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/' component={App}>
                        <IndexRoute component={PhotoGrid} />
                        <Route path="/view/:/postId" component={Single}/>
                    </Route>
                </Router>
            </Provider>

        )
    }
}


ReactDOM.render(<router/>, document.getElementById('app'));
