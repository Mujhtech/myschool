import Login from "../components/auths/Login";
import Home from "../components/Home";
import ForgotPassword from "../components/auths/ForgotPassword";
import Otp from "../components/auths/Otp";
import Locked from "../components/auths/Locked";
import NoMatch from "../components/errors/NoMatch";

const routes = [
    {
        title: 'Dashboard',
        path: '/',
        exact: true,
        component: Home,
        protected: true
    },
    {
        title: 'Login',
        path: '/auth/login',
        component: Login,
        protected: false
    },
    {
        title: 'Forgot Password',
        path: '/auth/forgot-password',
        component: ForgotPassword,
        protected: false
    },
    {
        title: 'Verify Account',
        path: '/auth/otp',
        component: Otp,
        protected: false
    },
    {
        title: 'Locked',
        path: '/auth/locked',
        component: Locked,
        protected: true
    },
    {
        title: 'Page Not Found',
        path: '*',
        component: NoMatch,
        protected: false
    }
]

export default routes;
