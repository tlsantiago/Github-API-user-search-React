import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Repositories from './Repositories';

export default function Routes() {
    return (
        <Switch>
            <Route path='/repositories' component={Repositories}/>
        </Switch>
    )
}