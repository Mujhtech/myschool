@extends('page')

@section('title', 'Profile')

@section('breadcrum', 'Profile')

@section('content')
<div class="row account-contant">
    <div class="col-12">
        <div class="card card-statistics">
            <div class="card-body p-0">
                <div class="row no-gutters">
                    <div class="col-xl-3 pb-xl-0 pb-5 border-right">
                        <div class="page-account-profil pt-5">
                            <div class="profile-img text-center rounded-circle">
                                <div class="pt-5">
                                    <div class="bg-img m-auto">
                                        <img src="assets/img/avtar/01.jpg" class="img-fluid" alt="users-avatar">
                                    </div>
                                    <div class="profile pt-4">
                                        <h4 class="mb-1">Alice Williams</h4>
                                        <p>Enthusiast</p>
                                    </div>
                                </div>
                            </div>
                            <div class="profile-btn text-center">
                                <div><button class="btn btn-light text-primary mb-2">Upload New Avatar</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-6 col-12 border-t border-right">
                        <div class="page-account-form">
                            <div class="form-titel border-bottom p-3">
                                <h5 class="mb-0 py-2">Edit Your Personal Information</h5>
                            </div>
                            <div class="p-4">
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                            <label for="title1">Title</label>
                                            <select class="form-control">
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="Miss">Miss</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-9">
                                            <label for="name1">Full Name</label>
                                            <input type="text" class="form-control" id="name1" value="Alice Williams">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="phone1">Phone Number</label>
                                            <input type="text" class="form-control" id="phone1" value="">
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="email1">Email</label>
                                            <input type="email" class="form-control" id="email1" value="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="add1">Address</label>
                                        <input type="text" class="form-control" id="add1" value="">
                                    </div>

                                    <div class="form-row">
                                        <div class="col-12">
                                            <label class="mb-1">Date of birth</label>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <input type="date" class="form-control"> 
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="">City</label>
                                            <input type="text" class="form-control">  
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="">State</label>
                                            <input type="text" class="form-control">   
                                        </div>
                                       
                                    </div>
                                    <button type="submit" class="btn btn-primary">Update Information</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-6 border-t col-12">
                        <div class="page-account-form">
                            <div class="form-titel border-bottom p-3">
                                <h5 class="mb-0 py-2">Change password</h5>
                            </div>
                            <div class="p-4">
                                <form>
                                    <div class="form-group">
                                        <label for="">Previous password</label>
                                        <input type="text" class="form-control" id="" value="">
                                    </div>
                                    <div class="form-group">
                                        <label for="">New Password:</label>
                                        <input type="text" class="form-control" id="" value="">
                                    </div>

                                    <div class="form-group">
                                        <label for="">Confirm new password:</label>
                                        <input type="text" class="form-control" id="" value="">
                                    </div>

                                    <button type="submit" class="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
