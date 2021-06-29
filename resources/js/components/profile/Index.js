import React from "react";

export default function ProfileIndex() {
    return (
        <div className="row account-contant">
            <div className="col-12">
                <div className="card card-statistics">
                    <div className="card-body p-0">
                        <div className="row no-gutters">
                            <div className="col-xl-3 pb-xl-0 pb-5 border-right">
                                <div className="page-account-profil pt-5">
                                    <div className="profile-img text-center rounded-circle">
                                        <div className="pt-5">
                                            <div className="bg-img m-auto">
                                                <img
                                                    src="assets/img/avtar/01.jpg"
                                                    className="img-fluid"
                                                    alt="users-avatar"
                                                />
                                            </div>
                                            <div className="profile pt-4">
                                                <h4 className="mb-1">
                                                    Alice Williams
                                                </h4>
                                                <p>Enthusiast</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-5 profile-counter">
                                        <ul className="nav justify-content-center text-center">
                                            <li className="nav-item border-right px-3">
                                                <div>
                                                    <h4 className="mb-0">90</h4>
                                                    <p>Post</p>
                                                </div>
                                            </li>

                                            <li className="nav-item border-right px-3">
                                                <div>
                                                    <h4 className="mb-0">
                                                        1.5K
                                                    </h4>
                                                    <p>Messages</p>
                                                </div>
                                            </li>

                                            <li className="nav-item px-3">
                                                <div>
                                                    <h4 className="mb-0">
                                                        4.4K
                                                    </h4>
                                                    <p>Members</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="profile-btn text-center">
                                        <div>
                                            <button className="btn btn-light text-primary mb-2">
                                                Upload New Avatar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-md-6 col-12 border-t border-right">
                                <div className="page-account-form">
                                    <div className="form-titel border-bottom p-3">
                                        <h5 className="mb-0 py-2">
                                            Edit Your Personal Settings
                                        </h5>
                                    </div>
                                    <div className="p-4">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="name1">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name1"
                                                        value=""
                                                    />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="title1">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="title1"
                                                        value=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="add1">
                                                    Address
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="add1"
                                                    value=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="gridCheck"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="gridCheck"
                                                    >
                                                        I agree to receive email
                                                        notification.
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Update Information
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 border-t col-12">
                                <div className="page-account-form">
                                    <div className="form-titel border-bottom p-3">
                                        <h5 className="mb-0 py-2">
                                            Change Password
                                        </h5>
                                    </div>
                                    <div className="p-4">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Old Password:
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Confirm New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value=""
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Save
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
