@extends('page')

@section('title', 'Table')

@section('breadcrum', 'Table')

@section('content')
<div class="row">
    <div class="col-12">
        <div class="card card-statistics clients-contant">
            <div class="card-header">
                <div class="d-xxs-flex justify-content-between align-items-center">
                    <div class="card-heading">
                        <h4 class="card-title">User Role</h4>
                    </div>
                    <div class="mt-xxs-0 mt-3 btn-group btn-group-toggle" data-toggle="modal" data-target="#addRole">
                        <label class="btn btn-sm btn-round  btn-primary">
                            Add New Role
                        </label>
                    </div>
                </div>
            </div>
            <div class="card-body py-0 table-responsive">
                <table class="table clients-contant-table mb-0">
                    <thead>
                        <tr>
                            <th scope="col">Role</th>
                            <th scope="col">Edit &amp; Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Admin</td>
                            <td>
                                <a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0 "><i class="ti ti-pencil"></i></a>
                                <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>Admin</td>
                            <td>
                                <a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0 "><i class="ti ti-pencil"></i></a>
                                <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>Admin</td>
                            <td>
                                <a href="javascript:void(0)" class="btn btn-icon btn-outline-primary btn-round mr-2 mb-2 mb-sm-0 "><i class="ti ti-pencil"></i></a>
                                <a href="javascript:void(0)" class="btn btn-icon btn-outline-danger btn-round"><i class="ti ti-close"></i></a>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div> 
@endsection

@include('layout.modal', ['modalId' => 'addRole', 'modalTitle' => 'Add Role'])
@push('modalContent')
    <script>
            // Your custom JavaScript...
    </script>
@endpush