"use client";
// import { useParams } from "next/navigation";
import React, { Fragment, useState, useEffect } from "react";
import Cookies from "js-cookie";


function UpgragePlan() {

  
        const [plans, setPlans] = useState([]);
        const [selectedPlanId, setSelectedPlanId] = useState(null);
        const [selectedServerId, setSelectedServerId] = useState(null);
        const [preserveDisk, setPreserveDisk] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");
const [statusMessage, setStatusMessage] = useState("");



     const [formData, setFormData] = useState("");
        const handleChange = (e) => {
            console.log(selectedServerId);
            setSelectedServerId(server.id);
            setFormData({
                ...formData,
                processor: server.processor,
                location: server.location,
                [e.target.name]: e.target.value,
            });
        };
    
        console.log("Form Data:", formData);


    
        // api vms plans
        useEffect(() => {
            const token = Cookies.get("accessToken");
            if (token) {
                // console.log("Token found:", token);
                const FetchProject = async () => {
                    console.log(`Bearer ${token}`);
                    setIsLoading(true);
                    try {
                        const response = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/list-plans`,
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
                        setPlans(result.data.vms);
                    } catch (error) {
                        console.error("Error fetching cloud vps plan data:", error);
                        setIsLoading(false);
                    }
                };
                FetchProject();
            }
        }, []);


const handleUpgrade = async () => {
    setErrorMessage("");
    setStatusMessage("");

    if (!selectedPlanId || !selectedServerId) {
        setErrorMessage("Please select a plan first.");
        return;
    }

    const currentPlan = plans.find(plan => plan.id === server.vms_id);
    const selectedPlan = plans.find(plan => plan.id === selectedPlanId);

    if (selectedPlanId === server.vms_id) {
        setErrorMessage("You're already on this plan.");
        return;
    }

    const diskChanged = currentPlan?.disk !== selectedPlan?.disk;
    let statusMessage = "";

    if (!diskChanged && preserveDisk) {
        statusMessage = "Plan changed but disk size will be same.";
    } else if (diskChanged && !preserveDisk) {
        statusMessage = "Plan changed along with disk size.";
    } else {
        statusMessage = "Plan change request sent.";
    }

    try {
        const token = Cookies.get("accessToken");
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${selectedServerId}/upgrade`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                vms_id: selectedPlanId,
                preserve_disk: preserveDisk,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            setStatusMessage(statusMessage);
        } else {
            setErrorMessage(data.message || "Upgrade failed.");
        }
    } catch (error) {
        console.error("Upgrade error:", error);
        setErrorMessage("Something went wrong. Please try again.");
    }
};



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
                <main className={`page-content ${isLoading ? 'pointer-events-none' : ''}`} style={{ opacity: isLoading ? 0.5 : 1 }}>
                    <div className="container-fluid">
                        {/* Breadcrumb start */}
                        <div className="row m-1">
                            <div className="col-12">
                                <h4 className="main-title">Upgrade Plan  </h4>
                                <ul className="app-line-breadcrumbs mb-3">
                                    <li>
                                        <a className="f-s-14 f-w-500" href="/server">
                                            <span>
                                                <i className="ph-duotone  ph-table f-s-16" /> Server
                                            </span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="f-s-14 f-w-500" href="#">Upgrade Plan</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        {/* Breadcrumb end */}

                        {/* Projects start */}
                        <form >
                            <div className="row cart-table">

                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="mb-2 mt-5">CPU Options</h5>

                                            <div className="row simple-pricing-container app-arrow">
                                                {errorMessage && (
    <div className="alert alert-danger" role="alert">
        {errorMessage}
    </div>
)}

{statusMessage && (
    <div className="alert alert-success" role="alert">
        {statusMessage}
    </div>
)}
                                                {plans.map((plan) => (
                                                    <div
                                                        key={plan.id}
                                                        className={`col-md-6 col-xl-4 p-3`}
                                                        onClick={() => {
    setSelectedPlanId(plan.id);
    setSelectedServerId(server.id); // Move here if server is defined in scope
    setFormData((prev) => ({
        ...prev,
        vms_id: plan.id,
    }));
}}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <div
                                                            className={`simple-pricing-card card ${selectedPlanId === plan.id ? "border border-primary shadow-lg" : ""
                                                                }`}
                                                        >
                                                            <input type="hidden" name="vms_id" />
                                                            <div className="card-body">
                                                                <div className="simple-price-body">
                                                                    <div
                                                                        className={`simple-price-value text-center b-r-5 d-block ${selectedPlanId === plan.id ? 'bg-primary text-white' : 'bg-light-dark'
                                                                            }`}
                                                                    >
                                                                        <span className="f-s-30 f-w-600 text-center">${plan.price}/</span>
                                                                        <span className="f-s-12 f-w-600">per month</span>
                                                                        <p>${(plan.price / 720).toFixed(3)}/hour</p>
                                                                    </div>

                                                                    <div className="simple-price-content">
                                                                        <div className="d-flex">
                                                                            <span><i className={`ph-bold ph-check bg-primary p-1 b-r-100 f-s-12 ${selectedPlanId === plan.id ? 'bg-primary text-white' : 'bg-light-dark'
                                                                                }`} /></span>
                                                                            <p className="ms-2 mb-0">{plan.ram} GB / {plan.cpu} CPU</p>
                                                                        </div>
                                                                        <div className="app-divider-v" />
                                                                        <div className="d-flex">
                                                                            <span><i className={`ph-bold ph-check bg-primary p-1 b-r-100 f-s-12 ${selectedPlanId === plan.id ? 'bg-primary text-white' : 'bg-light-dark'
                                                                                }`} /></span>
                                                                            <p className="ms-2 mb-0">{plan.disk} GB NVMe SSDs</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="card-header pb-0">
                                                <h5>Preserve Disk Confirmation</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-check d-flex align-items-center gap-3">
                                                            <div>
                                                                <input
                                                                    className="form-check-input"
  id="preserveDiskCheck"
  type="checkbox"
  checked={preserveDisk}
  onChange={(e) => setPreserveDisk(e.target.checked)}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    className="form-check-label f-s-18"
                                                                    htmlFor="preserveDiskCheck"
                                                                >
                                                                    Do you want to preserve your disk?
                                                                </label>
                                                                <p className="form-check-label-p">
                                                                    If selected, your existing disk data will be retained during
                                                                    the upgrade. If not, all current data on the disk will be
                                                                    removed.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className="btn btn-primary mt-3" onClick={handleUpgrade}>
                                                Upgrade Plan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* Projects end */}
                    </div>
                </main>
            </div>
        </Fragment>
    );
}
export default UpgragePlan;
