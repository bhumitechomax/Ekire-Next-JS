"use client";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import Cookies from "js-cookie";
import Swal from 'sweetalert2';


function SshKeys() {
    const [sshKeys, setSshKeys] = useState(null);
    const [sshKeycount, setSshKeyCount] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        key: "",
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    // const sshKeys = 1;
    // console.log(sshKeys);

    useEffect(() => {
        const token = Cookies.get("accessToken");
        if (token) {
            // console.log("Token found:", token);
            const FetchSshkey = async () => {
                console.log(`Bearer ${token}`);
                setIsLoading(true);
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/sshkeys`,
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
                    setSshKeys(data.sshkeys);
                } catch (error) {
                    console.error("Error fetching cloud vps plan data:", error);
                    setIsLoading(false);
                }
            };

            FetchSshkey();
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSShKey = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setError(null);
        setSuccess(null);

        // Example POST request (Uncomment if you have a backend to send this to)
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/sshkeys`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${Cookies.get("accessToken")}`, // Send the token
                },
                body: JSON.stringify(formData),
            }
        );

        const result = await res.json();

        if (res.ok && result.success) {
            setSuccess(result.message);
            formData.name = ""; // Clear the input field after successful submission
            formData.key = ""; // Clear the input field after successful submission
            setFormData({ name: "", key: "" }); // Clear the input field after successful submission
            window.location.reload(); // Reload the page to see the new project
        } else {
            setError(result.message);
        }
        console.log(result);
    };
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'This SSH key will be permanently deleted!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Yes, delete it!',
        });

        if (!result.isConfirmed) return;

        try {
            const token = Cookies.get("accessToken");
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/sshkey/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();

            if (res.ok && data.success) {
                Swal.fire('Deleted!', data.message || 'SSH key has been deleted.', 'success');
                setSshKeys(prev => prev.filter((key) => key.id !== id));
            } else {
                Swal.fire('Failed!', data.message || 'Could not delete the SSH key.', 'error');
            }
        } catch (error) {
            console.error("Delete failed:", error);
            Swal.fire('Error!', 'Something went wrong.', 'error');
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
                        className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            background: "var(--bodybg-color)",
                            zIndex: 1000,
                        }}
                    >
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                <main
                    className={`page-content  ${isLoading ? "pointer-events-none" : ""}`}
                    style={{ opacity: isLoading ? 0.5 : 1 }}
                >
                    <div className="container-fluid">
                        {/* Breadcrumb start */}
                        <div className="row m-1">
                            <div className="col-12 d-flex justify-content-between">
                                <div>
                                    <h4 className="main-title">My SSH Keys</h4>
                                </div>

                                <div className="text-end">
                                    <button
                                        className="btn btn-primary h-45 icon-btn m-2"
                                        data-bs-target="#projectCard1"
                                        data-bs-toggle="modal"
                                    >
                                        <i className="iconoir-open-new-window f-s-18" /> New SSH Key
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Breadcrumb end */}

                        {/* Projects start */}
                        <div className="row">
                            <div className="col-12">
                                <div className="content-wrapper" id="card-container">
                                    <div className="card p-l-r-30">
                                        <div className="card-body p-0">
                                            <div className="app-datatable-default overflow-auto">
                                                <table
                                                    className="datatable display app-data-table default-data-table"
                                                    id="example"
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th width={10}>Sr no.</th>
                                                            <th>name</th>
                                                            <th>created at</th>
                                                            <th>action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {sshKeys?.map((sshkey, index) => (
                                                            <tr>
                                                                <td>{index + 1}</td>
                                                                <td>{sshkey.name}</td>
                                                                <td>
                                                                    {new Date(
                                                                        sshkey.created_at
                                                                    ).toLocaleTimeString([], {
                                                                        hour: "2-digit",
                                                                        minute: "2-digit",
                                                                        hour12: false,
                                                                    })}
                                                                </td>
                                                                <td className="d-flex">
                                                                    <Link href={`/sshKeys/${sshkey.id}`}>
                                                                        <span className="badge text-white bg-success d-flex gap-2 me-2">
                                                                            <i className="ph-duotone ph-eye f-s-18" />{" "} View
                                                                        </span>
                                                                    </Link>
                                                                    <button
                                                                        className="btn btn-danger-light b-r-22 d-flex align-items-center gap-1"
                                                                        type="button"
                                                                        onClick={() => handleDelete(sshkey.id)}
                                                                    >
                                                                        <i className="ph-bold ph-trash-simple" /> Delete
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        {/* <tr>
                                                            <td>2</td>
                                                            <td>2nd key</td>
                                                            <td>Feb 22nd, 2024</td>
                                                            <td className="d-flex"><Link href={`/sshKeys/${sshKeys}`}><span className="badge text-white bg-success d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
                                                        </tr> */}
                                                    </tbody>
                                                </table>
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
                <div
                    aria-hidden="true"
                    aria-labelledby="projectCardLabel"
                    className="modal fade"
                    id="projectCard1"
                    tabIndex={-1}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="d-flex align-items-center gap-2">
                                    <h1 className="modal-title fs-5" id="projectCardLabel">
                                        Add SSH Key{" "}
                                    </h1>
                                    <iconify-icon
                                        icon="line-md:plus-circle"
                                        className="animeted-plus-circle f-s-22"
                                    />
                                </div>

                                <button
                                    aria-label="Close"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    type="button"
                                />
                            </div>
                            <div className="modal-body">
                                <form
                                    className="app-form rounded-control  row g-3"
                                    onSubmit={handleSShKey}
                                >
                                    {success && (
                                        <div className="alert alert-success mt-2 text-success mb-0" style={{ background: "none", border: "0", padding: "0" }} role="alert">
                                            {success}
                                        </div>
                                    )}
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="validationDefault01">
                                            Name
                                        </label>
                                        <input
                                            className="form-control"
                                            id="validationDefault01"
                                            name="name"
                                            type="text"
                                            placeholder="Enter SSH Key Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {error && (
                                        <div className="alert alert-danger mt-2" role="alert">
                                            {error}
                                        </div>
                                    )}
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="validationDefault02">
                                            SSH Key
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="validationDefault02"
                                            name="key"
                                            type="text"
                                            value={formData.key}
                                            onChange={handleChange}
                                            placeholder="Enter SSH Key Value"
                                            required
                                        />
                                        {error && (
                                            <div className="alert alert-danger mt-2" role="alert">
                                                {error}
                                            </div>
                                        )}
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                            type="button"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="btn btn-primary"
                                            id="addCard"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default SshKeys;
