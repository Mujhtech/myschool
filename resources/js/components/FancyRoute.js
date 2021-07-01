import React, { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../../css/FancyRoute.css';
import PrivateRoute from './PrivateRoute';
import SingleRoute from './SingleRoute';



const FancyRoute = (props) => {

    const NewComponent = props.component;

    useState(NProgress.start());

    useEffect(() => {

        document.title = props.title;
        NProgress.done();
        return () => {
            NProgress.configure({ easing: 'ease', speed: 800 });
            NProgress.start();
        };

    }, []);

    return props.protected === true ? (
            <PrivateRoute path={props.path} exact={true}><NewComponent /></PrivateRoute>
    ) : ( <SingleRoute path={props.path} exact={true}><NewComponent /></SingleRoute> );
};

export default FancyRoute;
