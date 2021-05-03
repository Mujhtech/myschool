import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from "react-router-dom";
import Login from "./auths/Login";
import ForgotPassword from "./auths/ForgotPassword";
import Locked from "./auths/Locked";
import Otp from "./auths/Otp";

function App() {
    return (
        <Switch>
            <Route path="/auth/login">
                <Login />
            </Route>
            <Route path="/auth/forgot-password">
                <ForgotPassword />
            </Route>
            <Route path="/auth/otp">
                <Otp />
            </Route>
            <Route path="/auth/locked">
                <Locked />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<Login />, document.getElementById('root'));
}
