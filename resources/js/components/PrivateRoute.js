import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserLogout } from "../actions/user";
import { getProfile } from "../services/auth";
import { useToasts } from 'react-toast-notifications';


const PrivateRoute = ({ children, ...rest }) => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { addToast } = useToasts();

    const fetchUserProfile = async () => {
        try {
            const response = await getProfile();
            console.log(response);
            dispatch(setProfile(response.data));

        } catch (err) {
            dispatch(setUserLogout());
            addToast(err.response.data.message, { appearance: 'error' });
            //console.log(err.response)
        }
    };

    useEffect(() => {

        fetchUserProfile();

    }, []);


    useEffect(() => {

        console.log(user.isLoggedIn);

    }, [dispatch, user]);

    return (
        <Route {...rest} render={({ location }) => {
          return user.isLoggedIn === true
            ? children
            : <Redirect to={{
                pathname: '/auth/login',
                state: { from: location }
              }}
            />
        }} />
    );
};

export default PrivateRoute;
