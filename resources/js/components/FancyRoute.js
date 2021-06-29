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
import { setProfile, setUserLogout } from "../actions/user";
import { getProfile } from "../services/auth";
import { useToasts } from 'react-toast-notifications';



const FancyRoute = (props) => {

    const dispatch = useDispatch();

    const NewComponent = props.component;

    const user = useSelector((state) => state.user);

    const { addToast } = useToasts();

    const fetchSetting = async () => {
        try {

            const response = await getSetting();
            console.log(response);
            dispatch(setSetting(response.setting));
            
        } catch (err) {
            if(!err.response) return;
            console.log(err.response)
        }
    };

    const fetchUserProfile = async () => {
        try {
            const response = await getProfile();
            console.log(response.data);
            dispatch(setProfile(response.data));

        } catch (err) {
            if(!err.response) return;
            localStorage.removeItem('laravelReactSpa');
            dispatch(setUserLogout());
            //addToast(err.response.data.message, { appearance: 'error' });
            //console.log(err.response)
        }
    };

    useState(NProgress.start());

    useEffect(() => {

        fetchSetting();
        fetchUserProfile();

        document.title = props.title;
        NProgress.done();
        return () => {
            NProgress.start();
        };

    }, []);

    return props.protected === true ? (
            <PrivateRoute path={props.path} exact={true}><NewComponent /></PrivateRoute>
    ) : ( <Route path={props.path} exact>{ user.isLoggedIn && props.path == "/auth/login" ? <Redirect to="/" /> : <NewComponent /> }</Route> );
};

export default FancyRoute;
