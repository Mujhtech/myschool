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
                        <a href="" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage User Role</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="{{ route('admin.manage-role') }}" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Teachers</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="has-arrow" href={void(0)} aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Students</span>
                        </a>
                        <ul aria-expanded="false">
                            <li className="active"><a href="">Default</a></li>
                        </ul>
                    </li>
                    <li className="nav-static-title">Academic</li>
                    <li>
                        <a href="" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage E-Exam</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Grade</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Academic Session</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Class</span>
                        </a>
                    </li>
                    <li className="">
                        <a className="has-arrow" href={void(0)} aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage E-Result</span>
                        </a>
                        <ul aria-expanded="false">
                            <li className="active"><a href='index.html'>Default</a></li>
                        </ul>
                    </li>
                    <li className="">
                        <a href="" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Settings</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Profile</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
