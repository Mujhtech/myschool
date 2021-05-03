import React, { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {Route} from 'react-router-dom';
import '../../css/FancyRoute.css'

const FancyRoute = (props) => {

    useState(NProgress.start());

    useEffect(() => {
        document.title = props.title;
        NProgress.done();
        return () => {
            NProgress.start();
        };
    }, []);
    return (
        <Route {...props} />
    );
};

export default FancyRoute;
