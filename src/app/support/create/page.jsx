"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";


function Create() {


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
            <main className={`page-content px-4 py-4 ${isLoading ? 'pointer-events-none' : ''}`} style={{ opacity: isLoading ? 0.5 : 1 }}>
                <div className="container-fluid">
                    {/* Breadcrumb start */}
                    <div className="row m-1">
                            <div className="col-12">
                                <h4 className="main-title">Create Support Ticket </h4>
                                <ul className="app-line-breadcrumbs mb-3">
                                    <li>
                                        <a className="f-s-14 f-w-500" href="/support">
                                            <span>
                                                <i className="ph-duotone  ph-table f-s-16" /> Support
                                            </span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="f-s-14 f-w-500" href="#">Create Support Ticket</a>
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
                                            <div className="col-md-6">
                                                <label className="form-label" htmlFor="userName">Title</label>
                                                <input className="form-control" id="userName" name="userName" type="text" placeholder="Enter Title" />
                                                <div className="mt-1">
                                                    <span className="text-danger" id="userNameError" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <label className="form-label" htmlFor="Support">
                                                    Section
                                                </label>
                                                <select className="form-select" id="Support" required defaultValue="">
                                                    <option value="" disabled hidden>Select section</option>
                                                    <option>General Support</option>
                                                    <option>Technical Support</option>
                                                    <option>Account & Billing</option>
                                                </select>
                                                <div className="invalid-feedback">Please select a valid version.</div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <label className="form-label" htmlFor="service">
                                                    Affected service
                                                </label>
                                                <select className="form-select" id="service" required defaultValue="">
                                                    <option value="" disabled hidden>
                                                        Select section
                                                    </option>
                                                    <option value="general">General Support</option>
                                                    <option value="technical">Technical Support</option>
                                                    <option value="billing">Account & Billing</option>
                                                </select>

                                                <div className="invalid-feedback">Please select a valid version.</div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label" htmlFor="userName">Attachment</label>
                                                <input className="form-control" id="file" name="file" type="file" placeholder="Enter Title" />
                                                <div className="mt-1">
                                                    <span className="text-danger" id="userNameError" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label" htmlFor="address">Your Issue</label>
                                                <textarea className="form-control" id="address" placeholder="Describe Your Issue" type="text" />
                                                <div className="mt-1">
                                                    <span className="text-danger" id="addressError" />
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex gap-2">
                                                <Link className="btn btn-empty b-r-22" type="reset" value="Cancel" href="/support">Cancel</Link>
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
export default Create;
