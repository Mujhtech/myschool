import React from 'react';
import SideBar from "./SideBar";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import dashboard from "../routes/dashboard";
import FancyRoute from "./FancyRoute";
import Footer from './Footer';

function Home() {
    return (
        <Router>
            <div className="app">
                <div className="app-wrap">
                    <Nav />
                    <div className="app-container">
                        <SideBar/>
                        <div className="app-main" id="main">
                            <div className="container-fluid">

                                {/* @yield('content') */}

                                <Switch>
                                    {dashboard.map((route, index) => (
                                      <FancyRoute key={index} {...route} />
                                    ))}
                                </Switch>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default Home;
