"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";



function Project() {
    const[formData, setFormData] = useState({
        name:""
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
          const UpdateProfile = async () => {
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

             
              console.log("formData", formData);
    
           
            } catch (error) {
              console.error("Error fetching cloud vps plan data:", error);
    
            
                setIsLoading(false);
            }
          };
    
          UpdateProfile();
         
        }
      }, []);

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

          const handleProject = async (e) => {
              e.preventDefault();
              console.log('Form Data:', formData);
          
              // Example POST request (Uncomment if you have a backend to send this to)
              const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/projects`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get("accessToken")}` // Send the token
                 },
                body: JSON.stringify(formData)
              });
      
              const result = await res.json();
      
              if(res.ok && result.success) {
                  setSuccess(result.message);
                  formData.name = ""; // Clear the input field after successful submission
                  setFormData({ name: "" }); // Clear the input field after successful submission
                  window.location.reload(); // Reload the page to see the new project
                 }
              else{
                  setError(result.message);
              }
              console.log(result);
            };
      
                 useEffect(() => {
             const timer = setTimeout(() => {
             
               setSuccess('');
               setError('');
             }, 5000); // 5000 ms = 5 seconds
           
             return () => clearTimeout(timer); // cleanup on re-render
           }, [ success, error]);

    // auto load
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
    //       const tables = $(".datatable").map(function () {
    //         return $(this).DataTable();
    //       });

    //       return () => {
    //         tables.each(function () {
    //           this.destroy();
    //         });
    //       };
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

                {/* Always rendered page content */}
                <main className={`page-content  ${isLoading ? 'pointer-events-none' : ''}`} style={{ opacity: isLoading ? 0.5 : 1 }}>
                    <div className="container-fluid">
                        {/* Breadcrumb start */}
                        <div className="row m-1">
                            <div className="col-12 merge-title p-0">
                                <h4 className="main-title">Projects </h4>
                                <div className="d-flex overflow-auto">
                                    <div className="text-end">
                                        <button className="btn text-dark h-45 icon-btn m-2" data-bs-target="#projectCard1" data-bs-toggle="modal">
                                            <i className="ti ti-plus f-s-18" /> Join a Project
                                        </button>
                                    </div>
                                    <div className="text-end">
                                        <button className="btn btn-primary h-45 icon-btn m-2" data-bs-target="#projectCard2" data-bs-toggle="modal">
                                            <i className="iconoir-open-new-window f-s-18" />  Create New Project
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
                                            <i className="ph-bold  ph-align-right f-s-18" /> My Projects
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            <i className="ph-fill ph-list-bullets f-s-18" /> Collaborative Projects
                                        </li>

                                    </ul>
                                </div>

                                <div className="content-wrapper" id="card-container">
                                    <div className={`tabs-content ${activeTab === 1 ? "active" : ""}`} id="tab-1">
                                        <div className="card p-l-r-30">
                                            <div className="card-body p-0">
                                                <div className="app-datatable-default overflow-auto">
                                                    <table className="datatable display app-data-table default-data-table" id="example">
                                                        <thead>
                                                            <tr>
                                                                <th width={10}>Sr no.</th>
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
                                                                <td className="d-flex"><Link href={`/project/${project}`}><span className="badge text-white bg-success d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Feb 22nd, 2024</td>
                                                                <td>192.168.1.4</td>
                                                                <td>Windows 11</td>
                                                                <td>UK</td>
                                                                <td className="d-flex"><Link href={`/project/${project}`}><span className="badge text-white bg-success d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
                                                            </tr>
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
                                                    <table className="datatable display app-data-table default-data-table" id="example1">
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '20px' }}>transiction ID</th>
                                                                <th>name</th>
                                                                <th>created at</th>
                                                                <th>transiction detail</th>
                                                                <th>action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>My New Project50</td>
                                                                <td>Feb 22nd, 2024</td>
                                                                <td>your details</td>
                                                                <td className="d-flex"><Link href=""><span className="badge text-white bg-secondary d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>Dr. Burnice Larson</td>
                                                                <td>Feb 22nd, 2024</td>
                                                                <td>your details</td>
                                                                <td className="d-flex"><Link href=""><span className="badge text-white bg-secondary d-flex gap-2 "><i className="ph-duotone ph-eye f-s-18" /> View </span></Link></td>
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

                    {/* modal 1 */}
                    <div aria-hidden="true" aria-labelledby="projectCardLabel" className="modal fade" id="projectCard1" tabIndex={-1}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="d-flex align-items-center gap-2">
                                        <h1 className="modal-title fs-5" id="projectCardLabel">Join a Project </h1>
                                        <iconify-icon icon="line-md:arrow-right-square" className="f-s-22" style={{ color: "#e5484d" }} />
                                    </div>

                                    <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                                </div>
                                <div className="modal-body">
                                    <form className="app-form">
                                        <div className="mb-3">
                                            <div className="input-group">
                                                <span className="input-group-text" id="inputGroupPrepend2"><i className="ph-fill  ph-copy" /></span>
                                                <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="Enter Invitation Code" required="" type="text" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Cancel</button>
                                    <button className="btn btn-primary" id="addCard" type="button" data-bs-dismiss="modal">Submit</button>
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
                                        <h1 className="modal-title fs-5" id="projectCardLabel">Create New Project </h1>
                                        <iconify-icon icon="line-md:document-add" className="f-s-22" style={{ color: "#198754" }} />
                                    </div>
                                    <button aria-label="Close" className="btn-close" data-bs-dismiss="modal" type="button" />
                                </div>
                                    <form className="app-form" onSubmit={handleProject}>
                                <div className="modal-body">
                                        {error && <div className="alert alert-danger">{error}</div>}
                                        {success && <div className="alert alert-success">{success}</div>}
                                        <div className="mb-3">
                                            <div className="input-group">
                                                <span className="input-group-text" id="inputGroupPrepend2"><i className="ph-fill  ph-copy" /></span>
                                                <input type="text" name="name" aria-describedby="inputGroupPrepend2" onChange={handleChange} className="form-control"  id="name" placeholder="Enter New Project Name" required />
                                                {error.name && <div className="text-danger">{error.name}</div>}
                                            </div>
                                        </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Cancel</button>
                                    <button className="btn btn-primary" id="addCard" type="submit" >Submit</button>
                                </div>
                                    </form>
                            </div>
                        </div>
                    </div>

                </main>
            </div>




        </Fragment>
    );
}
export default Project;
