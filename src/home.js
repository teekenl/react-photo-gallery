import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import ReactDOM from 'react-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';
import App from './App';
import Signin from './Signin';
import Signup from './Signup';

import { Provider } from 'react-redux';
import store, { history } from './store';

import css from './style.css';

class Root extends Component {
    render(){
        return(
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/home' component={App}>
                        <IndexRoute component={PhotoGrid} />
                        <Route path="/home/view/:postId" component={Single}/>
                    </Route>
                    <Route path='/signin' component={Signin}/>
                    <Route path='/signup' component={Signup} />
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('app'));
