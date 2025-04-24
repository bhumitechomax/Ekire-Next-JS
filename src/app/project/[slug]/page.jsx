"use client";
import { useParams } from "next/navigation";
import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';



function ViewPage() {
    const [activeTab, setActiveTab] = useState(1);

    // Get slug from URL
    const { projects } = useParams();

    // auto load
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    const [members, setMembers] = useState([
        { id: 1, name: 'Allie Grater', email: 'graterallie@gmail.com', createdAt: '2021-03-19', status: 'Block' },
        { id: 2, name: 'Rhoda Report', email: 'reportrhoda@gmail.com', createdAt: '2020-01-19', status: 'Active' },
        { id: 3, name: 'Rose Bush', email: 'rose@gmail.com', createdAt: '2020-10-26', status: 'Active' },
        { id: 4, name: 'Dave Allippa', email: 'dave@gmail.com', createdAt: '2020-06-19', status: 'Block' },
        { id: 5, name: 'Emma Grate', email: 'emma@gmail.com', createdAt: '2022-03-20', status: 'Block' },
        { id: 6, name: 'Mal Nurrisht', email: 'Nurrishtmal@gmail.com', createdAt: '2019-12-29', status: 'Active' },
        { id: 7, name: 'Bess Twishes', email: 'twishes@gmail.com', createdAt: '2020-05-16', status: 'Block' },
        { id: 8, name: 'C. Yasoon', email: 'yasoon@gmail.com', createdAt: '2022-02-16', status: 'Active' },
    ]);

    // State for the new member being added
    const [newMember, setNewMember] = useState({ name: '', email: '', createdAt: '', status: 'Status' });

    // State to keep track of the next available ID
    const [nextId, setNextId] = useState(members.length + 1);

    // Effect to import Bootstrap JavaScript (runs on client-side)
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle');
    }, []);

    // Handles changes in the input fields of the add member modal
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewMember(prevState => ({
            ...prevState,
            [id.replace('-field', '')]: value,
        }));
    };

    // Handles the submission of the add member form
    const handleAddMember = async (e) => {
        e.preventDefault();
        if (newMember.name && newMember.email && newMember.createdAt && newMember.status !== 'Status') {
            setMembers([...members, { ...newMember, id: nextId }]);
            setNextId(nextId + 1);
            setNewMember({ name: '', email: '', createdAt: '', status: 'Status' });

            // Close the modal programmatically after a short delay
            setTimeout(() => {
                const modalElement = document.getElementById('exampleModal');
                if (modalElement) {
                    const modalInstance = bootstrap.Modal.getInstance(modalElement);
                    if (modalInstance) {
                        modalInstance.hide();
                    } else {
                        console.error("Bootstrap modal instance not found.");
                    }
                } else {
                    console.error("Modal element with ID 'exampleModal' not found.");
                }
            }, 100);
        } else {
            alert('Please fill in all the fields and select a status.');
        }
    };

    // Handles the deletion of a member
    const handleDeleteMember = (idToDelete) => {
        setMembers(members.filter(member => member.id !== idToDelete));
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
                                <h4 className="main-title">Magdalena Wisozk {projects || ""} </h4>
                                <ul className="app-line-breadcrumbs mb-3">
                                    <li>
                                        <a className="f-s-14 f-w-500" href="/project">
                                            <span>
                                                <i className="ph-duotone  ph-table f-s-16" /> Projects
                                            </span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="f-s-14 f-w-500" href="#">Magdalena Wisozk</a>
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
                                                    <button className="btn btn-primary h-45 icon-btn m-2" data-bs-target="#projectCard2" data-bs-toggle="modal">
                                                        <i className="ph ph-circles-three-plus f-s-18" />  Add New
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <Image src="/assets/images/New/nodata.gif" width={500} height={500} alt="nodata" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`tabs-content ${activeTab === 2 ? "active" : ""}`} id="tab-2">


                                        <div className="card p-30 equal-card ">
                                            <div className="card-header ps-0">
                                                <h5>Member's List</h5>
                                            </div>
                                            <div className="card-body p-0">
                                                <div id="myTable">
                                                    {/* Table Header with Add Button and Search */}
                                                    <div className="list-table-header d-flex justify-content-sm-between mb-3">
                                                        <button className="btn btn-primary b-r-22" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button">
                                                            Add
                                                        </button>

                                                        {/* Add Employee Modal */}
                                                        <div aria-hidden="true" aria-labelledby="exampleModalLabel" className="modal" id="exampleModal" tabIndex={-1}>
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Employee</h1>
                                                                        <button aria-label="Close" className="btn-close m-0" data-bs-dismiss="modal" type="button" />
                                                                    </div>
                                                                    <form id="add_employee_form" onSubmit={handleAddMember}>
                                                                        <div className="modal-body">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Name :</label>
                                                                                <input className="form-control" id="name-field" placeholder="Name" required type="text" value={newMember.name} onChange={handleInputChange} />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Email :</label>
                                                                                <input className="form-control" id="email-field" placeholder="Email" required type="email" value={newMember.email} onChange={handleInputChange} />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Created At :</label>
                                                                                <input className="form-control" id="createdAt-field" required type="date" value={newMember.createdAt} onChange={handleInputChange} />
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Status :</label>
                                                                                <select aria-label="Default select example" className="form-select" id="status-field" value={newMember.status} onChange={handleInputChange}>
                                                                                    <option value="Status">Status</option>
                                                                                    <option value="Active">Active</option>
                                                                                    <option value="Block">Block</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="modal-footer add">
                                                                            <button className="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
                                                                            <button className="btn btn-primary" id="add-btn" type="submit">Add</button>
                                                                            <button className="btn btn-success b-r-22" id="edit-btn" style={{ display: 'none' }}>Edit</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Search Form */}
                                                        <form action="#" className="app-form app-icon-form ">
                                                            <div className="position-relative ">
                                                                <input aria-label="Search" className="form-control search b-r-22" placeholder="Search..." type="search" />
                                                                <i className="ti ti-search text-dark" />
                                                            </div>
                                                        </form>
                                                    </div>

                                                    {/* Member List Table */}
                                                    <div className="overflow-auto app-scroll">
                                                        <table className="table  table-bottom-border  list-table-data align-middle mb-0">
                                                            <thead>
                                                                <tr className="app-sort">
                                                                    <th className="ps-2 ms-0">
                                                                        <input className="form-check-input  checkAll mt-0 ms-2" name="checkAll" type="checkbox" />
                                                                    </th>
                                                                    <th >ID</th>
                                                                    <th className="sort" data-sort="name" scope="col">Name</th>
                                                                    <th className="sort" data-sort="email" scope="col">Email</th>
                                                                    <th className="sort" data-sort="createdAt" scope="col">Created At</th>
                                                                    <th className="sort" data-sort="action" scope="col">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="list" id="t-data">
                                                                {members.map(member => (
                                                                    <tr key={member.id}>
                                                                        <th scope="row"><input className="form-check-input mt-0 ms-2" name="item" type="checkbox" /></th>
                                                                        <td className="id">{member.id}</td>
                                                                        <td className="name">{member.name}</td>
                                                                        <td className="email">{member.email}</td>
                                                                        <td className="createdAt">{member.createdAt}</td>
                                                                        <td className="remove">
                                                                            <button className="btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1" onClick={() => handleDeleteMember(member.id)}>
                                                                            <i className="ph-fill  ph-trash f-s-22" />  Remove
                                                                            </button>

                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className="list-pagination">
                                                        <ul className="pagination" />
                                                    </div>
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
                <div aria-hidden="true" aria-labelledby="projectCardLabel" className="modal fade" id="projectCard2" tabIndex={-1}>
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
                                <form className="app-form">
                                    <div className="mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text" id="inputGroupPrepend2"><i className="ph-fill  ph-copy" /></span>
                                            <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="Enter Server Id" required="" type="text" />
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
            </div>
        </Fragment>
    );
}

export default ViewPage;
