"use client";
// import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";


function Finance() {

    useEffect(() => {
        const togglePassword = (inputId, iconClass) => {
            const input = document.getElementById(inputId);
            const icon = document.querySelector(iconClass);

            if (input && icon) {
                icon.addEventListener("click", () => {
                    const isPassword = input.type === "password";
                    input.type = isPassword ? "text" : "password";
                    icon.classList.toggle("ph-eye", isPassword);
                    icon.classList.toggle("ph-eye-slash", !isPassword);
                });
            }
        };

        togglePassword("password", ".eyes-icon");
        togglePassword("password1", ".eyes-icon1");
        togglePassword("password2", ".eyes-icon2");

        return () => {
            // Optional cleanup
        };
    }, []);


    // c-s-c
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");

    // Fetch countries
    useEffect(() => {
        axios
            .get("https://countriesnow.space/api/v0.1/countries/positions")
            .then((res) => {
                const countryNames = res.data.data.map((c) => c.name);
                setCountries(countryNames);
            });
    }, []);

    // Fetch states when country changes
    useEffect(() => {
        if (!selectedCountry) return;

        axios
            .post("https://countriesnow.space/api/v0.1/countries/states", {
                country: selectedCountry,
            })
            .then((res) => {
                const stateNames = res.data.data.states.map((s) => s.name);
                setStates(stateNames);
                setCities([]);
                setSelectedState("");
            });
    }, [selectedCountry]);

    // Fetch cities when state changes
    useEffect(() => {
        if (!selectedCountry || !selectedState) return;

        axios
            .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
                country: selectedCountry,
                state: selectedState,
            })
            .then((res) => {
                setCities(res.data.data);
            });
    }, [selectedState]);

    // auto load
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
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
                            <div className="col-12 ">
                                <h4 className="main-title">Accounts</h4>
                            </div>
                        </div>
                        {/* Breadcrumb end */}

                        {/* setting-app start */}
                        <div className="row">
                            <div className="col-lg-4 col-xxl-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Settings</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="vertical-tab setting-tab">
                                            <ul className="nav nav-tabs tab-light-primary " id="v-bg" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button aria-controls="profile-tab-pane" aria-selected="true" className="nav-link active" data-bs-target="#profile-tab-pane" data-bs-toggle="tab" id="profile-tab" role="tab" type="button"><i className="ph-bold  ph-user-circle-gear pe-2" />
                                                        Profile
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button aria-controls="security-tab-pane" aria-selected="false" className="nav-link" data-bs-target="#security-tab-pane" data-bs-toggle="tab" id="security-tab" role="tab" type="button"><i className="ph-bold  ph-shield-check pe-2" />Security
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card hover-effect card-light-primary mt-4">
                                            <div className="card-body">
                                                <h5>Used space</h5>
                                                <p className="mt-2 text-secondary f-s-16">Your team has used 80% of your
                                                    available space.need more?</p>
                                                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={0} className="progress w-100 mt-3 mb-3" role="progressbar">
                                                    <div className="progress-bar bg-primary progress-bar-striped" style={{ width: '78.5%' }} />
                                                </div>
                                                <span className="mt-4">
                                                    <a className="me-3 text-secondary" href="#">Dismiss</a>
                                                    <a className="text-d-underline" href="#">Upgrade plan</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="app-divider-v" />
                                        <div className="d-flex align-items-center">
                                            <span className="h-45 w-45 d-flex-center bg-warning b-r-50 position-relative">
                                                <img alt="avtar" className="img-fluid b-r-50" src="../assets/images/avtar/9.png" />
                                                <span className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle" />
                                            </span>
                                            <div className="flex-grow-1 ps-2 log-out-profile">
                                                <div className="f-w-600 fs-6"> Ninfa Monaldo</div>
                                                <div className="text-secondary f-s-12">Web Developer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xxl-9">
                                <div className="tab-content">
                                    <div aria-labelledby="profile-tab" className="tab-pane fade active show" id="profile-tab-pane" role="tabpanel" tabIndex={0}>
                                        <div className="card security-card-content">
                                            <div className="card-body">
                                                <div className="account-security">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm-8">
                                                            <h5 className="text-primary f-w-600">Profile Setup</h5>
                                                            <p className="account-discription text-secondary f-s-16 mt-2 mb-0">your account is valuable to hackers. to make 2-step verification very secure, use your phone's built-in security key</p>
                                                        </div>
                                                        <div className="col-sm-4 account-security-img">
                                                            <img alt="" className="w-150" src="../assets/images/setting-app/account.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card setting-profile-tab">
                                            <div className="card-body">
                                                <div className="profile-tab profile-container">
                                                    <form className="app-form">
                                                        <h5 className="mb-2 text-dark f-w-600">User Info</h5>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label">First Name</label>
                                                                    <input className="form-control" placeholder="Maria C. Eck" type="text" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Last Name</label>
                                                                    <input className="form-control" placeholder="Eck" type="text" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Email address</label>
                                                                    <input className="form-control" placeholder="MariaCEck@teleworm.us" type="email" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Phone no</label>
                                                                    <input className="form-control" placeholder="8899665522" type="tel" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Taxation Id</label>
                                                                    <input className="form-control" placeholder="test" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="app-divider-v dotted" />
                                                            </div>
                                                            <h5 className="mb-2 text-dark f-w-600">Billing Address</h5>

                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label" htmlFor="inputCountry">Country</label>
                                                                <select id="inputCountry" className="form-select" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                                                                    <option value="">Choose Country</option>
                                                                    {countries.map((country) => (
                                                                        <option key={country}>{country}</option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label" htmlFor="inputState">State</label>
                                                                <select id="inputState" className="form-select" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}
                                                                    disabled={!selectedCountry}>
                                                                    <option value="">Choose State</option>
                                                                    {states.map((state) => (
                                                                        <option key={state}>{state}</option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label" htmlFor="inputCity">City</label>
                                                                <select id="inputCity" className="form-select" disabled={!selectedState}>
                                                                    <option value="">Choose City</option>
                                                                    {cities.map((city) => (
                                                                        <option key={city}>{city}</option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="inputZip">Zip/Pin Code</label>
                                                                    <input className="form-control" id="inputZip" placeholder="CT 06510" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="mb-3">
                                                                    <label className="form-label">Full Address</label>
                                                                    <textarea className="form-control" placeholder="1098 Asylum Avenu New Haven, CT 06510" defaultValue={""} />
                                                                </div>
                                                            </div>

                                                            <div className="col-12">
                                                                <div className="text-end">
                                                                    <button className="btn text-dark border me-3" type="reset">Cancel</button>
                                                                    <button className="btn btn-primary" type="submit">Submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div aria-labelledby="security-tab" className="tab-pane fade" id="security-tab-pane" role="tabpanel" tabIndex={0}>
                                        <div className="card security-card-content">
                                            <div className="card-body">
                                                <div className="account-security">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm-8">
                                                            <h5 className="text-primary f-w-600">Account Security</h5>
                                                            <p className="account-discription text-secondary f-s-16 mt-2 mb-0">
                                                                your account is valuable to
                                                                hackers. to make 2-step verification very secure, use
                                                                your phone's built-in security key</p>
                                                        </div>
                                                        <div className="col-sm-4 account-security-img">
                                                            <img alt="" className="w-150" src="../assets/images/setting-app/password.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card security-card-content">
                                            <div className="card-body">
                                                <div className="app-form">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <label className="form-label" htmlFor="password">Current Password</label>
                                                            <div className="input-group input-group-password mb-3">
                                                                <span className="input-group-text b-r-left">
                                                                    <i className="ph-bold ph-lock f-s-20" />
                                                                </span>
                                                                <input
                                                                    className="form-control"
                                                                    id="password"
                                                                    placeholder="********"
                                                                    type="password"
                                                                />
                                                                <span className="input-group-text b-r-right">
                                                                    <i className="ph ph-eye-slash f-s-20 eyes-icon" id="showPassword" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12">
                                                            <label className="form-label" htmlFor="password1">New Password</label>
                                                            <div className="input-group input-group-password mb-3">
                                                                <span className="input-group-text b-r-left">
                                                                    <i className="ph-bold ph-lock f-s-20" />
                                                                </span>
                                                                <input
                                                                    className="form-control"
                                                                    id="password1"
                                                                    placeholder="********"
                                                                    type="password"
                                                                />
                                                                <span className="input-group-text b-r-right">
                                                                    <i className="ph ph-eye-slash f-s-20 eyes-icon1" id="showPassword1" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12">
                                                            <label className="form-label" htmlFor="password2">Confirm Password</label>
                                                            <div className="input-group input-group-password mb-3">
                                                                <span className="input-group-text b-r-left">
                                                                    <i className="ph-bold ph-lock f-s-20" />
                                                                </span>
                                                                <input
                                                                    className="form-control"
                                                                    id="password2"
                                                                    placeholder="********"
                                                                    type="password"
                                                                />
                                                                <span className="input-group-text b-r-right">
                                                                    <i className="ph ph-eye-slash f-s-20 eyes-icon2" id="showPassword2" />
                                                                </span>
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
                        {/*setting app end */}
                    </div>
                </main>
            </div>

        </Fragment>
    );
}
export default Finance;
