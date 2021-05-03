import React from 'react';

function Home() {
    return (
        <div>
            <div className="app">
                <div className="app-wrap">
                    <div className="app-contant">
                        <div className="bg-white">
                            <div className="container-fluid p-0">
                                <div className="row no-gutters">
                                    <div className="col-sm-6 col-lg-5 col-xxl-3  align-self-center order-2 order-sm-1">
                                        <div className="d-flex align-items-center h-100-vh">
                                            <div className="login p-50">
                                                <h1 className="mb-2">We Are </h1>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
                                        <div className="row align-items-center h-100">
                                            <div className="col-7 mx-auto ">
                                                <img className="img-fluid" src="../assets/img/bg/login.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
