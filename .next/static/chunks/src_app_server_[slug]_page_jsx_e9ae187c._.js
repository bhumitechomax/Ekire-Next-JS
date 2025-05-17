(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_server_[slug]_page_jsx_e9ae187c._.js", {

"[project]/src/app/server/[slug]/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Manage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.slug;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [activeInnerTab, setActiveInnerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const [selectedOS, setSelectedOS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [os, setOs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [app, setApp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedOSId, setSelectedOSId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAppId, setSelectedAppId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleOSClick = (id)=>{
        setSelectedOSId(id);
    };
    const handleAppClick = (id)=>{
        setSelectedAppId(id);
    };
    const [showReinstallCard, setShowReinstallCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedVersionId, setSelectedVersionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [serverdetails, setServerDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [vmps, setVmps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [systemusage, setSystemUsage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hostname, setHostname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // const [snapshots, setSnapshots] = useState([]);
    const [serverId, setServerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(id);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        snapshot_name: ""
    });
    const [snapshots, setSnapshots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Top of your component:
    const [snapshotError, setSnapshotError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [snapshotSuccess, setSnapshotSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [upgradeError, setUpgradeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [upgradeSuccess, setUpgradeSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Manage.useEffect": ()=>{
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken");
            if (token && id) {
                console.log('fetch token ', token);
                const FetchSshkey = {
                    "Manage.useEffect.FetchSshkey": async ()=>{
                        setIsLoading(true);
                        try {
                            const response = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${id}/get`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`
                                }
                            });
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
                    }
                }["Manage.useEffect.FetchSshkey"];
                FetchSshkey();
            }
        }
    }["Manage.useEffect"], [
        id
    ]);
    // console.log(serverdetails);
    // console.log("------------------------------------------");
    // console.log(vmps);
    // console.log("------------------------------------------");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Manage.useEffect": ()=>{
            const toggleIcons = document.querySelectorAll(".toggle-password");
            toggleIcons.forEach({
                "Manage.useEffect": (icon)=>{
                    const targetId = icon.getAttribute("data-target");
                    const passwordInput = document.getElementById(targetId);
                    if (!passwordInput) return;
                    const toggleVisibility = {
                        "Manage.useEffect.toggleVisibility": ()=>{
                            const isPassword = passwordInput.type === "password";
                            passwordInput.type = isPassword ? "text" : "password";
                            icon.classList.toggle("ph-eye");
                            icon.classList.toggle("ph-eye-slash");
                        }
                    }["Manage.useEffect.toggleVisibility"];
                    icon.addEventListener("click", toggleVisibility);
                    // Cleanup on unmount
                    return ({
                        "Manage.useEffect": ()=>{
                            icon.removeEventListener("click", toggleVisibility);
                        }
                    })["Manage.useEffect"];
                }
            }["Manage.useEffect"]);
        }
    }["Manage.useEffect"], []);
    // auto loadl
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Manage.useEffect": ()=>{
            // Simulate loading
            const timer = setTimeout({
                "Manage.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["Manage.useEffect.timer"], 900);
            return ({
                "Manage.useEffect": ()=>clearTimeout(timer)
            })["Manage.useEffect"];
        }
    }["Manage.useEffect"], []);
    // additional disk
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5); // Default price for 1 GB
    const updatePrice = (value)=>{
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
    const increment = ()=>{
        const newValue = count + 1;
        setCount(newValue);
        updatePrice(newValue);
    };
    const decrement = ()=>{
        if (count > 1) {
            const newValue = count - 1;
            setCount(newValue);
            updatePrice(newValue);
        }
    };
    // api for start server
    const startServer = async (serverId)=>{
        if (!serverId) return;
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-primary ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Start Server?',
            text: "Are you sure you want to start this server?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, start it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/start`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        }
                    });
                    const result = await res.json();
                    console.log("Start Server Response:", result);
                    if (res.ok && result.success) {
                        swalWithBootstrapButtons.fire('Started!', 'The server has been started successfully.', 'success');
                    } else {
                        swalWithBootstrapButtons.fire('Failed!', result.message || 'Failed to start the server.', 'error');
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire('Error!', 'Something went wrong.', 'error');
                }
            } else if (result.dismiss === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Server start cancelled.', 'info');
            }
        });
    };
    // api for stop server 
    const stopServer = async (serverId)=>{
        if (!serverId) return;
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-success ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Stop Server?',
            text: "Are you sure you want to stop this server?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, stop it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/stop`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        }
                    });
                    const result = await res.json();
                    console.log("Stop Server Response:", result);
                    if (res.ok && result.success) {
                        swalWithBootstrapButtons.fire('Stopped!', 'The server has been stopped successfully.', 'success');
                    } else {
                        swalWithBootstrapButtons.fire('Failed!', result.message || 'Failed to stop the server.', 'error');
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire('Error!', 'Something went wrong.', 'error');
                }
            } else {
                swalWithBootstrapButtons.fire('Cancelled', 'Server stop cancelled.', 'info');
            }
        });
    };
    // api for restart server
    const restartServer = async (serverId)=>{
        if (!serverId) return;
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-secondary ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Restart Server?',
            text: "Are you sure you want to restart this server?",
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Yes, restart it!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/restart`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        }
                    });
                    const result = await res.json();
                    console.log("Restart Server Response:", result);
                    if (res.ok && result.success) {
                        swalWithBootstrapButtons.fire('Restarted!', 'The server has been restarted successfully.', 'success');
                    } else {
                        swalWithBootstrapButtons.fire('Failed!', result.message || 'Failed to restart the server.', 'error');
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire('Error!', 'Something went wrong.', 'error');
                }
            } else {
                swalWithBootstrapButtons.fire('Cancelled', 'Server restart cancelled.', 'info');
            }
        });
    };
    // api os + app system
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Manage.useEffect": ()=>{
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken");
            if (token) {
                // console.log("Token found:", token);
                const FetchProject = {
                    "Manage.useEffect.FetchProject": async ()=>{
                        console.log(`Bearer ${token}`);
                        setIsLoading(true);
                        try {
                            const response = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/operating-systems-applications`, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`
                                }
                            });
                            const result = await response.json();
                            const data = result.data;
                            console.log(data);
                            setOs(data.operating_systems);
                            setApp(data.applications);
                        } catch (error) {
                            console.error("Error fetching cloud vps plan data:", error);
                            setIsLoading(false);
                        }
                    }
                }["Manage.useEffect.FetchProject"];
                FetchProject();
            }
        }
    }["Manage.useEffect"], []);
    // api for reinstall server
    const reinstallServer = async (serverId, payload)=>{
        if (!serverId || !payload?.version_id) return;
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-secondary ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Reinstall Server?',
            text: "This will wipe the existing data. Are you sure?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, reinstall!',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/reinstall`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        },
                        body: JSON.stringify(payload)
                    });
                    const result = await res.json();
                    console.log("Reinstall Server Response:", result);
                    if (res.ok && result.success) {
                        swalWithBootstrapButtons.fire('Reinstalled!', 'The server has been reinstalled successfully.', 'success');
                    } else {
                        swalWithBootstrapButtons.fire('Failed!', result.message || 'Failed to reinstall the server.', 'error');
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire('Error!', 'Something went wrong during reinstall.', 'error');
                }
            } else {
                swalWithBootstrapButtons.fire('Cancelled', 'Server reinstall cancelled.', 'info');
            }
        });
    };
    // api for hostname update
    const handleUpdateClick = async (serverId)=>{
        if (!hostname) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire("Missing Info", "Please enter a hostname.", "warning");
            return;
        }
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-primary ms-2',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Update Hostname?",
            text: `Are you sure you want to update the hostname to "${hostname}"?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, update it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/update`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        },
                        body: JSON.stringify({
                            hostname
                        })
                    });
                    const data = await res.json();
                    console.log("Update Response:", data);
                    if (res.ok && data.success) {
                        swalWithBootstrapButtons.fire("Updated!", "The hostname was updated successfully.", "success");
                        setHostname(""); // Reset field
                    } else {
                        swalWithBootstrapButtons.fire("Failed!", data.message || "Failed to update hostname.", "error");
                    }
                } catch (error) {
                    console.error("Update Error:", error);
                    swalWithBootstrapButtons.fire("Error", "Something went wrong.", "error");
                }
            } else {
                swalWithBootstrapButtons.fire("Cancelled", "Update was cancelled.", "info");
            }
        });
    };
    // api for update password
    const handleChangePasswordClick = async (serverId)=>{
        if (!serverId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire("Missing Info", "Server ID is required.", "warning");
            return;
        }
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-primary ms-2',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Change Server Password?",
            text: "Are you sure you want to send a new password to the current user?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, update it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/password`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        },
                        body: JSON.stringify({
                            send_password_to_current_user: true
                        })
                    });
                    const data = await res.json();
                    console.log("Change Password Response:", data);
                    if (res.ok && data.success) {
                        swalWithBootstrapButtons.fire("Updated!", "A new password has been sent to the current user.", "success");
                    } else {
                        swalWithBootstrapButtons.fire("Failed!", data.message || "Failed to update password.", "error");
                    }
                } catch (error) {
                    console.error("Change Password Error:", error);
                    swalWithBootstrapButtons.fire("Error", "Something went wrong.", "error");
                }
            } else {
                swalWithBootstrapButtons.fire("Cancelled", "Password update was cancelled.", "info");
            }
        });
    };
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Manage.useEffect": ()=>{
            if (id) fetchSnapshots();
        }
    }["Manage.useEffect"], [
        id
    ]);
    // api for list snapshots
    const fetchSnapshots = async ()=>{
        console.log("Effect triggered with id:", id);
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${id}/list-snapshots`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                }
            });
            const data = await res.json();
            console.log("Snapshots:", data);
            if (res.ok && data?.data?.snapshots) {
                setSnapshots(data.data.snapshots);
                console.log("Fetched snapshots:", data.data.snapshots);
            } else {
                console.error("Failed to fetch snapshots:", data?.data?.error || "Unknown error");
            }
        } catch (err) {
            console.error("Error fetching snapshots:", err);
        }
    };
    console.log("Snapshots:", snapshots);
    // api for snapshots
    const handleSubmitSnapshot = async ()=>{
        setSnapshotSuccess("");
        setSnapshotError({});
        if (!serverId) {
            setSnapshotError({
                name: [
                    "Server ID is missing."
                ]
            });
            return;
        }
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${id}/create-snapshot`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                },
                body: JSON.stringify({
                    snapshot_name: formData.snapshot_name
                })
            });
            const data = await res.json();
            console.log("Create Snapshot Response:", data);
            if (res.ok && data.success) {
                setSnapshotSuccess("Snapshot created successfully.");
                fetchSnapshots(); // 🔄 Refresh list
            } else {
                setError({
                    name: [
                        data.message || "Failed to create snapshot."
                    ]
                });
            }
        } catch (err) {
            console.error("Snapshot Error:", err);
            setSnapshotError({
                name: [
                    "Something went wrong while creating snapshot."
                ]
            });
        }
    };
    // Delete snapshot function
    const handleDeleteSnapshot = async (snapshotId)=>{
        if (!snapshotId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire("Missing Info", "Snapshot ID is required.", "warning");
            return;
        }
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-danger ms-2',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Delete Snapshot?",
            text: "Are you sure you want to delete this snapshot? This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/snapshots/${snapshotId}/delete`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        }
                    });
                    let data;
                    try {
                        data = await res.json();
                    } catch (err) {
                        console.error("Failed to parse JSON:", err);
                        swalWithBootstrapButtons.fire("Error", "Invalid server response.", "error");
                        return;
                    }
                    console.log("Delete Snapshot Response:", data);
                    if (res.ok && data?.data?.status === "success") {
                        swalWithBootstrapButtons.fire("Deleted!", data?.data?.message || "The snapshot has been deleted.", "success").then(()=>{
                            fetchSnapshots(); // ✅ Now this works!
                        });
                    } else {
                        swalWithBootstrapButtons.fire("Failed!", data?.message || "Failed to delete snapshot.", "error");
                    }
                } catch (error) {
                    console.error("Delete Snapshot Error:", error);
                    swalWithBootstrapButtons.fire("Error", "Something went wrong.", "error");
                }
            } else {
                swalWithBootstrapButtons.fire("Cancelled", "Snapshot deletion was cancelled.", "info");
            }
        });
    };
    // api for restore snapshot
    const handleRevertSnapshot = async (snapshotId)=>{
        if (!snapshotId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire("Missing Info", "Snapshot ID is required.", "warning");
            return;
        }
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-success ms-2',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Revert Snapshot?",
            text: "Are you sure you want to revert to this snapshot?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, revert it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/snapshots/${snapshotId}/revert`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        }
                    });
                    let data;
                    try {
                        data = await res.json();
                    } catch (err) {
                        console.error("Failed to parse JSON:", err);
                        swalWithBootstrapButtons.fire("Error", "Invalid server response.", "error");
                        return;
                    }
                    console.log("Revert Snapshot Response:", data);
                    if (res.ok && data?.data?.status === "success") {
                        swalWithBootstrapButtons.fire("Reverted!", data?.data?.message || "Snapshot reverted successfully.", "success").then(()=>{
                            fetchSnapshots(); // refresh the list after revert
                        });
                    } else {
                        swalWithBootstrapButtons.fire("Failed!", data?.message || "Failed to revert snapshot.", "error");
                    }
                } catch (error) {
                    console.error("Revert Snapshot Error:", error);
                    swalWithBootstrapButtons.fire("Error", "Something went wrong.", "error");
                }
            } else {
                swalWithBootstrapButtons.fire("Cancelled", "Snapshot revert was cancelled.", "info");
            }
        });
    };
    // api for plan upgrade
    const handleUpgradePlan = async (serverId, payload)=>{
        setUpgradeSuccess("");
        setUpgradeError({});
        if (!serverId) {
            setUpgradeError({
                name: [
                    "Server ID is required."
                ]
            });
            return;
        }
        if (!payload || !payload.vms_id || typeof payload.preserve_disk === "undefined") {
            setUpgradeError({
                name: [
                    "Invalid payload. VMS ID and Preserve Disk are required."
                ]
            });
            return;
        }
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/upgrade`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            console.log("Upgrade Plan Response:", data);
            if (res.ok && data?.data?.status === "success") {
                setUpgradeSuccess(data?.data?.message || "Plan upgraded successfully.");
            } else if (data?.message && Array.isArray(data.message)) {
                setUpgradeError({
                    name: data.message
                });
            } else {
                setUpgradeError({
                    name: [
                        data?.data?.message || "Failed to upgrade plan."
                    ]
                });
            }
        } catch (err) {
            console.error("Upgrade Plan Error:", err);
            setUpgradeError({
                name: [
                    "Something went wrong while upgrading plan."
                ]
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "position-relative",
            children: [
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100",
                    style: {
                        background: 'var(--bodybg-color)',
                        zIndex: 1000
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner-border text-primary",
                        role: "status",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "visually-hidden",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                            lineNumber: 889,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                        lineNumber: 888,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                    lineNumber: 881,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: `page-content  ${isLoading ? 'pointer-events-none' : ''}`,
                    style: {
                        opacity: isLoading ? 0.5 : 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-fluid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row m-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "main-title",
                                                children: [
                                                    "Manage Server ",
                                                    serverdetails?.hostname,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                lineNumber: 898,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "app-line-breadcrumbs mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "f-s-14 f-w-500",
                                                            href: "/server",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ph-duotone  ph-table f-s-16"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 903,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    " Server"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 902,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 901,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 900,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "active",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "f-s-14 f-w-500",
                                                            href: "#",
                                                            children: [
                                                                "Manage Server ",
                                                                serverdetails?.hostname
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 908,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 907,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                lineNumber: 899,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                        lineNumber: 897,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                    lineNumber: 896,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tab-wrapper mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "tabs overflow-auto",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `tab-link ${activeTab === 1 ? "active" : ""}`,
                                                            onClick: ()=>setActiveTab(1),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ph-bold  ph-info f-s-18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 926,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Server Overview"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 922,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `tab-link ${activeTab === 6 ? "active" : ""}`,
                                                            onClick: ()=>setActiveTab(6),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ph-bold ph-corners-in f-s-18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 932,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Actions"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 928,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `tab-link ${activeTab === 2 ? "active" : ""}`,
                                                            onClick: ()=>setActiveTab(2),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ph-bold  ph-circles-three-plus f-s-18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 938,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Server setting"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 934,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `tab-link ${activeTab === 3 ? "active" : ""}`,
                                                            onClick: ()=>setActiveTab(3),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ph-bold  ph-floppy-disk-back f-s-18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 944,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Additional Disk"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 940,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `tab-link ${activeTab === 4 ? "active" : ""}`,
                                                            onClick: ()=>setActiveTab(4),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ph-fill  ph-database f-s-18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 950,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Backups"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 946,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: `tab-link ${activeTab === 5 ? "active" : ""}`,
                                                            onClick: ()=>setActiveTab(5),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ph ph-bounding-box f-s-18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 956,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Snapshots"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 952,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 921,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                lineNumber: 920,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "content-wrapper",
                                                id: "card-container",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `tabs-content ${activeTab === 1 ? "active" : ""}`,
                                                        id: "tab-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-lg-6",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Server Credentials"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 968,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 967,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "col-12",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "app-form",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "row",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "col-lg-12",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "input-group mb-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-left text-bg-primary",
                                                                                                                children: "IPv4"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 976,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                "aria-label": "Dollar amount (with dot and two decimal places)",
                                                                                                                className: "form-control b-r-right",
                                                                                                                placeholder: "988e473a-335d-5c18-b996-db64c22cc7c0",
                                                                                                                type: "text"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 977,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-0 text-bg-primary",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-fill  ph-copy f-s-18"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 978,
                                                                                                                    columnNumber: 134
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 978,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 975,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 974,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "col-lg-12",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "input-group mb-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-left text-bg-primary",
                                                                                                                children: "IPv6"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 983,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                "aria-label": "Dollar amount (with dot and two decimal places)",
                                                                                                                className: "form-control b-r-right",
                                                                                                                placeholder: "f11fdb72-899e-5886-8fe0-9e55a5132aa7",
                                                                                                                type: "text"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 984,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-0 text-bg-primary",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-fill  ph-copy f-s-18"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 985,
                                                                                                                    columnNumber: 134
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 985,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 982,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 981,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "col-lg-12",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "input-group mb-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-left text-bg-primary",
                                                                                                                children: "Username"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 990,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                "aria-label": "Dollar amount (with dot and two decimal places)",
                                                                                                                className: "form-control b-r-right",
                                                                                                                placeholder: "2d907383-8206-51cc-9313-4c931b37b06a",
                                                                                                                type: "text"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 991,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-0 text-bg-primary",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-fill  ph-copy f-s-18"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 992,
                                                                                                                    columnNumber: 134
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 992,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 989,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 988,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "col-lg-12",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "input-group mb-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-left text-bg-primary",
                                                                                                                children: "Password"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 997,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                id: "password1",
                                                                                                                className: "form-control b-r-right",
                                                                                                                placeholder: "********",
                                                                                                                type: "password",
                                                                                                                "aria-label": "Password",
                                                                                                                style: {
                                                                                                                    borderRight: "0"
                                                                                                                }
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 998,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-right",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph ph-eye-slash f-s-20 toggle-password",
                                                                                                                    "data-target": "password1",
                                                                                                                    style: {
                                                                                                                        cursor: "pointer"
                                                                                                                    }
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1007,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1006,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-0 text-bg-primary",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-fill ph-copy f-s-18"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1014,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1013,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 996,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 995,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 973,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 972,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 971,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 970,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 966,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 965,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-lg-6",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Server Details"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1030,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1029,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "row card-body",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-lg-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card-body card-body-style",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "d-flex justify-content-between align-items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        className: "mb-0",
                                                                                                        children: [
                                                                                                            vmps?.cpu,
                                                                                                            "vCPU"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1036,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-primary h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold ph-command f-s-20 text-primary"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1038,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1037,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1035,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1034,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1033,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-lg-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card-body card-body-style",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "d-flex justify-content-between align-items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        className: "mb-0",
                                                                                                        children: [
                                                                                                            vmps?.disk,
                                                                                                            " GB"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1046,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-success h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold ph-database f-s-20 text-success"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1048,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1047,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1045,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1044,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1043,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-lg-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card-body card-body-style",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "d-flex justify-content-between align-items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        className: "mb-0",
                                                                                                        children: [
                                                                                                            vmps?.ramz,
                                                                                                            " GB"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1056,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-secondary h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold ph-floppy-disk f-s-20 text-secondary"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1058,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1057,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1055,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1054,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1053,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-lg-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card-body card-body-style",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "d-flex justify-content-between align-items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        className: "mb-0",
                                                                                                        children: [
                                                                                                            serverdetails?.location,
                                                                                                            " "
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1066,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-danger h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold  ph-map-pin-line f-s-20 text-danger"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1068,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1067,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1065,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1064,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1063,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-lg-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card-body card-body-style",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "d-flex justify-content-between align-items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        className: "mb-0",
                                                                                                        children: serverdetails?.cpu
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1076,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-info h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold ph-cpu text-info f-s-20"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1078,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1077,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1075,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1074,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1073,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-lg-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card-body card-body-style",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "d-flex justify-content-between align-items-center",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        className: "mb-0",
                                                                                                        children: serverdetails?.os_label
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1086,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-warning h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold  ph-windows-logo f-s-22 text-warning text-warning"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1088,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1087,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1085,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1084,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1083,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1032,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1028,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1027,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-lg-12",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Stastics"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1100,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1099,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "row card-body",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card orders-provided-card border-card",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "card-body",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                        className: "ph-bold  ph-circle circle-bg-img"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1106,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "d-flex align-items-center justify-content-between",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                        className: "f-s-18 f-w-600 text-dark txt-ellipsis-1",
                                                                                                                        children: "CPU Usage"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                        lineNumber: 1109,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                                                                        className: "text-secondary-dark mb-0",
                                                                                                                        children: [
                                                                                                                            systemusage?.cpuUsage,
                                                                                                                            "%"
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                        lineNumber: 1110,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1108,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "dropdown bg-xl-light-danger  h-40 w-40 d-flex-center b-r-15",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-bold ph-cpu f-s-20 text-danger"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1113,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1112,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1107,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1105,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1104,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1103,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card bg-primary-300 product-sold-card",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "card-body",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "d-flex align-items-center justify-content-between",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                    className: "f-s-18 f-w-600 text-dark txt-ellipsis-1",
                                                                                                                    children: [
                                                                                                                        systemusage?.inBandwidth,
                                                                                                                        " of unmetered GiB"
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1124,
                                                                                                                    columnNumber: 77
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                    className: "text-secondary-dark",
                                                                                                                    style: {
                                                                                                                        marginTop: "6%",
                                                                                                                        marginBottom: "6%"
                                                                                                                    },
                                                                                                                    children: "Incoming Bandwith"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1125,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1123,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "dropdown bg-light-white h-40 w-40 d-flex-center b-r-15",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                className: "ph-bold  ph-arrow-square-in f-s-20 text-secondary"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1128,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1127,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1122,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1121,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1120,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1119,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card product-store-card border-card",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "card-body",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                        className: "ph-bold  ph-circle circle-bg-img"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1137,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "d-flex align-items-center justify-content-between",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                        className: "f-s-18 f-w-600 text-dark txt-ellipsis-1",
                                                                                                                        children: [
                                                                                                                            systemusage?.outBandwidth,
                                                                                                                            " of unmetered GiB"
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                        lineNumber: 1140,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                        className: "text-secondary-dark",
                                                                                                                        style: {
                                                                                                                            marginTop: "6%",
                                                                                                                            marginBottom: "6%"
                                                                                                                        },
                                                                                                                        children: "Outgoing Bandwith"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                        lineNumber: 1141,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1139,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "dropdown bg-light-success h-40 w-40 d-flex-center b-r-15",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-bold  ph-arrow-square-out f-s-20 text-success"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1144,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1143,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1138,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1136,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1135,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1134,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12 col-xxl-3 col-lg-6 col-md-6 m-10-0",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card project-total-card",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "card-body",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "d-flex align-items-center justify-content-between",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                    className: "f-s-18 f-w-600 text-dark txt-ellipsis-1",
                                                                                                                    children: [
                                                                                                                        systemusage?.usedDisk,
                                                                                                                        " of ",
                                                                                                                        vmps?.disk,
                                                                                                                        " GiB"
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1155,
                                                                                                                    columnNumber: 77
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                    className: "text-secondary-dark",
                                                                                                                    style: {
                                                                                                                        marginTop: "6%",
                                                                                                                        marginBottom: "6%"
                                                                                                                    },
                                                                                                                    children: "Disk Usage"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1156,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1154,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "dropdown bg-light-info h-40 w-40 d-flex-center b-r-15",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                className: "ph-fill  ph-database f-s-20 text-info"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1159,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1158,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1153,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1152,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1151,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1150,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1102,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1098,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1097,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-lg-12",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Billing Information"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1172,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1171,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "row d-flex align-items-center justify-content-between",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "col-lg-6",
                                                                                            style: {
                                                                                                padding: "5px 15px"
                                                                                            },
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "f-s-17 text-dark ",
                                                                                                    children: "Your Current Size is 2 vCPU - 4 GB Memory - 100 SSD Storage."
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1177,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                upgradeSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "alert alert-success",
                                                                                                    children: upgradeSuccess
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1179,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    className: "btn btn-primary h-45 icon-btn mb-3",
                                                                                                    onClick: ()=>handleUpgradePlan(serverId),
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold ph-arrow-up f-s-18"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1185,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        " Upgrade"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1181,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                upgradeError.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "text-danger small",
                                                                                                    children: upgradeError.name[0]
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1188,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                    className: "text-secondary-dark mb-0",
                                                                                                    children: "Renews Automatically on 18-12-2024"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1191,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "f-s-17 text-dark ",
                                                                                                    children: "We will send you a notification upon subscription expiration"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1192,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                    className: "text-secondary-dark mb-0",
                                                                                                    children: "$10 Per Month"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1193,
                                                                                                    columnNumber: 65
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1176,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "col-lg-6 b-r-15",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    "aria-valuemax": 100,
                                                                                                    "aria-valuemin": 0,
                                                                                                    "aria-valuenow": 75,
                                                                                                    className: "progress w-100 h-15 mb-2",
                                                                                                    role: "progressbar",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "progress-bar bg-primary text-white",
                                                                                                        style: {
                                                                                                            width: '75%'
                                                                                                        },
                                                                                                        children: " 75%"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1197,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1196,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "f-s-14 text-dark ",
                                                                                                    children: "75 days remaining until your server needs a renew"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1199,
                                                                                                    columnNumber: 65
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1195,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1175,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1174,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1170,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1169,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 964,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 963,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `tabs-content ${activeTab === 6 ? "active" : ""}`,
                                                        id: "tab-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-lg-12",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Action Buttons"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1213,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1212,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body d-flex gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-primary h-45 icon-btn mb-3",
                                                                                        onClick: ()=>startServer(server?.id),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph-fill ph-play f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1220,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            "Start Server"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1216,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-success h-45 icon-btn mb-3",
                                                                                        onClick: ()=>stopServer(server?.id),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph-fill ph-pause f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1227,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            "Stop Server"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1223,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-secondary h-45 icon-btn mb-3",
                                                                                        onClick: ()=>restartServer(server?.id),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph-fill ph-rewind f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1234,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            "Restart Server"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1230,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-dark h-45 icon-btn mb-3",
                                                                                        onClick: ()=>setShowReinstallCard(!showReinstallCard),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph-fill ph-arrow-line-down f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1242,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            " Reinstall Server"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1238,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1215,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1211,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1210,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 1209,
                                                                columnNumber: 41
                                                            }, this),
                                                            showReinstallCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "card",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card-header",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                            children: "OS/Application"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1252,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1251,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card-body p-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "row",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "col-12",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "tab-wrapper ms-3 me-3 mb-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                            className: "tabs overflow-auto",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    className: `tab-link ${activeInnerTab === 8 ? "active" : ""}`,
                                                                                                    onClick: ()=>setActiveInnerTab(8),
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold  ph-align-right f-s-18"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1264,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        " Operating System"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1260,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    className: `tab-link ${activeInnerTab === 9 ? "active" : ""}`,
                                                                                                    onClick: ()=>setActiveInnerTab(9),
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-fill ph-list-bullets f-s-18"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1270,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        " Application"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1266,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1259,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1258,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "content-wrapper",
                                                                                        id: "card-container",
                                                                                        children: [
                                                                                            activeInnerTab === 8 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "tabs-content active",
                                                                                                id: "tab-8",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "card",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "card-body",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "row simple-pricing-container app-arrow",
                                                                                                                children: os?.map((o, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-pricing-card card mb-0",
                                                                                                                                onClick: ()=>handleOSClick(o.id),
                                                                                                                                style: {
                                                                                                                                    cursor: 'pointer'
                                                                                                                                },
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                    className: "card-body",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "simple-price-header text-center",
                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                                                className: "mb-3",
                                                                                                                                                children: o.name
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                lineNumber: 1287,
                                                                                                                                                columnNumber: 105
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1286,
                                                                                                                                            columnNumber: 101
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "simple-price-body text-center",
                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                                alt: o.name,
                                                                                                                                                className: "img-fluid",
                                                                                                                                                src: o.icon,
                                                                                                                                                width: 45,
                                                                                                                                                height: 45
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                lineNumber: 1290,
                                                                                                                                                columnNumber: 105
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1289,
                                                                                                                                            columnNumber: 101
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 1285,
                                                                                                                                    columnNumber: 97
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 1284,
                                                                                                                                columnNumber: 93
                                                                                                                            }, this),
                                                                                                                            selectedOSId === o.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                                className: "app-form row g-3 needs-validation mt-0",
                                                                                                                                noValidate: true,
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                    className: o.name,
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                                            className: "form-select",
                                                                                                                                            id: `${o.name}-version`,
                                                                                                                                            required: true,
                                                                                                                                            onChange: (e)=>setSelectedVersionId(e.target.value),
                                                                                                                                            children: [
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                                    value: "",
                                                                                                                                                    children: "Select Version"
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                    lineNumber: 1302,
                                                                                                                                                    columnNumber: 109
                                                                                                                                                }, this),
                                                                                                                                                o.versions?.map((version)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                                        value: version.id,
                                                                                                                                                        children: version.name
                                                                                                                                                    }, version.id, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                        lineNumber: 1304,
                                                                                                                                                        columnNumber: 113
                                                                                                                                                    }, this))
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1297,
                                                                                                                                            columnNumber: 105
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "invalid-feedback",
                                                                                                                                            children: "Please select a valid version."
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1309,
                                                                                                                                            columnNumber: 105
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 1296,
                                                                                                                                    columnNumber: 101
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 1295,
                                                                                                                                columnNumber: 97
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, o.id, true, {
                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                        lineNumber: 1283,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this))
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1280,
                                                                                                                columnNumber: 81
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                className: "btn btn-primary",
                                                                                                                type: "button",
                                                                                                                onClick: ()=>reinstallServer(server?.id, {
                                                                                                                        version_id: selectedVersionId
                                                                                                                    }),
                                                                                                                children: "Save"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1317,
                                                                                                                columnNumber: 81
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1279,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1278,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1277,
                                                                                                columnNumber: 69
                                                                                            }, this),
                                                                                            activeInnerTab === 9 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "tabs-content active",
                                                                                                id: "tab-9",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "card",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "card-body",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "row simple-pricing-container app-arrow",
                                                                                                                children: app?.map((apps, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-pricing-card card mb-0",
                                                                                                                                onClick: ()=>handleAppClick(apps.id),
                                                                                                                                style: {
                                                                                                                                    cursor: 'pointer'
                                                                                                                                },
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                    className: "card-body",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "simple-price-header text-center",
                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                                                className: "mb-3",
                                                                                                                                                children: apps.name
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                lineNumber: 1339,
                                                                                                                                                columnNumber: 105
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1338,
                                                                                                                                            columnNumber: 101
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "simple-price-body text-center",
                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                                alt: apps.name,
                                                                                                                                                className: "img-fluid",
                                                                                                                                                src: apps.icon,
                                                                                                                                                width: 45,
                                                                                                                                                height: 45
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                lineNumber: 1342,
                                                                                                                                                columnNumber: 105
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1341,
                                                                                                                                            columnNumber: 101
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 1337,
                                                                                                                                    columnNumber: 97
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 1336,
                                                                                                                                columnNumber: 93
                                                                                                                            }, this),
                                                                                                                            selectedAppId === apps.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                                className: "app-form row g-3 needs-validation mt-0",
                                                                                                                                noValidate: true,
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                    className: apps.name,
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                                            className: "form-select",
                                                                                                                                            id: `${apps.name}-version`,
                                                                                                                                            required: true,
                                                                                                                                            onChange: (e)=>setSelectedVersionId(e.target.value),
                                                                                                                                            children: [
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                                    value: "",
                                                                                                                                                    children: "Select Version"
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                    lineNumber: 1354,
                                                                                                                                                    columnNumber: 109
                                                                                                                                                }, this),
                                                                                                                                                apps.versions?.map((version)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                                        value: version.id,
                                                                                                                                                        children: version.name
                                                                                                                                                    }, version.id, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                        lineNumber: 1356,
                                                                                                                                                        columnNumber: 113
                                                                                                                                                    }, this))
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1349,
                                                                                                                                            columnNumber: 105
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "invalid-feedback",
                                                                                                                                            children: "Please select a valid version."
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1361,
                                                                                                                                            columnNumber: 105
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 1348,
                                                                                                                                    columnNumber: 101
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 1347,
                                                                                                                                columnNumber: 97
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, apps.id, true, {
                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                        lineNumber: 1335,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this))
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1333,
                                                                                                                columnNumber: 81
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                className: "btn btn-primary",
                                                                                                                type: "button",
                                                                                                                onClick: ()=>reinstallServer(server?.id, {
                                                                                                                        version_id: selectedVersionId
                                                                                                                    }),
                                                                                                                children: "Save"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1369,
                                                                                                                columnNumber: 81
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1332,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1331,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1330,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1275,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1256,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1255,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1254,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 1250,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1208,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `tabs-content ${activeTab === 2 ? "active" : ""}`,
                                                        id: "tab-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-lg-12",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Change Server Settings"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1395,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1394,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                    className: "app-form row g-3",
                                                                                    style: {
                                                                                        padding: "5px 15px"
                                                                                    },
                                                                                    onSubmit: (e)=>e.preventDefault(),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-md-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                className: "form-label",
                                                                                                htmlFor: "hostnameInput",
                                                                                                children: "Update Hostname"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1400,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                id: "hostnameInput",
                                                                                                type: "text",
                                                                                                className: "form-control",
                                                                                                placeholder: "New Hostname",
                                                                                                required: true,
                                                                                                value: hostname,
                                                                                                onChange: (e)=>setHostname(e.target.value)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1403,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: "btn btn-primary h-45 icon-btn mb-3 mt-4",
                                                                                                onClick: handleUpdateClick,
                                                                                                children: "Update"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1412,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1399,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1398,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1397,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1393,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Change Server Password"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1426,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1425,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                    className: "app-form rounded-control row g-3",
                                                                                    style: {
                                                                                        padding: "5px 15px"
                                                                                    },
                                                                                    onSubmit: (e)=>e.preventDefault(),
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-md-4",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: "",
                                                                                                className: "form-label",
                                                                                                children: "Change Server Password"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1436,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: "btn btn-primary h-45 icon-btn mb-3 mt-3",
                                                                                                onClick: handleChangePasswordClick,
                                                                                                children: "Update"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1437,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1435,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1430,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1429,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1424,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 1392,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1391,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1389,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `tabs-content ${activeTab === 3 ? "active" : ""}`,
                                                        id: "tab-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-lg-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "card security-card-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card-header",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                children: "Additional Disk"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1488,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1487,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card-body",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "modal-body",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "d-flex align-items-center",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "text-center align-self-center",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                        alt: "",
                                                                                                        className: "img-fluid b-r-10",
                                                                                                        src: "../assets/images/new/cloud.png"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1498,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1497,
                                                                                                    columnNumber: 69
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "ps-4",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "d-flex align-items-center gap-3",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "simplespin d-flex align-items-center gap-2",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                            className: "circle-btn decrement",
                                                                                                                            role: "button",
                                                                                                                            onClick: decrement,
                                                                                                                            children: "-"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                            lineNumber: 1503,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                            className: "app-small-touchspin count f-s-19",
                                                                                                                            type: "text",
                                                                                                                            value: count,
                                                                                                                            readOnly: true
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                            lineNumber: 1504,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                            className: "circle-btn increment",
                                                                                                                            role: "button",
                                                                                                                            onClick: increment,
                                                                                                                            children: "+"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                            lineNumber: 1505,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1502,
                                                                                                                    columnNumber: 77
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                    className: "f-s-18 m-0",
                                                                                                                    children: "GB"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1507,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1501,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "f-s-18 text-primary fw-bold m-0",
                                                                                                                children: [
                                                                                                                    " $",
                                                                                                                    price,
                                                                                                                    " /mo"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1510,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1509,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1500,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1496,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1495,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                        className: "app-form mt-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mb-3",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "input-group",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                        "aria-describedby": "inputGroupPrepend2",
                                                                                                        className: "form-control",
                                                                                                        id: "validationDefaultUsername",
                                                                                                        placeholder: "Volume Name",
                                                                                                        required: "",
                                                                                                        type: "text"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1518,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1517,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1516,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "mb-3",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "input-group",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                        "aria-describedby": "inputGroupPrepend2",
                                                                                                        className: "form-control",
                                                                                                        id: "validationDefaultUsername",
                                                                                                        placeholder: "Add Location",
                                                                                                        required: "",
                                                                                                        type: "text"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1523,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1522,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1521,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1515,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "modal-footer",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            className: "btn btn-light-primary",
                                                                                            type: "button",
                                                                                            children: "Save changes"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1528,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1527,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1491,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1490,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1486,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 1485,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1484,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1483,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `tabs-content ${activeTab === 4 ? "active" : ""}`,
                                                        id: "tab-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-lg-12",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "card security-card-content",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card-header",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                children: "Backup"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1542,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1541,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card-body d-flex gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "btn h-45 icon-btn mb-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ph-fill  ph-eye f-s-18"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1546,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        "  View Backup"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1545,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "btn btn-primary h-45 icon-btn mb-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ph-bold  ph-plus f-s-18"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1549,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        "  Create Backup"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1548,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "btn btn-success h-45 icon-btn mb-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ph ph-arrow-fat-lines-up f-s-18"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1552,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        "  Update Auto Backup"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1551,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1544,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1540,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 1539,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1538,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1537,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `tabs-content ${activeTab === 5 ? "active" : ""}`,
                                                        id: "tab-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-lg-12",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Snapshots"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1565,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1564,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "btn btn-primary h-45 icon-btn m-2",
                                                                                    "data-bs-toggle": "modal",
                                                                                    "data-bs-target": "#projectCard2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                            className: "ph-bold ph-plus f-s-18"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1573,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        " Create Snapshots"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1568,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1567,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1563,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card p-l-r-30",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card-body p-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "app-datatable-default overflow-auto",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                                    className: "datatable display app-data-table default-data-table",
                                                                                    id: "example",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                        width: 10,
                                                                                                        children: "Sr no."
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1588,
                                                                                                        columnNumber: 73
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                        children: "Snapshot Name"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1589,
                                                                                                        columnNumber: 73
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                        children: "Size"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1590,
                                                                                                        columnNumber: 73
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                        children: "Action"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1592,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1587,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1586,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                            children: snapshots.length > 0 && snapshots.map((snapshot, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                            children: index + 1
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1599,
                                                                                                            columnNumber: 81
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                            children: snapshot?.name
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1600,
                                                                                                            columnNumber: 81
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                            children: [
                                                                                                                snapshot?.size,
                                                                                                                " GB"
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1601,
                                                                                                            columnNumber: 81
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                            className: "d-flex gap-3",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    className: "badge text-white bg-success border-0 d-flex gap-2 align-items-center",
                                                                                                                    onClick: ()=>handleRevertSnapshot(snapshot.id),
                                                                                                                    children: "Revert"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1604,
                                                                                                                    columnNumber: 85
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    className: "badge text-white bg-danger border-0 d-flex gap-2 align-items-center",
                                                                                                                    onClick: ()=>handleDeleteSnapshot(snapshot.id),
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                            className: "ph ph-trash f-s-18"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                            lineNumber: 1615,
                                                                                                                            columnNumber: 89
                                                                                                                        }, this),
                                                                                                                        "Delete"
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1611,
                                                                                                                    columnNumber: 85
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1603,
                                                                                                            columnNumber: 81
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, snapshot.id || index, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1598,
                                                                                                    columnNumber: 77
                                                                                                }, this))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1595,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1581,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1580,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1579,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1578,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 1562,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1561,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1560,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                lineNumber: 962,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                        lineNumber: 918,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                    lineNumber: 917,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                            lineNumber: 894,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal fade",
                            id: "projectCard2",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-dialog ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex align-items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "modal-title",
                                                            children: "Create Project "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1650,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iconify-icon", {
                                                            icon: "line-md:document-add",
                                                            className: "text-success f-s-22"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1651,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 1649,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn-close",
                                                    "data-bs-dismiss": "modal",
                                                    "aria-label": "Close"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 1653,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                            lineNumber: 1648,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmitSnapshot,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "modal-body",
                                                    children: [
                                                        snapshotSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "alert alert-success",
                                                            children: snapshotSuccess
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1663,
                                                            columnNumber: 62
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "snapshot_name",
                                                                    className: "form-label",
                                                                    children: "Snapshot Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1666,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "snapshot_name",
                                                                    name: "snapshot_name",
                                                                    className: "form-control",
                                                                    required: true,
                                                                    value: formData.snapshot_name,
                                                                    onChange: handleChange
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1669,
                                                                    columnNumber: 45
                                                                }, this),
                                                                snapshotError.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-danger small",
                                                                    children: snapshotError.name[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1679,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1665,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 1662,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "modal-footer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "btn btn-primary",
                                                        children: "Submit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1685,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 1684,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                            lineNumber: 1661,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                    lineNumber: 1647,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                lineNumber: 1646,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                            lineNumber: 1644,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                    lineNumber: 893,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/server/[slug]/page.jsx",
            lineNumber: 878,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/server/[slug]/page.jsx",
        lineNumber: 877,
        columnNumber: 9
    }, this);
}
_s(Manage, "5mva+AcUsCZzrGbobmNjqCMXhGA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = Manage;
const __TURBOPACK__default__export__ = Manage;
var _c;
__turbopack_context__.k.register(_c, "Manage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_server_%5Bslug%5D_page_jsx_e9ae187c._.js.map