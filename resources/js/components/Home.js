import React from 'react';
import SideBar from "./SideBar";
import Nav from "./Nav";

function Home() {
    return (
        <div className="app">
            <div className="app-wrap">
                <Nav />
                <div className="app-container">
                    <SideBar/>
                    <div className="app-main" id="main">
                        <div className="container-fluid">

                            {/* @include('partials.breadcrumb') */ }

                            {/* @yield('content') */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
