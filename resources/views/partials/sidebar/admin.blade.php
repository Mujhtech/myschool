<!-- begin app-nabar -->
<aside class="app-navbar">
    <!-- begin sidebar-nav -->
    <div class="sidebar-nav scrollbar scroll_light">
        <ul class="metismenu " id="sidebarNav">
            <li>
                <a href="{{ url('/') }}" aria-expanded="false">
                    <i class="nav-icon ti ti-comment"></i>
                    <span class="nav-title">Dashboard</span>
                </a>
            </li>
            <li class="nav-static-title">Users</li>
            <li class="{{  Route::is('admin.manage-role') ? 'active' : ''  }}">
                <a href="{{ route('admin.manage-role') }}" aria-expanded="false">
                    <i class="nav-icon ti ti-comment"></i>
                    <span class="nav-title">Manage User Role</span>
                </a>
            </li>
            <li class="{{  Route::is('admin.manage-role') ? 'active' : ''  }}">
                <a href="{{ route('admin.manage-role') }}" aria-expanded="false">
                    <i class="nav-icon ti ti-comment"></i>
                    <span class="nav-title">Manage Teachers</span>
                </a>
            </li>
            <li class="{{  Route::is('admin.manage-student') ? 'active' : ''  }}">
                <a class="has-arrow" href="javascript:void(0)" aria-expanded="false">
                    <i class="nav-icon ti ti-rocket"></i>
                    <span class="nav-title">Manage Students</span>
                </a>
                <ul aria-expanded="false">
                    <li class="active"> <a href="{{ route('admin.manage-student') }}">Default</a> </li>
                </ul>
            </li>
            <li class="nav-static-title">Academic</li>
            <li>
                <a href="{{ route('admin.manage-role') }}" aria-expanded="false">
                    <i class="nav-icon ti ti-comment"></i>
                    <span class="nav-title">Manage E-Exam</span>
                </a>
            </li>
            <li class="{{  Route::is('admin.manage-grade') ? 'active' : ''  }}">
                <a href="{{ route('admin.manage-grade') }}" aria-expanded="false">
                    <i class="nav-icon ti ti-comment"></i>
                    <span class="nav-title">Manage Grade</span>
                </a>
            </li>
            <li class="{{  Route::is('admin.manage-session') ? 'active' : ''  }}">
                <a href="{{ route('admin.manage-academic-session') }}" aria-expanded="false">
                    <i class="nav-icon ti ti-comment"></i>
                    <span class="nav-title">Manage Academic Session</span>
                </a>
            </li>
            <li class="{{  Route::is('admin.manage-class') ? 'active' : ''  }}">
                <a href="{{ route('admin.manage-class') }}" aria-expanded="false">
                    <i class="nav-icon ti ti-comment"></i>
                    <span class="nav-title">Manage Class</span>
                </a>
            </li>
            <li class="{{  Route::is('admin.manage-role') ? 'active' : ''  }}">
                <a class="has-arrow" href="javascript:void(0)" aria-expanded="false">
                    <i class="nav-icon ti ti-rocket"></i>
                    <span class="nav-title">Manage E-Result</span>
                </a>
                <ul aria-expanded="false">
                    <li class="active"> <a href='index.html'>Default</a> </li>
                </ul>
            </li>
            <li class="{{  Route::is('admin.setting') ? 'active' : ''  }}">
                <a href="{{ route('admin.setting') }}" aria-expanded="false">
                    <i class="nav-icon ti ti-comment"></i>
                    <span class="nav-title">Settings</span>
                </a>
            </li>
            <li class="{{  Route::is('admin.profile') ? 'active' : ''  }}">
                <a href="{{ route('admin.profile') }}" aria-expanded="false">
                    <i class="nav-icon ti ti-comment"></i>
                    <span class="nav-title">Profile</span>
                </a>
            </li>


        </ul>
    </div>
    <!-- end sidebar-nav -->
</aside>
<!-- end app-navbar -->
