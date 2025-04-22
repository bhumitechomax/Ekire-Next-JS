"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";


function Project() {

    const [activeTab, setActiveTab] = useState(1);

    const projects = 1;

    console.log(projects);


    // auto load
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            // Simulate loading
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 3000);
            return () => clearTimeout(timer);
        }, []);

    // to load datatable
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //       const tables = $(".datatable").map(function () {
    //         return $(this).DataTable();
    //       });
      
    //       return () => {
    //         tables.each(function () {
    //           this.destroy();
    //         });
    //       };
    //     }
    // }, []);
      
      

    return (
        <Fragment>
            <div className="position-relative">
                {/* Overlay loader */}
                {isLoading && (
                    <div
                        className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            background: '#f6f6f6',
                            zIndex: 1000,
                        }}
                    >
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

                {/* Always rendered page content */}
                <main className={`page-content px-4 py-4 ${isLoading ? 'pointer-events-none' : ''}`} style={{ opacity: isLoading ? 0.5 : 1 }}>
                    <div className="container-fluid">
                        {/* Breadcrumb start */}
                        <div className="row m-1">
                            <div className="col-12 ">
                                <h4 className="main-title">Projects</h4>
                            </div>
                        </div>
                        {/* Breadcrumb end */}

                        {/* Projects start */}
                        <div className="row">
                            <div className="col-12">

                                <div className="tab-wrapper mb-3">
                                    <ul className="tabs">
                                        <li
                                            className={`tab-link ${activeTab === 1 ? "active" : ""}`}
                                            onClick={() => setActiveTab(1)}
                                        >
                                            <i className="ph-bold  ph-align-right f-s-18" /> My Projects
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            <i className="ph-fill ph-list-bullets f-s-18" /> Collaborative Projects
                                        </li>
                                        <li className="ms-auto d-flex">
                                            <div className="text-end">
                                                <button className="btn btn-dark-11 h-45 icon-btn m-2" data-bs-target="#projectCard1" data-bs-toggle="modal">
                                                    <i className="ti ti-plus f-s-18" /> Join a Project
                                                </button>
                                            </div>
                                            <div className="text-end">
                                                <button className="btn btn-primary h-45 icon-btn m-2" data-bs-target="#projectCard2" data-bs-toggle="modal">
                                                    <i className="iconoir-open-new-window f-s-18" />  Create New Project
                                                </button>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div className="content-wrapper" id="card-container">
                                    <div className={`tabs-content ${activeTab === 1 ? "active" : ""}`} id="tab-1">
                                        <div className="card">
                                            <div className="card-body p-0">
                                                <div className="app-datatable-default overflow-auto">
                                                    <table className="datatable display app-data-table default-data-table" id="example">
                                                        <thead>
                                                            <tr>
                                                                <th>Date</th>
                                                                <th>IP</th>
                                                                <th>OS</th>
                                                                <th>Country</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>9/22/2024</td>
                                                                <td>192.168.1.1</td>
                                                                <td>macOS</td>
                                                                <td>Canada</td>
                                                                <td className="d-flex"><Link href={`/project/${projects}`}><span className="badge text-light-success d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td>9/19/2024</td>
                                                                <td>192.168.1.4</td>
                                                                <td>Windows 11</td>
                                                                <td>UK</td>
                                                                <td className="d-flex"><Link href={`/project/${projects}`}><span className="badge text-light-success d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`tabs-content ${activeTab === 2 ? "active" : ""}`} id="tab-2">
                                        <div className="card">
                                            <div className="card-body p-0">
                                                <div className="app-datatable-default overflow-auto">
                                                    <table className="datatable display app-data-table default-data-table" id="example1">
                                                        <thead>
                                                            <tr>
                                                                <th>name</th>
                                                                <th>created at</th>
                                                                <th>members count</th>
                                                                <th>servers count</th>
                                                                <th>action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>My New Project50</td>
                                                                <td>2024-11-29</td>
                                                                <td>1</td>
                                                                <td>0</td>
                                                                <td className="d-flex"><Link href=""><span className="badge text-light-success d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dr. Burnice Larson</td>
                                                                <td>2024-12-24</td>
                                                                <td>5</td>
                                                                <td>0</td>
                                                                <td className="d-flex"><Link href=""><span className="badge text-light-success d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Projects end */}


                    </div>

                    {/* modal 1 */}
                    <div aria-hidden="true" aria-labelledby="projectCardLabel" className="modal fade" id="projectCard1" tabIndex={-1}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="d-flex align-items-center gap-2">
                                        <h1 className="modal-title fs-5" id="projectCardLabel">Join a Project </h1>
                                        <iconify-icon icon="line-md:arrow-right-square" className="f-s-22" style={{ color: "#e5484d" }} />
                                    </div>

                                    <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                                </div>
                                <div className="modal-body">
                                    <form className="app-form">
                                        <div className="mb-3">
                                            <div className="input-group">
                                                <span className="input-group-text" id="inputGroupPrepend2"><i className="ph-fill  ph-copy" /></span>
                                                <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="Enter Invitation Code" required="" type="text" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Cancel</button>
                                    <button className="btn btn-primary" id="addCard" type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal 2 */}
                    <div aria-hidden="true" aria-labelledby="projectCardLabel" className="modal fade" id="projectCard2" tabIndex={-1}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="d-flex align-items-center gap-2">
                                        <h1 className="modal-title fs-5" id="projectCardLabel">Create New Project </h1>
                                        <iconify-icon icon="line-md:document-add" className="f-s-22" style={{ color: "#198754" }} />
                                    </div>
                                    <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                                </div>
                                <div className="modal-body">
                                    <form className="app-form">
                                        <div className="mb-3">
                                            <div className="input-group">
                                                <span className="input-group-text" id="inputGroupPrepend2"><i className="ph-fill  ph-copy" /></span>
                                                <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="Enter New Project Name" required="" type="text" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Cancel</button>
                                    <button className="btn btn-primary" id="addCard" type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>




        </Fragment>
    );
}
export default Project;
