import Login from "./components/auths/Login";
import Home from "./components/Home";
import ForgotPassword from "./components/auths/ForgotPassword";
import Otp from "./components/auths/Otp";
import Locked from "./components/auths/Locked";
import NoMatch from "./components/errors/NoMatch";

const routes = [
    {
        title: 'Dashboard',
        path: '/',
        exact: true,
        component: Home
    },
    {
        title: 'Login',
        path: '/auth/login',
        component: Login
    },
    {
        title: 'Forgot Password',
        path: '/auth/forgot-password',
        component: ForgotPassword
    },
    {
        title: 'Verify Account',
        path: '/auth/otp',
        component: Otp
    },
    {
        title: 'Locked',
        path: '/auth/locked',
        component: Locked
    },
    {
        title: 'Page Not Found',
        path: '*',
        component: NoMatch
    }
]

export default routes;
