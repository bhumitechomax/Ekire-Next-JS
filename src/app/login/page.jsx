"use client";
import React, { Fragment } from "react";
import Link from "next/link";


function Login() {

    
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
                                            <img alt="" className="img-fluid" src="/assets/images/New/login.svg" width={436} height={536} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 form-contentbox">
                                    <div className="form-container">
                                        <form className="app-form rounded-control">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-5 text-center text-lg-start">
                                                        <h2 className="text-white f-w-600">Welcome To axelit! </h2>
                                                        <p>Sign in with your data that you enterd during your registration</p>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="email">Email</label>
                                                        <input className="form-control" name="email" id="email" placeholder="Enter Your email" type="email" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <Link className="link-white float-end" href="/forgot_pwd" >Forgot Password ?</Link>
                                                        <input className="form-control" name="password" id="password" placeholder="Enter Your Password" type="password" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check mb-3 d-flex align-items-center gap-2">
                                                        <input className="form-check-input" id="checkDefault" type="checkbox" defaultValue />
                                                        <label className="form-check-label text-white" htmlFor="checkDefault">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <a className="btn btn-light-white w-100" href="/" role="button">Sign
                                                            In</a>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="text-center text-white text-lg-start">
                                                        Don't Have Your Account yet? <a className="link-white text-decoration-underline" href="/signup ">
                                                            Sign up</a>
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
export default Login;
