"use client";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";


function SshKeys() {

    const sshKeys = 1;
    console.log(sshKeys);

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
                        <div className="col-12 d-flex justify-content-between">
                            <h4 className="main-title">My SSH Keys</h4>
                            <div className="text-end">
                                <button className="btn btn-primary h-45 icon-btn m-2" data-bs-target="#projectCard1" data-bs-toggle="modal">
                                    <i className="iconoir-open-new-window f-s-18" />  New SSH Key
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Breadcrumb end */}

                    {/* Projects start */}
                    <div className="row">
                        <div className="col-12">

                            <div className="content-wrapper" id="card-container">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="app-datatable-default overflow-auto">
                                            <table className="datatable display app-data-table default-data-table" id="example">
                                                <thead>
                                                    <tr>
                                                        <th>name</th>
                                                        <th>created at</th>
                                                        <th>action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>firstkey</td>
                                                        <td>2024-11-17</td>
                                                        <td className="d-flex"><Link href={`/sshKeys/${sshKeys}`}><span className="badge text-light-success d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>2nd key</td>
                                                        <td>2024-11-28</td>
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
                                <iconify-icon icon="line-md:plus-circle" className="animeted-plus-circle f-s-22"  />
                            </div>

                            <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                        </div>
                        <div className="modal-body">
                            <form className="app-form rounded-control  row g-3">
                                <div className="col-12">
                                    <label className="form-label" htmlFor="validationDefault01">Name</label>
                                    <input className="form-control" id="validationDefault01"  type="text" placeholder="Enter SSH Key Name" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="validationDefault02">SSH Key</label>
                                    <textarea className="form-control" id="validationDefault02"  type="text" placeholder="Enter SSH Key Value" required />
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
export default SshKeys;
