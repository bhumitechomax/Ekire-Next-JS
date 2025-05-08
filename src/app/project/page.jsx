"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Script from "next/script";
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';

function Project() {
  const tableRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
  });
  const [activeTab, setActiveTab] = useState(1);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const project = 1;

  console.log(projects);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      // console.log("Token found:", token);
      const FetchProject = async () => {
        console.log(`Bearer ${token}`);
        setIsLoading(true);
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/projects`,
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
          setProjects(data.Projects);
        } catch (error) {
          console.error("Error fetching cloud vps plan data:", error);
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

  const handleProject = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Example POST request (Uncomment if you have a backend to send this to)
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/projects`,
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
      setFormData({ name: "" }); // Clear the input field after successful submission
      window.location.reload(); // Reload the page to see the new project
    } else {
      setError(result.message);
    }
    console.log(result);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer); // cleanup on re-render
  }, [success, error]);

  // auto load
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Initialize DataTable after the projects are fetched
  useEffect(() => {
    // Initialize DataTable when the component is mounted
    if (projects.length > 0) {
      $(document).ready(function () {
        $('#example').DataTable();
      });
    }

    // Clean up on unmount
    return () => {
      if (typeof window !== "undefined") {
        const dataTable = $('#example').DataTable();
        if (dataTable) {
          dataTable.destroy(true);
        }
      }
    };
  }, [projects]);

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

        {/* Always rendered page content */}
        <main
          className={`page-content  ${isLoading ? "pointer-events-none" : ""}`}
          style={{ opacity: isLoading ? 0.5 : 1 }}
        >
          <div className="container-fluid">
            {/* Breadcrumb start */}
            <div className="row m-1">
              <div className="col-12 merge-title p-0">
                <h4 className="main-title">Projects </h4>
                <div className="d-flex overflow-auto">
                  <div className="text-end">
                    <button
                      className="btn text-dark h-45 icon-btn m-2"
                      data-bs-target="#projectCard1"
                      data-bs-toggle="modal"
                    >
                      <i className="ti ti-plus f-s-18" /> Join a Project
                    </button>
                  </div>
                  <div className="text-end">
                    <button
                      className="btn btn-primary h-45 icon-btn m-2"
                      data-bs-target="#projectCard2"
                      data-bs-toggle="modal"
                    >
                      <i className="iconoir-open-new-window f-s-18" /> Create
                      New Project
                    </button>
                  </div>
                </div>
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
                      <i className="ph-bold  ph-align-right f-s-18" /> My
                      Projects
                    </li>
                    <li
                      className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                      onClick={() => setActiveTab(2)}
                    >
                      <i className="ph-fill ph-list-bullets f-s-18" />{" "}
                      Collaborative Projects
                    </li>
                  </ul>
                </div>

                <div className="content-wrapper" id="card-container">
                  <div
                    className={`tabs-content ${
                      activeTab === 1 ? "active" : ""
                    }`}
                    id="tab-1"
                  >
                    <div className="card p-l-r-30">
                      <div className="card-body p-0">
                        <div className="app-datatable-default overflow-auto">
                          <table
                            className="datatable display app-data-table default-data-table"
                            ref={tableRef}
                            id="example"
                          >
                            <thead>
                              <tr>
                                <th width={10}>Sr no.</th>
                                <th>Project Name</th>
                                <th>Members</th>
                                <th>Servers</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {projects.map((project, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{project.name}</td>
                                  <td>{project.members_count}</td>
                                  <td>{project.servers_count}</td>
                                  <td className="d-flex">
                                    <Link href={`/project/${project.id}`}>
                                      <span className="badge text-white bg-success d-flex gap-2">
                                        <i className="ph-duotone ph-eye f-s-18" />{" "}
                                        View
                                      </span>
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tabs-content ${
                      activeTab === 2 ? "active" : ""
                    }`}
                    id="tab-2"
                  >
                    <div className="card p-l-r-30">
                      <div className="card-body p-0">
                        <div className="app-datatable-default overflow-auto">
                          <table
                            className="datatable display app-data-table default-data-table"
                            id="example1"
                          >
                            <thead>
                              <tr>
                                <th style={{ width: "20px" }}>
                                  Transaction ID
                                </th>
                                <th>name</th>
                                <th>created at</th>
                                <th>transaction detail</th>
                                <th>action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>My New Project50</td>
                                <td>Feb 22nd, 2024</td>
                                <td>your details</td>
                                <td className="d-flex">
                                  <button className="btn btn-outline-success">
                                    <i className="fa fa-edit" />
                                  </button>
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
      </div>

      {/* Project Modal */}
      <div className="modal fade" id="projectCard2" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <form onSubmit={handleProject}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Project Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Fragment>

   
  );
}
export default Project;
