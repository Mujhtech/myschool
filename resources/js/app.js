import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import FancyRoute from "./components/FancyRoute";
import { Provider } from 'react-redux';
import routes from "./routes";
import {store} from "./stores/index";

const App = props =>
    <Router>
        <Switch>
            {routes.map((route, i) =>
                <FancyRoute key={i} {...route} />
            )}
        </Switch>
    </Router>

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
