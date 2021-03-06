@include('partials.header')
@include('partials.nav')
<!-- begin app-container -->
<div class="app-container">
    @if(Auth::user()->role_id == 1 || Auth::user()->role_id == 2)
    @include('partials.sidebar.admin')
    @endif
    @if(Auth::user()->role_id == 3)
    @include('partials.sidebar.teacher')
    @endif
    @if(Auth::user()->role_id == 4)
    @include('partials.sidebar.student')
    @endif
    <!-- begin app-main -->
    <div class="app-main" id="main">
        <!-- begin container-fluid -->
        <div class="container-fluid">
            @include('partials.breadcrumb')
            <!-- Notification -->
            <!--<div class="row">
                <div class="col-md-12">
                    <div class="alert border-0 alert-primary bg-gradient m-b-30 alert-dismissible fade show border-radius-none" role="alert">
                        <strong>Holy guacamole!</strong> You should check in on some of those
                        fields below.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <i class="ti ti-close"></i>
                        </button>
                    </div>
                </div>
            </div>-->

            @yield('content')
            
        </div>
        <!-- end container-fluid -->
    </div>
    <!-- end app-main -->
</div>
<!-- end app-container -->
<!-- begin footer -->
@include('partials.footer')