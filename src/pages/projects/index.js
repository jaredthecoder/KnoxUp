import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Page from '../../components/shared/page';
import SubNav from '../../components/subNav';
import Map from './map';
import Timeline from './timeline';
import List from './list';
import Project from './project';

const navItems = [
    {
        to: '/projects/map/',
        title: 'Map',
    },
    {
        to: '/projects/timeline/',
        title: 'Timeline',
    },
    {
        to: '/projects/list/',
        title: 'List',
    },
];

export default () => (
    <Page>
        <Route path="/projects/" exact>
            <Redirect to="/projects/map/" />
        </Route>

        <SubNav links={navItems} />

        <Switch>
            <Route path="/projects/map/" component={Map} />
            <Route path="/projects/timeline/" component={Timeline} />
            <Route path="/projects/list/" component={List} />
            <Route path="/projects/:projectId/" component={Project} />
        </Switch>
    </Page>
);
