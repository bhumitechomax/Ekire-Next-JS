'use client';

import React, { useState } from 'react';
import styles from '../list.module.css'; // Assuming you still want to use some local styles

interface Member {
    id: number;
    name: string;
    email: string;
    createdAt: string;
    status: string;
}

const itemsPerPage = 10;

const MemberListTable: React.FC = () => {
    const [members, setMembers] = useState<Member[]>([
        { id: 1, name: 'Alice Smith', email: 'alice.smith@example.com', createdAt: '2025-04-20', status: 'Active' },
        { id: 2, name: 'Bob Johnson', email: 'bob.johnson@example.com', createdAt: '2025-04-21', status: 'Inactive' },
        { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', createdAt: '2025-04-22', status: 'Pending' },
        { id: 4, name: 'Diana Lee', email: 'diana.lee@example.com', createdAt: '2025-04-23', status: 'Active' },
        { id: 5, name: 'Ethan Williams', email: 'ethan.williams@example.com', createdAt: '2025-04-24', status: 'Active' },
        { id: 6, name: 'Fiona Green', email: 'fiona.green@example.com', createdAt: '2025-04-25', status: 'Inactive' },
        { id: 7, name: 'George Harris', email: 'george.harris@example.com', createdAt: '2025-04-26', status: 'Pending' },
        { id: 8, name: 'Hannah Clark', email: 'hannah.clark@example.com', createdAt: '2025-04-27', status: 'Active' },
        { id: 9, name: 'Ian Lewis', email: 'ian.lewis@example.com', createdAt: '2025-04-28', status: 'Active' },
        { id: 10, name: 'Jane Miller', email: 'jane.miller@example.com', createdAt: '2025-04-19', status: 'Inactive' },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [newMember, setNewMember] = useState<Omit<Member, 'id'>>({
        name: '',
        email: '',
        createdAt: new Date().toISOString().split('T')[0],
        status: 'Status', // Initial value for the select
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMembers = members.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(members.length / itemsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewMember((prevMember) => ({
            ...prevMember,
            [name]: value,
        }));
    };

    const handleAddMember = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMember.status === 'Status') {
            alert('Please select a valid status.');
            return;
        }
        const nextId = members.length > 0 ? Math.max(...members.map((m) => m.id)) + 1 : 1;
        setMembers((prevMembers) => [
            ...prevMembers,
            { id: nextId, ...newMember },
        ]);
        closeModal();
        setNewMember({
            name: '',
            email: '',
            createdAt: new Date().toISOString().split('T')[0],
            status: 'Status',
        });
    };

    const dropMember = (id: number) => {
        setMembers((prevMembers) => prevMembers.filter((member) => member.id !== id));
    };

    return (

        <div className="card p-30 equal-card ">
            <div className="card-header ps-0">
                <div className='d-flex justify-content-between'>
                    <h5>Members List</h5>
                    <div>
                        <button className="btn btn-primary d-flex gap-3 p-2 align-items-center" onClick={openModal}>
                            <i className='ph-bold  ph-plus f-s-18 '></i>  Add Member
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="card-body p-0">
                <div className={styles.container}>



                    {/* Bootstrap Modal Structure */}
                    <div aria-hidden="true" aria-labelledby="exampleModalLabel" className={`modal ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex={-1} style={{ display: showModal ? 'block' : 'none' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add Employee</h1>
                                    <button aria-label="Close" className="btn-close m-0" data-bs-dismiss="modal" type="button" onClick={closeModal} />
                                </div>
                                <form id="add_employee_form" onSubmit={handleAddMember}>
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label className="form-label">Name :</label>
                                            <input className="form-control" id="name-field" placeholder="Name" required type="text" name="name" value={newMember.name} onChange={handleInputChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email :</label>
                                            <input className="form-control" id="email-field" placeholder="Email" required type="email" name="email" value={newMember.email} onChange={handleInputChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Created At :</label>
                                            <input className="form-control" id="createdAt-field" required type="date" name="createdAt" value={newMember.createdAt} onChange={handleInputChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Status :</label>
                                            <select aria-label="Default select example" className="form-select" id="status-field" name="status" value={newMember.status} onChange={handleInputChange}>
                                                <option value="Status">Status</option>
                                                <option value="Active">Active</option>
                                                <option value="Block">Block</option>
                                                <option value="Pending">Pending</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-footer add">
                                        <button className="btn btn-secondary" data-bs-dismiss="modal" type="button" onClick={closeModal}>Close</button>
                                        <button className="btn btn-primary" id="add-btn" type="submit">Add</button>
                                        <button className="btn btn-success b-r-22" id="edit-btn" style={{ display: 'none' }}>Edit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className={styles.dataall}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Created At</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentMembers.map((member) => (
                                    <tr key={member.id}>
                                        <td>{member.id}</td>
                                        <td>{member.name}</td>
                                        <td>{member.email}</td>
                                        <td>{member.createdAt}</td>
                                        <td>{member.status}</td>
                                        <td>
                                            <button className='btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1' onClick={() => dropMember(member.id)}>
                                                <i className='ph-fill  ph-trash f-s-22'></i> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className={styles.pagination}>
                            {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={currentPage === number ? styles.active : ''}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

    );
};

export default MemberListTable;