import React from 'react';
import {Switch, Route} from 'react-router';

import Table from './containers/Table';
import Card from './containers/Card';

const routes = (
    <Switch>
        <Route path='/rambler-test' component={Table} exact />
        <Route path='/rambler-test/card/:id' component={Card} />
    </Switch>
)

export default routes
