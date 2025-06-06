"use client";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
// import 'datatables.net-dt/css/jquery.dataTables.css';
// import 'datatables.net';

import Cookies from "js-cookie";


function Transactions() {

    const [activeTab, setActiveTab] = useState(1);
    const [Transactions , setTransactions] = useState([]);
    const [Count, setCount] = useState([]);

    // auto load
    const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
                const token = Cookies.get("accessToken");
                if (token) {
                  // console.log("Token found:", token);
                  const Records = async () => {
                    console.log(`Bearer ${token}`);
                    setIsLoading(true);
                    try {
                      const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/transactions`,
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
                      setTransactions(data.transactions);
                      setCount(data.transactions_count);
        
                     
                      setIsLoading(false);
                      console.log("formData", formData);
            
                   
                    } catch (error) {
                      console.error("Error fetching cloud vps plan data:", error);
            
                    
                        setIsLoading(false);
                    }
                  };
            
                  Records();
                 
                }
              }, []);

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
                <main className={`page-content  ${isLoading ? 'pointer-events-none' : ''}`} style={{ opacity: isLoading ? 0.5 : 1 }}>
                    <div className="container-fluid">
                        {/* Breadcrumb start */}
                        <div className="row m-1">
                            <div className="col-12 ">
                                <h4 className="main-title">Transactions</h4>
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
                                            <i className="ph-bold  ph-align-right f-s-18" /> Financial Log
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            <i className="ph-fill ph-list-bullets f-s-18" /> Usage Log
                                        </li>
                                        <li className="ms-auto d-flex">

                                        </li>

                                    </ul>
                                </div>

                                <div className="content-wrapper" id="card-container">
                                    <div className={`tabs-content ${activeTab === 1 ? "active" : ""}`} id="tab-1">
                                        <div className="card p-l-r-30">
                                            <div className="card-body p-0">
                                                <div className="app-datatable-default overflow-auto">
                                                    <table className="datatable display app-data-table default-data-table" id="example1">
                                                        <thead>
                                                            <tr>
                                                                <th width={10}>Sr no.</th>
                                                                <th  width={10}>Customer Id</th>
                                                                <th>Description</th>
                                                                <th className="text-center">Amount</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody> 
                                                            {Transactions.map((Transaction, index) => (
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{Transaction.customer_id}</td>
                                                                <td>{Transaction.description}</td>
                                                                <td className="text-center">{Transaction.amount}</td>
                                                                <td className="d-flex">
                                                                    <span className="badge bg-success text-white d-flex gap-2">
                                                                        <i className="ph-duotone ph-eye f-s-18" /> View
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                             ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`tabs-content ${activeTab === 2 ? "active" : ""}`} id="tab-2">
                                        <div className="card p-l-r-30">
                                            <div className="card-body p-0">
                                                <div className="app-datatable-default overflow-auto">
                                                    <table className="datatable display app-data-table default-data-table" id="example3">
                                                        <thead>
                                                            <tr>
                                                                <th width={10}>Sr no.</th>
                                                                <th>name</th>
                                                                <th>created at</th>
                                                                <th>members count</th>
                                                                <th>servers count</th>
                                                                <th>action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>My New Project50</td>
                                                                <td>Feb 22nd, 2024</td>
                                                                <td>1</td>
                                                                <td>0</td>
                                                                <td className="d-flex">
                                                                    <span className="badge bg-success text-white d-flex gap-2">
                                                                        <i className="ph-duotone ph-eye f-s-18" /> View
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Dr. Burnice Larson</td>
                                                                <td>Feb 22nd, 2024</td>
                                                                <td>5</td>
                                                                <td>0</td>
                                                                <td className="d-flex">
                                                                    <span className="badge bg-success text-white d-flex gap-2">
                                                                        <i className="ph-duotone ph-eye f-s-18" /> View
                                                                    </span>
                                                                </td>
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
                {/* modal 1 */}
                <div aria-hidden="true" aria-labelledby="projectCardLabel" className="modal fade" id="projectCard1" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="d-flex align-items-center gap-2">
                                    <h1 className="modal-title fs-5" id="projectCardLabel">Top Up Balance </h1>
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
export default Transactions;
