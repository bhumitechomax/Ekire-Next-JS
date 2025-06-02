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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$bundle$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$helpers$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/helpers/helpers.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bootstrap/dist/js/bootstrap.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
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
    const handleOSClick = (osid)=>{
        setSelectedOSId(osid);
    };
    const handleAppClick = (appid)=>{
        setSelectedAppId(appid);
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
    // const serverId= id ;
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        snapshot_name: "",
        vms_id: "",
        preserve_disk: ""
    });
    const [snapshots, setSnapshots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Top of your component:
    const [snapshotError, setSnapshotError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [snapshotSuccess, setSnapshotSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [reinstallPayload, setReinstallPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        os_version_id: null
    });
    const [changehostnamePayload, setChangeHostnamePayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        hostname: ""
    });
    // Fetch Server Details and VMPS
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Manage.useEffect": ()=>{
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken");
            if (token && id) {
                console.log("fetch token ", token);
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
    const startServer = async (id)=>{
        if (!id) return;
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: "btn btn-primary ms-2",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Start Server?",
            text: "Are you sure you want to start this server?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, start it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${id}/start`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        }
                    });
                    const result = await res.json();
                    console.log("Start Server Response:", result);
                    if (res.ok && result.data.status === "success") {
                        swalWithBootstrapButtons.fire("Started!", "The server has been started successfully.", "success");
                    } else {
                        swalWithBootstrapButtons.fire("Failed!", result.message || "Failed to start the server.", "error");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire("Error!", "Something went wrong.", "error");
                }
            } else if (result.dismiss === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DismissReason.cancel) {
                swalWithBootstrapButtons.fire("Cancelled", "Server start cancelled.", "info");
            }
        });
    };
    // api for stop server
    const stopServer = async (id)=>{
        if (!id) return;
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: "btn btn-success ms-2",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Stop Server?",
            text: "Are you sure you want to stop this server?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, stop it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${id}/stop`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        }
                    });
                    const result = await res.json();
                    console.log("Stop Server Response:", result);
                    if (res.ok && result.data.status === "success") {
                        swalWithBootstrapButtons.fire("Stopped!", "The server has been stopped successfully.", "success");
                    } else {
                        swalWithBootstrapButtons.fire("Failed!", result.message || "Failed to stop the server.", "error");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire("Error!", "Something went wrong.", "error");
                }
            } else {
                swalWithBootstrapButtons.fire("Cancelled", "Server stop cancelled.", "info");
            }
        });
    };
    // api for restart server
    const restartServer = async (id)=>{
        if (!id) return;
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: "btn btn-secondary ms-2",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Restart Server?",
            text: "Are you sure you want to restart this server?",
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Yes, restart it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${id}/restart`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        }
                    });
                    const result = await res.json();
                    console.log("Restart Server Response:", result);
                    if (res.ok && result.data.status === "success") {
                        swalWithBootstrapButtons.fire("Restarted!", "The server has been restarted successfully.", "success");
                    } else {
                        swalWithBootstrapButtons.fire("Failed!", result.message || "Failed to restart the server.", "error");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire("Error!", "Something went wrong.", "error");
                }
            } else {
                swalWithBootstrapButtons.fire("Cancelled", "Server restart cancelled.", "info");
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
    const reinstallServer = async (id, reinstallPayload)=>{
        if (!id || !reinstallPayload?.os_version_id) return;
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: "btn btn-secondary ms-2",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Reinstall Server?",
            text: "This will wipe the existing data. Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, reinstall!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${id}/reinstall`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        },
                        body: JSON.stringify(reinstallPayload)
                    });
                    const result = await res.json();
                    console.log("Reinstall Server Response:", result);
                    if (res.ok && result.data.status === "success") {
                        swalWithBootstrapButtons.fire("Reinstalled!", "The server has been reinstalled successfully.", "success");
                        window.location.reload(); // Reload the page to reflect changes
                    } else {
                        swalWithBootstrapButtons.fire("Failed!", result.message || "Failed to reinstall the server.", "error");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire("Error!", "Something went wrong during reinstall.", "error");
                }
            } else {
                swalWithBootstrapButtons.fire("Cancelled", "Server reinstall cancelled.", "info");
            }
        });
    };
    const handleHostnameChange = (e)=>{
        setChangeHostnamePayload({
            ...changehostnamePayload,
            [e.target.name]: e.target.value
        });
    };
    // api for hostname update
    const handleUpdateClick = async ()=>{
        if (!changehostnamePayload?.hostname) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire("Missing Info", "Please enter a hostname.", "warning");
            return;
        }
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: "btn btn-primary ms-2",
                cancelButton: "btn btn-secondary"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Update Hostname?",
            text: `Are you sure you want to update the hostname to "${changehostnamePayload?.hostname}"?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, update it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${id}/update`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        },
                        body: JSON.stringify({
                            hostname: changehostnamePayload?.hostname
                        })
                    });
                    const data = await res.json();
                    console.log("Update Response:", data);
                    if (res.ok && data?.data?.status === "success") {
                        swalWithBootstrapButtons.fire("Updated!", "The hostname was updated successfully.", "success");
                        setChangeHostnamePayload({
                            hostname: ""
                        }); // Reset field
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
    // // api for update password
    const handleChangePasswordClick = async ()=>{
        console.log("ID: ", id);
        if (!id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire("Missing Info", "Server ID is required.", "warning");
            return;
        }
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: "btn btn-primary ms-2",
                cancelButton: "btn btn-secondary"
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
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${id}/password`, {
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
                    // console.log("Change Password Response:", data);
                    if (res.ok && data?.data?.status === "success") {
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
        console.log(selectedPlanId);
        setSelectedPlanId(e.target.value);
        setPreserveDisk(e.target.checked);
        setFormData({
            ...formData,
            vms_id: e.target.value,
            preserve_disk: e.target.checked
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Manage.useEffect": ()=>{
            if (id) fetchSnapshots(id);
        }
    }["Manage.useEffect"], [
        id
    ]);
    // api for list snapshots
    const fetchSnapshots = async (id)=>{
        console.log("Fetching snapshots for server ID:", id);
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
    // to close the modal on cross and reload the table
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Manage.useEffect": ()=>{
            const modalElement = modalRef.current;
            if (!modalElement) return;
            const bootstrap = __turbopack_context__.r("[project]/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js [app-client] (ecmascript)");
            const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
            let autoCloseTimer = null;
            const handleModalClose = {
                "Manage.useEffect.handleModalClose": ()=>{
                    fetchSnapshots(); // Refresh snapshots when modal closes
                    setSnapshotSuccess("");
                    setSnapshotError({});
                    setFormData({
                        snapshot_name: ""
                    });
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
            }["Manage.useEffect.handleModalClose"];
            const handleModalOpen = {
                "Manage.useEffect.handleModalOpen": ()=>{
                    // Clear messages and reset form immediately when modal opens
                    setSnapshotSuccess("");
                    setSnapshotError({});
                    setFormData({
                        snapshot_name: ""
                    });
                }
            }["Manage.useEffect.handleModalOpen"];
            modalElement.addEventListener("hidden.bs.modal", handleModalClose);
            modalElement.addEventListener("shown.bs.modal", handleModalOpen);
            return ({
                "Manage.useEffect": ()=>{
                    modalElement.removeEventListener("hidden.bs.modal", handleModalClose);
                    modalElement.removeEventListener("shown.bs.modal", handleModalOpen);
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
            })["Manage.useEffect"];
        }
    }["Manage.useEffect"], []);
    // api for snapshots
    const handleSubmitSnapshot = async ()=>{
        setSnapshotSuccess("");
        setSnapshotError({});
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/create-snapshot`, {
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
            if (res.ok && data?.data?.status === "success") {
                setSnapshotSuccess(data.message || "Snapshot successfully created.");
                fetchSnapshots();
            // Optionally clear input:
            // setFormData(prev => ({ ...prev, snapshot_name: "" }));
            } else {
                if (data?.data?.message && data?.data?.message.toLowerCase().includes("exists")) {
                    setSnapshotError({
                        name: [
                            "A snapshot with this name already exists."
                        ]
                    });
                } else {
                    setSnapshotError({
                        name: [
                            data?.data?.message || "Failed to create snapshot."
                        ]
                    });
                }
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
                confirmButton: "btn btn-danger ms-2",
                cancelButton: "btn btn-success ms-2"
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
                            window.location.reload(); // Reload the page to reflect changes
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
                confirmButton: "btn btn-success ms-2",
                cancelButton: "btn btn-secondary"
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
    const handleUpgradePlan = async (serverId1, payload)=>{
        setUpgradeSuccess("");
        setUpgradeError({});
        if (!serverId1) {
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
            const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId1}/upgrade`, {
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
    // api for extend server
    const extendServer = async (serverId1)=>{
        if (!serverId1) return;
        const swalWithBootstrapButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mixin({
            customClass: {
                confirmButton: "btn btn-secondary ms-2",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Extend Server?",
            text: "Do you want to extend this server's duration?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, extend!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId1}/extend`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        }
                    });
                    const result = await res.json();
                    console.log("Extend Server Response:", result);
                    if (res.ok && result.data?.status === "success") {
                        swalWithBootstrapButtons.fire("Extended!", "The server has been extended successfully.", "success").then(()=>{
                            window.location.reload(); // ✅ Reload only after user clicks OK
                        });
                    } else {
                        swalWithBootstrapButtons.fire("Failed!", result.message || "Failed to extend the server.", "error");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    swalWithBootstrapButtons.fire("Error!", "Something went wrong while extending the server.", "error");
                }
            } else {
                swalWithBootstrapButtons.fire("Cancelled", "Server extension cancelled.", "info");
            }
        });
    };
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPlanId, setSelectedPlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preserveDisk, setPreserveDisk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showUpgradeForm, setShowUpgradeForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
                            const response = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/list-plans`, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`
                                }
                            });
                            const result = await response.json();
                            const data = result.data;
                            console.log(data);
                            setPlans(result.data.vms);
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
    const handleUpgradeClick = ()=>{
        setShowUpgradeForm(true);
        setTimeout(()=>{
            formRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }, 200);
    };
    const handleUpgrade = async ()=>{
        setErrorMessage("");
        setStatusMessage("");
        try {
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("accessToken");
            const response = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/upgrade`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify([
                    formData
                ])
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
    const [backupSuccess, setBackupSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [backupError, setBackupError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // const modalRef = useRef(null);
    const openBackupModal = ()=>{
        const modal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"](modalRef.current);
        modal.show();
    };
    const handleCreateBackup = async (e)=>{
        e.preventDefault();
        setBackupSuccess("");
        setBackupError("");
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/${serverId}/create-backup`, {
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
            if (res.ok && data?.data?.status === "success") {
                setBackupSuccess(data.message || "Backup created successfully.");
                setFormData((prev)=>({
                        ...prev,
                        snapshot_name: ""
                    }));
                setTimeout(()=>{
                    const modal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bootstrap$2f$dist$2f$js$2f$bootstrap$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"].getInstance(modalRef.current);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "position-relative",
            children: [
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100",
                    style: {
                        background: "var(--bodybg-color)",
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
                            lineNumber: 1250,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                        lineNumber: 1249,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                    lineNumber: 1242,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: `page-content  ${isLoading ? "pointer-events-none" : ""}`,
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
                                                lineNumber: 1262,
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
                                                                        lineNumber: 1269,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    " Server"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 1268,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1267,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1266,
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
                                                            lineNumber: 1274,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1273,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                lineNumber: 1265,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                        lineNumber: 1261,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                    lineNumber: 1260,
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
                                                                    lineNumber: 1292,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Server Overview"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1288,
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
                                                                    lineNumber: 1298,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Actions"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1294,
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
                                                                    lineNumber: 1304,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " ",
                                                                "Server setting"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1300,
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
                                                                    lineNumber: 1311,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " ",
                                                                "Additional Disk"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1307,
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
                                                                    lineNumber: 1318,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Backups"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1314,
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
                                                                    lineNumber: 1324,
                                                                    columnNumber: 45
                                                                }, this),
                                                                " Snapshots"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1320,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 1287,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                lineNumber: 1286,
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
                                                                                    lineNumber: 1339,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1338,
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
                                                                                                                lineNumber: 1347,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                "aria-label": "Dollar amount (with dot and two decimal places)",
                                                                                                                className: "form-control b-r-right",
                                                                                                                placeholder: "988e473a-335d-5c18-b996-db64c22cc7c0",
                                                                                                                type: "text"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1350,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-0 text-bg-primary",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-fill  ph-copy f-s-18"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1357,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1356,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1346,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1345,
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
                                                                                                                lineNumber: 1363,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                "aria-label": "Dollar amount (with dot and two decimal places)",
                                                                                                                className: "form-control b-r-right",
                                                                                                                placeholder: "f11fdb72-899e-5886-8fe0-9e55a5132aa7",
                                                                                                                type: "text"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1366,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-0 text-bg-primary",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-fill  ph-copy f-s-18"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1373,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1372,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1362,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1361,
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
                                                                                                                lineNumber: 1379,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                "aria-label": "Dollar amount (with dot and two decimal places)",
                                                                                                                className: "form-control b-r-right",
                                                                                                                placeholder: "2d907383-8206-51cc-9313-4c931b37b06a",
                                                                                                                type: "text"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1382,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-0 text-bg-primary",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-fill  ph-copy f-s-18"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1389,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1388,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1378,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1377,
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
                                                                                                                lineNumber: 1395,
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
                                                                                                                lineNumber: 1398,
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
                                                                                                                    lineNumber: 1407,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1406,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                className: "input-group-text b-r-0 text-bg-primary",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-fill ph-copy f-s-18"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1414,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1413,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1394,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1393,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1344,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1343,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1342,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1341,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1337,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1336,
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
                                                                                    lineNumber: 1428,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1427,
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
                                                                                                        lineNumber: 1434,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-primary h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold ph-command f-s-20 text-primary"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1436,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1435,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1433,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1432,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1431,
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
                                                                                                        children: systemusage?.diskPlan
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1444,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-success h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold ph-database f-s-20 text-success"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1448,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1447,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1443,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1442,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1441,
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
                                                                                                            vmps?.ram,
                                                                                                            " GB"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1456,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-secondary h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold ph-floppy-disk f-s-20 text-secondary"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1458,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1457,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1455,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1454,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1453,
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
                                                                                                        lineNumber: 1466,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-danger h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold  ph-map-pin-line f-s-20 text-danger"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1470,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1469,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1465,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1464,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1463,
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
                                                                                                        lineNumber: 1478,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-info h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold ph-cpu text-info f-s-20"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1480,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1479,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1477,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1476,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1475,
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
                                                                                                        lineNumber: 1488,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "dropdown bg-xl-light-warning h-40 w-40 d-flex-center b-r-15",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                            className: "ph-bold  ph-windows-logo f-s-22 text-warning text-warning"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1492,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1491,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1487,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1486,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1485,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1430,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1426,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1425,
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
                                                                                    lineNumber: 1504,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1503,
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
                                                                                                        lineNumber: 1510,
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
                                                                                                                        lineNumber: 1513,
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
                                                                                                                        lineNumber: 1516,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1512,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "dropdown bg-xl-light-danger  h-40 w-40 d-flex-center b-r-15",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-bold ph-cpu f-s-20 text-danger"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1521,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1520,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1511,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1509,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1508,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1507,
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
                                                                                                                    lineNumber: 1532,
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
                                                                                                                    lineNumber: 1536,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1531,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "dropdown bg-light-white h-40 w-40 d-flex-center b-r-15",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                className: "ph-bold  ph-arrow-square-in f-s-20 text-secondary"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1547,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1546,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1530,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1529,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1528,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1527,
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
                                                                                                        lineNumber: 1556,
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
                                                                                                                        lineNumber: 1559,
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
                                                                                                                        lineNumber: 1563,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1558,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "dropdown bg-light-success h-40 w-40 d-flex-center b-r-15",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-bold  ph-arrow-square-out f-s-20 text-success"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1574,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1573,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1557,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1555,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1554,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1553,
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
                                                                                                                        " ",
                                                                                                                        "GiB"
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1585,
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
                                                                                                                    lineNumber: 1589,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1584,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "dropdown bg-light-info h-40 w-40 d-flex-center b-r-15",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                className: "ph-fill  ph-database f-s-20 text-info"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1600,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1599,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1583,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1582,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1581,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1580,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1506,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1502,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1501,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-lg-12",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card security-card-content",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "card-header",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                        children: "Billing Information"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1613,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1612,
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
                                                                                                        children: [
                                                                                                            "Your Current Size is ",
                                                                                                            vmps?.cpu,
                                                                                                            " vCPU -",
                                                                                                            " ",
                                                                                                            vmps?.ram,
                                                                                                            " GB Memory - ",
                                                                                                            vmps?.disk,
                                                                                                            " SSD Storage."
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1621,
                                                                                                        columnNumber: 65
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        className: "btn btn-primary",
                                                                                                        onClick: handleUpgradeClick,
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                className: "ph-bold ph-arrow-up f-s-18"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1627,
                                                                                                                columnNumber: 69
                                                                                                            }, this),
                                                                                                            " Upgrade"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1626,
                                                                                                        columnNumber: 65
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                        className: "text-secondary-dark mb-0",
                                                                                                        children: "Renews Automatically on 18-12-2024"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1632,
                                                                                                        columnNumber: 65
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "f-s-17 text-dark ",
                                                                                                        children: "We will send you a notification upon subscription expiration"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1635,
                                                                                                        columnNumber: 65
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                        className: "text-secondary-dark mb-0",
                                                                                                        children: "$10 Per Month"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1639,
                                                                                                        columnNumber: 65
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1617,
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
                                                                                                                width: "75%"
                                                                                                            },
                                                                                                            children: [
                                                                                                                " ",
                                                                                                                "75%"
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1651,
                                                                                                            columnNumber: 69
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1644,
                                                                                                        columnNumber: 65
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                        className: "f-s-14 text-dark ",
                                                                                                        children: "75 days remaining until your server needs a renew"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1659,
                                                                                                        columnNumber: 65
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1643,
                                                                                                columnNumber: 61
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1616,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1615,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1611,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        showUpgradeForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            ref: formRef,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                method: "POST",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "row cart-table",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-xl-12 col-lg-12 col-md-12",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "card-body",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                        className: "mb-2 mt-5",
                                                                                                        children: "CPU Options"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1674,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "row simple-pricing-container app-arrow",
                                                                                                        children: [
                                                                                                            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "alert alert-danger text-danger",
                                                                                                                style: {
                                                                                                                    background: "none",
                                                                                                                    border: "0",
                                                                                                                    padding: "0 14px"
                                                                                                                },
                                                                                                                role: "alert",
                                                                                                                children: errorMessage
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1678,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "alert alert-success text-success",
                                                                                                                style: {
                                                                                                                    background: "none",
                                                                                                                    border: "0",
                                                                                                                    padding: "0 14px"
                                                                                                                },
                                                                                                                role: "alert",
                                                                                                                children: statusMessage
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1684,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: `col-md-6 col-xl-4 p-3`,
                                                                                                                    onClick: ()=>{
                                                                                                                        setSelectedPlanId(plan.id);
                                                                                                                        setFormData((prev)=>({
                                                                                                                                ...prev,
                                                                                                                                vms_id: plan.id
                                                                                                                            }));
                                                                                                                    },
                                                                                                                    style: {
                                                                                                                        cursor: "pointer"
                                                                                                                    },
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: `simple-pricing-card card ${selectedPlanId === plan.id ? "border border-primary shadow-lg" : ""}`,
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                                type: "hidden",
                                                                                                                                name: "vms_id"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 1707,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this),
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "card-body",
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                    className: "simple-price-body",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: `simple-price-value text-center b-r-5 d-block ${selectedPlanId === plan.id ? "bg-primary text-white" : "bg-light-dark"}`,
                                                                                                                                            children: [
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                    className: "f-s-30 f-w-600 text-center",
                                                                                                                                                    children: [
                                                                                                                                                        "$",
                                                                                                                                                        plan.price,
                                                                                                                                                        "/"
                                                                                                                                                    ]
                                                                                                                                                }, void 0, true, {
                                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                    lineNumber: 1716,
                                                                                                                                                    columnNumber: 97
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                    className: "f-s-12 f-w-600",
                                                                                                                                                    children: "per month"
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                    lineNumber: 1719,
                                                                                                                                                    columnNumber: 97
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                    children: [
                                                                                                                                                        "$",
                                                                                                                                                        (plan.price / 720).toFixed(3),
                                                                                                                                                        "/hour"
                                                                                                                                                    ]
                                                                                                                                                }, void 0, true, {
                                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                    lineNumber: 1722,
                                                                                                                                                    columnNumber: 97
                                                                                                                                                }, this)
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1710,
                                                                                                                                            columnNumber: 93
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "simple-price-content",
                                                                                                                                            children: [
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                    className: "d-flex",
                                                                                                                                                    children: [
                                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                                className: `ph-bold ph-check bg-primary p-1 b-r-100 f-s-12 ${selectedPlanId === plan.id ? "bg-primary text-white" : "bg-light-dark"}`
                                                                                                                                                            }, void 0, false, {
                                                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                                lineNumber: 1728,
                                                                                                                                                                columnNumber: 105
                                                                                                                                                            }, this)
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                            lineNumber: 1727,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this),
                                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                            className: "ms-2 mb-0",
                                                                                                                                                            children: [
                                                                                                                                                                plan.ram,
                                                                                                                                                                " GB / ",
                                                                                                                                                                plan.cpu,
                                                                                                                                                                " CPU"
                                                                                                                                                            ]
                                                                                                                                                        }, void 0, true, {
                                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                            lineNumber: 1735,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    ]
                                                                                                                                                }, void 0, true, {
                                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                    lineNumber: 1726,
                                                                                                                                                    columnNumber: 97
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                    className: "app-divider-v"
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                    lineNumber: 1739,
                                                                                                                                                    columnNumber: 97
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                    className: "d-flex",
                                                                                                                                                    children: [
                                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                                className: `ph-bold ph-check bg-primary p-1 b-r-100 f-s-12 ${selectedPlanId === plan.id ? "bg-primary text-white" : "bg-light-dark"}`
                                                                                                                                                            }, void 0, false, {
                                                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                                lineNumber: 1742,
                                                                                                                                                                columnNumber: 105
                                                                                                                                                            }, this)
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                            lineNumber: 1741,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this),
                                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                            className: "ms-2 mb-0",
                                                                                                                                                            children: [
                                                                                                                                                                plan.disk,
                                                                                                                                                                " GB NVMe SSDs"
                                                                                                                                                            ]
                                                                                                                                                        }, void 0, true, {
                                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                            lineNumber: 1749,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    ]
                                                                                                                                                }, void 0, true, {
                                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                    lineNumber: 1740,
                                                                                                                                                    columnNumber: 97
                                                                                                                                                }, this)
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1725,
                                                                                                                                            columnNumber: 93
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 1709,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 1708,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                        lineNumber: 1701,
                                                                                                                        columnNumber: 81
                                                                                                                    }, this)
                                                                                                                }, plan.id, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1689,
                                                                                                                    columnNumber: 77
                                                                                                                }, this))
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1676,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "card-header pb-0",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                            children: "Preserve Disk Confirmation"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1762,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1761,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "card-body",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "row",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "col-12",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "form-check d-flex align-items-center gap-3",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                                className: "form-check-input",
                                                                                                                                id: "preserveDiskCheck",
                                                                                                                                type: "checkbox",
                                                                                                                                name: "preserve_disk",
                                                                                                                                checked: formData.preserve_disk,
                                                                                                                                onChange: (e)=>setFormData((prev)=>({
                                                                                                                                            ...prev,
                                                                                                                                            preserve_disk: e.target.checked
                                                                                                                                        }))
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 1769,
                                                                                                                                columnNumber: 89
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                            lineNumber: 1768,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                                    className: "form-check-label f-s-18",
                                                                                                                                    htmlFor: "preserveDiskCheck",
                                                                                                                                    children: "Do you want to preserve your disk?"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 1784,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                    className: "form-check-label-p",
                                                                                                                                    children: "If selected, your existing disk data will be retained during the upgrade. If not, all current data on the disk will be removed."
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 1790,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                            lineNumber: 1783,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 1767,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1766,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 1765,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1764,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        type: "button",
                                                                                                        className: "btn btn-primary mt-3",
                                                                                                        onClick: handleUpgrade,
                                                                                                        children: "Upgrade Plan"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1801,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1673,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1672,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1671,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 1670,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1669,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1668,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1610,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 1335,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1330,
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
                                                                                    lineNumber: 1828,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1827,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body d-flex gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-primary h-45 icon-btn mb-3",
                                                                                        onClick: ()=>startServer(serverdetails?.id),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph-fill ph-play f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1835,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            "Start Server"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1831,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-success h-45 icon-btn mb-3",
                                                                                        onClick: ()=>stopServer(serverdetails?.id),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph-fill ph-pause f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1842,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            "Stop Server"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1838,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-secondary h-45 icon-btn mb-3",
                                                                                        onClick: ()=>restartServer(serverdetails?.id),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph-fill ph-rewind f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1849,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            "Restart Server"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1845,
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
                                                                                                lineNumber: 1859,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            " ",
                                                                                            "Reinstall Server"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1853,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-danger h-45 icon-btn mb-3",
                                                                                        onClick: ()=>extendServer(serverdetails?.id),
                                                                                        children: "Extend Server"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1863,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1830,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1826,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 1825,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 1824,
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
                                                                            lineNumber: 1876,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1875,
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
                                                                                                            lineNumber: 1888,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        " ",
                                                                                                        "Operating System"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1883,
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
                                                                                                            lineNumber: 1896,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        " ",
                                                                                                        "Application"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1891,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 1882,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1881,
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
                                                                                                                                    cursor: "pointer"
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
                                                                                                                                                lineNumber: 1928,
                                                                                                                                                columnNumber: 105
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1927,
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
                                                                                                                                                lineNumber: 1933,
                                                                                                                                                columnNumber: 105
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1932,
                                                                                                                                            columnNumber: 101
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 1926,
                                                                                                                                    columnNumber: 97
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 1919,
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
                                                                                                                                                    lineNumber: 1959,
                                                                                                                                                    columnNumber: 109
                                                                                                                                                }, this),
                                                                                                                                                o.versions?.map((version)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                                        value: version.id,
                                                                                                                                                        children: version.name
                                                                                                                                                    }, version.id, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                        lineNumber: 1964,
                                                                                                                                                        columnNumber: 117
                                                                                                                                                    }, this))
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1949,
                                                                                                                                            columnNumber: 105
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "invalid-feedback",
                                                                                                                                            children: "Please select a valid version."
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 1973,
                                                                                                                                            columnNumber: 105
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 1948,
                                                                                                                                    columnNumber: 101
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 1944,
                                                                                                                                columnNumber: 97
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, o.id, true, {
                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                        lineNumber: 1915,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this))
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1913,
                                                                                                                columnNumber: 81
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                className: "btn btn-primary",
                                                                                                                type: "button",
                                                                                                                onClick: ()=>reinstallServer(serverdetails?.id, {
                                                                                                                        os_version_id: selectedVersionId
                                                                                                                    }),
                                                                                                                children: "Save"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 1983,
                                                                                                                columnNumber: 81
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 1912,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 1911,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 1907,
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
                                                                                                                                    cursor: "pointer"
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
                                                                                                                                                lineNumber: 2021,
                                                                                                                                                columnNumber: 105
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 2020,
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
                                                                                                                                                lineNumber: 2026,
                                                                                                                                                columnNumber: 105
                                                                                                                                            }, this)
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 2025,
                                                                                                                                            columnNumber: 101
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 2019,
                                                                                                                                    columnNumber: 97
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 2012,
                                                                                                                                columnNumber: 93
                                                                                                                            }, this),
                                                                                                                            selectedAppId === apps.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                                className: "app-form row g-3 needs-validation mt-0",
                                                                                                                                noValidate: true,
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                    className: apps.name,
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                                            name: "",
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
                                                                                                                                                    lineNumber: 2053,
                                                                                                                                                    columnNumber: 109
                                                                                                                                                }, this),
                                                                                                                                                apps.versions?.map((version)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                                        value: version.id,
                                                                                                                                                        children: version.name
                                                                                                                                                    }, version.id, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                                        lineNumber: 2058,
                                                                                                                                                        columnNumber: 117
                                                                                                                                                    }, this))
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 2042,
                                                                                                                                            columnNumber: 105
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "invalid-feedback",
                                                                                                                                            children: "Please select a valid version."
                                                                                                                                        }, void 0, false, {
                                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                            lineNumber: 2067,
                                                                                                                                            columnNumber: 105
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                    lineNumber: 2041,
                                                                                                                                    columnNumber: 101
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                                lineNumber: 2037,
                                                                                                                                columnNumber: 97
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, apps.id, true, {
                                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                        lineNumber: 2008,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this))
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 2006,
                                                                                                                columnNumber: 81
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                className: "btn btn-primary",
                                                                                                                type: "button",
                                                                                                                onClick: ()=>reinstallServer(serverdetails?.id, {
                                                                                                                        os_version_id: selectedVersionId
                                                                                                                    }),
                                                                                                                children: "Save"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 2077,
                                                                                                                columnNumber: 81
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 2005,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2004,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 2000,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 1902,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 1880,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 1879,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 1878,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 1874,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 1819,
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
                                                                                    lineNumber: 2109,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2108,
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
                                                                                                lineNumber: 2118,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                id: "hostnameInput",
                                                                                                type: "text",
                                                                                                className: "form-control",
                                                                                                placeholder: "New Hostname",
                                                                                                name: "hotname",
                                                                                                required: true,
                                                                                                value: changehostnamePayload.hostname,
                                                                                                onChange: (e)=>setChangeHostnamePayload({
                                                                                                        ...changehostnamePayload,
                                                                                                        hostname: e.target.value
                                                                                                    })
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 2124,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: "btn btn-primary h-45 icon-btn mb-3 mt-4",
                                                                                                onClick: handleUpdateClick,
                                                                                                children: "Update"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 2139,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 2117,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 2112,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2111,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 2107,
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
                                                                                    lineNumber: 2153,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2152,
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
                                                                                                lineNumber: 2163,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                className: "btn btn-primary h-45 icon-btn mb-3 mt-3",
                                                                                                onClick: handleChangePasswordClick,
                                                                                                children: "Update"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 2166,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 2162,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 2157,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2156,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 2151,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2106,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 2105,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 2100,
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
                                                                                lineNumber: 2220,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 2219,
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
                                                                                                        lineNumber: 2230,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2229,
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
                                                                                                                            lineNumber: 2239,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                            className: "app-small-touchspin count f-s-19",
                                                                                                                            type: "text",
                                                                                                                            value: count,
                                                                                                                            readOnly: true
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                            lineNumber: 2246,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                            className: "circle-btn increment",
                                                                                                                            role: "button",
                                                                                                                            onClick: increment,
                                                                                                                            children: "+"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                            lineNumber: 2252,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 2238,
                                                                                                                    columnNumber: 77
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                    className: "f-s-18 m-0",
                                                                                                                    children: "GB"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 2260,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 2237,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                className: "f-s-18 text-primary fw-bold m-0",
                                                                                                                children: [
                                                                                                                    " ",
                                                                                                                    "$",
                                                                                                                    price,
                                                                                                                    " /mo"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                lineNumber: 2263,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 2262,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2236,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 2228,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 2227,
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
                                                                                                        lineNumber: 2274,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2273,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 2272,
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
                                                                                                        lineNumber: 2286,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2285,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 2284,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 2271,
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
                                                                                            lineNumber: 2298,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 2297,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2223,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 2222,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 2218,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2217,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 2216,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 2211,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `tabs-content ${activeTab === 4 ? "active" : ""}`,
                                                        id: "tab-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                                    lineNumber: 2321,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2320,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body d-flex gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-primary h-45 icon-btn mb-3",
                                                                                        onClick: openBackupModal,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph-bold ph-plus f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 2326,
                                                                                                columnNumber: 3
                                                                                            }, this),
                                                                                            " Create Backup"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 2325,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-success h-45 icon-btn mb-3",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph ph-arrow-fat-lines-up f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 2329,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            " ",
                                                                                            "Update Backup"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 2328,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2323,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 2319,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 2318,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "card p-l-r-30",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card-body p-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "app-datatable-default overflow-auto",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                                className: "datatable display app-data-table default-data-table",
                                                                                id: "example1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    width: 10,
                                                                                                    children: "Sr no."
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2345,
                                                                                                    columnNumber: 73
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    children: "Backup Name"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2346,
                                                                                                    columnNumber: 73
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    children: "Size"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2347,
                                                                                                    columnNumber: 73
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    children: "Action"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2348,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 2344,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 2343,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    children: "1"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2354,
                                                                                                    columnNumber: 81
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    children: "name"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2355,
                                                                                                    columnNumber: 81
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    children: " GB"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2356,
                                                                                                    columnNumber: 81
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                    className: "d-flex gap-3",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                            className: "badge text-white bg-success border-0 d-flex gap-2 align-items-center",
                                                                                                            children: "Restore"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 2359,
                                                                                                            columnNumber: 85
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                            className: "badge text-white bg-danger border-0 d-flex gap-2 align-items-center",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph ph-trash f-s-18"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 2365,
                                                                                                                    columnNumber: 89
                                                                                                                }, this),
                                                                                                                "Delete"
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 2363,
                                                                                                            columnNumber: 85
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2358,
                                                                                                    columnNumber: 81
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 2353,
                                                                                            columnNumber: 77
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                        lineNumber: 2351,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2339,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 2338,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 2337,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                    lineNumber: 2336,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 2317,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 2312,
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
                                                                                    lineNumber: 2388,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2387,
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
                                                                                            lineNumber: 2396,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        " Create Snapshots"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 2391,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2390,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 2386,
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
                                                                                                        lineNumber: 2411,
                                                                                                        columnNumber: 73
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                        children: "Snapshot Name"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 2412,
                                                                                                        columnNumber: 73
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                        children: "Size"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 2413,
                                                                                                        columnNumber: 73
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                        children: "Action"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                        lineNumber: 2415,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                lineNumber: 2410,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 2409,
                                                                                            columnNumber: 65
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                            children: snapshots.length > 0 && snapshots.map((snapshot, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                            children: index + 1
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 2422,
                                                                                                            columnNumber: 81
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                            children: snapshot?.name
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 2423,
                                                                                                            columnNumber: 81
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                            children: [
                                                                                                                snapshot?.size,
                                                                                                                " GB"
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 2424,
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
                                                                                                                    lineNumber: 2427,
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
                                                                                                                            lineNumber: 2442,
                                                                                                                            columnNumber: 89
                                                                                                                        }, this),
                                                                                                                        "Delete"
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                                    lineNumber: 2436,
                                                                                                                    columnNumber: 85
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                            lineNumber: 2426,
                                                                                                            columnNumber: 81
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, snapshot.id || index, true, {
                                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                                    lineNumber: 2421,
                                                                                                    columnNumber: 77
                                                                                                }, this))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                            lineNumber: 2418,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                    lineNumber: 2405,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                                lineNumber: 2404,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                            lineNumber: 2403,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                        lineNumber: 2402,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2385,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 2384,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 2379,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                lineNumber: 1329,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                        lineNumber: 1285,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                    lineNumber: 1284,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                            lineNumber: 1258,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal fade",
                            id: "projectCard2",
                            "aria-hidden": "true",
                            ref: modalRef,
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
                                                            children: "Create Snapshot "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 2473,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iconify-icon", {
                                                            icon: "line-md:document-add",
                                                            className: "text-success f-s-22"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 2474,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 2472,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn-close",
                                                    "data-bs-dismiss": "modal",
                                                    "aria-label": "Close"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 2479,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                            lineNumber: 2471,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmitSnapshot,
                                            method: "POST",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "modal-body",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "snapshot_name",
                                                                className: "form-label",
                                                                children: "Snapshot Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2490,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "snapshot_name",
                                                                name: "snapshot_name",
                                                                className: "form-control",
                                                                value: formData.snapshot_name,
                                                                onChange: handleChange,
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2493,
                                                                columnNumber: 45
                                                            }, this),
                                                            snapshotSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "alert alert-success",
                                                                children: snapshotSuccess
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2503,
                                                                columnNumber: 49
                                                            }, this),
                                                            snapshotError.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-danger small",
                                                                children: snapshotError.name[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2508,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 2489,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 2488,
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
                                                        lineNumber: 2516,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 2515,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                            lineNumber: 2487,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                    lineNumber: 2470,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                lineNumber: 2469,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                            lineNumber: 2463,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal fade",
                            id: "projectCard1",
                            "aria-hidden": "true",
                            ref: modalRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-dialog",
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
                                                            children: "Create Backup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 2530,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iconify-icon", {
                                                            icon: "line-md:document-add",
                                                            className: "text-success f-s-22"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                            lineNumber: 2531,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 2529,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn-close",
                                                    "data-bs-dismiss": "modal",
                                                    "aria-label": "Close"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 2533,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                            lineNumber: 2528,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleCreateBackup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "modal-body",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "snapshot_name",
                                                                className: "form-label",
                                                                children: "Backup Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2539,
                                                                columnNumber: 13
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "snapshot_name",
                                                                name: "snapshot_name",
                                                                className: "form-control",
                                                                value: formData.snapshot_name,
                                                                onChange: (e)=>setFormData({
                                                                        ...formData,
                                                                        snapshot_name: e.target.value
                                                                    }),
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2540,
                                                                columnNumber: 13
                                                            }, this),
                                                            backupSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "alert alert-success mt-2",
                                                                children: backupSuccess
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2551,
                                                                columnNumber: 15
                                                            }, this),
                                                            backupError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-danger small mt-2",
                                                                children: backupError
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                                lineNumber: 2555,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 2538,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 2537,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "modal-footer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "btn btn-primary",
                                                        children: "Submit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                        lineNumber: 2561,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                                    lineNumber: 2560,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                                            lineNumber: 2536,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                                    lineNumber: 2527,
                                    columnNumber: 5
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/server/[slug]/page.jsx",
                                lineNumber: 2526,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/server/[slug]/page.jsx",
                            lineNumber: 2525,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/server/[slug]/page.jsx",
                    lineNumber: 1254,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/server/[slug]/page.jsx",
            lineNumber: 1239,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/server/[slug]/page.jsx",
        lineNumber: 1238,
        columnNumber: 9
    }, this);
}
_s(Manage, "AiJltVZoHvPStQrahsSZ/ttaFDw=", false, function() {
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