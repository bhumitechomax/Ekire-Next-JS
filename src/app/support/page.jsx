"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState, useEffect } from "react";


function Support() {

    const Support = 1;
    console.log(Support);

    const [activeTab, setActiveTab] = useState(1);

    const router = useRouter();

    const handleCreateClick = () => {
        router.push('/support/create');
    };

     // auto load
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            // Simulate loading
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
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
                        className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
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
            <main className={`page-content px-4 py-4 ${isLoading ? 'pointer-events-none' : ''}`} style={{ opacity: isLoading ? 0.5 : 1 }}>
                <div className="container-fluid">
                    {/* Breadcrumb start */}
                    <div className="row m-1">
                        <div className="col-12 d-flex justify-content-between">
                            <h4 className="main-title">Support</h4>
                        </div>
                    </div>
                    {/* Breadcrumb end */}


                    <div className="row">
                        <div className="col-12">
                            
                            <div className="tab-wrapper mb-3">
                                <ul className="tabs">
                                    <li className={`tab-link ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>
                                       <i className="ph-bold  ph-align-right f-s-18"/> My Projects
                                    </li>
                                    <li className="ms-auto d-flex">
                                        <div className="text-end">
                                        <button className="btn btn-primary h-45 icon-btn m-2" onClick={handleCreateClick} >
                                            <i className="iconoir-open-new-window f-s-18" />  Create New Server
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
                                                            <th>title</th>
                                                            <th>date</th>
                                                            <th>last reply</th>
                                                            <th>status</th>
                                                            <th>action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Unable to access my account</td>
                                                            <td>9/20/2024</td>
                                                            <td>Ekire Support</td>
                                                            <td>Open</td>
                                                            <td className="d-flex"><Link href={`/support/${Support}`}><span className="badge bg-xl-light-info text-info d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18"/> View </span></Link></td>
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

            </main>
            </div>
        </Fragment>
    );
}
export default Support;
