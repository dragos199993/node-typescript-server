import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../containers/HomePage/HomePage';
import ContactsContainer from '../containers/ContactsContainer/ContactsContainer';
import { routePaths } from './routePaths';

const MainRouter: any = (
    <Switch>
        <Route exact path={routePaths.root} component={HomePage} />
        <Route exact path={routePaths.tasks} component={ContactsContainer} />
    </Switch>
);

export default MainRouter;
