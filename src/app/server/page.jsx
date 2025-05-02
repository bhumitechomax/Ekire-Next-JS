"use client";

import { useRouter } from "next/navigation";
import React, { Fragment, useState, useEffect } from "react";


function Server() {

    const router = useRouter();

    const handleRowClick = (slug) => {
        router.push(`/server/${slug}`);
    };

    const handleCreateClick = () => {
        router.push('/server/create');
    };
    // auto load
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    // to load datatable
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         const tables = $(".datatable").map(function () {
    //             return $(this).DataTable();
    //         });

    //         return () => {
    //             tables.each(function () {
    //                 this.destroy();
    //             });
    //         };
    //     }
    // }, []);

    return (
        <Fragment>

            <div className="position-relative">
                {/* Overlay loader */}
                {isLoading && (
                    <div
                        className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
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

                <main className={`page-content  ${isLoading ? 'pointer-events-none' : ''}`} style={{ opacity: isLoading ? 0.5 : 1 }}>
                    <div className="container-fluid">
                        {/* Breadcrumb start */}
                        <div className="row m-1">
                            <div className="col-12 merge-title p-0">
                                <div>
                                    <h4 className="main-title">Servers</h4>
                                </div>
                                <div className="text-end">
                                    <button className="btn btn-primary h-45 icon-btn m-2" onClick={handleCreateClick} >
                                        <i className="iconoir-open-new-window f-s-18" />  Create New Server
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Breadcrumb end */}

                        {/* Projects start */}
                        <div className="row">
                            <div className="col-12">

                                <div className="content-wrapper" id="card-container">
                                    <div className="card p-l-r-30">
                                        <div className="card-body p-0">
                                            <div className="app-datatable-default overflow-auto">
                                                <table className="datatable display app-data-table default-data-table" id="example">
                                                    <thead>
                                                        <tr>
                                                            <th width={10}>Sr no.</th>
                                                            <th>server name</th>
                                                            <th>status</th>
                                                            <th>ip address</th>
                                                            <th>purchase date</th>
                                                            <th>total paid</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr role="button" onClick={() => handleRowClick('server-alpha')}>
                                                            <td >1</td>
                                                            <td>Server Alpha</td>
                                                            <td><span className="badge bg-success-subtle text-success text-uppercase">Running</span></td>
                                                            <td>193.38.248.207</td>
                                                            <td>Feb 22nd, 2024</td>
                                                            <td>$10</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Server Beta</td>
                                                            <td><span className="badge bg-success-subtle text-success text-uppercase">Running</span></td>
                                                            <td>192.168.0.101</td>
                                                            <td>Feb 22nd, 2024</td>
                                                            <td>$10</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Projects end */}


                    </div>

                </main>
                {/* modal 1 */}
                <div aria-hidden="true" aria-labelledby="projectCardLabel" className="modal fade" id="projectCard1" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="d-flex align-items-center gap-2">
                                    <h1 className="modal-title fs-5" id="projectCardLabel">Add SSH Key </h1>
                                    <iconify-icon icon="line-md:plus-circle" className="animeted-plus-circle f-s-22" />
                                </div>

                                <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form className="app-form rounded-control  row g-3">
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="validationDefault01">Name</label>
                                        <input className="form-control" id="validationDefault01" type="text" placeholder="Enter SSH Key Name" required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="validationDefault02">SSH Key</label>
                                        <textarea className="form-control" id="validationDefault02" type="text" placeholder="Enter SSH Key Value" required />
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
export default Server;
