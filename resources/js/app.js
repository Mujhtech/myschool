import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FancyRoute from "./components/FancyRoute";
import routes from "./routes";

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
    ReactDOM.render(<App />, document.getElementById('root'));
}
