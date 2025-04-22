"use client";
// import { useParams } from "next/navigation";
import Link from "next/link";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Image from "next/image";


function Create() {

    const [activeTab, setActiveTab] = useState(1);
    const [selectedOS, setSelectedOS] = useState(null);
    const [authMethod, setAuthMethod] = useState('ssh');
    const [showPassword, setShowPassword] = useState(false);

    const handleOSClick = (os) => {
        setSelectedOS(os);
    };

    const summaryRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const summary = summaryRef.current;
            if (!summary) return;

            if (window.innerWidth >= 1199) {
                // Get current width before fixing
                const summaryWidth = summary.parentElement.offsetWidth;
                summary.style.position = 'fixed';
                summary.style.top = '100px';
                summary.style.zIndex = '999';
                summary.style.width = `${summaryWidth}px`;
            } else {
                // Reset on mobile view
                summary.style.position = 'static';
                summary.style.top = '';
                summary.style.zIndex = '';
                summary.style.width = '';
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll(); // Run on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // auto load
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


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
                                <h4 className="main-title">Create New Server  </h4>
                            </div>
                        </div>
                        {/* Breadcrumb end */}

                        {/* Projects start */}
                        <div className="row cart-table">
                            <div className="col-xl-8 col-lg-12 col-md-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Region</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-xxl-4">
                                                                <ul className="active-device-session active-device-list" id="shareMenuLeft">
                                                                    <li>
                                                                        <div className="card share-menu-active">
                                                                            <div className="card-body">
                                                                                <div className="device-menu-item" draggable="false">
                                                                                    <span className="device-menu-img">
                                                                                        <i className="flag-icon flag-icon-usa f-s-25 text-success" />
                                                                                    </span>
                                                                                    <div className="device-menu-content">
                                                                                        <h6 className="mb-0 txt-ellipsis-1">New York</h6>
                                                                                        <p className="mb-0 txt-ellipsis-1 text-secondary">
                                                                                            (NY)</p>
                                                                                    </div>
                                                                                    <div className="device-menu-icons">
                                                                                        <i className="ph-fill  ph-check-circle me-1 text-success f-s-19" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-12 col-xxl-4">
                                                                <ul className="active-device-session  active-device-list" id="shareMenuRight">
                                                                    <li>
                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <div className="device-menu-item " draggable="false">
                                                                                    <span className="device-menu-img">
                                                                                        <i className="flag-icon flag-icon-aus f-s-25 text-primary" />
                                                                                    </span>
                                                                                    <div className="device-menu-content">
                                                                                        <h6 className="mb-0 txt-ellipsis-1">Sydney </h6>
                                                                                        <p className="mb-0 txt-ellipsis-1 text-secondary">(Australia)</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5>OS/Application</h5>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-12">

                                                <div className="tab-wrapper ms-3 me-3 mb-3">
                                                    <ul className="tabs">
                                                        <li
                                                            className={`tab-link ${activeTab === 1 ? "active" : ""}`}
                                                            onClick={() => setActiveTab(1)}
                                                        >
                                                            <i className="ph-bold  ph-align-right f-s-18" /> Operating System
                                                        </li>
                                                        <li
                                                            className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                                                            onClick={() => setActiveTab(2)}
                                                        >
                                                            <i className="ph-fill ph-list-bullets f-s-18" /> Application
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="content-wrapper" id="card-container">
                                                    <div className={`tabs-content ${activeTab === 1 ? "active" : ""}`} id="tab-1">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="row simple-pricing-container app-arrow">
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('Ubuntu')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">Ubuntu</h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="Ubuntu" className="img-fluid" src="/assets/images/new/Ubuntu.png" width={45} height={45} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('Windows')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">Windows</h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="Windows" className="img-fluid" src="/assets/images/new/Windows.png" width={45} height={45} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('Linux')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">Alma Linux</h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="Linux" className="img-fluid" src="/assets/images/new/Linux.png" width={45} height={45} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('CentOS')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">CentOS </h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="CentOS" className="img-fluid" src="/assets/images/new/CentOS.png" width={45} height={45} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('Debian')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">Debian </h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="Debian" className="img-fluid" src="/assets/images/new/Debian.png" width={45} height={45} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('Rocky')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">Rocky Linux </h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="Rocky" className="img-fluid" src="/assets/images/new/Rocky.png" width={45} height={45} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <form className="app-form rounded-control row g-3 needs-validation" noValidate>
                                                                            {selectedOS === 'Ubuntu' && (
                                                                                <div className="Ubuntu mt-4">
                                                                                    <label className="form-label" htmlFor="ubuntuVersion">
                                                                                        Ubuntu Version
                                                                                    </label>
                                                                                    <select className="form-select" id="ubuntuVersion" required>
                                                                                        <option>18.04</option>
                                                                                        <option>20.04</option>
                                                                                        <option>22.04</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid version.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'Windows' && (
                                                                                <div className="Windows mt-4">
                                                                                    <label className="form-label" htmlFor="windowsVersion">Windows Version</label>
                                                                                    <select className="form-select" id="windowsVersion" required>
                                                                                        <option>2019</option>
                                                                                        <option>2022</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'Linux' && (
                                                                                <div className="Windows mt-4">
                                                                                    <label className="form-label" htmlFor="linuxVersion">Alma Linux Version</label>
                                                                                    <select className="form-select" id="linuxVersion" required>
                                                                                        <option>8.4</option>
                                                                                        <option>8.7</option>
                                                                                        <option>9.0</option>
                                                                                        <option>9.1</option>
                                                                                        <option>9.2</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'CentOS' && (
                                                                                <div className="Windows mt-4">
                                                                                    <label className="form-label" htmlFor="centOSVersion">CentOS Version</label>
                                                                                    <select className="form-select" id="centOSVersion" required>
                                                                                        <option>7</option>
                                                                                        <option>8</option>
                                                                                        <option>8 Stream</option>
                                                                                        <option>9 Stream</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'Debian' && (
                                                                                <div className="Windows mt-4">
                                                                                    <label className="form-label" htmlFor="debianVersion">Debian Version</label>
                                                                                    <select className="form-select" id="debianVersion" required>
                                                                                        <option>9</option>
                                                                                        <option>10</option>
                                                                                        <option>11</option>
                                                                                        <option>12</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'Rocky' && (
                                                                                <div className="Windows mt-4">
                                                                                    <label className="form-label" htmlFor="rockyVersion">Rocky Linux Version</label>
                                                                                    <select className="form-select" id="rockyVersion" required>
                                                                                        <option>8.4</option>
                                                                                        <option>9</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={`tabs-content ${activeTab === 2 ? "active" : ""}`} id="tab-2">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="row simple-pricing-container app-arrow">
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('Plesk')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">Plesk</h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center mb-3">
                                                                                    <Image alt="Plesk" className="img-fluid" src="/assets/images/new/Plesk.png" width={64} height={64} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('cPanel')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">cPanel</h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="cPanel" className="img-fluid" src="/assets/images/new/cPanel.png" width={67} height={62} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('Wordpress')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">Wordpress</h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="Wordpress" className="img-fluid" src="/assets/images/new/Wordpress.png" width={45} height={64} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('NGINX')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">NGINX </h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="NGINX" className="img-fluid" src="/assets/images/new/NGINX.png" width={45} height={64} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('OpenVPN')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">OpenVPN </h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="OpenVPN" className="img-fluid" src="/assets/images/new/OpenVPN.png" width={45} height={64} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('MariaDB')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">MariaDB </h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="MariaDB" className="img-fluid" src="/assets/images/new/MariaDB.png" width={45} height={64} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-xl-3 p-3">
                                                                        <div className="simple-pricing-card card" onClick={() => handleOSClick('NextCloud')} style={{ cursor: 'pointer' }}>
                                                                            <div className="card-body">
                                                                                <div className="simple-price-header text-center">
                                                                                    <h5 className="mb-3">NextCloud </h5>
                                                                                </div>
                                                                                <div className="simple-price-body text-center">
                                                                                    <Image alt="NextCloud" className="img-fluid" src="/assets/images/new/NextCloud.png" width={45} height={64} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <form className="app-form rounded-control row g-3 needs-validation" noValidate>
                                                                            {selectedOS === 'Plesk' && (
                                                                                <div className="Plesk mt-4">
                                                                                    <label className="form-label" htmlFor="pleskVersion">
                                                                                        Plesk Version
                                                                                    </label>
                                                                                    <select className="form-select" id="pleskVersion" required>
                                                                                        <option disabled defaultValue>Select a Plesk Version</option>
                                                                                        <option>AlmaLinux</option>
                                                                                        <option>CentOS 7</option>
                                                                                        <option>Windows 2022</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid version.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'cPanel' && (
                                                                                <div className="cPanel mt-4">
                                                                                    <label className="form-label" htmlFor="cPanelVersion">cPanel Version</label>
                                                                                    <select className="form-select" id="cPanelVersion" required>
                                                                                        <option disabled defaultValue>Select a cPanel Version</option>
                                                                                        <option>Ubuntu 20.04</option>
                                                                                        <option>CloudLinux</option>
                                                                                        <option>AlmaLinux 8</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'Wordpress' && (
                                                                                <div className="Wordpress mt-4">
                                                                                    <label className="form-label" htmlFor="WordpressVersion">Wordpress Version</label>
                                                                                    <select className="form-select" id="WordpressVersion" required>
                                                                                        <option disabled defaultValue>Select a Wordpress Version</option>
                                                                                        <option>Ubuntu 20.04</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'NGINX' && (
                                                                                <div className="NGINX mt-4">
                                                                                    <label className="form-label" htmlFor="nginxVersion">NGINX Version</label>
                                                                                    <select className="form-select" id="nginxVersion" required>
                                                                                        <option disabled defaultValue>Select a NGINX Version</option>
                                                                                        <option>Ubuntu</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'OpenVPN' && (
                                                                                <div className="OpenVPN mt-4">
                                                                                    <label className="form-label" htmlFor="openVPNVersion">OpenVPN Version</label>
                                                                                    <select className="form-select" id="openVPNVersion" required>
                                                                                        <option disabled defaultValue>Select a OpenVPN Version</option>
                                                                                        <option>Ubuntu</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'MariaDB' && (
                                                                                <div className="MariaDB mt-4">
                                                                                    <label className="form-label" htmlFor="mariaDBVersion">MariaDB Version</label>
                                                                                    <select className="form-select" id="mariaDBVersion" required>
                                                                                        <option disabled defaultValue>Select a MariaDB Version</option>
                                                                                        <option>Ubuntu</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                            {selectedOS === 'NextCloud' && (
                                                                                <div className="NextCloud mt-4">
                                                                                    <label className="form-label" htmlFor="nextCloudVersion">NextCloud Version</label>
                                                                                    <select className="form-select" id="nextCloudVersion" required>
                                                                                        <option disabled defaultValue>Select a NextCloud Version</option>
                                                                                        <option>Ubuntu</option>
                                                                                    </select>
                                                                                    <div className="invalid-feedback">Please select a valid state.</div>
                                                                                </div>
                                                                            )}
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Size</h5>
                                                    </div>
                                                    <div className="card card-inside">
                                                        <div className="card-header code-header">
                                                            <h5 className="p-0">CPU Type</h5>
                                                        </div>
                                                        <div className="card-body border-btm">
                                                            <ul className="nav nav-tabs tab-outline-primary row border-0" id="Outline" role="tablist">
                                                                <div className="col-lg-2 col-md-2 col-12 merge-tab">
                                                                    <div className="col-12">
                                                                        <p className="text-center title-cpu">Shared CPU</p>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <li className="nav-item text-center d-flex justify-content-center w-100" role="presentation">
                                                                            <button className="nav-link active w-100" id="basic-tab" data-bs-toggle="tab" data-bs-target="#basic-tab-pane" type="button" role="tab" aria-controls="basic-tab-pane" aria-selected="true">Basic</button>
                                                                        </li>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-9 col-md-9 col-12 merge-tab">
                                                                    <div className="col-12">
                                                                        <p className="text-center title-cpu">Dedicated CPU</p>
                                                                    </div>
                                                                    <div className="col-12 d-flex flex-wrap justify-content-between my-cpu-tab">
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link w-100" id="general-tab" data-bs-toggle="tab" data-bs-target="#general-tab-pane" type="button" role="tab" aria-controls="general-tab-pane" aria-selected="false">General Purpose</button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link w-100" id="cpu-tab" data-bs-toggle="tab" data-bs-target="#cpu-tab-pane" type="button" role="tab" aria-controls="cpu-tab-pane" aria-selected="false">CPU-Optimized</button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link w-100" id="memory-tab" data-bs-toggle="tab" data-bs-target="#memory-tab-pane" type="button" role="tab" aria-controls="memory-tab-pane" aria-selected="false">Memory-Optimized</button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link w-100" id="storage-tab" data-bs-toggle="tab" data-bs-target="#storage-tab-pane" type="button" role="tab" aria-controls="storage-tab-pane" aria-selected="false">Storage-Optimized</button>
                                                                        </li>
                                                                    </div>
                                                                </div>

                                                            </ul>
                                                            <div className="tab-content" id="OutlineContent">
                                                                <div className="tab-pane fade show active" id="basic-tab-pane" role="tabpanel" aria-labelledby="basic-tab" tabIndex={0}>
                                                                    <p>Basic virtual machines with a mix of memory and compute resources. Best for small projects that can handle variable levels of CPU performance, like blogs, web apps and dev/test environments.</p>
                                                                    <h5 className="mb-2 mt-2">CPU Options</h5>
                                                                    <div className="row simple-pricing-container app-arrow">
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-primary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$10/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.015/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">1 GB/1 CPU</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">25 GB NVMe SSDs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">1 TB Transfer </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-secondary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$20/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.03/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">2 GB/1 CPU</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">50 GB NVMe SSDs </p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">2 TB Transfer</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="general-tab-pane" role="tabpanel" aria-labelledby="general-tab" tabIndex={0}>
                                                                    <p>High performance virtual machines with a good balance of memory and dedicated hyper-threads from best in class Intel processors. A great choice for a wide range of mainstream, production workloads, like web app hosting, e-commerce sites, medium-sized databases, and enterprise applications.</p>
                                                                    <h5 className="mb-2 mt-2">CPU Options</h5>
                                                                    <div className="row simple-pricing-container app-arrow">
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-primary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$109/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.162/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">8 GB/4 CPUs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">50 GB NVMe SSDs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">5 TB Transfer </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-secondary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$219/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.324/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">16 GB/8 CPUs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">100 GB NVMe SSDs </p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">8 TB Transfer</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="cpu-tab-pane" role="tabpanel" aria-labelledby="cpu-tab" tabIndex={0}>
                                                                    <p>Compute-optimized virtual machines with dedicated hyper-threads from best in class Intel processors. Best for CPU-intensive applications like CI/CD, video encoding and transcoding, machine learning, ad serving, batch processing, and active front-end web and application servers.</p>
                                                                    <h5 className="mb-2 mt-2">CPU Options</h5>
                                                                    <div className="row simple-pricing-container app-arrow">
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-primary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$159/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.234/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">16 GB/8 CPUs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">100 GB NVMe SSDs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">7 TB Transfer </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-secondary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$329/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.48/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">32 GB/16 CPUs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">200 GB NVMe SSDs </p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">10 TB Transfer</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="memory-tab-pane" role="tabpanel" aria-labelledby="memory-tab" tabIndex={0}>
                                                                    <p>Memory-rich virtual machines with super fast NVMe storage, 8GB of RAM per vCPU and dedicated hyper-threads from best-in-class Intel processors. Ideal for RAM-intensive applications like high-performance databases, web scale in-memory caches, and real-time big data processing.</p>
                                                                    <h5 className="mb-2 mt-2">CPU Options</h5>
                                                                    <div className="row simple-pricing-container app-arrow">
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-primary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$199/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.288/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">32 GB/8 CPUs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">150 GB NVMe SSDs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">6 TB Transfer </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-secondary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$399/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.576/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">64 GB/16 CPUs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">300 GB NVMe SSDs </p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">12 TB Transfer</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="storage-tab-pane" role="tabpanel" aria-labelledby="storage-tab" tabIndex={0}>
                                                                    <p>Droplets with large amounts of super fast NVMe storage, suitable for large NoSQL databases (e.g. MongoDB, Elasticsearch), time series databases, and other data warehouses.</p>
                                                                    <h5 className="mb-2 mt-2">CPU Options</h5>
                                                                    <div className="row simple-pricing-container app-arrow">
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-primary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$149/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.21/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">16 GB/4 CPUs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">500 GB NVMe SSDs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">4 TB Transfer </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6 col-xl-4 p-3">
                                                                            <div className="simple-pricing-card card">
                                                                                <div className="card-body">
                                                                                    <div className="simple-price-body">
                                                                                        <div className="simple-price-value text-center b-r-5 bg-light-secondary d-block ">
                                                                                            <span className="f-s-30 f-w-600 text-center">$299/</span>
                                                                                            <span className=" f-s-12 f-w-600">per month</span>
                                                                                            <p>$0.42/hour</p>
                                                                                        </div>
                                                                                        <div className="simple-price-content">
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">32 GB/8 CPUs</p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex ">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">1 TB NVMe SSDs </p>
                                                                                            </div>
                                                                                            <div className="app-divider-v " />
                                                                                            <div className="d-flex">
                                                                                                <span>
                                                                                                    <i className="ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12" />
                                                                                                </span>
                                                                                                <p className="ms-2 mb-0">8 TB Transfer</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-body Additional-disk">
                                                            <h5 className="p-0 mb-4">Additional Disk</h5>
                                                            <div className="row checkbox-div">
                                                                <div className="col-12">
                                                                    <div className="form-check d-flex align-items-center gap-3">
                                                                        <div>
                                                                            <input className="form-check-input" id="invalidCheck2" required type="checkbox" defaultValue />
                                                                        </div>
                                                                        <div>
                                                                            <label className="form-check-label f-s-18" htmlFor="invalidCheck2">
                                                                                Need more disk space? Add a volume with no manual setup.
                                                                            </label>
                                                                            <p className="form-check-label-p">Block storage volumes add extra disk space. We automatically format and mount your volume so it’s available as soon as your Droplet is, and you can move volumes seamlessly between Droplets at any time. Think of it like a flash drive for your VM.</p>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header pb-0">
                                                        <h5>Automatic Backup</h5>
                                                    </div>
                                                    <div className="card-body ">

                                                        <div className="row ">
                                                            <div className="col-12">
                                                                <div className="form-check d-flex align-items-center gap-3">
                                                                    <div>
                                                                        <input className="form-check-input" id="invalidCheck2" required type="checkbox" defaultValue />
                                                                    </div>
                                                                    <div>
                                                                        <label className="form-check-label f-s-18" htmlFor="invalidCheck2">
                                                                            Enable automated backup plan
                                                                        </label>
                                                                        <p className="form-check-label-p">Ensure the safety of your valuable data with the peace of mind that comes from automatic server backups – your fortress against unexpected data loss. Embrace reliability, effortlessly safeguard your work, and focus on what truly matters, while we handle the protection of your critical information with seamless automated backups <strong className="f-s-19 text-primary">$5/month</strong></p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Authentication Method</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-xxl-4">
                                                                <ul className="active-device-session active-device-list" id="shareMenuLeft">
                                                                    <li>
                                                                        <div className={`card ${authMethod === 'ssh' ? 'share-menu-active' : ''}`}>
                                                                            <div className="card-body">
                                                                                <div className="device-menu-item" draggable="false">
                                                                                    <div className="select-item d-flex gap-2">
                                                                                        <div>
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                id="inlineRadio2"
                                                                                                name="authOption"
                                                                                                type="radio"
                                                                                                value="ssh"
                                                                                                checked={authMethod === 'ssh'}
                                                                                                onChange={() => setAuthMethod('ssh')}
                                                                                            />
                                                                                        </div>
                                                                                        <label className="form-check-label" htmlFor="inlineRadio2">
                                                                                            <span className="d-flex align-items-center">
                                                                                                <span className="ms-2">
                                                                                                    <span className="fs-6">SSH Key</span>
                                                                                                    <span className="d-block text-secondary">Connect to your Server with an SSH key pair</span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            {/* === Password Radio Option === */}
                                                            <div className="col-lg-12 col-xxl-4">
                                                                <ul className="active-device-session active-device-list" id="shareMenuRight">
                                                                    <li>
                                                                        <div className={`card ${authMethod === 'password' ? 'share-menu-active' : ''}`}>
                                                                            <div className="card-body">
                                                                                <div className="device-menu-item" draggable="false">
                                                                                    <div className="select-item d-flex gap-2">
                                                                                        <div>
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                id="inlineRadio1"
                                                                                                name="authOption"
                                                                                                type="radio"
                                                                                                value="password"
                                                                                                checked={authMethod === 'password'}
                                                                                                onChange={() => setAuthMethod('password')}
                                                                                            />
                                                                                        </div>
                                                                                        <label className="form-check-label" htmlFor="inlineRadio1">
                                                                                            <span className="d-flex align-items-center">
                                                                                                <span className="ms-2">
                                                                                                    <span className="fs-6">Password</span>
                                                                                                    <span className="d-block text-secondary">Connect to your Server as the “root” user via password</span>
                                                                                                </span>
                                                                                            </span>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="row">
                                                                {authMethod === 'ssh' && (
                                                                    <div className="col-lg-4">
                                                                        <form className="app-form row g-3 needs-validation" noValidate>
                                                                            <div className="SSH mt-4">
                                                                                <label className="form-label" htmlFor="SSHVersion">
                                                                                    Select SSH Key
                                                                                </label>
                                                                                <select className="form-select" id="SSHVersion" required>
                                                                                    <option>No option</option>
                                                                                </select>
                                                                                <div className="invalid-feedback">Please select a valid version.</div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                )}

                                                                {authMethod === 'password' && (
                                                                    <div className="col-lg-8 col-12">
                                                                        <form className="app-form row " noValidate>
                                                                            <label className="form-label" htmlFor="password">Create Root Password</label>
                                                                            <div className="input-group input-group-password">
                                                                                <input
                                                                                    className="form-control"
                                                                                    id="password"
                                                                                    placeholder="Enter Password"
                                                                                    type={showPassword ? 'text' : 'password'}
                                                                                />
                                                                                <span
                                                                                    className="input-group-text b-r-right"
                                                                                    onClick={() => setShowPassword(prev => !prev)}
                                                                                    style={{ cursor: 'pointer' }}
                                                                                >
                                                                                    <i
                                                                                        className={`ph f-s-20 eyes-icon ${showPassword ? 'ph-eye' : 'ph-eye-slash'}`}
                                                                                    />
                                                                                </span>
                                                                            </div>
                                                                        </form>
                                                                        <br />
                                                                        <h6>Password must meet the following requirements:</h6>
                                                                        <ul>
                                                                            <li><i className="ph-fill ph-dot-outline" /> At least 8 characters long</li>
                                                                            <li><i className="ph-fill ph-dot-outline" /> Contains at least 1 uppercase letter (but not first or last)</li>
                                                                            <li><i className="ph-fill ph-dot-outline" /> Contains at least 1 number</li>
                                                                            <li><i className="ph-fill ph-dot-outline" /> Cannot end in a number or special character</li>
                                                                        </ul>
                                                                    </div>
                                                                )}
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-xl-4 col-lg-12 col-md-12" >
                                <div className="row">
                                    <div className="col-12" ref={summaryRef} id="summaryCard">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Order Summary</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive ps-3">
                                                    <table className="table cart-side-table mb-0">
                                                        <tbody>
                                                            <tr className="total-price">
                                                                <th> monthly</th>
                                                                <th className="text-end">
                                                                    <span id="cart-sub">
                                                                        $28.00
                                                                    </span>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <td>Hourly</td>
                                                                <td className="text-end" id="cart-discount">
                                                                    $0.042
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Quantity</td>
                                                                <td className="d-flex justify-content-end" >
                                                                    <div className="simplespin">
                                                                        <a className="circle-btn decrement" role="button">-</a>
                                                                        <input className="app-small-touchspin count" type="text" defaultValue={1} />
                                                                        <a className="circle-btn increment" role="button">+</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <br />
                                                    <div className="card  scratch-card position-relative ">
                                                        <div className="card-body">
                                                            <div className="scratch-code-box">
                                                                <h6 className="mb-0">WIN190EGHY018</h6>
                                                                <div className="flex-shrink-0">
                                                                    <button className="btn btn-primary btn-sm b-r-24" id="copyBtn">copy
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="mt-3">
                                                                <p className="mb-0">Valid till 4 May 2024. <span>T&amp;C Apply</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="cart-gift text-end mt-4">
                                                        <button className="btn btn-primary rounded">Create Server</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <div className="col-md-6 col-xl-12">
                                    <div className="card  scratch-card position-relative">
                                        <div className="card-body">
                                            <span>
                                                <i className="ph-duotone  ph-gift f-s-35" />
                                            </span>
                                            <h4>Extra 10% off</h4>
                                            <div className="scratch-code-box">
                                                <h6 className="mb-0">WIN190EGHY018</h6>
                                                <div className="flex-shrink-0">
                                                    <button className="btn btn-primary btn-sm b-r-24" id="copyBtn">copy
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-0">Valid till 4 May 2024. <span>T&amp;C Apply</span></p>
                                            </div>
                                            <div className="scratch-overlay" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-12">
                                    <div className="card gift-card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center gap-2">
                                                <img alt="" className="w-35 h-35" src="../assets/images/ecommerce/01.gif" />
                                                <h6 className="text-dark f-w-600 f-s-18 m-0">Buying for a loved one?</h6>
                                            </div>
                                            <div>
                                                <p className="text-secondary mt-2">Gift wrap and personalized message on
                                                    card,
                                                    Only for <span className="text-dark f-w-500"><b>$10.50 USD</b></span>
                                                </p>
                                                <div className="cart-gift text-end mt-4">
                                                    <button className="btn btn-primary rounded">Add Gift</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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
