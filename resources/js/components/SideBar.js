import React from 'react';

function SideBar() {
    return (
        <aside className="app-navbar">
            <div className="sidebar-nav scrollbar scroll_light">
                <ul className="metismenu " id="sidebarNav">
                    <li>
                        <a href="{{ url('/') }}" aria-expanded="false">
                            <i className="nav-icon ti ti-comment"></i>
                            <span className="nav-title">Dashboard</span>
                        </a>
                    </li>
                    <li className="{{  Route::is('admin.messaging') ? 'active' : ''  }}">
                        <a href="{{ route('admin.messaging') }}" aria-expanded="false">
                            <i className="nav-icon ti ti-comment"></i>
                            <span className="nav-title">Messaging</span>
                        </a>
                    </li>
                    <li className="nav-static-title">Users</li>
                    <li className="{{  Route::is('admin.manage-role') ? 'active' : ''  }}">
                        <a href="{{ route('admin.manage-role') }}" aria-expanded="false">
                            <i className="nav-icon zmdi zmdi-account"></i>
                            <span className="nav-title">Manage User Role</span>
                        </a>
                    </li>
                    <li className="{{  Route::is('admin.manage-role') ? 'active' : ''  }}">
                        <a href="{{ route('admin.manage-role') }}" aria-expanded="false">
                            <i className="nav-icon zmdi zmdi-accounts"></i>
                            <span className="nav-title">Manage Teachers</span>
                        </a>
                    </li>
                    <li className="{{  Route::is('admin.manage-student') ? 'active' : ''  }}">
                        <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                            <i className="nav-icon zmdi zmdi-accounts"></i>
                            <span className="nav-title">Manage Students</span>
                        </a>
                        <ul aria-expanded="false">
                            <li className="active"><a href="{{ route('admin.manage-student') }}">Default</a></li>
                        </ul>
                    </li>
                    <li className="nav-static-title">Academic</li>
                    <li>
                        <a href="{{ route('admin.manage-role') }}" aria-expanded="false">
                            <i className="nav-icon ti ti-comment"></i>
                            <span className="nav-title">Manage E-Exam</span>
                        </a>
                    </li>
                    <li className="{{  Route::is('admin.manage-grade') ? 'active' : ''  }}">
                        <a href="{{ route('admin.manage-grade') }}" aria-expanded="false">
                            <i className="nav-icon ti ti-comment"></i>
                            <span className="nav-title">Manage Grade</span>
                        </a>
                    </li>
                    <li className="{{  Route::is('admin.manage-session') ? 'active' : ''  }}">
                        <a href="{{ route('admin.manage-academic-session') }}" aria-expanded="false">
                            <i className="nav-icon ti ti-comment"></i>
                            <span className="nav-title">Manage Academic Session</span>
                        </a>
                    </li>
                    <li className="{{  Route::is('admin.manage-class') ? 'active' : ''  }}">
                        <a href="{{ route('admin.manage-class') }}" aria-expanded="false">
                            <i className="nav-icon ti ti-comment"></i>
                            <span className="nav-title">Manage Class</span>
                        </a>
                    </li>
                    <li className="{{  Route::is('admin.manage-role') ? 'active' : ''  }}">
                        <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                            <i className="nav-icon ti ti-rocket"></i>
                            <span className="nav-title">Manage E-Result</span>
                        </a>
                        <ul aria-expanded="false">
                            <li className="active"><a href='index.html'>Default</a></li>
                        </ul>
                    </li>
                    <li className="{{  Route::is('admin.setting') ? 'active' : ''  }}">
                        <a href="{{ route('admin.setting') }}" aria-expanded="false">
                            <i className="nav-icon zmdi zmdi-settings"></i>
                            <span className="nav-title">Settings</span>
                        </a>
                    </li>
                    <li className="{{  Route::is('admin.profile') ? 'active' : ''  }}">
                        <a href="{{ route('admin.profile') }}" aria-expanded="false">
                            <i className="nav-icon zmdi zmdi-account"></i>
                            <span className="nav-title">Profile</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
