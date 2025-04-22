"use client";
import React, { Fragment } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";


function ForgotPwd() {

    
    return (
        <Fragment>
            <div className="sign-in-bg">
                <video autoPlay muted loop className="sign-in-video-bg">
                    <source src="/assets/images/video/two.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="sign-in-overlay"></div>

                <div className="app-wrapper d-block position-relative z-index-1">
                    <div className="main-container">
                        {/* Body main section starts */}
                        <div className="container">
                            <div className="row sign-in-content-bg">
                                <div className="col-lg-6 image-contentbox d-none d-lg-block">
                                    <div className="form-container ">
                                        <div className="signup-content mt-4">
                                            <span>
                                                <img alt="" className="img-fluid " src="../assets/images/logo/1.png" />
                                            </span>
                                        </div>
                                        <div className="signup-bg-img p-5">
                                            <img alt="" className="img-fluid" src="/assets/images/New/forgotpwd.svg" width={436} height={536} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 form-contentbox">
                                    <div className="form-container">
                                        <form className="app-form rounded-control">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-5 text-center text-lg-start">
                                                        <h2 className="text-white f-w-600">Reset Your Password</h2>
                                                        <p>Create a new password and sign in to admin</p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="password">New Password</label>
                                                        <input className="form-control" name="password" id="password" placeholder="Enter New Password" type="password" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="new_password">Confirm Password</label>
                                                        <input className="form-control" name="new_password" id="new_password" placeholder="Enter Your Password" type="password" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <a className="btn btn-light-primary w-100 text-white" href="/" role="button">Reset Password</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Body main section ends */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default ForgotPwd;
