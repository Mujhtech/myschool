import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import FancyRoute from "./components/FancyRoute";
import { Provider } from 'react-redux';
import routes from "./routes/index";
import {store} from "./stores/index";
import { ToastProvider } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { setSetting } from "./actions/setting";
import { getSetting } from "./services/setting";
import { setProfile, setUserLogout } from "./actions/user";
import { getProfile } from "./services/auth";

const App = () => {

    const dispatch = useDispatch();

    const setting = useSelector((state) => state.setting);

    const user = useSelector((state) => state.user);

    const fetchSetting = async () => {
        try {
            const response = await getSetting();
            dispatch(setSetting(response.setting)); 
        } catch (err) {
            if(!err.response) return;
        }
    };

    const fetchUserProfile = async () => {
        try {
            const response = await getProfile();
            dispatch(setProfile(response.data));
        } catch (err) {
            if(!err.response) return;
            localStorage.removeItem('laravelReactSpa');
            dispatch(setUserLogout());
            //console.log(err.response)
        }
    };


    useEffect(() => {

        if(Object.keys(setting.setting).length === 0) fetchSetting();
        if(Object.keys(user.user).length === 0) fetchUserProfile();

        return () => {
            //if(Object.keys(user.user).length === 0) fetchUserProfile();
            //if(Object.keys(setting.setting).length === 0) fetchSetting();
        };

    }, []);

    return (
        <Router>
            <Switch>
                {routes.map((route, i) =>
                    <FancyRoute key={i} {...route} />
                )}
            </Switch>
        </Router>
    );

}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<Provider store={store}><ToastProvider><App /></ToastProvider></Provider>, document.getElementById('root'));
}
