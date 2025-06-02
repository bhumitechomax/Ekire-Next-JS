"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { color } from "chart.js/helpers";
import { Modal } from "bootstrap";

function Manage() {
    const params = useParams();
    const id = params.slug;
    const [activeTab, setActiveTab] = useState(1);
    const [activeInnerTab, setActiveInnerTab] = useState(8);
    const [selectedOS, setSelectedOS] = useState(null);
    const [os, setOs] = useState([]);
    const [app, setApp] = useState([]);
    const [selectedOSId, setSelectedOSId] = useState(null);
    const [selectedAppId, setSelectedAppId] = useState(null);
    const handleOSClick = (osid) => {
        setSelectedOSId(osid);
    };
    const handleAppClick = (appid) => {
        setSelectedAppId(appid);
    };

    const [showReinstallCard, setShowReinstallCard] = useState(false);
    const [selectedVersionId, setSelectedVersionId] = useState(null);

    const [serverdetails, setServerDetails] = useState(null);
    const [vmps, setVmps] = useState(null);
    const [systemusage, setSystemUsage] = useState(null);
    const [hostname, setHostname] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState({});
    // const [snapshots, setSnapshots] = useState([]);
    // const serverId= id ;
    const [formData, setFormData] = useState({ snapshot_name: "" , vms_id: "", preserve_disk: "",});
    const [snapshots, setSnapshots] = useState([]);
    // Top of your component:
    const [snapshotError, setSnapshotError] = useState({});
    const [snapshotSuccess, setSnapshotSuccess] = useState("");

    const modalRef = useRef(null);

    const [reinstallPayload, setReinstallPayload] = useState({
        os_version_id: null,
    });
    const [changehostnamePayload, setChangeHostnamePayload] = useState({
        hostname: "",
    });

    // Fetch Server Details and VMPS
    useEffect(() => {
        const token = Cookies.get("accessToken");
        if (token && id) {
            console.log("fetch token ", token);
            const FetchSshkey = async () => {
                setIsLoading(true);
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${id}/get`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    const result = await response.json();

                    const data = result.data.data;
                    setServerDetails(data.server);
                    setVmps(data.vms);
                    setSystemUsage(data);
                    // setFormData({ name: data.name, key: data.key });
                    setIsLoading(false);
                } catch (error) {
                    console.error("Error fetching Server:", error);
                    setIsLoading(false);
                }
            };

            FetchSshkey();
        }
    }, [id]);

    // console.log(serverdetails);
    // console.log("------------------------------------------");
    // console.log(vmps);
    // console.log("------------------------------------------");
    // console.log(serverdetails);
    // console.log("------------------------------------------");
    // console.log(vmps);
    // console.log("------------------------------------------");

    useEffect(() => {
        const toggleIcons = document.querySelectorAll(".toggle-password");

        toggleIcons.forEach((icon) => {
            const targetId = icon.getAttribute("data-target");
            const passwordInput = document.getElementById(targetId);

            if (!passwordInput) return;

            const toggleVisibility = () => {
                const isPassword = passwordInput.type === "password";

                passwordInput.type = isPassword ? "text" : "password";
                icon.classList.toggle("ph-eye");
                icon.classList.toggle("ph-eye-slash");
            };

            icon.addEventListener("click", toggleVisibility);

            // Cleanup on unmount
            return () => {
                icon.removeEventListener("click", toggleVisibility);
            };
        });
    }, []);

    // auto loadl
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    // additional disk
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(5); // Default price for 1 GB

    const updatePrice = (value) => {
        if (value >= 1 && value <= 5) {
            setPrice(5);
        } else if (value >= 6 && value <= 10) {
            setPrice(10);
        } else if (value > 10 && value <= 50) {
            setPrice(20);
        } else {
            setPrice(30); // Adjust as needed
        }
    };

    const increment = () => {
        const newValue = count + 1;
        setCount(newValue);
        updatePrice(newValue);
    };

    const decrement = () => {
        if (count > 1) {
            const newValue = count - 1;
            setCount(newValue);
            updatePrice(newValue);
        }
    };

    // api for start server
    const startServer = async (id) => {
        if (!id) return;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-primary ms-2",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Start Server?",
                text: "Are you sure you want to start this server?",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes, start it!",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${id}/start`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                                },
                            }
                        );

                        const result = await res.json();
                        console.log("Start Server Response:", result);

                        if (res.ok && result.data.status === "success") {
                            swalWithBootstrapButtons.fire(
                                "Started!",
                                "The server has been started successfully.",
                                "success"
                            );
                        } else {
                            swalWithBootstrapButtons.fire(
                                "Failed!",
                                result.message || "Failed to start the server.",
                                "error"
                            );
                        }
                    } catch (error) {
                        console.error("Error:", error);
                        swalWithBootstrapButtons.fire(
                            "Error!",
                            "Something went wrong.",
                            "error"
                        );
                    }
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Server start cancelled.",
                        "info"
                    );
                }
            });
    };

    // api for stop server
    const stopServer = async (id) => {
        if (!id) return;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ms-2",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Stop Server?",
                text: "Are you sure you want to stop this server?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, stop it!",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${id}/stop`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                                },
                            }
                        );

                        const result = await res.json();
                        console.log("Stop Server Response:", result);

                        if (res.ok && result.data.status === "success") {
                            swalWithBootstrapButtons.fire(
                                "Stopped!",
                                "The server has been stopped successfully.",
                                "success"
                            );
                        } else {
                            swalWithBootstrapButtons.fire(
                                "Failed!",
                                result.message || "Failed to stop the server.",
                                "error"
                            );
                        }
                    } catch (error) {
                        console.error("Error:", error);
                        swalWithBootstrapButtons.fire(
                            "Error!",
                            "Something went wrong.",
                            "error"
                        );
                    }
                } else {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Server stop cancelled.",
                        "info"
                    );
                }
            });
    };

    // api for restart server
    const restartServer = async (id) => {
        if (!id) return;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-secondary ms-2",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Restart Server?",
                text: "Are you sure you want to restart this server?",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Yes, restart it!",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${id}/restart`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                                },
                            }
                        );

                        const result = await res.json();
                        console.log("Restart Server Response:", result);

                        if (res.ok && result.data.status === "success") {
                            swalWithBootstrapButtons.fire(
                                "Restarted!",
                                "The server has been restarted successfully.",
                                "success"
                            );
                        } else {
                            swalWithBootstrapButtons.fire(
                                "Failed!",
                                result.message || "Failed to restart the server.",
                                "error"
                            );
                        }
                    } catch (error) {
                        console.error("Error:", error);
                        swalWithBootstrapButtons.fire(
                            "Error!",
                            "Something went wrong.",
                            "error"
                        );
                    }
                } else {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Server restart cancelled.",
                        "info"
                    );
                }
            });
    };

    // api os + app system
    useEffect(() => {
        const token = Cookies.get("accessToken");
        if (token) {
            // console.log("Token found:", token);
            const FetchProject = async () => {
                console.log(`Bearer ${token}`);
                setIsLoading(true);
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/operating-systems-applications`,
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
                    setOs(data.operating_systems);
                    setApp(data.applications);
                } catch (error) {
                    console.error("Error fetching cloud vps plan data:", error);
                    setIsLoading(false);
                }
            };
            FetchProject();
        }
    }, []);

    // api for reinstall server
    const reinstallServer = async (id, reinstallPayload) => {
        if (!id || !reinstallPayload?.os_version_id) return;
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-secondary ms-2",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Reinstall Server?",
                text: "This will wipe the existing data. Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, reinstall!",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${id}/reinstall`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                                },
                                body: JSON.stringify(reinstallPayload),
                            }
                        );

                        const result = await res.json();
                        console.log("Reinstall Server Response:", result);

                        if (res.ok && result.data.status === "success") {
                            swalWithBootstrapButtons.fire(
                                "Reinstalled!",
                                "The server has been reinstalled successfully.",
                                "success"
                            );

                            window.location.reload(); // Reload the page to reflect changes
                        } else {
                            swalWithBootstrapButtons.fire(
                                "Failed!",
                                result.message || "Failed to reinstall the server.",
                                "error"
                            );
                        }
                    } catch (error) {
                        console.error("Error:", error);
                        swalWithBootstrapButtons.fire(
                            "Error!",
                            "Something went wrong during reinstall.",
                            "error"
                        );
                    }
                } else {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Server reinstall cancelled.",
                        "info"
                    );
                }
            });
    };
    const handleHostnameChange = (e) => {
        setChangeHostnamePayload({
            ...changehostnamePayload,
            [e.target.name]: e.target.value,
        });
    };
    // api for hostname update
    const handleUpdateClick = async () => {
        if (!changehostnamePayload?.hostname) {
            Swal.fire("Missing Info", "Please enter a hostname.", "warning");
            return;
        }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-primary ms-2",
                cancelButton: "btn btn-secondary",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Update Hostname?",
                text: `Are you sure you want to update the hostname to "${changehostnamePayload?.hostname}"?`,
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes, update it!",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${id}/update`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                                },
                                body: JSON.stringify({
                                    hostname: changehostnamePayload?.hostname,
                                }),
                            }
                        );

                        const data = await res.json();
                        console.log("Update Response:", data);

                        if (res.ok && data?.data?.status === "success") {
                            swalWithBootstrapButtons.fire(
                                "Updated!",
                                "The hostname was updated successfully.",
                                "success"
                            );
                            setChangeHostnamePayload({ hostname: "" }); // Reset field
                        } else {
                            swalWithBootstrapButtons.fire(
                                "Failed!",
                                data.message || "Failed to update hostname.",
                                "error"
                            );
                        }
                    } catch (error) {
                        console.error("Update Error:", error);
                        swalWithBootstrapButtons.fire(
                            "Error",
                            "Something went wrong.",
                            "error"
                        );
                    }
                } else {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Update was cancelled.",
                        "info"
                    );
                }
            });
    };

    // // api for update password
    const handleChangePasswordClick = async () => {
        console.log("ID: ", id);
        if (!id) {
            Swal.fire("Missing Info", "Server ID is required.", "warning");
            return;
        }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-primary ms-2",
                cancelButton: "btn btn-secondary",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Change Server Password?",
                text: "Are you sure you want to send a new password to the current user?",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes, update it!",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${id}/password`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                                },
                                body: JSON.stringify({
                                    send_password_to_current_user: true,
                                }),
                            }
                        );

                        const data = await res.json();
                        // console.log("Change Password Response:", data);

                        if (res.ok && data?.data?.status === "success") {
                            swalWithBootstrapButtons.fire(
                                "Updated!",
                                "A new password has been sent to the current user.",
                                "success"
                            );
                        } else {
                            swalWithBootstrapButtons.fire(
                                "Failed!",
                                data.message || "Failed to update password.",
                                "error"
                            );
                        }
                    } catch (error) {
                        console.error("Change Password Error:", error);
                        swalWithBootstrapButtons.fire(
                            "Error",
                            "Something went wrong.",
                            "error"
                        );
                    }
                } else {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Password update was cancelled.",
                        "info"
                    );
                }
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log(selectedPlanId);
        setSelectedPlanId(e.target.value);
        setPreserveDisk(e.target.checked);
        setFormData({
        ...formData,
        vms_id: e.target.value,
        preserve_disk: e.target.checked,
        });
    };

    useEffect(() => {
        if (id) fetchSnapshots(id);
    }, [id]);

    // api for list snapshots
    const fetchSnapshots = async (id) => {
        console.log("Fetching snapshots for server ID:", id);
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${id}/list-snapshots`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${Cookies.get("accessToken")}`,
                    },
                }
            );

            const data = await res.json();
            console.log("Snapshots:", data);

            if (res.ok && data?.data?.snapshots) {
                setSnapshots(data.data.snapshots);
                console.log("Fetched snapshots:", data.data.snapshots);
            } else {
                console.error(
                    "Failed to fetch snapshots:",
                    data?.data?.error || "Unknown error"
                );
            }
        } catch (err) {
            console.error("Error fetching snapshots:", err);
        }
    };

    console.log("Snapshots:", snapshots);

    // to close the modal on cross and reload the table
    useEffect(() => {
        const modalElement = modalRef.current;
        if (!modalElement) return;

        const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
        const modal =
            bootstrap.Modal.getInstance(modalElement) ||
            new bootstrap.Modal(modalElement);

        let autoCloseTimer = null;

        const handleModalClose = () => {
            fetchSnapshots(); // Refresh snapshots when modal closes
            setSnapshotSuccess("");
            setSnapshotError({});
            setFormData({ snapshot_name: "" });

            if (autoCloseTimer) {
                clearTimeout(autoCloseTimer);
                autoCloseTimer = null;
            }
        };

        const handleModalOpen = () => {
            // Clear messages and reset form immediately when modal opens
            setSnapshotSuccess("");
            setSnapshotError({});
            setFormData({ snapshot_name: "" });
        };

        modalElement.addEventListener("hidden.bs.modal", handleModalClose);
        modalElement.addEventListener("shown.bs.modal", handleModalOpen);

        return () => {
            modalElement.removeEventListener("hidden.bs.modal", handleModalClose);
            modalElement.removeEventListener("shown.bs.modal", handleModalOpen);
            if (autoCloseTimer) clearTimeout(autoCloseTimer);
        };
    }, []);

    // api for snapshots
    const handleSubmitSnapshot = async () => {
        setSnapshotSuccess("");
        setSnapshotError({});

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${serverId}/create-snapshot`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Cookies.get("accessToken")}`,
                    },
                    body: JSON.stringify({
                        snapshot_name: formData.snapshot_name,
                    }),
                }
            );

            const data = await res.json();
            console.log("Create Snapshot Response:", data);

            if (res.ok && data?.data?.status === "success") {
                setSnapshotSuccess(data.message || "Snapshot successfully created.");
                fetchSnapshots();
                // Optionally clear input:
                // setFormData(prev => ({ ...prev, snapshot_name: "" }));
            } else {
                if (
                    data?.data?.message &&
                    data?.data?.message.toLowerCase().includes("exists")
                ) {
                    setSnapshotError({
                        name: ["A snapshot with this name already exists."],
                    });
                } else {
                    setSnapshotError({
                        name: [data?.data?.message || "Failed to create snapshot."],
                    });
                }
            }
        } catch (err) {
            console.error("Snapshot Error:", err);
            setSnapshotError({
                name: ["Something went wrong while creating snapshot."],
            });
        }
    };

    // Delete snapshot function
    const handleDeleteSnapshot = async (snapshotId) => {
        if (!snapshotId) {
            Swal.fire("Missing Info", "Snapshot ID is required.", "warning");
            return;
        }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-danger ms-2",
                cancelButton: "btn btn-success ms-2",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Delete Snapshot?",
                text: "Are you sure you want to delete this snapshot? This action cannot be undone.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/snapshots/${snapshotId}/delete`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                                },
                            }
                        );

                        let data;
                        try {
                            data = await res.json();
                        } catch (err) {
                            console.error("Failed to parse JSON:", err);
                            swalWithBootstrapButtons.fire(
                                "Error",
                                "Invalid server response.",
                                "error"
                            );
                            return;
                        }

                        console.log("Delete Snapshot Response:", data);

                        if (res.ok && data?.data?.status === "success") {
                            swalWithBootstrapButtons
                                .fire(
                                    "Deleted!",
                                    data?.data?.message || "The snapshot has been deleted.",
                                    "success"
                                )
                                .then(() => {
                                    fetchSnapshots(); // ✅ Now this works!

                                    window.location.reload(); // Reload the page to reflect changes
                                });
                        } else {
                            swalWithBootstrapButtons.fire(
                                "Failed!",
                                data?.message || "Failed to delete snapshot.",
                                "error"
                            );
                        }
                    } catch (error) {
                        console.error("Delete Snapshot Error:", error);
                        swalWithBootstrapButtons.fire(
                            "Error",
                            "Something went wrong.",
                            "error"
                        );
                    }
                } else {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Snapshot deletion was cancelled.",
                        "info"
                    );
                }
            });
    };

    // api for restore snapshot
    const handleRevertSnapshot = async (snapshotId) => {
        if (!snapshotId) {
            Swal.fire("Missing Info", "Snapshot ID is required.", "warning");
            return;
        }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ms-2",
                cancelButton: "btn btn-secondary",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Revert Snapshot?",
                text: "Are you sure you want to revert to this snapshot?",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes, revert it!",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/snapshots/${snapshotId}/revert`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                                },
                            }
                        );

                        let data;
                        try {
                            data = await res.json();
                        } catch (err) {
                            console.error("Failed to parse JSON:", err);
                            swalWithBootstrapButtons.fire(
                                "Error",
                                "Invalid server response.",
                                "error"
                            );
                            return;
                        }

                        console.log("Revert Snapshot Response:", data);

                        if (res.ok && data?.data?.status === "success") {
                            swalWithBootstrapButtons
                                .fire(
                                    "Reverted!",
                                    data?.data?.message || "Snapshot reverted successfully.",
                                    "success"
                                )
                                .then(() => {
                                    fetchSnapshots(); // refresh the list after revert
                                });
                        } else {
                            swalWithBootstrapButtons.fire(
                                "Failed!",
                                data?.message || "Failed to revert snapshot.",
                                "error"
                            );
                        }
                    } catch (error) {
                        console.error("Revert Snapshot Error:", error);
                        swalWithBootstrapButtons.fire(
                            "Error",
                            "Something went wrong.",
                            "error"
                        );
                    }
                } else {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Snapshot revert was cancelled.",
                        "info"
                    );
                }
            });
    };

    // api for plan upgrade
    const handleUpgradePlan = async (serverId, payload) => {
        setUpgradeSuccess("");
        setUpgradeError({});

        if (!serverId) {
            setUpgradeError({ name: ["Server ID is required."] });
            return;
        }

        if (
            !payload ||
            !payload.vms_id ||
            typeof payload.preserve_disk === "undefined"
        ) {
            setUpgradeError({
                name: ["Invalid payload. VMS ID and Preserve Disk are required."],
            });
            return;
        }

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${serverId}/upgrade`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Cookies.get("accessToken")}`,
                    },
                    body: JSON.stringify(payload),
                }
            );

            const data = await res.json();
            console.log("Upgrade Plan Response:", data);

            if (res.ok && data?.data?.status === "success") {
                setUpgradeSuccess(data?.data?.message || "Plan upgraded successfully.");
            } else if (data?.message && Array.isArray(data.message)) {
                setUpgradeError({ name: data.message });
            } else {
                setUpgradeError({
                    name: [data?.data?.message || "Failed to upgrade plan."],
                });
            }
        } catch (err) {
            console.error("Upgrade Plan Error:", err);
            setUpgradeError({ name: ["Something went wrong while upgrading plan."] });
        }
    };

    // api for extend server
    const extendServer = async (serverId) => {
        if (!serverId) return;

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-secondary ms-2",
                cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Extend Server?",
                text: "Do you want to extend this server's duration?",
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Yes, extend!",
                cancelButtonText: "Cancel",
                reverseButtons: true,
            })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(
                            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${serverId}/extend`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                                },
                            }
                        );

                        const result = await res.json();
                        console.log("Extend Server Response:", result);

                        if (res.ok && result.data?.status === "success") {
                            swalWithBootstrapButtons
                                .fire(
                                    "Extended!",
                                    "The server has been extended successfully.",
                                    "success"
                                )
                                .then(() => {
                                    window.location.reload(); // ✅ Reload only after user clicks OK
                                });
                        } else {
                            swalWithBootstrapButtons.fire(
                                "Failed!",
                                result.message || "Failed to extend the server.",
                                "error"
                            );
                        }
                    } catch (error) {
                        console.error("Error:", error);
                        swalWithBootstrapButtons.fire(
                            "Error!",
                            "Something went wrong while extending the server.",
                            "error"
                        );
                    }
                } else {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Server extension cancelled.",
                        "info"
                    );
                }
            });
    };


    const [plans, setPlans] = useState([]);
    const [selectedPlanId, setSelectedPlanId] = useState(null);
    const [preserveDisk, setPreserveDisk] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [showUpgradeForm, setShowUpgradeForm] = useState(false);
      const formRef = useRef(null);

// const [formData, setFormData] = useState({
//     vms_id: "",
//     preserve_disk: "",
//   });
//   const handleChange = (e) => {
//     console.log(selectedPlanId);
//     setSelectedPlanId(e.target.value);
//     setPreserveDisk(e.target.checked);
//     setFormData({
//       ...formData,
//       vms_id: e.target.value,
//       preserve_disk: e.target.checked,
//     });
//   };

  console.log("Form Data:", formData);

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

    const handleUpgradeClick = () => {
        setShowUpgradeForm(true);
        setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 200);
    };

    const handleUpgrade = async () => {
        setErrorMessage("");
        setStatusMessage("");

        try {
            const token = Cookies.get("accessToken");
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${serverId}/upgrade`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify([formData]),
                }
            );

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
    
        const [backupSuccess, setBackupSuccess] = useState("");
