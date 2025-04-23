"use client";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";


function Project() {

    const [activeTab, setActiveTab] = useState(1);

// auto load
            const [isLoading, setIsLoading] = useState(true);
            useEffect(() => {
                // Simulate loading
                const timer = setTimeout(() => {
                    setIsLoading(false);
                }, 500);
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
            <main className={`page-content px-4 py-4 ${isLoading ? 'pointer-events-none' : ''}`} style={{ opacity: isLoading ? 0.5 : 1 }}>
                <div className="container-fluid">
                    {/* Breadcrumb start */}
                    <div className="row m-1">
                        <div className="col-12 ">
                            <h4 className="main-title">FAQ</h4>
                            {/* <ul className="app-line-breadcrumbs mb-3">
                                <li className>
                                    <a className="f-s-14 f-w-500" href="#">
                                        <span>
                                            <i className="ph-duotone  ph-stack f-s-16" /> Apps
                                        </span>
                                    </a>
                                </li>
                                <li className="active">
                                    <a className="f-s-14 f-w-500" href="#">FAQ</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    {/* Breadcrumb end */}

                    {/* Help start */}
                    <div className="faq-header">
                        <img alt="" src="../assets/images/logo/3.png" />
                        <h2 className="text-dark f-w-700">How Can We Help ?</h2>
                        <div className="app-form search-div">
                            <div className="input-group b-r-search">
                                <span className="input-group-text bg-primary border-0 ">
                                    <i className="ti ti-search f-s-18" /></span>
                                <input className="form-control" placeholder="Search..." type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="card">
                            <div className="card-header">
                                <h5>See your question below</h5>
                            </div>
                            <div className="card-body vertical-tab row">
                                <div className="col-lg-3">
                                    <ul className="nav nav-tabs app-tabs-secondary flex-column" id="v-bg" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active w-100 justify-content-start" id="v-payment-tab" data-bs-toggle="tab" data-bs-target="#v-payment-tab-pane" type="button" role="tab" aria-controls="v-payment-tab-pane" aria-selected="true"> <i className="ph ph-wallet pe-1 ps-1 pb-1 f-s-22 " />
                                                Payments</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link w-100 justify-content-start" id="v-deploy-tab" data-bs-toggle="tab" data-bs-target="#v-deploy-tab-pane" type="button" role="tab" aria-controls="v-deploy-tab-pane" aria-selected="false"><i className="ph  ph-airplay pe-1 ps-1 pb-1 f-s-22 " />Deployment</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link w-100 justify-content-start" id="v-backup-tab" data-bs-toggle="tab" data-bs-target="#v-backup-tab-pane" type="button" role="tab" aria-controls="v-backup-tab-pane" aria-selected="false"><i className="ph  ph-database pe-1 ps-1 pb-1 f-s-22" />Backups</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link w-100 justify-content-start" id="v-upgrad-tab" data-bs-toggle="tab" data-bs-target="#v-upgrad-tab-pane" type="button" role="tab" aria-controls="v-upgrad-tab-pane" aria-selected="false"><i className="ph  ph-arrow-line-down pe-1 ps-1 pb-1 f-s-22" />Upgrading</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link w-100 justify-content-start" id="v-reinstall-tab" data-bs-toggle="tab" data-bs-target="#v-reinstall-tab-pane" type="button" role="tab" aria-controls="v-reinstall-tab-pane" aria-selected="false"><i className="ph  ph-aperture pe-1 ps-1 pb-1 f-s-22" />Reinstallation </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link w-100 justify-content-start" id="v-disks-tab" data-bs-toggle="tab" data-bs-target="#v-disks-tab-pane" type="button" role="tab" aria-controls="v-disks-tab-pane" aria-selected="false"><i className="ph  ph-floppy-disk pe-1 ps-1 pb-1 f-s-22" />Disks  </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link w-100 justify-content-start" id="v-ips-tab" data-bs-toggle="tab" data-bs-target="#v-ips-tab-pane" type="button" role="tab" aria-controls="v-ips-tab-pane" aria-selected="false"><i className="ph  ph-globe pe-1 ps-1 pb-1 f-s-22" />Additional IPs  </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link w-100 justify-content-start" id="v-snapshot-tab" data-bs-toggle="tab" data-bs-target="#v-snapshot-tab-pane" type="button" role="tab" aria-controls="v-snapshot-tab-pane" aria-selected="false"><i className="ph ph-bounding-box pe-1 ps-1 pb-1 f-s-22" />snapshots  </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content col-lg-9" id="v-bgContent">
                                    <div className="tab-pane fade show active" id="v-payment-tab-pane" role="tabpanel" aria-labelledby="v-payment-tab" tabIndex={0}>
                                        <div className="accordion app-accordion accordion-light-secondary" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                                        When is payment taken for my order?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">Payments are deducted immediately after the order.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                        How do I pay for my order?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">You can pay for your order via your balance. To top-up your balance, navigate to the finance section then top it up with any of the available payment methods.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-deploy-tab-pane" role="tabpanel" aria-labelledby="v-deploy-tab" tabIndex={0}>
                                        <div className="accordion app-accordion accordion-light-secondary" id="accordionFlushExample1">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="true" aria-controls="flush-collapseThree">
                                                        How much time does it take to deploy a server?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree" className="accordion-collapse" data-bs-parent="#accordionFlushExample1">
                                                    <div className="accordion-body">Servers are deployed automatically and immediately after order.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                        Is there any installation fee?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample1">
                                                    <div className="accordion-body">No, installation is completely free.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-backup-tab-pane" role="tabpanel" aria-labelledby="v-backup-tab" tabIndex={0}>
                                        <div className="accordion app-accordion accordion-light-secondary" id="accordionFlushExample2">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="true" aria-controls="flush-collapse1">
                                                        What is backups interval?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse1" className="accordion-collapse" data-bs-parent="#accordionFlushExample2">
                                                    <div className="accordion-body">Backups are taken everyday at 00:00 AM (UTC).</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                                        How many backups can be stored?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample2">
                                                    <div className="accordion-body">We store 7 backups; after that, the first backup will be deleted to store the new one and so on.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                                                        How can I restore a backup?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample2">
                                                    <div className="accordion-body">To restore a backup, access your backups list, click on the restore arrow next to the backup you want to restore, and it will be restored within minutes.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-upgrad-tab-pane" role="tabpanel" aria-labelledby="v-upgrad-tab" tabIndex={0}>
                                        <div className="accordion app-accordion accordion-light-secondary" id="accordionFlushExample3">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="true" aria-controls="flush-collapse1">
                                                        How to upgrade my current plan?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse1" className="accordion-collapse" data-bs-parent="#accordionFlushExample3">
                                                    <div className="accordion-body">To upgrade your server plan, navigate to your Ekire server dashboard, scroll down to the billing section, tap on the "Upgrade" button, and select the size you want.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                                        How much time does it take to finish upgrading?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample3">
                                                    <div className="accordion-body">The upgrading process is <b>automated</b>. It happens immediately and takes no time.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                                                        Does upgrade remove or affect my current data?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample3">
                                                    <div className="accordion-body">No, upgrading your plan does <b>NOT</b> affect your data.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-reinstall-tab-pane" role="tabpanel" aria-labelledby="v-reinstall-tab" tabIndex={0}>
                                        <div className="accordion app-accordion accordion-light-secondary" id="accordionFlushExample4">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="true" aria-controls="flush-collapse1">
                                                        How much time does the reinstallation process take?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse1" className="accordion-collapse" data-bs-parent="#accordionFlushExample4">
                                                    <div className="accordion-body">The reinstallation process is automated. Which means it happens immediately and takes no time.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                                        Does reinstallation affect my current data?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample4">
                                                    <div className="accordion-body">Yes, reinstallation <b>WIPES</b> all your data. However, IP and other network data don't change.</div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-disks-tab-pane" role="tabpanel" aria-labelledby="v-disks-tab" tabIndex={0}>
                                        <div className="accordion app-accordion accordion-light-secondary" id="accordionFlushExample5">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="true" aria-controls="flush-collapse1">
                                                        Are disks billing & server billing separated?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse1" className="accordion-collapse" data-bs-parent="#accordionFlushExample5">
                                                    <div className="accordion-body">Yes! Disks billing is separate and you pay for your disks every month depending on the purchase date.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                                        How is the location of disks selected?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample5">
                                                    <div className="accordion-body">When you buy a disk for your server, it will be added in the same location as the server.</div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-ips-tab-pane" role="tabpanel" aria-labelledby="v-ips-tab" tabIndex={0}>
                                        <div className="accordion app-accordion accordion-light-secondary" id="accordionFlushExample6">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="true" aria-controls="flush-collapse1">
                                                        How much does it cost for an additional IP?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse1" className="accordion-collapse" data-bs-parent="#accordionFlushExample6">
                                                    <div className="accordion-body">It costs $2 for an additional IP.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                                        Are IPs and server billings separate?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample6">
                                                    <div className="accordion-body">Yes, IPs billing cycle and servers billing cycle are separated.</div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="v-snapshot-tab-pane" role="tabpanel" aria-labelledby="v-snapshot-tab" tabIndex={0}>
                                        <div className="accordion app-accordion accordion-light-secondary" id="accordionFlushExample7">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="true" aria-controls="flush-collapse1">
                                                        How much does it cost to take a snapshot?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse1" className="accordion-collapse" data-bs-parent="#accordionFlushExample7">
                                                    <div className="accordion-body">A snapshot costs $0.05/Gb/mo. Which means, a 10GB snapshot will cost you $0.5 every month.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                                                        Are snapshots and server billings separate?
                                                    </button>
                                                </h2>
                                                <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample7">
                                                    <div className="accordion-body">Yes, snapshots and servers billing cycles are not connected to each other.</div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Frequently Asked Questions end */}
                </div>
            </main>
</div>
        </Fragment>
    );
}
export default Project;
