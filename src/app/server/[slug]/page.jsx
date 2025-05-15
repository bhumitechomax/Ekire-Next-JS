"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import Cookies from "js-cookie";


function Manage() {
    const params = useParams();
    const id = params.slug;
    const [activeTab, setActiveTab] = useState(1);
    const [activeInnerTab, setActiveInnerTab] = useState(8);
    const [selectedOS, setSelectedOS] = useState(null);
    const [os, setOs] = useState([]);
    const [app, setApp] = useState([]);
    const [selectedOSId, setSelectedOSId] = useState(null);
    const [selectedAppId, setSelectedAppId] = useState(null);
    const handleOSClick = (id) => {
        setSelectedOSId(id);
    };
    const handleAppClick = (id) => {
        setSelectedAppId(id);
    };
    const [showReinstallCard, setShowReinstallCard] = useState(false);
    const [selectedVersionId, setSelectedVersionId] = useState(null);

    const [serverdetails, setServerDetails] = useState(null);

     useEffect(() => {
            const token = Cookies.get("accessToken");
            if (token && id) {
                console.log('fetch token ', token);
                const FetchSshkey = async () => {
                    setIsLoading(true);
                    try {
                        const response = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${id}/get`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        );
    
                        const result = await response.json();
                        const data = result.data;
                        setServerDetails(data);
                        // setFormData({ name: data.name, key: data.key });
                        setIsLoading(false);
                    } catch (error) {
                        console.error("Error fetching Server:", error);
                        setIsLoading(false);
                    }
                };
    
                FetchSshkey();
            }
        }, [id]);

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

    // api for start server
    const startServer = async (serverId) => {
        if (!serverId) return;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: 'Start Server?',
            text: "Are you sure you want to start this server?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, start it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${serverId}/start`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                            },
                        }
                    );

                    const result = await res.json();
                    console.log("Start Server Response:", result);

                    if (res.ok && result.success) {
                        swalWithBootstrapButtons.fire(
                            'Started!',
                            'The server has been started successfully.',
                            'success'
                        );
                    } else {
                        swalWithBootstrapButtons.fire(
                            'Failed!',
                            result.message || 'Failed to start the server.',
                            'error'
                        );
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire(
                        'Error!',
                        'Something went wrong.',
                        'error'
                    );
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Server start cancelled.',
                    'info'
                );
            }
        });
    };

    // api for stop server 
    const stopServer = async (serverId) => {
        if (!serverId) return;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: 'Stop Server?',
            text: "Are you sure you want to stop this server?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, stop it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${serverId}/stop`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                            },
                        }
                    );

                    const result = await res.json();
                    console.log("Stop Server Response:", result);

                    if (res.ok && result.success) {
                        swalWithBootstrapButtons.fire(
                            'Stopped!',
                            'The server has been stopped successfully.',
                            'success'
                        );
                    } else {
                        swalWithBootstrapButtons.fire(
                            'Failed!',
                            result.message || 'Failed to stop the server.',
                            'error'
                        );
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire(
                        'Error!',
                        'Something went wrong.',
                        'error'
                    );
                }
            } else {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Server stop cancelled.',
                    'info'
                );
            }
        });
    };

    // api for restart server
    const restartServer = async (serverId) => {
        if (!serverId) return;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-secondary ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: 'Restart Server?',
            text: "Are you sure you want to restart this server?",
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, restart it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${serverId}/restart`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                            },
                        }
                    );

                    const result = await res.json();
                    console.log("Restart Server Response:", result);

                    if (res.ok && result.success) {
                        swalWithBootstrapButtons.fire(
                            'Restarted!',
                            'The server has been restarted successfully.',
                            'success'
                        );
                    } else {
                        swalWithBootstrapButtons.fire(
                            'Failed!',
                            result.message || 'Failed to restart the server.',
                            'error'
                        );
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire(
                        'Error!',
                        'Something went wrong.',
                        'error'
                    );
                }
            } else {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Server restart cancelled.',
                    'info'
                );
            }
        });
    };

    // api os + app system
    useEffect(() => {
        const token = Cookies.get("accessToken");
        if (token) {
            // console.log("Token found:", token);
            const FetchProject = async () => {
                console.log(`Bearer ${token}`);
                setIsLoading(true);
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/operating-systems-applications`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`, // Send the token
                            },
                        }
                    );
                    const result = await response.json();
                    const data = result.data;
                    console.log(data);
                    setOs(data.operating_systems);
                    setApp(data.applications);
                } catch (error) {
                    console.error("Error fetching cloud vps plan data:", error);
                    setIsLoading(false);
                }
            };
            FetchProject();
        }
    }, []);

    // api for reinstall server
    const reinstallServer = async (serverId, payload) => {
        if (!serverId || !payload?.version_id) return;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-secondary ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: 'Reinstall Server?',
            text: "This will wipe the existing data. Are you sure?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, reinstall!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${serverId}/reinstall`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                            },
                            body: JSON.stringify(payload),
                        }
                    );

                    const result = await res.json();
                    console.log("Reinstall Server Response:", result);

                    if (res.ok && result.success) {
                        swalWithBootstrapButtons.fire(
                            'Reinstalled!',
                            'The server has been reinstalled successfully.',
                            'success'
                        );
                    } else {
                        swalWithBootstrapButtons.fire(
                            'Failed!',
                            result.message || 'Failed to reinstall the server.',
                            'error'
                        );
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire(
                        'Error!',
                        'Something went wrong during reinstall.',
                        'error'
                    );
                }
            } else {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Server reinstall cancelled.',
                    'info'
                );
            }
        });
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
                                <h4 className="main-title">Manage Server {id} </h4>
                                <ul className="app-line-breadcrumbs mb-3">
                                    <li>
                                        <a className="f-s-14 f-w-500" href="/server">
                                            <span>
                                                <i className="ph-duotone  ph-table f-s-16" /> Server
                                            </span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="f-s-14 f-w-500" href="#">Manage Server {id}</a>
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
                                            className={`tab-link ${activeTab === 6 ? "active" : ""}`}
                                            onClick={() => setActiveTab(6)}
                                        >
                                            <i className="ph-bold ph-corners-in f-s-18" /> Actions
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

                                    <div className={`tabs-content ${activeTab === 6 ? "active" : ""}`} id="tab-6">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Action Buttons</h5>
                                                    </div>
                                                    <div className="card-body d-flex gap-3" >
                                                        <button
                                                            className="btn btn-primary h-45 icon-btn mb-3"
                                                            onClick={() => startServer(server?.id)}
                                                        >
                                                            <i className="ph-fill ph-play f-s-18" />
                                                            Start Server
                                                        </button>
                                                        <button
                                                            className="btn btn-success h-45 icon-btn mb-3"
                                                            onClick={() => stopServer(server?.id)}
                                                        >
                                                            <i className="ph-fill ph-pause f-s-18" />
                                                            Stop Server
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary h-45 icon-btn mb-3"
                                                            onClick={() => restartServer(server?.id)}
                                                        >
                                                            <i className="ph-fill ph-rewind f-s-18" />
                                                            Restart Server
                                                        </button>

                                                        <button
                                                            className="btn btn-dark h-45 icon-btn mb-3"
                                                            onClick={() => setShowReinstallCard(!showReinstallCard)}
                                                        >
                                                            <i className="ph-fill ph-arrow-line-down f-s-18" /> Reinstall Server
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {showReinstallCard && (
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>OS/Application</h5>
                                                </div>
                                                <div className="card-body p-0">
                                                    <div className="row">
                                                        <div className="col-12">

                                                            <div className="tab-wrapper ms-3 me-3 mb-3">
                                                                <ul className="tabs overflow-auto">
                                                                    <li
                                                                        className={`tab-link ${activeInnerTab === 8 ? "active" : ""}`}
                                                                        onClick={() => setActiveInnerTab(8)}
                                                                    >
                                                                        <i className="ph-bold  ph-align-right f-s-18" /> Operating System
                                                                    </li>
                                                                    <li
                                                                        className={`tab-link ${activeInnerTab === 9 ? "active" : ""}`}
                                                                        onClick={() => setActiveInnerTab(9)}
                                                                    >
                                                                        <i className="ph-fill ph-list-bullets f-s-18" /> Application
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div className="content-wrapper" id="card-container">
                                                                {activeInnerTab === 8 && (
                                                                    <div className="tabs-content active" id="tab-8">
                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <div className="row simple-pricing-container app-arrow">

                                                                                    {os?.map((o, index) => (
                                                                                        <div className="col-md-6 col-xl-3 p-3" key={o.id}>
                                                                                            <div className="simple-pricing-card card mb-0" onClick={() => handleOSClick(o.id)} style={{ cursor: 'pointer' }}>
                                                                                                <div className="card-body">
                                                                                                    <div className="simple-price-header text-center">
                                                                                                        <h5 className="mb-3">{o.name}</h5>
                                                                                                    </div>
                                                                                                    <div className="simple-price-body text-center">
                                                                                                        <Image alt={o.name} className="img-fluid" src={o.icon} width={45} height={45} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            {selectedOSId === o.id && (
                                                                                                <form className="app-form row g-3 needs-validation mt-0" noValidate>
                                                                                                    <div className={o.name}>
                                                                                                        <select
                                                                                                            className="form-select"
                                                                                                            id={`${o.name}-version`}
                                                                                                            required onChange={(e) => setSelectedVersionId(e.target.value)}
                                                                                                        >
                                                                                                            <option value="">Select Version</option>
                                                                                                            {o.versions?.map((version) => (
                                                                                                                <option value={version.id} key={version.id}>
                                                                                                                    {version.name}
                                                                                                                </option>
                                                                                                            ))}
                                                                                                        </select>
                                                                                                        <div className="invalid-feedback">Please select a valid version.</div>
                                                                                                    </div>
                                                                                                </form>
                                                                                            )}
                                                                                        </div>
                                                                                    ))}

                                                                                </div>
                                                                                <button
                                                                                    className="btn btn-primary"
                                                                                    type="button"
                                                                                    onClick={() => reinstallServer(server?.id, { version_id: selectedVersionId })}
                                                                                >
                                                                                    Save
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {activeInnerTab === 9 && (
                                                                    <div className="tabs-content active" id="tab-9">
                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <div className="row simple-pricing-container app-arrow">
                                                                                    {app?.map((apps, index) => (
                                                                                        <div className="col-md-6 col-xl-3 p-3" key={apps.id}>
                                                                                            <div className="simple-pricing-card card mb-0" onClick={() => handleAppClick(apps.id)} style={{ cursor: 'pointer' }}>
                                                                                                <div className="card-body">
                                                                                                    <div className="simple-price-header text-center">
                                                                                                        <h5 className="mb-3">{apps.name}</h5>
                                                                                                    </div>
                                                                                                    <div className="simple-price-body text-center">
                                                                                                        <Image alt={apps.name} className="img-fluid" src={apps.icon} width={45} height={45} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            {selectedAppId === apps.id && (
                                                                                                <form className="app-form row g-3 needs-validation mt-0" noValidate>
                                                                                                    <div className={apps.name}>
                                                                                                        <select
                                                                                                            className="form-select"
                                                                                                            id={`${apps.name}-version`}
                                                                                                            required onChange={(e) => setSelectedVersionId(e.target.value)}
                                                                                                        >
                                                                                                            <option value="">Select Version</option>
                                                                                                            {apps.versions?.map((version) => (
                                                                                                                <option value={version.id} key={version.id}>
                                                                                                                    {version.name}
                                                                                                                </option>
                                                                                                            ))}
                                                                                                        </select>
                                                                                                        <div className="invalid-feedback">Please select a valid version.</div>
                                                                                                    </div>
                                                                                                </form>
                                                                                            )}
                                                                                        </div>

                                                                                    ))}
                                                                                </div>
                                                                                <button
                                                                                    className="btn btn-primary"
                                                                                    type="button"
                                                                                    onClick={() => reinstallServer(server?.id, { version_id: selectedVersionId })}
                                                                                >
                                                                                    Save
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )}
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
                                                    <div className="card-body d-flex gap-3" >
                                                        <button className="btn h-45 icon-btn mb-3" >
                                                            <i className="ph-fill  ph-eye f-s-18" />  View Backup
                                                        </button>
                                                        <button className="btn btn-primary h-45 icon-btn mb-3" >
                                                            <i className="ph-bold  ph-plus f-s-18" />  Create Backup
                                                        </button>
                                                        <button className="btn btn-success h-45 icon-btn mb-3" >
                                                            <i className="ph ph-arrow-fat-lines-up f-s-18" />  Update Auto Backup
                                                        </button>
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
                                                        <button className="btn btn-primary h-45 icon-btn mb-3" >
                                                            <i className="ph-bold  ph-plus f-s-18" />  Create Snapshots
                                                        </button>
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
