import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserLogout, lockUser as lockUserAction } from "../actions/user";
import { lockUser as lockMe, userLogout } from "../services/auth";
import { useToasts } from 'react-toast-notifications';

function Nav() {

    const user = useSelector((state) => state.user);
    const setting = useSelector((state) => state.setting);

    const dispatch = useDispatch();

    const { addToast } = useToasts();

    const logoutUser = async () => {
        try {
            const response = await userLogout();
            console.log(response);
            localStorage.removeItem('laravelReactSpa');
            dispatch(setUserLogout());
            addToast("Logout successful", { appearance: 'error' });
        } catch(err) {
            if(!err.response) return;
            console.log(err.response.data.message);
            addToast(err.response.data.message, { appearance: 'error' });
        }  

    }

    const lockedUser = async () => {

        try {
            const response = await lockMe();
            console.log(response);
            dispatch(lockUserAction(response.data));
            addToast("You are locked out", { appearance: 'success' });
        } catch(err) {
            if(!err.response) return;
            console.log(err.response.data.message);
            addToast(err.response.data.message, { appearance: 'error' });
        }
        
    }


    useEffect(() => {

    }, []);



    return (
        <header className="app-header top-bar">
            <nav className="navbar navbar-expand-md">
                <div className="navbar-header d-flex align-items-center">
                    <a href={void(0)} className="mobile-toggle"><i className="ti ti-align-right"></i></a>
                    <Link className="navbar-brand" to="/">
                        <img src="{{ school_logo() }}" className="img-fluid logo-desktop" alt="logo"/>
                        <img src="{{ school_logo() }}" className="img-fluid logo-mobile" alt="logo"/>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <i className="ti ti-align-left"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navigation d-flex">
                        <ul className="navbar-nav nav-left">
                            <li className="nav-item">
                                <a href={void(0)} className="nav-link sidebar-toggle">
                                    <i className="ti ti-align-right"></i>
                                </a>
                            </li>
                            <li className="nav-item full-screen d-none d-lg-block" id="btnFullscreen">
                                <a href={void(0)} className="nav-link expand">
                                    <i className="icon-size-fullscreen"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav nav-right ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href={void(0)} id="navbarDropdown2"
                                   role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ti ti-email"></i>
                                </a>
                                <div className="dropdown-menu extended animated fadeIn"
                                     aria-labelledby="navbarDropdown">
                                    <ul>
                                        <li className="dropdown-header bg-gradient p-4 text-white text-left">Messages
                                            <label className="label label-info label-round">6</label>
                                            <a href="#"
                                               className="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                                <span className="font-13"> Mark all as read</span></a>
                                        </li>
                                        <li className="dropdown-body">
                                            <ul className="scrollbar scroll_dark max-h-240">
                                                <li>
                                                    <a href={void(0)}>
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <img className="img-fluid" src="assets/img/avtar/03.jpg"
                                                                     alt="user3" />
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">Brianing Leyon</p>
                                                                <small>You will sail along until you...</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                        <li className="dropdown-footer">
                                            <a className="font-13" href={void(0)}> View All messages </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href={void(0)} id="navbarDropdown3"
                                   role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fe fe-bell"></i>
                                    <span className="notify">
                                        <span className="blink"></span>
                            <span className="dot"></span>
                            </span>
                                </a>
                                <div className="dropdown-menu extended animated fadeIn"
                                     aria-labelledby="navbarDropdown">
                                    <ul>
                                        <li className="dropdown-header bg-gradient p-4 text-white text-left">Activities
                                            <a href="#"
                                               className="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                                <span className="font-13"> Clear all</span></a>
                                        </li>
                                        <li className="dropdown-body min-h-240 nicescroll">
                                            <ul className="scrollbar scroll_dark max-h-240">
                                                
                                                <li>
                                                    <a href={void(0)}>
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <div className="bg-type bg-type-md">
                                                                    <span>DE</span>
                                                                </div>
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">Order confirmation</p>
                                                                <small>2 day</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-footer">
                                            <a className="font-13" href={void(0)}> View All Activities
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item dropdown user-profile">
                                <a href={void(0)} className="nav-link dropdown-toggle " id="navbarDropdown4"
                                   role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={user.user.avatar} alt="avtar-img" />
                                        <span className="bg-success user-status"></span>
                                </a>
                                <div className="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                    <div className="bg-gradient px-4 py-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="mr-1">
                                                <h4 className="text-white mb-0">{user.user.fullname}</h4>
                                                <small className="text-white">{user.user.email}</small>
                                            </div>
                                            <a href={void(0)} onClick={() => logoutUser()} className="text-white font-20 tooltip-wrapper" data-toggle="tooltip"
                                               data-placement="top" title="" data-original-title="Logout"> <i
                                                className="zmdi zmdi-power"></i></a>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <Link className="dropdown-item d-flex nav-link" to="/profile">
                                            <i className="fa fa-user pr-2 text-success"></i> Profile</Link>
                                        <Link className="dropdown-item d-flex nav-link" to="/setting">
                                            <i className="ti ti-settings pr-2 text-info"></i> Settings
                                        </Link>
                                        <a href={void(0)} onClick={() => lockedUser()} className="dropdown-item d-flex nav-link">
                                            <i className="ti ti-key pr-2 text-danger"></i> Locked
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
