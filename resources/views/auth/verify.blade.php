@extends('layout.auth')

@section('title', 'New Password')

@section('content')
<p>Welcome back, please verify your account.</p>
<form action="" class="mt-2 mt-sm-5">
    <div class="row">
        <div class="col-12">
            <div class="form-group">
                <label class="control-label">Email Address*</label>
                <input type="text" class="form-control" placeholder="Username" />
            </div>
        </div>
        <div class="col-12 mt-3">
            <a href="index.html" class="btn btn-primary text-uppercase">Change password</a>
        </div>
    </div>
</form>

@endsection