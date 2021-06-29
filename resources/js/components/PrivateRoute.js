import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ children, ...rest }) => {

    const user = useSelector((state) => state.user);

    useEffect(() => {

        console.log(user.isLoggedIn);

    }, []);

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
