import React, { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Route, Redirect } from 'react-router-dom';
import '../../css/FancyRoute.css';
import PrivateRoute from './PrivateRoute';
import Home from './Home';


const FancyRoute = (props) => {

    const NewComponent = props.component;

    useState(NProgress.start());

    useEffect(() => {
        document.title = props.title;
        NProgress.done();
        return () => {
            NProgress.start();
        };

    }, []);

    return props.protected === true ? (
            <PrivateRoute path={props.path} exact={true}><NewComponent /></PrivateRoute>
    ) : ( <Route {...props} /> );
};

export default FancyRoute;
