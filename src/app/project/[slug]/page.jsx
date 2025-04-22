"use client";
import { useParams } from "next/navigation";
import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function ViewPage() {
    const [activeTab, setActiveTab] = useState(1);

    // Get slug from URL
    const { projects } = useParams();

    // auto load
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
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
                            background: '#f6f6f6',
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
                        <div className="row m-1">
                            <div className="col-12">
                                <h4 className="main-title">Magdalena Wisozk {projects || ""} </h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="tab-wrapper mb-3">
                                    <ul className="tabs">
                                        <li className={`tab-link ${activeTab === 1 ? "active" : ""}`}
                                            onClick={() => setActiveTab(1)}
                                        >
                                            <i className="ph-bold ph-hard-drives f-s-18" /> Servers
                                        </li>
                                        <li className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            <i className="ph-bold  ph-users f-s-18" /> Members
                                        </li>

                                    </ul>
                                </div>
                                <div className="content-wrapper">
                                    <div className={`tabs-content ${activeTab === 1 ? "active" : ""}`} id="tab-1">
                                        <div className="card">
                                            <div className="card-header border-btm d-flex align-items-center justify-content-between">
                                                <h5>Project Servers</h5>
                                                <div className="text-end">
                                                    <button className="btn btn-primary h-45 icon-btn m-2" data-bs-target="#projectCard2" data-bs-toggle="modal">
                                                        <i className="ph ph-circles-three-plus f-s-18" />  Add New
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <Image src="/assets/images/New/nodata.gif" width={500} height={500} alt="nodata" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`tabs-content ${activeTab === 2 ? "active" : ""}`} id="tab-2">
                                        <div className="card equal-card p-30">
                                            <div className="card-body p-0">
                                                <div id="myTable">
                                                    <div className="list-table-header d-flex justify-content-sm-between mb-3">
                                                    <h5>Project Members</h5>
                                                        {/* <form action="#" className="app-form app-icon-form ">
                                                            <div className="position-relative ">
                                                                <input aria-label="Search" className="form-control search b-r-22" placeholder="Search..." type="search" />
                                                                <i className="ti ti-search text-dark" />
                                                            </div>
                                                        </form> */}
                                                    </div>
                                                    <div className="overflow-auto app-scroll">
                                                        <table className="table table-bottom-border  list-table-data align-middle mb-0">
                                                            <thead>
                                                                <tr className="app-sort">
                                                                    <th className="sort" data-sort="employee" scope="col">name</th>
                                                                    <th className="sort" data-sort="email" scope="col">Email</th>
                                                                    <th className="sort" data-sort="contact" scope="col">created at</th>
                                                                    <th className="sort" data-sort="action" scope="col">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="list" id="t-data">
                                                            <tr>
                                                                    <td className="id d-none">1</td>
                                                                    <td className="employee">tomsmith</td>
                                                                    <td className="email">a2684779302@gmail.com</td>
                                                                    <td className="contact">2024-12-24</td>
                                                                    <td className="remove">
                                                                        <button className="btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1">
                                                                            <i className="ph-fill  ph-trash f-s-22" />  Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="id d-none">1</td>
                                                                    <td className="employee">two</td>
                                                                    <td className="email">a2684779302@gmail.com</td>
                                                                    <td className="contact">2024-12-24</td>
                                                                    <td className="remove">
                                                                        <button className="btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1">
                                                                            <i className="ph-fill  ph-trash f-s-22" />  Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="id d-none">1</td>
                                                                    <td className="employee">three</td>
                                                                    <td className="email">a2684779302@gmail.com</td>
                                                                    <td className="contact">2024-12-24</td>
                                                                    <td className="remove">
                                                                        <button className="btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1">
                                                                            <i className="ph-fill  ph-trash f-s-22" />  Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="id d-none">1</td>
                                                                    <td className="employee">four</td>
                                                                    <td className="email">a2684779302@gmail.com</td>
                                                                    <td className="contact">2024-12-24</td>
                                                                    <td className="remove">
                                                                        <button className="btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1">
                                                                            <i className="ph-fill  ph-trash f-s-22" />  Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="id d-none">1</td>
                                                                    <td className="employee">five</td>
                                                                    <td className="email">a2684779302@gmail.com</td>
                                                                    <td className="contact">2024-12-24</td>
                                                                    <td className="remove">
                                                                        <button className="btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1">
                                                                            <i className="ph-fill  ph-trash f-s-22" />  Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="id d-none">1</td>
                                                                    <td className="employee">six</td>
                                                                    <td className="email">a2684779302@gmail.com</td>
                                                                    <td className="contact">2024-12-24</td>
                                                                    <td className="remove">
                                                                        <button className="btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1">
                                                                            <i className="ph-fill  ph-trash f-s-22" />  Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="id d-none">1</td>
                                                                    <td className="employee">seven</td>
                                                                    <td className="email">a2684779302@gmail.com</td>
                                                                    <td className="contact">2024-12-24</td>
                                                                    <td className="remove">
                                                                        <button className="btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1">
                                                                            <i className="ph-fill  ph-trash f-s-22" />  Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="id d-none">1</td>
                                                                    <td className="employee">eight</td>
                                                                    <td className="email">a2684779302@gmail.com</td>
                                                                    <td className="contact">2024-12-24</td>
                                                                    <td className="remove">
                                                                        <button className="btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1">
                                                                            <i className="ph-fill  ph-trash f-s-22" />  Remove
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="list-pagination">
                                                        <ul className="pagination" />
                                                    </div>
                                                </div> 

                                                

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* modal 1 */}
                <div aria-hidden="true" aria-labelledby="projectCardLabel" className="modal fade" id="projectCard2" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="d-flex align-items-center gap-2">
                                    <h1 className="modal-title fs-5" id="projectCardLabel">Add new server to project </h1>
                                    <iconify-icon icon="line-md:text-box-to-text-box-multiple-transition" className="animated-box-multiple-transition f-s-22" />
                                </div>
                                <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form className="app-form">
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend2"><i className="ph-fill  ph-copy" /></span>
                                            <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="Enter Server Id" required="" type="text" />
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
            </div>
        </Fragment>
    );
}

export default ViewPage;
