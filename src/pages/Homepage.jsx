"use client";
import React, { Fragment, useEffect, useState, useRef } from "react";
// import Image from "next/image";
import Slider from 'react-slick';

import $ from "jquery";
// import "datatables.net";

const Homepage = () => {


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
    useEffect(() => {
        if (typeof window !== "undefined") {
            const tables = $(".datatable").map(function () {
                return $(this).DataTable();
            });

            return () => {
                tables.each(function () {
                    this.destroy();
                });
            };
        }
    }, []);


    // vertical slider
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let scrollInterval;

        if (container) {
            const scrollStep = 1;
            const scrollDelay = 15;

            const startScrolling = () => {
                scrollInterval = setInterval(() => {
                    container.scrollTop += scrollStep;

                    if (container.scrollTop >= container.scrollHeight / 2) {
                        container.scrollTop = 0;
                    }
                }, scrollDelay);
            };

            startScrolling();

            const stopScrolling = () => clearInterval(scrollInterval);

            container.addEventListener("mouseenter", stopScrolling);
            container.addEventListener("mouseleave", startScrolling);

            return () => {
                stopScrolling();
                container.removeEventListener("mouseenter", stopScrolling);
                container.removeEventListener("mouseleave", startScrolling);
            };
        }
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <Fragment>

            {/* <Header /> */}
            {/* <div className="position-relative">
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
                )} */}

            {/* Always rendered page content */}
            <main >



                <div className="container-fluid mt-3">
                    <div className="alert alert-light-border-primary alert-dismissible  d-flex align-items-center justify-content-between mt-3 cookies-alert" role="alert">
                        <p className="mb-0 d-flex align-items-center flex-row">
                            <iconify-icon icon="line-md:alert-circle-loop" className="f-s-20 me-2"></iconify-icon>
                            Add your payment details to enable automatic payments for invoices and service charges
                        </p>
                        <button aria-label="Close" className="btn-close text-white" data-bs-dismiss="alert" type="button" />
                    </div>
                    <div className="alert alert-primary alert-dismissible  d-flex align-items-center justify-content-between mt-3 cookies-alert" role="alert">
                        <p className="mb-0 d-flex align-items-center flex-row">
                            <img alt="image" className="w-20 h-20 me-2" src="../assets/images/icons/cookie-.png" />
                            We have Cookies! We use it to ensure you get the best experience on our website and service
                        </p>
                        <button aria-label="Close" className="btn-close text-white" data-bs-dismiss="alert" type="button" />
                    </div>
                    <div className="alert alert-light-border-danger alert-dismissible  d-flex align-items-center justify-content-between mt-3 cookies-alert" role="alert">
                        <p className="mb-0 d-flex align-items-center flex-row">
                            <iconify-icon icon="line-md:phone-add" className="f-s-20 me-2"></iconify-icon>
                            Add your payment details to enable automatic payments for invoices and service charges
                        </p>
                        <button aria-label="Close" className="btn-close text-white" data-bs-dismiss="alert" type="button" />
                    </div>
                    <div className="row">

                        <div className="col-lg-12 col-xxl-12">
                            <div className="row">

                                <div className="col-xxl-4 col-lg-4">
                                    <div className="card project-total-card">
                                        <div className="card-body">
                                            <div className="d-flex position-relative">
                                                <h5 className="text-dark txt-ellipsis-1">Active Servers</h5>
                                                <div className="clock-box">
                                                    <img alt="avtar" className="img-fluid" src="../assets/images/New/Animation.gif" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex">
                                                    <h2 className="text-info-dark ">435</h2>
                                                </div>
                                                <div className="progress-labels mg-t-40">
                                                    <span className="text-info">Productive</span>
                                                    <span className="text-info">Middle</span>
                                                    <span className="text-info">Idle</span>
                                                </div>
                                                <div className="custom-progress-container info-progress">
                                                    <div className="progress-bar productive" />
                                                    <div className="progress-bar middle" />
                                                    <div className="progress-bar idle" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-lg-4">
                                    <div className="card bg-info-300 project-details-card">
                                        <div className="card-body">
                                            <div className="d-flex gap-2">
                                                <h5 className="text-dark txt-ellipsis-1">Available Balance</h5>
                                            </div>
                                            <div className="my-4">
                                                <h3 className="f-w-600 text-info-dark txt-ellipsis-1">34.62K</h3>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <img alt="avtar" className="img-fluid text-start" src="../assets/images/New/coin.png" />
                                                <span className="badge bg-white-300 text-info-dark ms-2 ">🔥 1H left</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-lg-4">
                                    <div className="card core-teams-card">
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <h5 className="text-dark f-w-600 txt-ellipsis-1">Open Tickets</h5>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-end">
                                                <h2 className="text-warning-dark my-4 d-inline-flex align-items-baseline">14</h2>
                                                <ul className="avatar-group justify-content-start ">
                                                    <li className="h-50 w-50 d-flex-center b-r-50 overflow-hidden text-bg-primary b-2-light" data-bs-title="Sabrina Torres" data-bs-toggle="tooltip">
                                                        <img alt="avtar" className="img-fluid" src="../assets/images/avtar/4.png" />
                                                    </li>
                                                    <li className="h-50 w-50 d-flex-center b-r-50 overflow-hidden text-bg-success b-2-light" data-bs-title="Eva Bailey" data-bs-toggle="tooltip">
                                                        <img alt="avtar" className="img-fluid" src="../assets/images/avtar/5.png" />
                                                    </li>
                                                    <li className="h-50 w-50 d-flex-center b-r-50 overflow-hidden text-bg-danger b-2-light" data-bs-title="Michael Hughes" data-bs-toggle="tooltip">
                                                        <img alt="avtar" className="img-fluid" src="../assets/images/avtar/6.png" />
                                                    </li>
                                                    <li className="text-bg-secondary h-50 w-50 d-flex-center b-r-50" data-bs-title="10 More" data-bs-toggle="tooltip">
                                                        10+
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xxl-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="fade-s app-arrow">
                                        <Slider {...settings}>
                                            <div className="item slide-slick image-overlay-wrapper">
                                                <img alt="image" className="img-fluid rounded" src="../assets/images/new/offer.png" />
                                                <div className="gradient-overlay" />
                                                <div className="text-overlay">
                                                    <span className="tag">Special Offer</span>
                                                    <h2 className="headline">🚀 Black Friday 2024 Promotion: Save Big on Cloud Servers! </h2>
                                                </div>
                                            </div>

                                            <div className="item slide-slick image-overlay-wrapper">
                                                <img alt="image" className="img-fluid rounded" src="../assets/images/new/promo.png" />
                                                <div className="gradient-overlay" />
                                                <div className="text-overlay">
                                                    <span className="tag">Promo Code </span>
                                                    <h2 className="headline">🎉 Don’t Miss Out – Apply Your Magic Code!</h2>
                                                </div>
                                            </div>

                                            <div className="item slide-slick image-overlay-wrapper">
                                                <img alt="image" className="img-fluid rounded" src="../assets/images/new/plan.png" />
                                                <div className="gradient-overlay" />
                                                <div className="text-overlay">
                                                    <span className="tag">Plans Link</span>
                                                    <h2 className="headline">💼 No Hidden Fees. Just Smart Choices.</h2>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xxl-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card ">
                                        <div className="card-body">
                                            {/* <div className="project-expense" id="projectExpense" style={{ height: "26rem !important" }} /> */}
                                            <div id="timeseries-chart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-xxl-6 order-1-md">
                            <div className="p-3">
                                <h5>Active services</h5>
                            </div>
                            <div className="card p-l-r-30">
                                <div className="card-body p-0">
                                    <div className="app-datatable-default overflow-auto">
                                        <table className=" display app-data-table default-data-table " id="example">
                                            <thead>
                                                <tr>
                                                    <th>Sr no</th>
                                                    <th>Date</th>
                                                    <th>IP</th>
                                                    <th>OS</th>
                                                    <th>Country</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Feb 22nd, 2024</td>
                                                    <td>192.168.1.1</td>
                                                    <td>macOS</td>
                                                    <td>Canada</td>
                                                    <td><span className="badge text-light-success">success </span></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Feb 22nd, 2024</td>
                                                    <td>192.168.1.4</td>
                                                    <td>Windows 11</td>
                                                    <td>UK</td>
                                                    <td><span className="badge text-light-danger">failed</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-3 ">
                            <div className="p-3">
                                <h5>Pending invoices & support tickets</h5>
                            </div>
                            <div className="card">
                                <div className="card-body position-relative">
                                    <ul className="tracker-history-list app-scroll mt-3">
                                        <li className="bg-info-300">
                                            <div>
                                                <h6 className="text-info-dark mb-0">support tickets</h6>
                                            </div>
                                            <div className="text-dark f-w-600 ms-2">
                                                0
                                            </div>
                                        </li>
                                        <li className="bg-primary-300">
                                            <div>
                                                <h6 className="text-primary-dark mb-0">Pending invoices</h6>
                                            </div>
                                            <div className="text-dark f-w-600 ms-2">
                                                0
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-5 col-xxl-3">
                            <div className="p-3">
                                <h5>News & Updates, Maintenance</h5>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="task-container slider" ref={containerRef} >
                                        <div className="scroll-wrapper">
                                            {[...Array(2)].map((_, i) => (
                                                <div key={i}>
                                                    <div className="card task-card bg-danger-300">
                                                        <div className="card-body">
                                                            <h6 className="text-danger-dark txt-ellipsis-1">Finalize Project Proposal</h6>
                                                            <ul className="avatar-group justify-content-start my-3">
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-primary">
                                                                    <img alt="avtar" className="img-fluid" src="../assets/images/avtar/4.png" />
                                                                </li>
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-success" data-bs-title="Lennon Briggs" data-bs-toggle="tooltip">
                                                                    <img alt="avtar" className="img-fluid" src="../assets/images/avtar/5.png" />
                                                                </li>
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-danger" data-bs-title="Maya Horton" data-bs-toggle="tooltip">
                                                                    <img alt="avtar" className="img-fluid" src="../assets/images/avtar/6.png" />
                                                                </li>
                                                            </ul>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress w-100" role="progressbar">
                                                                    <div className="progress-bar bg-danger-dark progress-bar-striped progress-bar-animated" style={{ width: '68%' }} />
                                                                </div>
                                                                <span className="badge bg-white-300 text-danger-dark ms-2 ">+ 68%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="d-flex justify-content-between align-items-center rounded p-1 bg-primary-300">
                                                            <span className="bg-primary h-35 w-35 d-flex-center rounded">
                                                                <i className="iconoir-group f-s-18" />
                                                            </span>
                                                            <h6 className="mb-0 txt-ellipsis-1">Meeting</h6>
                                                            <div className="d-flex gap-2">
                                                                <span className="w-35 h-35 bg-white-300 text-info-dark rounded p-2 d-flex-center"><i className="iconoir-more-horiz f-s-18" />
                                                                </span>
                                                                <span className="w-35 h-35 bg-white-300 text-info-dark rounded p-2 d-flex-center"><i className="iconoir-copy f-s-18" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card task-card bg-warning-300">
                                                        <div className="card-body">
                                                            <h6 className="text-warning-dark txt-ellipsis-1">Design Homepage Layout</h6>
                                                            <ul className="avatar-group justify-content-start my-3">
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-primary">
                                                                    <img alt="avtar" className="img-fluid" src="../assets/images/avtar/3.png" />
                                                                </li>
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-info" data-bs-title="Sophia Turner" data-bs-toggle="tooltip">
                                                                    <img alt="avtar" className="img-fluid" src="../assets/images/avtar/7.png" />
                                                                </li>
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-warning" data-bs-title="Lucas Green" data-bs-toggle="tooltip">
                                                                    <img alt="avtar" className="img-fluid" src="../assets/images/avtar/8.png" />
                                                                </li>
                                                            </ul>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress w-100" role="progressbar">
                                                                    <div className="progress-bar bg-warning-dark progress-bar-striped progress-bar-animated" style={{ width: '35%' }} />
                                                                </div>
                                                                <span className="badge bg-white-400 text-secondary-dark ms-2">+ 35%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="d-flex justify-content-between align-items-center rounded p-1 bg-info-300">
                                                            <span className="bg-info h-35 w-35 d-flex-center rounded">
                                                                <i className="iconoir-group f-s-18" />
                                                            </span>
                                                            <h6 className="mb-0 txt-ellipsis-1">Meeting</h6>
                                                            <div className="d-flex gap-2">
                                                                <span className="w-35 h-35 bg-white-300 text-info-dark rounded p-2 d-flex-center"><i className="iconoir-more-horiz f-s-18" />
                                                                </span>
                                                                <span className="w-35 h-35 bg-white-300 text-info-dark rounded p-2 d-flex-center"><i className="iconoir-copy f-s-18" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="d-flex justify-content-between align-items-center rounded p-1 bg-success-300">
                                                            <span className="bg-success h-35 w-35 d-flex-center rounded">
                                                                <i className="iconoir-group f-s-18" />
                                                            </span>
                                                            <h6 className="mb-0 txt-ellipsis-1">Meeting</h6>
                                                            <div className="d-flex gap-2">
                                                                <span className="w-35 h-35 bg-white-300 text-info-dark rounded p-2 d-flex-center"><i className="iconoir-more-horiz f-s-18" />
                                                                </span>
                                                                <span className="w-35 h-35 bg-white-300 text-info-dark rounded p-2 d-flex-center"><i className="iconoir-copy f-s-18" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card task-card bg-info-300">
                                                        <div className="card-body">
                                                            <h6 className="text-info-dark txt-ellipsis-1">Develop API Integration</h6>
                                                            <ul className="avatar-group justify-content-start my-3">
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-info">
                                                                    <img alt="avatar" className="img-fluid" src="../assets/images/avtar/4.png" />
                                                                </li>
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-info" data-bs-title="Michael Johnson" data-bs-toggle="tooltip">
                                                                    <img alt="avatar" className="img-fluid" src="../assets/images/avtar/6.png" />
                                                                </li>
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-warning" data-bs-title="Emily Brown" data-bs-toggle="tooltip">
                                                                    <img alt="avatar" className="img-fluid" src="../assets/images/avtar/5.png" />
                                                                </li>
                                                            </ul>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={60} className="progress w-100" role="progressbar">
                                                                    <div className="progress-bar bg-info-dark progress-bar-striped progress-bar-animated" style={{ width: '60%' }} />
                                                                </div>
                                                                <span className="badge bg-white-400 text-secondary-dark ms-2">+ 60%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card task-card bg-success-300">
                                                        <div className="card-body">
                                                            <h6 className="text-success-dark txt-ellipsis-1">Test User Feedback</h6>
                                                            <ul className="avatar-group justify-content-start my-3">
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-primary">
                                                                    <img alt="avatar" className="img-fluid" src="../assets/images/avtar/9.png" />
                                                                </li>
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-info" data-bs-title="Alice Smith" data-bs-toggle="tooltip">
                                                                    <img alt="avatar" className="img-fluid" src="../assets/images/avtar/10.png" />
                                                                </li>
                                                                <li className="h-35 w-35 d-flex-center b-r-50 overflow-hidden bg-success" data-bs-title="John Doe" data-bs-toggle="tooltip">
                                                                    <img alt="avatar" className="img-fluid" src="../assets/images/avtar/11.png" />
                                                                </li>
                                                            </ul>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={80} className="progress w-100" role="progressbar">
                                                                    <div className="progress-bar bg-success-dark progress-bar-striped progress-bar-animated" style={{ width: '80%' }} />
                                                                </div>
                                                                <span className="badge bg-white-400 text-secondary-dark ms-2">+ 80%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* welcome modal */}
                <div className="modal" data-bs-backdrop="static" id="welcomeCard">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content welcome-card">
                            <div className="modal-body p-0">
                                <div className="text-center position-relative welcome-card-content z-1 p-3">
                                    <div className="text-end position-relative z-1">
                                        <i className="ti ti-x fs-5 text-dark f-w-600" data-bs-dismiss="modal" />
                                    </div>
                                    <h2 className="f-w-700 text-primary-dark mb-0">
                                        <span>Welcome!</span>
                                        <img alt="gif" className="w-45 d-inline align-baseline" src="../assets/images/dashboard/ecommerce-dashboard/celebration.gif" />
                                    </h2>
                                    <div className="modal-img-box">
                                        <img alt="img" className="img-fluid" src="../assets/images/modals/welcome-1.png" />
                                    </div>
                                    <div className="modal-btn mb-4">
                                        <button className="btn btn-primary text-white btn-sm rounded" data-bs-dismiss="modal" type="button" >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div aria-hidden="true" aria-labelledby="ticketModalLabel" className="modal fade" id="ticketModal" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header bg-primary">
                                <h1 className="modal-title fs-5 text-white" id="ticketModalLabel">Add Ticket</h1>
                                <button aria-label="Close" className="btn-close m-0" data-bs-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <div className="ticket-form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Title</label>
                                                <input className="form-control" id="titlename" placeholder="Title" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Client</label>
                                                <input className="form-control" id="clientname" placeholder="client" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="priority">Priority</label>
                                                <select className="form-select" id="priority">
                                                    <option defaultValue>Select Priority</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="Lower">Lower</option>
                                                    <option value="High">High</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="status">Status</label>
                                                <select className="form-select" id="status">
                                                    <option defaultValue>Select Status</option>
                                                    <option value="open">open</option>
                                                    <option value="inprogress">inprogress</option>
                                                    <option value="closed">closed</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Date</label>
                                                <input className="form-control" id="datename" name="trip-start" type="date" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Due Date</label>
                                                <input className="form-control" id="duename" type="date" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Close
                                </button>
                                <button className="btn btn-primary" id="ticketkey" type="button">Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>





            {/* <Footer /> */}
        </Fragment>
    );
};

export default Homepage;
