"use client";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";



function Finance() {

    const [activeTab, setActiveTab] = useState(1);

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
                <main className={`page-content  ${isLoading ? 'pointer-events-none' : ''}`} style={{ opacity: isLoading ? 0.5 : 1 }}>
                    <div className="container-fluid">
                        {/* Breadcrumb start */}
                        <div className="row m-1">
                            <div className="col-12 ">
                                <h4 className="main-title">Balance</h4>
                            </div>
                        </div>
                        {/* Breadcrumb end */}

                        {/* Projects start */}
                        <div className="row">
                            <div className="col-12">

                                {/* <div className="tab-wrapper mb-3">
                                    <ul className="tabs overflow-auto">
                                        <li
                                            className={`tab-link ${activeTab === 1 ? "active" : ""}`}
                                            onClick={() => setActiveTab(1)}
                                        >
                                            <i className="ph-bold  ph-align-right f-s-18" /> Balance
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            <i className="ph-fill ph-list-bullets f-s-18" /> Transactions
                                        </li>
                                        <li className="ms-auto d-flex">

                                        </li>

                                    </ul>
                                </div> */}

                                <div className="content-wrapper" id="card-container">
                                <div className="card ">
                                            <div className="card-body p-0">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="card security-card-content">
                                                            <div className="card-header">
                                                                {/* <h5>Region</h5> */}
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-xxl-6">
                                                                        <ul className="active-device-session active-device-list" id="shareMenuLeft">
                                                                            <li>
                                                                                <div className="card share-menu-active">
                                                                                    <div className="card-body merge-title gap-5">
                                                                                        <div className="device-menu-item " draggable="false">
                                                                                            <span className="device-menu-img">
                                                                                                <i className="iconoir-card-wallet f-s-40 text-primary" />
                                                                                            </span>
                                                                                            <div className="device-menu-content">
                                                                                                <h1 className="mb-0 txt-ellipsis-1">$45.54K</h1>
                                                                                                <h6 className="mb-0 txt-ellipsis-1 text-white">Available Balance</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="">
                                                                                            <div className="text-end">
                                                                                                <button className="btn text-dark-11 h-45 icon-btn m-2" data-bs-target="#projectCard1" data-bs-toggle="modal">
                                                                                                    <i className="ti ti-plus f-s-18" /> Top Up
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="text-end">
                                                                                                <button className="btn btn-primary h-45 icon-btn m-2" data-bs-target="#projectCard2" data-bs-toggle="modal">
                                                                                                    <i className="iconoir-gift f-s-18" />  Redeem Gift Code
                                                                                                </button>
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
                                    <h1 className="modal-title fs-5" id="projectCardLabel">Top Up Balance </h1>
                                    {/* <iconify-icon icon="line-md:arrow-right-square" className="f-s-22" style={{ color: "#e5484d" }} /> */}
                                </div>

                                <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form className="app-form">
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend2">$</span>
                                            <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="0" required="" type="number" />
                                        </div>
                                    </div>
                                </form>
                                <div className="form-selectgroup">
                                    <div className="select-item">
                                        <label className="form-check-label ms-5" htmlFor="inlineRadio1">
                                            <span className="d-flex align-items-center">
                                                <img alt="" className="w-30 h-30" src="../assets/images/checkbox-radio/logo1.png" />
                                                <span className="ms-2">
                                                    <span className="fs-6 ">Stripe</span>
                                                </span>
                                            </span>
                                        </label>
                                        <input className="form-check-input" id="inlineRadio1" name="inlineRadioOptions" type="radio" defaultValue="option1" />
                                    </div>
                                    <div className="select-item ">
                                        <input className="form-check-input" id="inlineRadio2" name="inlineRadioOptions" type="radio" defaultValue="option2" />
                                        <label className="form-check-label ms-5" htmlFor="inlineRadio2">
                                            <span className="d-flex align-items-center">
                                                <img alt="" className="w-30 h-30" src="../assets/images/New/wallet.png" />
                                                <span className="ms-2">
                                                    <span className="fs-6">Crypto</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="select-item" >
                                        <input className="form-check-input" id="inlineRadio3" name="inlineRadioOptions" type="radio" defaultValue="option3" />
                                        <label className="form-check-label ms-5" htmlFor="inlineRadio3">
                                            <span className="d-flex align-items-center">
                                                <img alt="" className="w-30 h-30" src="../assets/images/checkbox-radio/logo3.png" />
                                                <span className="ms-2">
                                                    <span className="fs-6">Paypal</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Cancel</button>
                                <button className="btn btn-primary" id="addCard" type="button">Make Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal 2 */}
                <div aria-hidden="true" aria-labelledby="projectCardLabel" className="modal fade" id="projectCard2" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="d-flex align-items-center gap-2">
                                    <h1 className="modal-title fs-5" id="projectCardLabel">Redeem Gift Code</h1>
                                    {/* <iconify-icon icon="line-md:document-add" className="f-s-22" style={{ color: "#198754" }} /> */}
                                </div>
                                <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form className="app-form">
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend2"><i className="iconoir-gift f-s-18" /></span>
                                            <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="Enter Gift Code" required="" type="text" />
                                        </div>
                                    </div>
                                </form>
                                <div className="form-selectgroup">
                                    <div className="select-item">
                                        <label className="form-check-label ms-5" htmlFor="inlineRadio1">
                                            <span className="d-flex align-items-center">
                                                <img alt="" className="w-30 h-30" src="../assets/images/New/stripe.png" />
                                                <span className="ms-2">
                                                    <span className="fs-6 ">Stripe</span>
                                                </span>
                                            </span>
                                        </label>
                                        <input className="form-check-input" id="inlineRadio1" name="inlineRadioOptions" type="radio" defaultValue="option1" />
                                    </div>
                                    <div className="select-item ">
                                        <input className="form-check-input" id="inlineRadio2" name="inlineRadioOptions" type="radio" defaultValue="option2" />
                                        <label className="form-check-label ms-5" htmlFor="inlineRadio2">
                                            <span className="d-flex align-items-center">
                                                <img alt="" className="w-30 h-30" src="../assets/images/New/wallet.png" />
                                                <span className="ms-2">
                                                    <span className="fs-6">Crypto</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="select-item" >
                                        <input className="form-check-input" id="inlineRadio3" name="inlineRadioOptions" type="radio" defaultValue="option3" />
                                        <label className="form-check-label ms-5" htmlFor="inlineRadio3">
                                            <span className="d-flex align-items-center">
                                                <img alt="" className="w-30 h-30" src="../assets/images/checkbox-radio/logo3.png" />
                                                <span className="ms-2">
                                                    <span className="fs-6">Paypal</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Cancel</button>
                                <button className="btn btn-primary" id="addCard" type="button">Make Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Finance;
