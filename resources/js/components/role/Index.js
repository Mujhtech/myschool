import React from "react";
import { Link } from "react-router-dom";

export default function RoleIndex() {
    return (
        <div classNameName="row">
            <div className="col-12 col-lg-12">
                <div className="card card-statistics">
                    <div className="card-header">
                        <div className="card-heading">
                            <h4 className="card-title">Roles</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Admin</td>
                                        <td>
                                            <Link to="/roles"  class="btn btn-icon btn-round btn-success" title="Delete">
                                                <i class="fa fa-trash"></i>
                                            </Link>
                                            <Link to="/roles"  class="btn btn-icon btn-round btn-primary" title="Delete">
                                                <i class="fa fa-trash"></i>
                                            </Link>
                                            <Link to="/roles"  class="btn btn-icon btn-round btn-danger" title="Delete">
                                                <i class="fa fa-trash"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
