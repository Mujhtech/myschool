import React from 'react';

function Nav() {
    return (
        <header className="app-header top-bar">
            <nav className="navbar navbar-expand-md">
                <div className="navbar-header d-flex align-items-center">
                    <a href={void(0)} className="mobile-toggle"><i className="ti ti-align-right"></i></a>
                    <a className="navbar-brand" href="/">
                        <img src="{{ school_logo() }}" className="img-fluid logo-desktop" alt="logo"/>
                        <img src="{{ school_logo() }}" className="img-fluid logo-mobile" alt="logo"/>
                    </a>
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
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <img className="img-fluid" src="../assets/img/avtar/01.jpg"
                                                                     alt="user" />
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">Jimmyimg Leyon</p>
                                                                <small>Okay</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <img className="img-fluid" src="assets/img/avtar/02.jpg"
                                                                     alt="user2" />
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">Brainjon Leyon</p>
                                                                <small>So, make the decision...</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <img className="img-fluid" src="assets/img/avtar/04.jpg"
                                                                     alt="user4" />
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">Smithmin Leyon</p>
                                                                <small>Thanks</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <img className="img-fluid" src="assets/img/avtar/05.jpg"
                                                                     alt="user5" />
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">Jennyns Leyon</p>
                                                                <small>How are you</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <img className="img-fluid" src="assets/img/avtar/06.jpg"
                                                                     alt="user6" />
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">Demian Leyon</p>
                                                                <small>I like your themes</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-footer">
                                            <a className="font-13" href="javascript:void(0)"> View All messages </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown3"
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
                                        <li className="dropdown-header bg-gradient p-4 text-white text-left">Notifications
                                            <a href="#"
                                               className="float-right btn btn-square btn-inverse-light btn-xs m-0">
                                                <span className="font-13"> Clear all</span></a>
                                        </li>
                                        <li className="dropdown-body min-h-240 nicescroll">
                                            <ul className="scrollbar scroll_dark max-h-240">
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <div className="bg-type bg-type-md">
                                                                    <span>HY</span>
                                                                </div>
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">New registered user</p>
                                                                <small>Just now</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <div className="bg-type bg-type-md bg-success">
                                                                    <span>GM</span>
                                                                </div>
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">New invoice received</p>
                                                                <small>22 min</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <div className="bg-type bg-type-md bg-danger">
                                                                    <span>FR</span>
                                                                </div>
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">Server error report</p>
                                                                <small>7 min</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
                                                        <div
                                                            className="notification d-flex flex-row align-items-center">
                                                            <div className="notify-icon bg-img align-self-center">
                                                                <div className="bg-type bg-type-md bg-info">
                                                                    <span>HT</span>
                                                                </div>
                                                            </div>
                                                            <div className="notify-message">
                                                                <p className="font-weight-bold">Database report</p>
                                                                <small>1 day</small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">
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
                                            <a className="font-13" href={void(0)}> View All Notifications
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item dropdown user-profile">
                                <a href={void(0)} className="nav-link dropdown-toggle " id="navbarDropdown4"
                                   role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="{{ Auth::user()->getProfileUser() }}" alt="avtar-img" />
                                        <span className="bg-success user-status"></span>
                                </a>
                                <div className="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                                    <div className="bg-gradient px-4 py-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="mr-1">
                                                <h4 className="text-white mb-0">Mujeeb</h4>
                                                <small className="text-white">email</small>
                                            </div>
                                            <a href="{{ route('logout') }}"
                                               className="text-white font-20 tooltip-wrapper" data-toggle="tooltip"
                                               data-placement="top" title="" data-original-title="Logout"> <i
                                                className="zmdi zmdi-power"></i></a>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <a className="dropdown-item d-flex nav-link" href="{{ route('profile') }}">
                                            <i className="fa fa-user pr-2 text-success"></i> Profile</a>
                                        <a className="dropdown-item d-flex nav-link" href="{{ route('settings') }}">
                                            <i className=" ti ti-settings pr-2 text-info"></i> Settings
                                        </a>
                                        <a className="dropdown-item d-flex nav-link" href="{{ route('locked') }}">
                                            <i className=" ti ti-settings pr-2 text-info"></i> Locked
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
