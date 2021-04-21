@extends('layout.auth')

@section('title', 'Locked Screen')

@section('content')
<div class="bg-img">
	<img src="assets/img/avtar/01.jpg" class="img-fluid" alt="Clients-01">
</div>
<h4 class="mt-4">Michael Bean</h4>
<span class="mt-1"><i class="fa fa-lock"></i> Locked</span>
<p class="mt-4 mb-0">You must enter your password to access admin screen</p>
<div class="input-group my-3">
	<input type="text" class="form-control" placeholder="Enter Password" aria-label="" aria-describedby="basic-addon2">
	<div class="input-group-append">
		<span class="input-group-text" id="basic-addon2"><i class="fa fa-unlock"></i></span>
	</div>
</div>
<p class="mt-4 mb-0">Or sign in as a <a class="text-primary" href="{{ route('auth.login') }}">Different user</a></p>

@endsection
