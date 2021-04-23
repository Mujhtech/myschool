@extends('layout.auth')

@section('title', 'Locked Screen')

@section('content')
<div class="bg-img">
	<img src="{{ Auth::user()->getProfileUser() }}" class="img-fluid" alt="Clients-01">
</div>
<h4 class="mt-4">{{ Auth::user()->fullname }}</h4>
<span class="mt-1"><i class="fa fa-lock"></i> Locked</span>
<p class="mt-4 mb-0">You must enter your password to access</p>
<livewire:locked />
<p class="mt-4 mb-0">Or sign in as a <a class="text-primary" href="{{ route('auth.login') }}">Different user</a></p>

@endsection
