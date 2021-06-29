import React, { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Route, Redirect } from 'react-router-dom';
import '../../css/FancyRoute.css';
import PrivateRoute from './PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
import { setSetting } from "../actions/setting";
import { getSetting } from "../services/setting";
import { setProfile, setUserLogout } from "../actions/user";
import { getProfile } from "../services/auth";



const FancyRoute = (props) => {

    const dispatch = useDispatch();

    const NewComponent = props.component;

    const user = useSelector((state) => state.user);

    const setting = useSelector((state) => state.setting);

    const fetchSetting = async () => {
        try {
            const response = await getSetting();
            dispatch(setSetting(response.setting)); 
        } catch (err) {
            if(!err.response) return;
        }
    };

    const fetchUserProfile = async () => {
        try {
            const response = await getProfile();
            dispatch(setProfile(response.data));
        } catch (err) {
            if(!err.response) return;
            localStorage.removeItem('laravelReactSpa');
            dispatch(setUserLogout());
            //console.log(err.response)
        }
    };

    useState(NProgress.start());

    useEffect(() => {

        document.title = props.title;
        NProgress.done();
        return () => {
            if(Object.keys(user.user).length === 0) fetchUserProfile();
            if(Object.keys(setting.setting).length === 0) fetchSetting();
            NProgress.start();
        };

    }, []);

    return props.protected === true ? (
            <PrivateRoute path={props.path} exact={props.exact}><NewComponent /></PrivateRoute>
    ) : ( <Route path={props.path} exact>{ user.isLoggedIn && props.path == "/auth/login" ? <Redirect to="/" /> : <NewComponent /> }</Route> );
};

export default FancyRoute;
