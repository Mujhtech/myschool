import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleRoute = ({ children, ...rest }) => {
    const user = useSelector((state) => state.user);

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user.isLoggedIn === true && user.isLocked === false && rest.path === "/auth/login")
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location },
                            }}
                        />
                    );
                else if (user.isLoggedIn === true && user.isLocked === true && rest.path === "/auth/login")
                    return (
                        <Redirect
                            to={{
                                pathname: "/auth/locked"
                            }}
                        />
                    );
                else
                    return children;
            }}
        />
    );
};

export default SingleRoute;
