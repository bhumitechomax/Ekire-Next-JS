"use client";
import { useParams } from "next/navigation";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ListTable from '../../MemberListTable'
import Cookies from "js-cookie";



function ViewPage() {
    const tableRef = useRef();
    const [formData, setFormData] = useState({ email: "", project_id: "" });
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(1);
    const [projects, setProjects] = useState([]);

    const [data, setData] = useState([]);
    const [members, setMembers] = useState([]);


    // Get slug from URL
    const params = useParams();
    const id = params.slug;


    // auto load
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const token = Cookies.get("accessToken");
        if (token && id) {
            console.log("Fetching ID:", id);
            // console.log("Token found:", token);
            const FetchProject = async () => {
                console.log(`Bearer ${token}`);
                setIsLoading(true);
                try {
                    console.log(id)
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/project/${id}`,
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
                    setProjects(data.project);
                    setMembers(data.members);


                    setFormData(prev => ({
                        ...prev,
                        project_id: data.project?.id || "",
                    }));

                } catch (error) {
                    console.error("Error :", error);
                    setIsLoading(false);
                }
            };
            FetchProject();
        }
    }, []);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(null); // clear previous success
        setError({}); // clear previous errors

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/projects/attach-member`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Cookies.get("accessToken")}`,
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await res.json();
            console.log(result);

            if (res.ok && result.success) {
                setSuccess(result.message);
                setFormData({ email: "", project_id: "" });

                // Close modal after a short delay and reload page
                setTimeout(() => {
                    const modal = bootstrap.Modal.getInstance(document.getElementById("yourModalId"));
                    modal?.hide();
                    window.location.reload();
                }, 1500);
            } else {
                setError(result.errors || { general: [result.message || "Something went wrong."] });
            }
        } catch (err) {
            console.error("Unexpected error:", err);
            setError({ general: ["Unexpected error occurred."] });
        }
    };


    console.log(" members", members)

    const handleAttachServer = async (serverId, projectId) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/projects/attach-server`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${Cookies.get("accessToken")}`, // Make sure token exists
                },
                body: JSON.stringify({
                    server_id: serverId,
                    project_id: projectId,
                }),
            });

            const result = await res.json();
            console.log("Attach Server Result:", result);

            if (res.ok && result.success) {
                alert("Server attached successfully!");
                window.location.reload(); // Reload the page or refresh data
            } else {
                alert(result.message || "Failed to attach server.");
            }
        } catch (error) {
            console.error("Error attaching server:", error);
            alert("Something went wrong while attaching the server.");
        }
    };



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
                <main>
                    <div className="container-fluid">
                        {/* breadcrum */}
                        <div className="row m-1">
                            <div className="col-12">
                                <h4 className="main-title">{projects.name || ""} </h4>
                                <ul className="app-line-breadcrumbs mb-3">
                                    <li>
                                        <a className="f-s-14 f-w-500" href="/project">
                                            <span>
                                                <i className="ph-duotone  ph-table f-s-16" /> Projects
                                            </span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="f-s-14 f-w-500" href="#">{projects.name || ""}</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        {/* breadcrum */}


                        <div className="row">
                            <div className="col-12">
                                <div className="tab-wrapper mb-3">
                                    <ul className="tabs">
                                        <li className={`tab-link ${activeTab === 1 ? "active" : ""}`}
                                            onClick={() => setActiveTab(1)}
                                        >
                                            <i className="ph-bold ph-hard-drives f-s-18" /> Servers
                                        </li>
                                        <li className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            <i className="ph-bold  ph-users f-s-18" /> Members
                                        </li>

                                    </ul>
                                </div>
                                <div className="content-wrapper">
                                    <div className={`tabs-content ${activeTab === 1 ? "active" : ""}`} id="tab-1">
                                        <div className="card">
                                            <div className="card-header border-btm d-flex align-items-center justify-content-between">
                                                <h5>Project Servers</h5>
                                                <div className="text-end">
                                                    <button className="btn btn-primary h-45 icon-btn m-2" data-bs-target="#projectCard1" data-bs-toggle="modal">
                                                        <i className="ph ph-circles-three-plus f-s-18" />  Attach Server
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                {/* <div className="text-center">
                                                    <Image src="/assets/images/New/nodata.gif" width={500} height={500} alt="nodata" />
                                                </div> */}
                                                <div className="app-datatable-default overflow-auto">
                                                    <table ref={tableRef}
                                                        className="datatable display app-data-table default-data-table"
                                                        id="example"
                                                    >
                                                        <thead>
                                                            <tr>
                                                                <th width={10}>Sr no.</th>
                                                                <th>Server Id</th>
                                                                <th>Project Id</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.map((item, index) => (
                                                                <tr key={index}>
                                                                    <td>{index + 1}</td>
                                                                    <td>{item.server_id}</td>
                                                                    <td>{item.project_id}</td>
                                                                    <td>
                                                                        <button
                                                                            className="btn btn-sm btn-primary"
                                                                            onClick={() => handleAttachServer(item.server_id, item.project_id)}
                                                                        >
                                                                            Attach
                                                                        </button>
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


                                        {/* <ListTable /> */}

                                        <div className="card">
                                            <div className="card-header border-btm d-flex align-items-center justify-content-between">
                                                <h5>Project Servers</h5>
                                                <div className="text-end">
                                                    <button className="btn btn-primary h-45 icon-btn m-2" data-bs-target="#projectCard2" data-bs-toggle="modal">
                                                        <i className="ph ph-circles-three-plus f-s-18" />  Attach Member
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="app-datatable-default overflow-auto">
                                                    <table ref={tableRef}
                                                        className="datatable display app-data-table default-data-table"
                                                        id="example1"
                                                    >
                                                        <thead>
                                                            <tr>
                                                                <th>Sr no.</th>
                                                                <th>Name</th>
                                                                <th>Email Id</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {members.map((member, index) => (
                                                                <tr key={index}>
                                                                    <td>{index + 1}</td>
                                                                    <td>{member.name ?? ''}</td>
                                                                    <td>{member.email ?? ''}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* modal 1 */}
                <div aria-hidden="true" aria-labelledby="projectCardLabel" className="modal fade" id="projectCard1" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="d-flex align-items-center gap-2">
                                    <h1 className="modal-title fs-5" id="projectCardLabel">Add new server to project </h1>
                                    <iconify-icon icon="line-md:text-box-to-text-box-multiple-transition" className="animated-box-multiple-transition f-s-22" />
                                </div>
                                <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    {success && (
                                        <div className="alert alert-success">{success}</div>
                                    )}
                                    <div className="mb-3">
                                        <label htmlFor="server_id" className="form-label">Add Server</label>
                                        <select
                                            id="server_id"
                                            name="server_id"
                                            className="form-control"
                                            value={formData.server_id}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a server</option>
                                            {data.map((item, index) => (
                                                <option key={index} value={item.server_id}>
                                                    Server ID: {item.server_id} (Project: {item.project_id})
                                                </option>
                                            ))}
                                        </select>

                                        {error.server_id && (
                                            <div className="text-danger small">{error.server_id[0]}</div>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="hidden"
                                            id="project_id"
                                            name="project_id"
                                            className="form-control"
                                            value={formData.project_id}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>


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
                                    <h1 className="modal-title fs-5" id="projectCardLabel">Add new Member to project </h1>
                                    <iconify-icon icon="line-md:text-box-to-text-box-multiple-transition" className="animated-box-multiple-transition f-s-22" />
                                </div>
                                <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    {success && <div className="alert alert-success p-0 text-success" style={{ background: "none", border: "0" }}>{success}</div>}
                                    {error.general && (
                                        <div className="alert alert-danger p-0 text-danger" style={{ background: "none", border: "0" }}>{error.general[0]}</div>
                                    )}
                                    <div className="mb-3">
                                        <label htmlFor="email_id" className="form-label">Email Id</label>
                                        <input
                                            type="text"
                                            id="email_id"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        {error.email && (
                                            <div className="text-danger small">{error.email[0]}</div>
                                        )}
                                    </div>
                                    <input
                                        type="hidden"
                                        id="project_id"
                                        name="project_id"
                                        value={formData.project_id}
                                        onChange={handleChange}
                                    />

                                    <button className="btn btn-secondary me-2" data-bs-dismiss="modal" type="button">
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ViewPage;
