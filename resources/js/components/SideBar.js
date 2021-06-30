import React from 'react';
import { Link, useLocation } from "react-router-dom";

function SideBar() {
    const { pathname } = useLocation();

    return (
        <aside className="app-navbar">
            <div className="sidebar-nav scrollbar scroll_light">
                <ul className="metismenu " id="sidebarNav">
                    <li className={pathname == '/' ? 'active' : ''}>
                        <Link to="/" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className={pathname == '/messaging' ? 'active' : ''}>
                        <Link to="/messaging" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Messaging</span>
                        </Link>
                    </li>
                    <li className="nav-static-title">Users</li>
                    <li className={pathname == '/roles' ? 'active' : ''}>
                        <Link to="/roles" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">User Role</span>
                        </Link>
                    </li>
                    <li className={pathname == '/staffs' ? 'active' : ''}>
                        <Link to="/staffs" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Staffs</span>
                        </Link>
                    </li>
                    <li className={pathname == '/students' || pathname == '/student-new' ? 'active' : ''}>
                        <a className="has-arrow" href={void(0)} aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage Students</span>
                        </a>
                        <ul aria-expanded="false" className="collapse">
                            <li className={pathname == '/student-new' ? 'active' : ''}><Link to="/student-new">New Student</Link></li>
                            <li className={pathname == '/' ? 'students' : ''}><Link to="/students">Students</Link></li>
                        </ul>
                    </li>
                    <li className="nav-static-title">Academic</li>
                    <li className={pathname == '/academic-syllabus' ? 'active' : ''}>
                        <Link to="/academic-syllabus" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Syllabus</span>
                        </Link>
                    </li>
                    <li className={pathname == '/e-exam' ? 'active' : ''}>
                        <Link to="/e-exam" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">E-Exam</span>
                        </Link>
                    </li>
                    <li className={pathname == '/grade' ? 'active' : ''}>
                        <Link to="/grade" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Grade</span>
                        </Link>
                    </li>
                    <li className={pathname == '/academic-session' ? 'active' : ''}>
                        <Link to="/academic-session" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Academic Session</span>
                        </Link>
                    </li>
                    <li className={pathname == '/classes' ? 'active' : ''}>
                        <Link to="/classes" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Class</span>
                        </Link>
                    </li>
                    <li className={pathname == '/e-result' ? 'active' : ''}>
                        <a className="has-arrow" href={void(0)} aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage E-Result</span>
                        </a>
                        <ul aria-expanded="false">
                            <li className={pathname == '/e-result' ? 'active' : ''}><Link to='/e-result'>E-Result</Link></li>
                        </ul>
                    </li>
                    <li className="nav-static-title">Others</li>
                    <li className={pathname == '/setting' ? 'active' : ''}>
                        <Link to="/setting" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Settings</span>
                        </Link>
                    </li>
                    <li className={pathname == '/profile' ? 'active' : ''}>
                        <Link to="/profile" aria-expanded="false">
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
