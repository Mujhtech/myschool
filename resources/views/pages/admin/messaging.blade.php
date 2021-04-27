@extends('page')

@section('title', 'Messaging')

@section('breadcrum', 'Messaging')

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card card-statistics">
                <div class="card-body p-0">
                    <div class="row no-gutters">
                        <div class="col-xl-4 col-xxl-3">
                            <div class="app-chat-sidebar border-right border-md-n h-100">
                                <div class="app-chat-sidebar-search px-4 pb-4 pt-4 border-bottom">
                                    <div class="input-group">
                                        <input aria-describedby="basic-addon1" class="form-control border-right-0" placeholder="Search..." type="text">
                                        <div class="input-group-prepend">
                                                                <span class="input-group-text" id="basic-addon1">
                                                                        <i class="ti ti-search magnifier"></i>
                                                                    </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="app-chat-sidebar-user scrollbar scroll_dark mCustomScrollbar _mCS_3 mCS-autoHide" style="position: relative; overflow: visible;"><div id="mCSB_3" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" tabindex="0" style="max-height: 600px;"><div id="mCSB_3_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
                                            <div class="app-chat-sidebar-user-item">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex active">
                                                        <div>
                                                            <div class="bg-img">
                                                                <img class="img-fluid mCS_img_loaded" src="assets/img/avtar/01.jpg" alt="user">
                                                                <i class="bg-img-status bg-success"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 class="mb-0">Demian Leyon</h5>
                                                            <p class="text-white"><span><i class="zmdi zmdi-check mr-2"></i></span>I like you</p>
                                                            <div class="d-xl-none">
                                                                <small>Just now</small>
                                                                <span class="badge badge-success">5</span>
                                                            </div>
                                                        </div>
                                                        <div class="ml-auto text-right d-none d-xl-block">
                                                            <small>Just now</small>
                                                            <span class="badge badge-success">5</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div></div><div id="mCSB_3_scrollbar_vertical" class="mCSB_scrollTools mCSB_3_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical" style="display: block;"><div class="mCSB_draggerContainer"><div id="mCSB_3_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 50px; display: block; height: 505px; max-height: 566px; top: 0px;"><div class="mCSB_dragger_bar" style="line-height: 50px;"></div></div><div class="mCSB_draggerRail"></div></div></div></div>
                            </div>
                        </div>
                        <div class="col-xl-8 col-xxl-9 border-md-t">
                            <div class="app-chat-msg">
                                <div class="d-flex align-items-center justify-content-between p-3 px-4 border-bottom">
                                    <div class="app-chat-msg-title">
                                        <h4 class="mb-0">Demian Leyon</h4>
                                        <p class="text-success">
                                            Online
                                        </p>
                                    </div>
                                    <div class="app-chat-msg-btn">
                                        <a class="font-20 text-muted btn" href="javascript:void(0)">
                                            <i class="fa fa-video-camera"></i>
                                        </a>
                                        <a aria-expanded="false" aria-haspopup="true" class="font-20 text-muted btn pr-0" data-toggle="dropdown" href="javascript:void(0)">
                                            <i class="fa fa-gear"></i>
                                        </a>
                                        <div class="dropdown-menu custom-dropdown dropdown-menu-right p-4">
                                            <h6>Action</h6>
                                            <a class="dropdown-item" href="javascript:void(0)">
                                                <i class="ti ti-pencil pr-2"></i>Rename
                                            </a>
                                            <a class="dropdown-item" href="javascript:void(0)">
                                                <i class="ti ti-announcement pr-2"></i>Mark as Unread
                                            </a>
                                            <a class="dropdown-item" href="javascript:void(0)">
                                                <i class="ti ti-close pr-2"></i>Close
                                            </a>
                                            <a class="dropdown-item" href="javascript:void(0)">
                                                <i class="ti ti-trash pr-2"></i>Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="scrollbar scroll_dark app-chat-msg-chat p-4 mCustomScrollbar _mCS_4 mCS-autoHide" style="position: relative; overflow: visible;"><div id="mCSB_4" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" tabindex="0" style="max-height: 558px;"><div id="mCSB_4_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)" data-original-title="" title="">
                                                        <div class="bg-img">
                                                            <img class="img-fluid mCS_img_loaded" src="assets/img/avtar/01.jpg" alt="user">
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center py-4">
                                                <h6>30 May</h6>
                                            </div>
                                            <div class="chat chat-left justify-content-end">
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)" data-original-title="" title="">
                                                        <div class="bg-img">
                                                            <img class="img-fluid mCS_img_loaded" src="assets/img/avtar/01.jpg" alt="user">
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)" data-original-title="" title="">
                                                        <div class="bg-img">
                                                            <img class="img-fluid mCS_img_loaded" src="assets/img/avtar/01.jpg" alt="user">
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center py-4">
                                                <h6>06 Aug</h6>
                                            </div>
                                            <div class="chat chat-left justify-content-end">
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)" data-original-title="" title="">
                                                        <div class="bg-img">
                                                            <img class="img-fluid mCS_img_loaded" src="assets/img/avtar/01.jpg" alt="user">
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)" data-original-title="" title="">
                                                        <div class="bg-img">
                                                            <img class="img-fluid mCS_img_loaded" src="assets/img/avtar/01.jpg" alt="user">
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center py-4">
                                                <h6>20/07/2018</h6>
                                            </div>
                                            <div class="chat chat-left justify-content-end">
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)" data-original-title="" title="">
                                                        <div class="bg-img">
                                                            <img class="img-fluid mCS_img_loaded" src="assets/img/avtar/01.jpg" alt="user">
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)" data-original-title="" title="">
                                                        <div class="bg-img">
                                                            <img class="img-fluid mCS_img_loaded" src="assets/img/avtar/01.jpg" alt="user">
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text-center py-4">
                                                <h6>Today</h6>
                                            </div>
                                            <div class="chat chat-left justify-content-end">
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content">
                                                        <p>Hey John, I am looking for the best admin template.</p>
                                                        <p>Could you please help me to find it out?</p>
                                                    </div>
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat">
                                                <div class="chat-img">
                                                    <a data-placement="left" data-toggle="tooltip" href="javascript:void(0)" data-original-title="" title="">
                                                        <div class="bg-img">
                                                            <img class="img-fluid mCS_img_loaded" src="assets/img/avtar/01.jpg" alt="user">
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="chat-msg">
                                                    <div class="chat-msg-content ">
                                                        <p>It should be Bootstrap 4 compatible.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div id="mCSB_4_scrollbar_vertical" class="mCSB_scrollTools mCSB_4_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical" style="display: block;"><div class="mCSB_draggerContainer"><div id="mCSB_4_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 50px; display: block; height: 201px; max-height: 566px; top: 0px;"><div class="mCSB_dragger_bar" style="line-height: 50px;"></div></div><div class="mCSB_draggerRail"></div></div></div></div>
                            </div>
                            <div class="app-chat-type">
                                <div class="input-group mb-0 ">
                                    <div class="input-group-prepend d-none d-sm-flex">
                                                            <span class="input-group-text">
                                                                    <i class="fa fa-smile-o">
                                                                    </i>
                                                                </span>
                                    </div>
                                    <input class="form-control" placeholder="Type here..." type="text">
                                    <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                    <i class="fa fa-paper-plane"></i>
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
@endsection
