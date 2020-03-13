import React from 'react';
import {Router} from 'react-router';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';

import routes from './routes';
import "./sass/style.scss";

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        {routes}
    </Router>, document.querySelector('#root'));