const [backupError, setBackupError] = useState("");
// const modalRef = useRef(null);
const openBackupModal = () => {
  const modal = new Modal(modalRef.current);
  modal.show();
};


const handleCreateBackup = async (e) => {
  e.preventDefault();
  setBackupSuccess("");
  setBackupError("");

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/${serverId}/create-backup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
        body: JSON.stringify({
          snapshot_name: formData.snapshot_name,
        }),
      }
    );

    const data = await res.json();

    if (res.ok && data?.data?.status === "success") {
      setBackupSuccess(data.message || "Backup created successfully.");
      setFormData((prev) => ({ ...prev, snapshot_name: "" }));

      setTimeout(() => {
        const modal = Modal.getInstance(modalRef.current);
        modal?.hide();
      }, 1500);
    } else {
      setBackupError(data?.message || "Failed to create backup.");
    }
  } catch (err) {
    console.error("Backup Error:", err);
    setBackupError("Something went wrong while creating the backup.");
  }
};


    return (
        <Fragment>
            <div className="position-relative">
                {/* Overlay loader */}
                {isLoading && (
                    <div
                        className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
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
                            <div className="col-12">
                                <h4 className="main-title">
                                    Manage Server {serverdetails?.hostname}{" "}
                                </h4>
                                <ul className="app-line-breadcrumbs mb-3">
                                    <li>
                                        <a className="f-s-14 f-w-500" href="/server">
                                            <span>
                                                <i className="ph-duotone  ph-table f-s-16" /> Server
                                            </span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a className="f-s-14 f-w-500" href="#">
                                            Manage Server {serverdetails?.hostname}
                                        </a>
                                    </li>
                                </ul>
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
                                            <i className="ph-bold  ph-info f-s-18" /> Server Overview
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 6 ? "active" : ""}`}
                                            onClick={() => setActiveTab(6)}
                                        >
                                            <i className="ph-bold ph-corners-in f-s-18" /> Actions
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 2 ? "active" : ""}`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            <i className="ph-bold  ph-circles-three-plus f-s-18" />{" "}
                                            Server setting
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 3 ? "active" : ""}`}
                                            onClick={() => setActiveTab(3)}
                                        >
                                            <i className="ph-bold  ph-floppy-disk-back f-s-18" />{" "}
                                            Additional Disk
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 4 ? "active" : ""}`}
                                            onClick={() => setActiveTab(4)}
                                        >
                                            <i className="ph-fill  ph-database f-s-18" /> Backups
                                        </li>
                                        <li
                                            className={`tab-link ${activeTab === 5 ? "active" : ""}`}
                                            onClick={() => setActiveTab(5)}
                                        >
                                            <i className="ph ph-bounding-box f-s-18" /> Snapshots
                                        </li>
                                    </ul>
                                </div>

                                <div className="content-wrapper" id="card-container">
                                    <div
                                        className={`tabs-content ${activeTab === 1 ? "active" : ""
                                            }`}
                                        id="tab-1"
                                    >
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Server Credentials</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="col-12">
                                                            <div className="app-form">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="input-group mb-3">
                                                                            <span className="input-group-text b-r-left text-bg-primary">
                                                                                IPv4
                                                                            </span>
                                                                            <input
                                                                                aria-label="Dollar amount (with dot and two decimal places)"
                                                                                className="form-control b-r-right"
                                                                                placeholder="988e473a-335d-5c18-b996-db64c22cc7c0"
                                                                                type="text"
                                                                            />
                                                                            <span className="input-group-text b-r-0 text-bg-primary">
                                                                                <i className="ph-fill  ph-copy f-s-18"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="input-group mb-3">
                                                                            <span className="input-group-text b-r-left text-bg-primary">
                                                                                IPv6
                                                                            </span>
                                                                            <input
                                                                                aria-label="Dollar amount (with dot and two decimal places)"
                                                                                className="form-control b-r-right"
                                                                                placeholder="f11fdb72-899e-5886-8fe0-9e55a5132aa7"
                                                                                type="text"
                                                                            />
                                                                            <span className="input-group-text b-r-0 text-bg-primary">
                                                                                <i className="ph-fill  ph-copy f-s-18"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="input-group mb-3">
                                                                            <span className="input-group-text b-r-left text-bg-primary">
                                                                                Username
                                                                            </span>
                                                                            <input
                                                                                aria-label="Dollar amount (with dot and two decimal places)"
                                                                                className="form-control b-r-right"
                                                                                placeholder="2d907383-8206-51cc-9313-4c931b37b06a"
                                                                                type="text"
                                                                            />
                                                                            <span className="input-group-text b-r-0 text-bg-primary">
                                                                                <i className="ph-fill  ph-copy f-s-18"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="input-group mb-3">
                                                                            <span className="input-group-text b-r-left text-bg-primary">
                                                                                Password
                                                                            </span>
                                                                            <input
                                                                                id="password1"
                                                                                className="form-control b-r-right"
                                                                                placeholder="********"
                                                                                type="password"
                                                                                aria-label="Password"
                                                                                style={{ borderRight: "0" }}
                                                                            />
                                                                            <span className="input-group-text b-r-right">
                                                                                <i
                                                                                    className="ph ph-eye-slash f-s-20 toggle-password"
                                                                                    data-target="password1"
                                                                                    style={{ cursor: "pointer" }}
                                                                                />
                                                                            </span>
                                                                            <span className="input-group-text b-r-0 text-bg-primary">
                                                                                <i className="ph-fill ph-copy f-s-18"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Server Details</h5>
                                                    </div>
                                                    <div className="row card-body">
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">{vmps?.cpu}vCPU</h6>
                                                                    <div className="dropdown bg-xl-light-primary h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold ph-command f-s-20 text-primary" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">
                                                                        {systemusage?.diskPlan}
                                                                    </h6>
                                                                    <div className="dropdown bg-xl-light-success h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold ph-database f-s-20 text-success" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">{vmps?.ram} GB</h6>
                                                                    <div className="dropdown bg-xl-light-secondary h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold ph-floppy-disk f-s-20 text-secondary" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">
                                                                        {serverdetails?.location}{" "}
                                                                    </h6>
                                                                    <div className="dropdown bg-xl-light-danger h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold  ph-map-pin-line f-s-20 text-danger" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">{serverdetails?.cpu}</h6>
                                                                    <div className="dropdown bg-xl-light-info h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold ph-cpu text-info f-s-20" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6 m-10-0">
                                                            <div className="card-body card-body-style">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6 className="mb-0">
                                                                        {serverdetails?.os_label}
                                                                    </h6>
                                                                    <div className="dropdown bg-xl-light-warning h-40 w-40 d-flex-center b-r-15">
                                                                        <i className="ph-bold  ph-windows-logo f-s-22 text-warning text-warning" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Stastics</h5>
                                                    </div>
                                                    <div className="row card-body">
                                                        <div className="col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0">
                                                            <div className="card orders-provided-card border-card">
                                                                <div className="card-body">
                                                                    <i className="ph-bold  ph-circle circle-bg-img" />
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <p className="f-s-18 f-w-600 text-dark txt-ellipsis-1">
                                                                                CPU Usage
                                                                            </p>
                                                                            <h2 className="text-secondary-dark mb-0">
                                                                                {systemusage?.cpuUsage}%
                                                                            </h2>
                                                                        </div>
                                                                        <div className="dropdown bg-xl-light-danger  h-40 w-40 d-flex-center b-r-15">
                                                                            <i className="ph-bold ph-cpu f-s-20 text-danger" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0">
                                                            <div className="card bg-primary-300 product-sold-card">
                                                                <div className="card-body">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <p className="f-s-18 f-w-600 text-dark txt-ellipsis-1">
                                                                                {systemusage?.inBandwidth} of unmetered
                                                                                GiB
                                                                            </p>
                                                                            <h5
                                                                                className="text-secondary-dark"
                                                                                style={{
                                                                                    marginTop: "6%",
                                                                                    marginBottom: "6%",
                                                                                }}
                                                                            >
                                                                                Incoming Bandwith
                                                                            </h5>
                                                                        </div>
                                                                        <div className="dropdown bg-light-white h-40 w-40 d-flex-center b-r-15">
                                                                            <i className="ph-bold  ph-arrow-square-in f-s-20 text-secondary" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0">
                                                            <div className="card product-store-card border-card">
                                                                <div className="card-body">
                                                                    <i className="ph-bold  ph-circle circle-bg-img" />
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <p className="f-s-18 f-w-600 text-dark txt-ellipsis-1">
                                                                                {systemusage?.outBandwidth} of unmetered
                                                                                GiB
                                                                            </p>
                                                                            <h5
                                                                                className="text-secondary-dark"
                                                                                style={{
                                                                                    marginTop: "6%",
                                                                                    marginBottom: "6%",
                                                                                }}
                                                                            >
                                                                                Outgoing Bandwith
                                                                            </h5>
                                                                        </div>
                                                                        <div className="dropdown bg-light-success h-40 w-40 d-flex-center b-r-15">
                                                                            <i className="ph-bold  ph-arrow-square-out f-s-20 text-success" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0">
                                                            <div className="card project-total-card">
                                                                <div className="card-body">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <p className="f-s-18 f-w-600 text-dark txt-ellipsis-1">
                                                                                {systemusage?.usedDisk} of {vmps?.disk}{" "}
                                                                                GiB
                                                                            </p>
                                                                            <h5
                                                                                className="text-secondary-dark"
                                                                                style={{
                                                                                    marginTop: "6%",
                                                                                    marginBottom: "6%",
                                                                                }}
                                                                            >
                                                                                Disk Usage
                                                                            </h5>
                                                                        </div>
                                                                        <div className="dropdown bg-light-info h-40 w-40 d-flex-center b-r-15">
                                                                            <i className="ph-fill  ph-database f-s-20 text-info" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Billing Information</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row d-flex align-items-center justify-content-between">
                                                            <div
                                                                className="col-lg-6"
                                                                style={{ padding: "5px 15px" }}
                                                            >
                                                                <p className="f-s-17 text-dark ">
                                                                    Your Current Size is {vmps?.cpu} vCPU -{" "}
                                                                    {vmps?.ram} GB Memory - {vmps?.disk} SSD
                                                                    Storage.
                                                                </p>
                                                                <button className="btn btn-primary" onClick={handleUpgradeClick}>
                                                                    <i className="ph-bold ph-arrow-up f-s-18" /> Upgrade
                                                                </button>



                                                                <h5 className="text-secondary-dark mb-0">
                                                                    Renews Automatically on 18-12-2024
                                                                </h5>
                                                                <p className="f-s-17 text-dark ">
                                                                    We will send you a notification upon
                                                                    subscription expiration
                                                                </p>
                                                                <h5 className="text-secondary-dark mb-0">
                                                                    $10 Per Month
                                                                </h5>
                                                            </div>
                                                            <div className="col-lg-6 b-r-15">
                                                                <div
                                                                    aria-valuemax={100}
                                                                    aria-valuemin={0}
                                                                    aria-valuenow={75}
                                                                    className="progress w-100 h-15 mb-2"
                                                                    role="progressbar"
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-primary text-white"
                                                                        style={{ width: "75%" }}
                                                                    >
                                                                        {" "}
                                                                        75%
                                                                    </div>
                                                                </div>
                                                                <p className="f-s-14 text-dark ">
                                                                    75 days remaining until your server needs a
                                                                    renew
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {showUpgradeForm && (
                                                <div ref={formRef}>
                                                    <form method="POST">
                                                    <div className="row cart-table">
                                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <h5 className="mb-2 mt-5">CPU Options</h5>

                                                                    <div className="row simple-pricing-container app-arrow">
                                                                        {errorMessage && (
                                                                            <div className="alert alert-danger text-danger" style={{ background : "none", border: "0", padding: "0 14px" }} role="alert">
                                                                                {errorMessage}
                                                                            </div>
                                                                        )}

                                                                        {statusMessage && (
                                                                            <div className="alert alert-success text-success" style={{ background : "none", border: "0", padding: "0 14px" }} role="alert">
                                                                                {statusMessage}
                                                                            </div>
                                                                        )}
                                                                        {plans.map((plan) => (
                                                                            <div
                                                                                key={plan.id}
                                                                                className={`col-md-6 col-xl-4 p-3`}
                                                                                onClick={() => {
                                                                                    setSelectedPlanId(plan.id);
                                                                                    setFormData((prev) => ({
                                                                                        ...prev,
                                                                                        vms_id: plan.id,
                                                                                    }));
                                                                                }}
                                                                                style={{ cursor: "pointer" }}
                                                                            >
                                                                                <div
                                                                                    className={`simple-pricing-card card ${selectedPlanId === plan.id
                                                                                            ? "border border-primary shadow-lg"
                                                                                            : ""
                                                                                        }`}
                                                                                >
                                                                                    <input type="hidden" name="vms_id" />
                                                                                    <div className="card-body">
                                                                                        <div className="simple-price-body">
                                                                                            <div
                                                                                                className={`simple-price-value text-center b-r-5 d-block ${selectedPlanId === plan.id
                                                                                                        ? "bg-primary text-white"
                                                                                                        : "bg-light-dark"
                                                                                                    }`}
                                                                                            >
                                                                                                <span className="f-s-30 f-w-600 text-center">
                                                                                                    ${plan.price}/
                                                                                                </span>
                                                                                                <span className="f-s-12 f-w-600">
                                                                                                    per month
                                                                                                </span>
                                                                                                <p>${(plan.price / 720).toFixed(3)}/hour</p>
                                                                                            </div>

                                                                                            <div className="simple-price-content">
                                                                                                <div className="d-flex">
                                                                                                    <span>
                                                                                                        <i
                                                                                                            className={`ph-bold ph-check bg-primary p-1 b-r-100 f-s-12 ${selectedPlanId === plan.id
                                                                                                                    ? "bg-primary text-white"
                                                                                                                    : "bg-light-dark"
                                                                                                                }`}
                                                                                                        />
                                                                                                    </span>
                                                                                                    <p className="ms-2 mb-0">
                                                                                                        {plan.ram} GB / {plan.cpu} CPU
                                                                                                    </p>
                                                                                                </div>
                                                                                                <div className="app-divider-v" />
                                                                                                <div className="d-flex">
                                                                                                    <span>
                                                                                                        <i
                                                                                                            className={`ph-bold ph-check bg-primary p-1 b-r-100 f-s-12 ${selectedPlanId === plan.id
                                                                                                                    ? "bg-primary text-white"
                                                                                                                    : "bg-light-dark"
                                                                                                                }`}
                                                                                                        />
                                                                                                    </span>
                                                                                                    <p className="ms-2 mb-0">
                                                                                                        {plan.disk} GB NVMe SSDs
                                                                                                    </p>
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
                                                                                            name="preserve_disk"
                                                                                            checked={formData.preserve_disk}
                                                                                            onChange={(e) =>
                                                                                                setFormData((prev) => ({
                                                                                                    ...prev,
                                                                                                    preserve_disk: e.target.checked,
                                                                                                }))
                                                                                            }
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
                                                                                            If selected, your existing disk data will be
                                                                                            retained during the upgrade. If not, all
                                                                                            current data on the disk will be removed.
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-primary mt-3"
                                                                        onClick={handleUpgrade}
                                                                    >
                                                                        Upgrade Plan
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </form>
                                                </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`tabs-content ${activeTab === 6 ? "active" : ""
                                            }`}
                                        id="tab-6"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Action Buttons</h5>
                                                    </div>
                                                    <div className="card-body d-flex gap-3">
                                                        <button
                                                            className="btn btn-primary h-45 icon-btn mb-3"
                                                            onClick={() => startServer(serverdetails?.id)}
                                                        >
                                                            <i className="ph-fill ph-play f-s-18" />
                                                            Start Server
                                                        </button>
                                                        <button
                                                            className="btn btn-success h-45 icon-btn mb-3"
                                                            onClick={() => stopServer(serverdetails?.id)}
                                                        >
                                                            <i className="ph-fill ph-pause f-s-18" />
                                                            Stop Server
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary h-45 icon-btn mb-3"
                                                            onClick={() => restartServer(serverdetails?.id)}
                                                        >
                                                            <i className="ph-fill ph-rewind f-s-18" />
                                                            Restart Server
                                                        </button>

                                                        <button
                                                            className="btn btn-dark h-45 icon-btn mb-3"
                                                            onClick={() =>
                                                                setShowReinstallCard(!showReinstallCard)
                                                            }
                                                        >
                                                            <i className="ph-fill ph-arrow-line-down f-s-18" />{" "}
                                                            Reinstall Server
                                                        </button>

                                                        <button
                                                            className="btn btn-danger h-45 icon-btn mb-3"
                                                            onClick={() => extendServer(serverdetails?.id)}
                                                        >
                                                            Extend Server
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {showReinstallCard && (
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>OS/Application</h5>
                                                </div>
                                                <div className="card-body p-0">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="tab-wrapper ms-3 me-3 mb-3">
                                                                <ul className="tabs overflow-auto">
                                                                    <li
                                                                        className={`tab-link ${activeInnerTab === 8 ? "active" : ""
                                                                            }`}
                                                                        onClick={() => setActiveInnerTab(8)}
                                                                    >
                                                                        <i className="ph-bold  ph-align-right f-s-18" />{" "}
                                                                        Operating System
                                                                    </li>
                                                                    <li
                                                                        className={`tab-link ${activeInnerTab === 9 ? "active" : ""
                                                                            }`}
                                                                        onClick={() => setActiveInnerTab(9)}
                                                                    >
                                                                        <i className="ph-fill ph-list-bullets f-s-18" />{" "}
                                                                        Application
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div
                                                                className="content-wrapper"
                                                                id="card-container"
                                                            >
                                                                {activeInnerTab === 8 && (
                                                                    <div
                                                                        className="tabs-content active"
                                                                        id="tab-8"
                                                                    >
                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <div className="row simple-pricing-container app-arrow">
                                                                                    {os?.map((o, index) => (
                                                                                        <div
                                                                                            className="col-md-6 col-xl-3 p-3"
                                                                                            key={o.id}
                                                                                        >
                                                                                            <div
                                                                                                className="simple-pricing-card card mb-0"
                                                                                                onClick={() =>
                                                                                                    handleOSClick(o.id)
                                                                                                }
                                                                                                style={{ cursor: "pointer" }}
                                                                                            >
                                                                                                <div className="card-body">
                                                                                                    <div className="simple-price-header text-center">
                                                                                                        <h5 className="mb-3">
                                                                                                            {o.name}
                                                                                                        </h5>
                                                                                                    </div>
                                                                                                    <div className="simple-price-body text-center">
                                                                                                        <Image
                                                                                                            alt={o.name}
                                                                                                            className="img-fluid"
                                                                                                            src={o.icon}
                                                                                                            width={45}
                                                                                                            height={45}
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            {selectedOSId === o.id && (
                                                                                                <form
                                                                                                    className="app-form row g-3 needs-validation mt-0"
                                                                                                    noValidate
                                                                                                >
                                                                                                    <div className={o.name}>
                                                                                                        <select
                                                                                                            className="form-select"
                                                                                                            id={`${o.name}-version`}
                                                                                                            required
                                                                                                            onChange={(e) =>
                                                                                                                setSelectedVersionId(
                                                                                                                    e.target.value
                                                                                                                )
                                                                                                            }
                                                                                                        >
                                                                                                            <option value="">
                                                                                                                Select Version
                                                                                                            </option>
                                                                                                            {o.versions?.map(
                                                                                                                (version) => (
                                                                                                                    <option
                                                                                                                        value={version.id}
                                                                                                                        key={version.id}
                                                                                                                    >
                                                                                                                        {version.name}
                                                                                                                    </option>
                                                                                                                )
                                                                                                            )}
                                                                                                        </select>
                                                                                                        <div className="invalid-feedback">
                                                                                                            Please select a valid
                                                                                                            version.
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </form>
                                                                                            )}
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                                <button
                                                                                    className="btn btn-primary"
                                                                                    type="button"
                                                                                    onClick={() =>
                                                                                        reinstallServer(serverdetails?.id, {
                                                                                            os_version_id: selectedVersionId,
                                                                                        })
                                                                                    }
                                                                                >
                                                                                    Save
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {activeInnerTab === 9 && (
                                                                    <div
                                                                        className="tabs-content active"
                                                                        id="tab-9"
                                                                    >
                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <div className="row simple-pricing-container app-arrow">
                                                                                    {app?.map((apps, index) => (
                                                                                        <div
                                                                                            className="col-md-6 col-xl-3 p-3"
                                                                                            key={apps.id}
                                                                                        >
                                                                                            <div
                                                                                                className="simple-pricing-card card mb-0"
                                                                                                onClick={() =>
                                                                                                    handleAppClick(apps.id)
                                                                                                }
                                                                                                style={{ cursor: "pointer" }}
                                                                                            >
                                                                                                <div className="card-body">
                                                                                                    <div className="simple-price-header text-center">
                                                                                                        <h5 className="mb-3">
                                                                                                            {apps.name}
                                                                                                        </h5>
                                                                                                    </div>
                                                                                                    <div className="simple-price-body text-center">
                                                                                                        <Image
                                                                                                            alt={apps.name}
                                                                                                            className="img-fluid"
                                                                                                            src={apps.icon}
                                                                                                            width={45}
                                                                                                            height={45}
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            {selectedAppId === apps.id && (
                                                                                                <form
                                                                                                    className="app-form row g-3 needs-validation mt-0"
                                                                                                    noValidate
                                                                                                >
                                                                                                    <div className={apps.name}>
                                                                                                        <select
                                                                                                            name=""
                                                                                                            className="form-select"
                                                                                                            id={`${apps.name}-version`}
                                                                                                            required
                                                                                                            onChange={(e) =>
                                                                                                                setSelectedVersionId(
                                                                                                                    e.target.value
                                                                                                                )
                                                                                                            }
                                                                                                        >
                                                                                                            <option value="">
                                                                                                                Select Version
                                                                                                            </option>
                                                                                                            {apps.versions?.map(
                                                                                                                (version) => (
                                                                                                                    <option
                                                                                                                        value={version.id}
                                                                                                                        key={version.id}
                                                                                                                    >
                                                                                                                        {version.name}
                                                                                                                    </option>
                                                                                                                )
                                                                                                            )}
                                                                                                        </select>
                                                                                                        <div className="invalid-feedback">
                                                                                                            Please select a valid
                                                                                                            version.
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </form>
                                                                                            )}
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                                <button
                                                                                    className="btn btn-primary"
                                                                                    type="button"
                                                                                    onClick={() =>
                                                                                        reinstallServer(serverdetails?.id, {
                                                                                            os_version_id: selectedVersionId,
                                                                                        })
                                                                                    }
                                                                                >
                                                                                    Save
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className={`tabs-content ${activeTab === 2 ? "active" : ""
                                            }`}
                                        id="tab-2"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Change Server Settings</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <form
                                                            className="app-form row g-3"
                                                            style={{ padding: "5px 15px" }}
                                                            onSubmit={(e) => e.preventDefault()}
                                                        >
                                                            <div className="col-md-4">
                                                                <label
                                                                    className="form-label"
                                                                    htmlFor="hostnameInput"
                                                                >
                                                                    Update Hostname
                                                                </label>
                                                                <input
                                                                    id="hostnameInput"
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="New Hostname"
                                                                    name="hotname"
                                                                    required
                                                                    value={changehostnamePayload.hostname}
                                                                    onChange={(e) =>
                                                                        setChangeHostnamePayload({
                                                                            ...changehostnamePayload,
                                                                            hostname: e.target.value,
                                                                        })
                                                                    }
                                                                />
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary h-45 icon-btn mb-3 mt-4"
                                                                    onClick={handleUpdateClick}
                                                                >
                                                                    Update
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>

                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Change Server Password</h5>
                                                    </div>

                                                    <div className="card-body">
                                                        <form
                                                            className="app-form rounded-control row g-3"
                                                            style={{ padding: "5px 15px" }}
                                                            onSubmit={(e) => e.preventDefault()} // Prevent default form submit
                                                        >
                                                            <div className="col-md-4">
                                                                <label htmlFor="" className="form-label">
                                                                    Change Server Password
                                                                </label>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary h-45 icon-btn mb-3 mt-3"
                                                                    onClick={handleChangePasswordClick}
                                                                >
                                                                    Update
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    {/* <div className="card-body" >
                                                        <form className="app-form rounded-control  row g-3" style={{ padding: "5px 15px" }}>
                                                            <div className="col-md-4">
                                                                <label className="form-label" htmlFor="validationDefaultUsername">Change RDNS</label>
                                                                <input aria-describedby="inputGroupPrepend2" className="form-control" id="validationDefaultUsername" placeholder="New RDNS" required type="text" />
                                                            </div>
                                                        </form>
                                                    </div> */}
                                                </div>
                                            </div>

                                            {/* <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-body">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div style={{ padding: "5px 15px" }}>
                                                                <h5 className="text-secondary-dark mb-0">Enable Automatic Backups
                                                                    <span className="badge text-warning-dark bg-warning-400 badge-notification ms-2"> $5</span>
                                                                    <span className="badge text-danger-dark bg-xl-light-danger badge-notification ms-2"> Disabled</span>
                                                                </h5>
                                                                <p className="f-s-17 text-dark ">Enable daily backups to set free of any stress and be at peace of mind.</p>
                                                            </div>
                                                            <div className=" b-r-15">
                                                                <button className="btn btn-primary h-45 icon-btn mb-3" >
                                                                    <i className="ph-bold  ph-arrow-down f-s-18" />  Save Changes
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div
                                        className={`tabs-content ${activeTab === 3 ? "active" : ""
                                            }`}
                                        id="tab-3"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Additional Disk</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="">
                                                            {/* <div className="modal-header">
                                                                <h5 className="modal-title">Create Volume</h5>
                                                            </div> */}
                                                            <div className="modal-body">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="text-center align-self-center">
                                                                        <img
                                                                            alt=""
                                                                            className="img-fluid b-r-10"
                                                                            src="../assets/images/new/cloud.png"
                                                                        />
                                                                    </div>
                                                                    <div className="ps-4">
                                                                        <div className="d-flex align-items-center gap-3">
                                                                            <div className="simplespin d-flex align-items-center gap-2">
                                                                                <a
                                                                                    className="circle-btn decrement"
                                                                                    role="button"
                                                                                    onClick={decrement}
                                                                                >
                                                                                    -
                                                                                </a>
                                                                                <input
                                                                                    className="app-small-touchspin count f-s-19"
                                                                                    type="text"
                                                                                    value={count}
                                                                                    readOnly
                                                                                />
                                                                                <a
                                                                                    className="circle-btn increment"
                                                                                    role="button"
                                                                                    onClick={increment}
                                                                                >
                                                                                    +
                                                                                </a>
                                                                            </div>
                                                                            <p className="f-s-18 m-0">GB</p>
                                                                        </div>
                                                                        <div>
                                                                            <p className="f-s-18 text-primary fw-bold m-0">
                                                                                {" "}
                                                                                ${price} /mo
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <form className="app-form mt-3">
                                                                <div className="mb-3">
                                                                    <div className="input-group">
                                                                        <input
                                                                            aria-describedby="inputGroupPrepend2"
                                                                            className="form-control"
                                                                            id="validationDefaultUsername"
                                                                            placeholder="Volume Name"
                                                                            required=""
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <div className="input-group">
                                                                        <input
                                                                            aria-describedby="inputGroupPrepend2"
                                                                            className="form-control"
                                                                            id="validationDefaultUsername"
                                                                            placeholder="Add Location"
                                                                            required=""
                                                                            type="text"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="modal-footer">
                                                                <button
                                                                    className="btn btn-light-primary"
                                                                    type="button"
                                                                >
                                                                    Save changes
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`tabs-content ${activeTab === 4 ? "active" : ""
                                            }`}
                                        id="tab-4"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Backup</h5>
                                                    </div>
                                                    <div className="card-body d-flex gap-3">
                                                        
                                                        <button className="btn btn-primary h-45 icon-btn mb-3" onClick={openBackupModal}>
  <i className="ph-bold ph-plus f-s-18" /> Create Backup
</button>
                                                        <button className="btn btn-success h-45 icon-btn mb-3">
                                                            <i className="ph ph-arrow-fat-lines-up f-s-18" />{" "}
                                                            Update Backup
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card p-l-r-30">
                                                    <div className="card-body p-0">
                                                        <div className="app-datatable-default overflow-auto">
                                                            <table
                                                                className="datatable display app-data-table default-data-table"
                                                                id="example1"
                                                            >
                                                                <thead>
                                                                    <tr>
                                                                        <th width={10}>Sr no.</th>
                                                                        <th>Backup Name</th>
                                                                        <th>Size</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    
                                                                            <tr >
                                                                                <td>1</td>
                                                                                <td>name</td>
                                                                                <td> GB</td>
                                                                                {/* <td>{snapshot?.expiration_date}</td> */}
                                                                                <td className="d-flex gap-3">
                                                                                    <button className="badge text-white bg-success border-0 d-flex gap-2 align-items-center">
                                                                                        Restore
                                                                                    </button>

                                                                                    <button
                                                                                        className="badge text-white bg-danger border-0 d-flex gap-2 align-items-center">
                                                                                        <i className="ph ph-trash f-s-18" />
                                                                                        Delete
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

                                    <div
                                        className={`tabs-content ${activeTab === 5 ? "active" : ""
                                            }`}
                                        id="tab-5"
                                    >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card security-card-content">
                                                    <div className="card-header">
                                                        <h5>Snapshots</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <button
                                                            className="btn btn-primary h-45 icon-btn m-2"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#projectCard2"
                                                        >
                                                            <i className="ph-bold ph-plus f-s-18" /> Create
                                                            Snapshots
                                                        </button>
                                                    </div>
                                                </div>

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
                                                                        <th>Snapshot Name</th>
                                                                        <th>Size</th>
                                                                        {/* <th>Expiration Date</th> */}
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {snapshots.length > 0 &&
                                                                        snapshots.map((snapshot, index) => (
                                                                            <tr key={snapshot.id || index}>
                                                                                <td>{index + 1}</td>
                                                                                <td>{snapshot?.name}</td>
                                                                                <td>{snapshot?.size} GB</td>
                                                                                {/* <td>{snapshot?.expiration_date}</td> */}
                                                                                <td className="d-flex gap-3">
                                                                                    <button
                                                                                        className="badge text-white bg-success border-0 d-flex gap-2 align-items-center"
                                                                                        onClick={() =>
                                                                                            handleRevertSnapshot(snapshot.id)
                                                                                        }
                                                                                    >
                                                                                        Revert
                                                                                    </button>

                                                                                    <button
                                                                                        className="badge text-white bg-danger border-0 d-flex gap-2 align-items-center"
                                                                                        onClick={() =>
                                                                                            handleDeleteSnapshot(snapshot.id)
                                                                                        }
                                                                                    >
                                                                                        <i className="ph ph-trash f-s-18" />
                                                                                        Delete
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Projects end */}
                    </div>

                    {/* Project Modal */}
                    <div
                        className="modal fade"
                        id="projectCard2"
                        aria-hidden="true"
                        ref={modalRef}
                    >
                        <div className="modal-dialog ">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="d-flex align-items-center gap-3">
                                        <h5 className="modal-title">Create Snapshot </h5>
                                        <iconify-icon
                                            icon="line-md:document-add"
                                            className="text-success f-s-22"
                                        ></iconify-icon>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>

                                <form onSubmit={handleSubmitSnapshot} method="POST">
                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label htmlFor="snapshot_name" className="form-label">
                                                Snapshot Name
                                            </label>
                                            <input
                                                type="text"
                                                id="snapshot_name"
                                                name="snapshot_name"
                                                className="form-control"
                                                value={formData.snapshot_name}
                                                onChange={handleChange}
                                                required
                                            />
                                            {snapshotSuccess && (
                                                <div className="alert alert-success">
                                                    {snapshotSuccess}
                                                </div>
                                            )}
                                            {snapshotError.name && (
                                                <div className="text-danger small">
                                                    {snapshotError.name[0]}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="projectCard1" aria-hidden="true" ref={modalRef}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <div className="d-flex align-items-center gap-3">
          <h5 className="modal-title">Create Backup</h5>
          <iconify-icon icon="line-md:document-add" className="text-success f-s-22" />
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>

      <form onSubmit={handleCreateBackup}>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="snapshot_name" className="form-label">Backup Name</label>
            <input
              type="text"
              id="snapshot_name"
              name="snapshot_name"
              className="form-control"
              value={formData.snapshot_name}
              onChange={(e) => setFormData({ ...formData, snapshot_name: e.target.value })}
              required
            />

            {backupSuccess && (
              <div className="alert alert-success mt-2">{backupSuccess}</div>
            )}

            {backupError && (
              <div className="text-danger small mt-2">{backupError}</div>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
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
export default Manage;
