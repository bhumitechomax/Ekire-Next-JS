"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";


function Manage() {

    const { slug } = useParams();
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        const toggleIcons = document.querySelectorAll(".toggle-password");

        toggleIcons.forEach((icon) => {
            const targetId = icon.getAttribute("data-target");
            const passwordInput = document.getElementById(targetId);

            if (!passwordInput) return;

            const toggleVisibility = () => {
                const isPassword = passwordInput.type === "password";

                passwordInput.type = isPassword ? "text" : "password";
                icon.classList.toggle("ph-eye");
                icon.classList.toggle("ph-eye-slash");
            };

            icon.addEventListener("click", toggleVisibility);

            // Cleanup on unmount
            return () => {
                icon.removeEventListener("click", toggleVisibility);
            };
        });
    }, []);

    // auto load
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    // additional disk
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(5); // Default price for 1 GB

    const updatePrice = (value) => {
        if (value >= 1 && value <= 5) {
            setPrice(5);
        } else if (value >= 6 && value <= 10) {
            setPrice(10);
        } else if (value > 10 && value <= 50) {
            setPrice(20);
        } else {
            setPrice(30); // Adjust as needed
        }
    };

    const increment = () => {
        const newValue = count + 1;
        setCount(newValue);
        updatePrice(newValue);
    };

    const decrement = () => {
        if (count > 1) {
            const newValue = count - 1;
            setCount(newValue);
            updatePrice(newValue);
        }
    };

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
                            <div className="col-12">
                                <h4 className="main-title">Manage Server {slug} </h4>
                                <ul className="app-line-breadcrumbs mb-3">
                                    <li>
                                        <a className="f-s-14 f-w-500" href="/server">
                                            <span>
                                                <i className="ph-duotone  ph-table f-s-16" /> Server
                                            </span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="f-s-14 f-w-500" href="#">Manage Server {slug}</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        {/* Breadcrumb end */}

                        {/* Projects start */}
                        <div className="row">
                            <div className="col-12">

                                <div className="tab-wrapper mb-3">
                                    <ul className="tabs overflow-auto">
                                        <li
                                            className={`tab-link ${activeTab === 1 ? "active" : ""}`}
                                            onClick={() => setActiveTab(1)}
                                        >
                                            <i className="ph-bold  ph-info f-s-18" /> Server Overview
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            <i className="ph-bold  ph-circles-three-plus f-s-18" /> Server setting
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 3 ? "active" : ""}`}
                                            onClick={() => setActiveTab(3)}
                                        >
                                            <i className="ph-bold  ph-floppy-disk-back f-s-18" /> Additional Disk
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 4 ? "active" : ""}`}
                                            onClick={() => setActiveTab(4)}
                                        >
                                            <i className="ph-fill  ph-database f-s-18" /> Backups
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 5 ? "active" : ""}`}
                                            onClick={() => setActiveTab(5)}
                                        >
                                            <i className="ph ph-bounding-box f-s-18" /> Snapshots
                                        </li>

                                    </ul>
                                </div>

                                <div className="content-wrapper" id="card-container">
                                    <div className={`tabs-content ${activeTab === 1 ? "active" : ""}`} id="tab-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Server Credentials</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="col-12">
                                                            <div className="app-form">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="input-group mb-3">
                                                                            <span className="input-group-text b-r-left text-bg-primary">IPv4</span>
                                                                            <input aria-label="Dollar amount (with dot and two decimal places)" className="form-control b-r-right" placeholder="988e473a-335d-5c18-b996-db64c22cc7c0" type="text" />
                                                                            <span className="input-group-text b-r-0 text-bg-primary"><i className="ph-fill  ph-copy f-s-18"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="input-group mb-3">
                                                                            <span className="input-group-text b-r-left text-bg-primary">IPv6</span>
                                                                            <input aria-label="Dollar amount (with dot and two decimal places)" className="form-control b-r-right" placeholder="f11fdb72-899e-5886-8fe0-9e55a5132aa7" type="text" />
                                                                            <span className="input-group-text b-r-0 text-bg-primary"><i className="ph-fill  ph-copy f-s-18"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="input-group mb-3">
                                                                            <span className="input-group-text b-r-left text-bg-primary">Username</span>
                                                                            <input aria-label="Dollar amount (with dot and two decimal places)" className="form-control b-r-right" placeholder="2d907383-8206-51cc-9313-4c931b37b06a" type="text" />
                                                                            <span className="input-group-text b-r-0 text-bg-primary"><i className="ph-fill  ph-copy f-s-18"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="input-group mb-3">
                                                                            <span className="input-group-text b-r-left text-bg-primary">Password</span>
                                                                            <input
                                                                                id="password1"
                                                                                className="form-control b-r-right"
                                                                                placeholder="********"
                                                                                type="password"
                                                                                aria-label="Password"
                                                                                style={{ borderRight: "0" }}
                                                                            />
                                                                            <span className="input-group-text b-r-right">
                                                                                <i
                                                                                    className="ph ph-eye-slash f-s-20 toggle-password"
                                                                                    data-target="password1"
                                                                                    style={{ cursor: "pointer" }}
                                                                                />
                                                                            </span>
                                                                            <span className="input-group-text b-r-0 text-bg-primary">
                                                                                <i className="ph-fill ph-copy f-s-18"></i>
                                                                            </span>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Server Details</h5>
                                                    </div>
                                                    <div className="row card-body">
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">2vCPU</h6>
                                                                    <div className="dropdown bg-xl-light-primary h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold ph-command f-s-20 text-primary" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">100 GB</h6>
                                                                    <div className="dropdown bg-xl-light-success h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold ph-database f-s-20 text-success" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">4GB</h6>
                                                                    <div className="dropdown bg-xl-light-secondary h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold ph-floppy-disk f-s-20 text-secondary" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">New York</h6>
                                                                    <div className="dropdown bg-xl-light-danger h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold  ph-map-pin-line f-s-20 text-danger" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">AMD Ryzen 7950x</h6>
                                                                    <div className="dropdown bg-xl-light-info h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold ph-cpu text-info f-s-20" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">AlmaLinux</h6>
                                                                    <div className="dropdown bg-xl-light-warning h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold  ph-windows-logo f-s-22 text-warning text-warning" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Stastics</h5>
                                                    </div>
                                                    <div className="row card-body">
                                                        <div className="col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0">
                                                            <div className="card orders-provided-card border-card">
                                                                <div className="card-body">
                                                                    <i className="ph-bold  ph-circle circle-bg-img" />
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <p className="f-s-18 f-w-600 text-dark txt-ellipsis-1">CPU Usage</p>
                                                                            <h2 className="text-secondary-dark mb-0">0%</h2>
                                                                        </div>
                                                                        <div className="dropdown bg-xl-light-danger  h-40 w-40 d-flex-center b-r-15">
                                                                            <i className="ph-bold ph-cpu f-s-20 text-danger" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0">
                                                            <div className="card bg-primary-300 product-sold-card">
                                                                <div className="card-body">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <p className="f-s-18 f-w-600 text-dark txt-ellipsis-1">1.45 of unmetered GiB</p>
                                                                            <h5 className="text-secondary-dark" style={{ marginTop: "6%", marginBottom: "6%" }}>Incoming Bandwith</h5>
                                                                        </div>
                                                                        <div className="dropdown bg-light-white h-40 w-40 d-flex-center b-r-15">
                                                                            <i className="ph-bold  ph-arrow-square-in f-s-20 text-secondary" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0">
                                                            <div className="card product-store-card border-card">
                                                                <div className="card-body">
                                                                    <i className="ph-bold  ph-circle circle-bg-img" />
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <p className="f-s-18 f-w-600 text-dark txt-ellipsis-1">0.04 of unmetered GiB</p>
                                                                            <h5 className="text-secondary-dark" style={{ marginTop: "6%", marginBottom: "6%" }}>Outgoing Bandwith</h5>
                                                                        </div>
                                                                        <div className="dropdown bg-light-success h-40 w-40 d-flex-center b-r-15">
                                                                            <i className="ph-bold  ph-arrow-square-out f-s-20 text-success" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0">
                                                            <div className="card project-total-card">
                                                                <div className="card-body">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <p className="f-s-18 f-w-600 text-dark txt-ellipsis-1">3.06 of 100 GiB</p>
                                                                            <h5 className="text-secondary-dark" style={{ marginTop: "6%", marginBottom: "6%" }}>Disk Usage</h5>
                                                                        </div>
                                                                        <div className="dropdown bg-light-info h-40 w-40 d-flex-center b-r-15">
                                                                            <i className="ph-fill  ph-database f-s-20 text-info" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Billing Information</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row d-flex align-items-center justify-content-between">
                                                            <div className="col-lg-6" style={{ padding: "5px 15px" }}>
                                                                <p className="f-s-17 text-dark ">Your Current Size is 2 vCPU - 4 GB Memory - 100 SSD Storage.</p>
                                                                <button className="btn btn-primary h-45 icon-btn mb-3" >
                                                                    <i className="ph-bold  ph-arrow-down f-s-18" />  Upgrade
                                                                </button>
                                                                <h5 className="text-secondary-dark mb-0">Renews Automatically on 18-12-2024</h5>
                                                                <p className="f-s-17 text-dark ">We will send you a notification upon subscription expiration</p>
                                                                <h5 className="text-secondary-dark mb-0">$10 Per Month</h5>
                                                            </div>
                                                            <div className="col-lg-6 b-r-15">
                                                                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={75} className="progress w-100 h-15 mb-2" role="progressbar">
                                                                    <div className="progress-bar bg-primary text-white" style={{ width: '75%' }}> 75%</div>
                                                                </div>
                                                                <p className="f-s-14 text-dark ">75 days remaining until your server needs a renew</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`tabs-content ${activeTab === 2 ? "active" : ""}`} id="tab-2">

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Change Server Settings</h5>
                                                    </div>
                                                    <div className="card-body" >
                                                        <form className="app-form rounded-control  row g-3" style={{ padding: "5px 15px" }}>
                                                            <div className="col-md-4">
                                                                <label className="form-label" htmlFor="validationDefault01">Change Hostname</label>
                                                                <input className="form-control" id="validationDefault01" placeholder="New Hostname" required type="text" />
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <div className="card-body" >
                                                        <form className="app-form rounded-control  row g-3" style={{ padding: "5px 15px" }}>
                                                            <div className="col-md-4">
                                                                <label htmlFor="" className="form-label">Change Server Password</label>
                                                                <div className="input-group mb-3">
                                                                    <input
                                                                        id="password2"
                                                                        className="form-control b-r-right"
                                                                        placeholder="********"
                                                                        type="password"
                                                                        aria-label="Password"
                                                                        style={{ borderRight: "0" }}
                                                                    />
                                                                    <span className="input-group-text b-r-right">
                                                                        <i
                                                                            className="ph ph-eye-slash f-s-20 toggle-password"
                                                                            data-target="password2"
                                                                            style={{ cursor: "pointer" }}
                                                                        />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <div className="card-body" >
                                                        <form className="app-form rounded-control  row g-3" style={{ padding: "5px 15px" }}>

                                                            <div className="col-md-4">
                                                                <label className="form-label" htmlFor="validationDefaultUsername">Change RDNS</label>
                                                                <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="New RDNS" required type="text" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div style={{ padding: "5px 15px" }}>
                                                                <h5 className="text-secondary-dark mb-0">Enable Automatic Backups
                                                                    <span className="badge text-warning-dark bg-warning-400 badge-notification ms-2"> $5</span>
                                                                    <span className="badge text-danger-dark bg-xl-light-danger badge-notification ms-2"> Disabled</span>
                                                                </h5>
                                                                <p className="f-s-17 text-dark ">Enable daily backups to set free of any stress and be at peace of mind.</p>
                                                            </div>
                                                            <div className=" b-r-15">
                                                                <button className="btn btn-primary h-45 icon-btn mb-3" >
                                                                    <i className="ph-bold  ph-arrow-down f-s-18" />  Save Changes
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`tabs-content ${activeTab === 3 ? "active" : ""}`} id="tab-3">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Additional Disk</h5>
                                                    </div>
                                                    <div className="card-body" >
                                                        <div className="">
                                                            {/* <div className="modal-header">
                                                                <h5 className="modal-title">Create Volume</h5>
                                                            </div> */}
                                                            <div className="modal-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="text-center align-self-center">
                                                                        <img alt="" className="img-fluid b-r-10" src="../assets/images/new/cloud.png" />
                                                                    </div>
                                                                    <div className="ps-4">
                                                                        <div className="d-flex align-items-center gap-3">
                                                                            <div className="simplespin d-flex align-items-center gap-2">
                                                                                <a className="circle-btn decrement" role="button" onClick={decrement}>-</a>
                                                                                <input className="app-small-touchspin count f-s-19" type="text" value={count} readOnly />
                                                                                <a className="circle-btn increment" role="button" onClick={increment}>+</a>
                                                                            </div>
                                                                            <p className="f-s-18 m-0">GB</p>
                                                                        </div>
                                                                        <div>
                                                                            <p className="f-s-18 text-primary fw-bold m-0"> ${price} /mo</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <form className="app-form mt-3">
                                                                <div className="mb-3">
                                                                    <div className="input-group">
                                                                        <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="Volume Name" required="" type="text" />
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <div className="input-group">
                                                                        <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="Add Location" required="" type="text" />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="modal-footer">
                                                                <button className="btn btn-light-primary" type="button">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`tabs-content ${activeTab === 4 ? "active" : ""}`} id="tab-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Backup</h5>
                                                    </div>
                                                    <div className="card-body" >

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`tabs-content ${activeTab === 5 ? "active" : ""}`} id="tab-5">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Snap shots</h5>
                                                    </div>
                                                    <div className="card-body" >

                                                    </div>
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
export default Manage;
