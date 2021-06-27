import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from "../actions/user";
import { getProfile } from "../services/auth";


const PrivateRoute = ({ children, ...rest }) => {

    const loggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const fetchUserProfile = async () => {
        try {
            const response = await getProfile();
            console.log(response);
            //dispatch(setProfile(response.user));
        } catch (err) {
            console.log(err.response)
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
