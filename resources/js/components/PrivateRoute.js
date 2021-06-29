import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ children, ...rest }) => {

    const user = useSelector((state) => state.user);

    return (
        <Route {...rest} render={({ location }) => {
            if(user.isLoggedIn === true && user.isLocked === false)
                return children
            else if(user.isLoggedIn === true && user.isLocked === true)
                return <Redirect to={{
                pathname: "/auth/locked",
                state: { from: location }
                }}
                />
            else
                return <Redirect to={{
                    pathname: "/auth/login",
                    state: { from: location }
                  }}
                />
        }} />
    );
};

export default PrivateRoute;
