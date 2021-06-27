import React, { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Route, Redirect } from 'react-router-dom';
import '../../css/FancyRoute.css';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import { useSelector, useDispatch } from 'react-redux';
import { setSetting } from "../actions/setting";
import { getSetting } from "../services/setting";


const FancyRoute = (props) => {

    const dispatch = useDispatch();

    const NewComponent = props.component;

    const fetchSetting = async () => {
        try {

            const response = await getSetting();
            console.log(response);
            dispatch(setSetting(response.setting));
            
        } catch (err) {
            console.log(err.response)
        }
    };

    useState(NProgress.start());

    useEffect(() => {

        fetchSetting();

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
