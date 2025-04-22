"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import React, { Fragment, useRef, useState, useEffect } from "react";


function ViewPage() {

    const { slug } = useParams();
    const realFileRef = useRef(null);
    const customTextRef = useRef(null);
    const [fileName, setFileName] = useState("");
    const [showClear, setShowClear] = useState(false);

    const handleFileClick = () => {
        realFileRef.current?.click();
    };

    const handleFileChange = () => {
        const input = realFileRef.current;
        if (input?.files?.length > 0) {
            const file = input.files[0];
            setFileName(file.name);
            setShowClear(true);
        } else {
            setFileName("");
            setShowClear(false);
        }
    };

    const handleClear = () => {
        if (realFileRef.current) {
            realFileRef.current.value = "";
        }
        setFileName("");
        setShowClear(false);
    };

    // auto load
            const [isLoading, setIsLoading] = useState(true);
            useEffect(() => {
                // Simulate loading
                const timer = setTimeout(() => {
                    setIsLoading(false);
                }, 100);
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
                        <div className="col-12 d-flex justify-content-between">
                            <h4 className="main-title">Ticket {slug} </h4>
                        </div>
                    </div>
                    {/* Breadcrumb end */}

                    {/* Projects start */}
                    <div className="row">
                        <div className="col-12">

                            <div className="content-wrapper" id="card-container">
                                <div className="card">
                                    <div className="card-body">
                                        <form className="row g-3 app-form rounded-control" id="form-validation">
                                            <div className="col-lg-6 col-md-12">
                                                <label className="form-label" htmlFor="validationDefault01">Subject</label>
                                                <input className="form-control" id="validationDefault01" type="text" placeholder="Enter Subject" required />
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <label className="form-label" htmlFor="Support">
                                                    Support Department
                                                </label>
                                                <select className="form-select" id="Support" required>
                                                    <option>General Support</option>
                                                    <option>Technical</option>
                                                    <option>Billing</option>
                                                </select>
                                                <div className="invalid-feedback">Please select a valid version.</div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label" htmlFor="address">Content</label>
                                                <textarea className="form-control" id="address" placeholder="Your Message....." type="text" />
                                                <div className="mt-1">
                                                    <span className="text-danger" id="addressError" />
                                                </div>
                                            </div>


                                            <div className="col-12 d-flex flex-column gap-2">
                                                <div className="app-form">
                                                    <input hidden id="real-file" type="file" ref={realFileRef} onChange={handleFileChange} />
                                                    <div className="d-flex align-items-start flex-column-reverse gap-3">

                                                        <div className="d-flex gap-4 align-items-center">
                                                            <span className="custom-text" id="custom-text" ref={customTextRef}>
                                                                {fileName}
                                                            </span>
                                                            {showClear && (
                                                                <a id="clear-button" onClick={handleClear}>
                                                                    <i className="ph-bold ph-trash"></i>
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <button
                                                        className="flex-shrink-0 border-0 bg-none text-primary"
                                                        id="custom-button"
                                                        type="button"
                                                        onClick={handleFileClick}
                                                    >
                                                        <i className="iconoir-attachment f-s-30"></i>
                                                    </button>
                                                    <button className="btn btn-primary b-r-22" type="submit">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5>Ticket messages</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="ticket-comment-box mb-3">
                                            <div className="d-flex justify-content-between position-relative flex-wrap">
                                                <div className="flex-grow-1 ps-2 pe-2">
                                                    <h6 className="mb-3">Ekire <span className="badge bg-light-info text-info p-1 f-s-12 ms-2">Ekire Staff</span></h6>
                                                    <p className="text-dark mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, voluptatibus.</p>
                                                    <span>IP Address: 2405:201:3040:7803:b43a:7fa0:fb7a:34df</span>
                                                </div>
                                                <div className="ms-5">
                                                    <p>Feb 9, 2022 10:31 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ticket-comment-box mb-3">
                                            <div className="d-flex justify-content-between position-relative flex-wrap">
                                                <div className="flex-grow-1 ps-2 pe-2">
                                                    <h6 className="mb-3">Sandhya</h6>
                                                    <p className="text-dark mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, voluptatibus.</p>
                                                    <span>IP Address: 2405:201:3040:7803:b43a:7fa0:fb7a:34df</span>
                                                </div>
                                                <div className="ms-5">
                                                    <p>Feb 9, 2022 10:31 AM</p>
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
export default ViewPage;
