import React from "react";

export default function MessagingIndex() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card card-statistics">
                    <div className="card-body p-0">
                        <div className="row no-gutters">
                            <div className="col-xl-4 col-xxl-3">
                                <div className="app-chat-sidebar border-right border-md-n h-100">
                                    <div className="app-chat-sidebar-search px-4 pb-4 pt-4 border-bottom">
                                        <div className="input-group">
                                            <input
                                                aria-describedby="basic-addon1"
                                                className="form-control border-right-0"
                                                placeholder="Search..."
                                                type="text"
                                            />
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon1"
                                                >
                                                    <i className="ti ti-search magnifier"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="app-chat-sidebar-user scrollbar scroll_dark mCustomScrollbar _mCS_3 mCS-autoHide"
                                        style={{
                                            position: "relative",
                                            overflow: "visible",
                                        }}
                                    >
                                        <div
                                            id="mCSB_3"
                                            className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                            tabIndex="0"
                                            style={{ maxHeight: 600 + "px" }}
                                        >
                                            <div
                                                id="mCSB_3_container"
                                                className="mCSB_container"
                                                style={{
                                                    position: "relative",
                                                    top: 0,
                                                    left: 0,
                                                }}
                                                dir="ltr"
                                            >
                                                <div className="app-chat-sidebar-user-item">
                                                    <a href="javascript:void(0)">
                                                        <div className="d-flex active">
                                                            <div>
                                                                <div className="bg-img">
                                                                    <img
                                                                        className="img-fluid mCS_img_loaded"
                                                                        src="assets/img/avtar/01.jpg"
                                                                        alt="user"
                                                                    />
                                                                    <i className="bg-img-status bg-success"></i>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-0">
                                                                    Demian Leyon
                                                                </h5>
                                                                <p className="text-white">
                                                                    <span>
                                                                        <i className="zmdi zmdi-check mr-2"></i>
                                                                    </span>
                                                                    I like you
                                                                </p>
                                                                <div className="d-xl-none">
                                                                    <small>
                                                                        Just now
                                                                    </small>
                                                                    <span className="badge badge-success">
                                                                        5
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-auto text-right d-none d-xl-block">
                                                                <small>
                                                                    Just now
                                                                </small>
                                                                <span className="badge badge-success">
                                                                    5
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="app-chat-sidebar-user-item">
                                                    <a href="javascript:void(0)">
                                                        <div className="d-flex">
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/02.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-0">
                                                                    Jennyns
                                                                    Leyon
                                                                </h5>
                                                                <p>
                                                                    <span>
                                                                        <i className="zmdi zmdi-check mr-2"></i>
                                                                    </span>
                                                                    How are you
                                                                </p>
                                                                <small className="d-xl-none">
                                                                    yesterday
                                                                </small>
                                                            </div>
                                                            <div className="ml-auto text-right d-none d-xl-block">
                                                                <small>
                                                                    yesterday
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="app-chat-sidebar-user-item">
                                                    <a href="javascript:void(0)">
                                                        <div className="d-flex">
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/03.jpg"
                                                                    alt="user"
                                                                />
                                                                <i className="bg-img-status bg-success"></i>
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-0">
                                                                    Smithmin
                                                                    Leyon{" "}
                                                                </h5>
                                                                <p>
                                                                    <span>
                                                                        <i className="zmdi zmdi-check-all mr-2"></i>
                                                                    </span>
                                                                    Thanks
                                                                </p>
                                                                <div className="d-xl-none">
                                                                    <small>
                                                                        30 Aug
                                                                    </small>
                                                                    <span className="badge badge-success">
                                                                        35
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-auto text-right d-none d-xl-block">
                                                                <small>
                                                                    30 Aug
                                                                </small>
                                                                <span className="badge badge-success">
                                                                    35
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="app-chat-sidebar-user-item">
                                                    <a href="javascript:void(0)">
                                                        <div className="d-flex">
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/04.jpg"
                                                                    alt="user"
                                                                />
                                                                <i className="bg-img-status bg-danger"></i>
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-0">
                                                                    Brianing
                                                                    Leyon
                                                                </h5>
                                                                <p>
                                                                    <span>
                                                                        <i className="zmdi zmdi-check mr-2"></i>
                                                                    </span>{" "}
                                                                    You will
                                                                    sail along
                                                                    until you...
                                                                </p>
                                                                <div className="d-xl-none">
                                                                    <small>
                                                                        25 Aug
                                                                    </small>{" "}
                                                                    <span className="badge badge-success">
                                                                        15
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-auto text-right d-none d-xl-block">
                                                                <small>
                                                                    25 Aug
                                                                </small>{" "}
                                                                <span className="badge badge-success">
                                                                    15
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="app-chat-sidebar-user-item">
                                                    <a href="javascript:void(0)">
                                                        <div className="d-flex">
                                                            <div>
                                                                <div className="bg-img">
                                                                    <img
                                                                        className="img-fluid mCS_img_loaded"
                                                                        src="assets/img/avtar/05.jpg"
                                                                        alt="user"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-0">
                                                                    Adrianing
                                                                    Leyon
                                                                </h5>
                                                                <p>
                                                                    <span>
                                                                        <i className="zmdi zmdi-check mr-2"></i>
                                                                    </span>
                                                                    Hi...
                                                                </p>
                                                                <small className="d-xl-none">
                                                                    20 Aug
                                                                </small>
                                                            </div>
                                                            <div className="ml-auto text-right d-none d-xl-block">
                                                                <small>
                                                                    20 Aug
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="app-chat-sidebar-user-item">
                                                    <a href="javascript:void(0)">
                                                        <div className="d-flex">
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/06.jpg"
                                                                    alt="user"
                                                                />
                                                                <i className="bg-img-status bg-success"></i>
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-0">
                                                                    Garydmi
                                                                    Leyon
                                                                </h5>
                                                                <p>
                                                                    <span>
                                                                        <i className="zmdi zmdi-check-all mr-2"></i>
                                                                    </span>
                                                                    Thanks
                                                                </p>
                                                                <div className="d-xl-none">
                                                                    <small>
                                                                        15 Aug
                                                                    </small>
                                                                    <span className="badge badge-success">
                                                                        45
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-auto text-right d-none d-xl-block">
                                                                <small>
                                                                    15 Aug
                                                                </small>
                                                                <span className="badge badge-success">
                                                                    45
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="app-chat-sidebar-user-item">
                                                    <a href="javascript:void(0)">
                                                        <div className="d-flex">
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/07.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-0">
                                                                    Andrewvi
                                                                    Leyon
                                                                </h5>
                                                                <p>
                                                                    <span>
                                                                        <i className="zmdi zmdi-check mr-2"></i>
                                                                    </span>
                                                                    Hello...
                                                                </p>
                                                                <div className="d-xl-none">
                                                                    <small>
                                                                        06 Aug
                                                                    </small>
                                                                    <span className="badge badge-success">
                                                                        99+
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-auto text-right d-none d-xl-block">
                                                                <small>
                                                                    06 Aug
                                                                </small>
                                                                <span className="badge badge-success">
                                                                    99+
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="app-chat-sidebar-user-item">
                                                    <a href="javascript:void(0)">
                                                        <div className="d-flex">
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/08.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-0">
                                                                    Brainjon
                                                                    Leyon
                                                                </h5>
                                                                <p>
                                                                    <span>
                                                                        <i className="zmdi zmdi-check mr-2"></i>
                                                                    </span>
                                                                    So, make the
                                                                    decision...
                                                                </p>
                                                                <small className="d-xl-none">
                                                                    30 May
                                                                </small>
                                                            </div>
                                                            <div className="ml-auto text-right d-none d-xl-block">
                                                                <small>
                                                                    30 May
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="app-chat-sidebar-user-item">
                                                    <a href="javascript:void(0)">
                                                        <div className="d-flex">
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/09.jpg"
                                                                    alt="user"
                                                                />
                                                                <i className="bg-img-status bg-danger"></i>
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-0">
                                                                    Jimmyimg
                                                                    Leyon
                                                                </h5>
                                                                <p>
                                                                    <span>
                                                                        <i className="zmdi zmdi-check-all mr-2"></i>
                                                                    </span>
                                                                    Okay
                                                                </p>
                                                                <div className="d-xl-none">
                                                                    <small>
                                                                        30 May
                                                                    </small>
                                                                    <span className="badge badge-success">
                                                                        25
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="ml-auto text-right d-none d-xl-block">
                                                                <small>
                                                                    30 May
                                                                </small>
                                                                <span className="badge badge-success">
                                                                    25
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="mCSB_3_scrollbar_vertical"
                                            className="mCSB_scrollTools mCSB_3_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                            style={{ display: "block" }}
                                        >
                                            <div className="mCSB_draggerContainer">
                                                <div
                                                    id="mCSB_3_dragger_vertical"
                                                    className="mCSB_dragger"
                                                    style={{
                                                        position: "absolute",
                                                        minHeight: 50 + "px",
                                                        display: "block",
                                                        height: 505 + "px",
                                                        maxHeight: 566 + "px",
                                                        top: 0 + "px",
                                                    }}
                                                >
                                                    <div
                                                        className="mCSB_dragger_bar"
                                                        style={{
                                                            lineHeight:
                                                                50 + "px",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="mCSB_draggerRail"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-xxl-9 border-md-t">
                                <div className="app-chat-msg">
                                    <div className="d-flex align-items-center justify-content-between p-3 px-4 border-bottom">
                                        <div className="app-chat-msg-title">
                                            <h4 className="mb-0">
                                                Demian Leyon
                                            </h4>
                                            <p className="text-success">
                                                Online
                                            </p>
                                        </div>
                                        <div className="app-chat-msg-btn">
                                            <a
                                                className="font-20 text-muted btn"
                                                href="javascript:void(0)"
                                            >
                                                <i className="fa fa-video-camera"></i>
                                            </a>
                                            <a
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                                className="font-20 text-muted btn pr-0"
                                                data-toggle="dropdown"
                                                href="javascript:void(0)"
                                            >
                                                <i className="fa fa-gear"></i>
                                            </a>
                                            <div className="dropdown-menu custom-dropdown dropdown-menu-right p-4">
                                                <h6>Action</h6>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0)"
                                                >
                                                    <i className="ti ti-pencil pr-2"></i>
                                                    Rename
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0)"
                                                >
                                                    <i className="ti ti-announcement pr-2"></i>
                                                    Mark as Unread
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0)"
                                                >
                                                    <i className="ti ti-close pr-2"></i>
                                                    Close
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="javascript:void(0)"
                                                >
                                                    <i className="ti ti-trash pr-2"></i>
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="scrollbar scroll_dark app-chat-msg-chat p-4 mCustomScrollbar _mCS_4 mCS-autoHide"
                                        style={{
                                            position: "relative",
                                            overflow: "visible",
                                        }}
                                    >
                                        <div
                                            id="mCSB_4"
                                            className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                                            tabIndex="0"
                                            style={{ maxHeight: 558 + "px" }}
                                        >
                                            <div
                                                id="mCSB_4_container"
                                                className="mCSB_container"
                                                style={{
                                                    position: "relative",
                                                    top: 0,
                                                    left: 0,
                                                }}
                                                dir="ltr"
                                            >
                                                <div className="chat">
                                                    <div className="chat-img">
                                                        <a
                                                            data-placement="left"
                                                            data-toggle="tooltip"
                                                            href="javascript:void(0)"
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/01.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content">
                                                            <p>
                                                                Hey John, I am
                                                                looking for the
                                                                best admin
                                                                template.
                                                            </p>
                                                            <p>
                                                                Could you please
                                                                help me to find
                                                                it out?
                                                            </p>
                                                        </div>
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center py-4">
                                                    <h6>30 May</h6>
                                                </div>
                                                <div className="chat chat-left justify-content-end">
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content">
                                                            <p>
                                                                Hey John, I am
                                                                looking for the
                                                                best admin
                                                                template.
                                                            </p>
                                                            <p>
                                                                Could you please
                                                                help me to find
                                                                it out?
                                                            </p>
                                                        </div>
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-img">
                                                        <a
                                                            data-placement="left"
                                                            data-toggle="tooltip"
                                                            href="javascript:void(0)"
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/01.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-img">
                                                        <a
                                                            data-placement="left"
                                                            data-toggle="tooltip"
                                                            href="javascript:void(0)"
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/01.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content">
                                                            <p>
                                                                Hey John, I am
                                                                looking for the
                                                                best admin
                                                                template.
                                                            </p>
                                                            <p>
                                                                Could you please
                                                                help me to find
                                                                it out?
                                                            </p>
                                                        </div>
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center py-4">
                                                    <h6>06 Aug</h6>
                                                </div>
                                                <div className="chat chat-left justify-content-end">
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content">
                                                            <p>
                                                                Hey John, I am
                                                                looking for the
                                                                best admin
                                                                template.
                                                            </p>
                                                            <p>
                                                                Could you please
                                                                help me to find
                                                                it out?
                                                            </p>
                                                        </div>
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-img">
                                                        <a
                                                            data-placement="left"
                                                            data-toggle="tooltip"
                                                            href="javascript:void(0)"
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/01.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-img">
                                                        <a
                                                            data-placement="left"
                                                            data-toggle="tooltip"
                                                            href="javascript:void(0)"
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/01.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content">
                                                            <p>
                                                                Hey John, I am
                                                                looking for the
                                                                best admin
                                                                template.
                                                            </p>
                                                            <p>
                                                                Could you please
                                                                help me to find
                                                                it out?
                                                            </p>
                                                        </div>
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center py-4">
                                                    <h6>20/07/2018</h6>
                                                </div>
                                                <div className="chat chat-left justify-content-end">
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content">
                                                            <p>
                                                                Hey John, I am
                                                                looking for the
                                                                best admin
                                                                template.
                                                            </p>
                                                            <p>
                                                                Could you please
                                                                help me to find
                                                                it out?
                                                            </p>
                                                        </div>
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-img">
                                                        <a
                                                            data-placement="left"
                                                            data-toggle="tooltip"
                                                            href="javascript:void(0)"
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/01.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-img">
                                                        <a
                                                            data-placement="left"
                                                            data-toggle="tooltip"
                                                            href="javascript:void(0)"
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/01.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content">
                                                            <p>
                                                                Hey John, I am
                                                                looking for the
                                                                best admin
                                                                template.
                                                            </p>
                                                            <p>
                                                                Could you please
                                                                help me to find
                                                                it out?
                                                            </p>
                                                        </div>
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center py-4">
                                                    <h6>Today</h6>
                                                </div>
                                                <div className="chat chat-left justify-content-end">
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content">
                                                            <p>
                                                                Hey John, I am
                                                                looking for the
                                                                best admin
                                                                template.
                                                            </p>
                                                            <p>
                                                                Could you please
                                                                help me to find
                                                                it out?
                                                            </p>
                                                        </div>
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat">
                                                    <div className="chat-img">
                                                        <a
                                                            data-placement="left"
                                                            data-toggle="tooltip"
                                                            href="javascript:void(0)"
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            <div className="bg-img">
                                                                <img
                                                                    className="img-fluid mCS_img_loaded"
                                                                    src="assets/img/avtar/01.jpg"
                                                                    alt="user"
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="chat-msg">
                                                        <div className="chat-msg-content ">
                                                            <p>
                                                                It should be
                                                                Bootstrap 4
                                                                compatible.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="mCSB_4_scrollbar_vertical"
                                            className="mCSB_scrollTools mCSB_4_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                                            style={{ display: "block" }}
                                        >
                                            <div className="mCSB_draggerContainer">
                                                <div
                                                    id="mCSB_4_dragger_vertical"
                                                    className="mCSB_dragger"
                                                    style={{
                                                        position: "absolute",
                                                        minHeight: 50 + "px",
                                                        display: "block",
                                                        height: 201 + "px",
                                                        maxHeight: 566 + "px",
                                                        top: 0 + "px",
                                                    }}
                                                >
                                                    <div
                                                        className="mCSB_dragger_bar"
                                                        style={{
                                                            lineHeight:
                                                                50 + "px",
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="mCSB_draggerRail"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="app-chat-type">
                                    <div className="input-group mb-0 ">
                                        <div className="input-group-prepend d-none d-sm-flex">
                                            <span className="input-group-text">
                                                <i className="fa fa-smile-o"></i>
                                            </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            placeholder="Type here..."
                                            type="text"
                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-paper-plane"></i>
                                            </span>
                                        </div>
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
