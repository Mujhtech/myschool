import React from 'react';
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <aside className="app-navbar">
            <div className="sidebar-nav scrollbar scroll_light">
                <ul className="metismenu " id="sidebarNav">
                    <li>
                        <Link to="/" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Messaging</span>
                        </Link>
                    </li>
                    <li className="nav-static-title">Users</li>
                    <li className="">
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage User Role</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Teachers</span>
                        </Link>
                    </li>
                    <li className="">
                        <a className="has-arrow" href={void(0)} aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Students</span>
                        </a>
                        <ul aria-expanded="false">
                            <li className="active"><Link to="/setting">Default</Link></li>
                        </ul>
                    </li>
                    <li className="nav-static-title">Academic</li>
                    <li>
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage E-Exam</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Grade</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Academic Session</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Class</span>
                        </Link>
                    </li>
                    <li className="">
                        <a className="has-arrow" href={void(0)} aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage E-Result</span>
                        </a>
                        <ul aria-expanded="false">
                            <li className="active"><Link to='/'>Default</Link></li>
                        </ul>
                    </li>
                    <li className="">
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Settings</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Profile</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
