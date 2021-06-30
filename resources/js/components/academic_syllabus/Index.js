import React from "react";

export default function AcademicSyllabusIndex() {
    return (
        <div className="col-xl-12 col-xxl-12 m-b-30">
            <div className="card card-statistics h-100 mb-0 widget-downloads-list">
                <div className="card-header d-flex justify-content-between">
                    <div className="card-heading">
                        <div className="card-heading">
                            <h4 className="card-title">Downloads Files</h4>
                        </div>
                    </div>
                </div>
                <div
                    className="card-body scrollbar scroll_dark mCustomScrollbar _mCS_5 mCS-autoHide"
                    style={{position: 'relative', overflow: 'visible'}}
                >
                    <div
                        id="mCSB_5"
                        className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                        tabindex="0"
                        style={{maxHeight: 'none'}}
                    >
                        <div
                            id="mCSB_5_container"
                            className="mCSB_container"
                            style={{position: 'relative', top: 0+'px', left: 0+'px',}}
                            dir="ltr"
                        >
                            <div className="widget-text">
                                <div className="media align-items-center">
                                    <img
                                        src="assets/img/file-icon/doc.png"
                                        className="img-fluid mCS_img_loaded"
                                        alt="doc"
                                    />
                                    <div className="media-body">
                                        <h4 className="mb-0 ml-3">
                                            Mentor_demo.doc
                                        </h4>
                                    </div>
                                    <div>
                                        <a
                                            href={void 0}
                                            className="btn btn-icon btn-round btn-outline-success"
                                        >
                                            <i className="ti ti-download"></i>
                                        </a>
                                        <a
                                            href={void 0}
                                            className="btn btn-icon btn-round btn-outline-danger ml-2"
                                        >
                                            <i className="ti ti-close"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="widget-text">
                                <div className="media align-items-center">
                                    <img
                                        src="assets/img/file-icon/exe.png"
                                        className="img-fluid mCS_img_loaded"
                                        alt="exe"
                                    />
                                    <div className="media-body">
                                        <h4 className="mb-0 ml-3">
                                            Mentor_demo.exe
                                        </h4>
                                    </div>
                                    <div>
                                        <a
                                            href={void 0}
                                            className="btn btn-icon btn-round btn-outline-success"
                                        >
                                            <i className="ti ti-download"></i>
                                        </a>
                                        <a
                                            href={void 0}
                                            className="btn btn-icon btn-round btn-outline-danger ml-2"
                                        >
                                            <i className="ti ti-close"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="mCSB_5_scrollbar_vertical"
                        className="mCSB_scrollTools mCSB_5_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
                        style={{display: 'block'}}
                    >
                        <div className="mCSB_draggerContainer">
                            <div
                                id="mCSB_5_dragger_vertical"
                                className="mCSB_dragger"
                                style={{position: 'absolute', minHeight: 50 + 'px', display: 'block', height: 374+'px', maxheight: 416+'px', top: 0+'px'}}
                            >
                                <div
                                    className="mCSB_dragger_bar"
                                    style={{lineHeight: 50+'px'}}
                                ></div>
                            </div>
                            <div className="mCSB_draggerRail"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
