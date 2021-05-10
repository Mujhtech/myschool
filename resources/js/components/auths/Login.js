import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {login} from "../../services/auth";

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loggedIn = async (e) => {
        e.preventDefault();
        const response = await login({email, password, remember_me: false});
        console.log(response);
    };

    useEffect(() => {

    }, []);


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
                                                <p>Welcome back, please login to your account.</p>
                                                <form className="mt-2 mt-sm-5" method="POST" onSubmit={(e) => loggedIn(e)}>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Email*</label>
                                                                <input type="email" className="form-control"
                                                                       placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>

                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="control-label">Password*</label>
                                                                <input type="password" className="form-control"
                                                                       placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="d-block d-sm-flex  align-items-center">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox"
                                                                           id="gridCheck" />
                                                                        <label className="form-check-label"
                                                                               htmlFor="gridCheck">
                                                                            Remember Me
                                                                        </label>
                                                                </div>
                                                                <Link to="/auth/forgot-password" className="ml-auto">Forgot Password ?</Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 mt-3">
                                                            <button type="submit"
                                                                    className="btn btn-primary text-uppercase">Sign In
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
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

export default Login;
