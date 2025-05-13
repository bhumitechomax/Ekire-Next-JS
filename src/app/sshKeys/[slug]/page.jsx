"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";


function ViewPage() {

    
    const params = useParams();
    const id = params.slug;


    

    // auto load
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Fragment>
            <div className="position-relative">
                {/* Overlay loader */}
                {isLoading && (
                    <div
                        className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            background: 'var(--bodybg-color)',
                            zIndex: 1000,
                        }}
                    >
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                <main>
                    <div className="container-fluid">
                        {/* Breadcrumb start */}
                        <div className="row m-1">
                            <div className="col-12">
                                <h4 className="main-title">Edit SSH Key {sshKeys || ""} </h4>
                                <ul className="app-line-breadcrumbs mb-3">
                                    <li>
                                        <a className="f-s-14 f-w-500" href="/sshKeys">
                                            <span>
                                                <i className="ph-duotone  ph-table f-s-16" /> My SSH Keys
                                            </span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="f-s-14 f-w-500" href="#">Edit SSH Key</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        {/* Breadcrumb end */}

                        {/* Projects start */}
                        <div className="row">
                            <div className="col-12">

                                <div className="content-wrapper" id="card-container">
                                    <div className="card">
                                        <div className="card-body">
                                            <form className="row g-3 app-form rounded-control" id="form-validation">
                                                <div className="col-md-12">
                                                    <label className="form-label" htmlFor="userName">Name</label>
                                                    <input className="form-control" id="userName" name="userName" type="text" />
                                                    <div className="mt-1">
                                                        <span className="text-danger" id="userNameError" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label" htmlFor="address">SSH Key</label>
                                                    <textarea className="form-control" id="address" placeholder="Enter SSH Key Value" type="text" />
                                                    <div className="mt-1">
                                                        <span className="text-danger" id="addressError" />
                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex gap-2">
                                                    {/* <button className="btn btn-light-danger btn-md"  type="button">
                                                    Click Now
                                                </button> */}
                                                    <button className="btn btn-danger-light b-r-22 d-flex align-items-center gap-1" id="click_12" type="button" value="Submit"><i className="ph-bold  ph-trash-simple" /> Delete</button>
                                                    <Link className="btn btn-empty b-r-22" type="reset" value="Cancel" href="/sshKeys">Cancel</Link>
                                                    <button className="btn btn-primary b-r-22" type="submit" value="Submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Projects end */}


                    </div>

                </main>
            </div>
        </Fragment>
    );
}
export default ViewPage;
