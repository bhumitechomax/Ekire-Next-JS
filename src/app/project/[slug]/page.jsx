"use client";
import { useParams } from "next/navigation";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ListTable from '../../MemberListTable'



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
            {/* breadcrum */}
            <div className="row m-1">
              <div className="col-12">
                <h4 className="main-title">Magdalena Wisozk {projects || ""} </h4>
                <ul className="app-line-breadcrumbs mb-3">
                  <li>
                    <a className="f-s-14 f-w-500" href="/project">
                      <span>
                        <i className="ph-duotone  ph-table f-s-16" /> Projects
                      </span>
                    </a>
                  </li>
                  <li className="active">
                    <a className="f-s-14 f-w-500" href="#">Magdalena Wisozk</a>
                  </li>
                </ul>

              </div>
            </div>
            {/* breadcrum */}


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


                    <ListTable />

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
                <button className="btn btn-primary" id="addCard" type="button" data-bs-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ViewPage;
