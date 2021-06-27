import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile } from "../actions/user";
import { getProfile } from "../services/auth";
import { useToasts } from 'react-toast-notifications';


const PrivateRoute = ({ children, ...rest }) => {

    const loggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    const { addToast } = useToasts();

    const fetchUserProfile = async () => {
        try {
            const response = await getProfile();
            console.log(response);
            dispatch(setProfile(response.data));

        } catch (err) {

            addToast(err.response.data.message, { appearance: 'error' });
            //console.log(err.response)
        }
    };

    useEffect(() => {

        fetchUserProfile();

    }, [ loggedIn ]);

    return (
        <Route {...rest} render={({ location }) => {
          return loggedIn === true
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
