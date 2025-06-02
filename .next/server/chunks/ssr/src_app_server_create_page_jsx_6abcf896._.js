module.exports = {

"[project]/src/app/server/create/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// import { useParams } from "next/navigation";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Create() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedOS, setSelectedOS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authMethod, setAuthMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ssh');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const summaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [os, setOs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [app, setApp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [plans, setPlans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPlanId, setSelectedPlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hostServers, setHostServers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedServerId, setSelectedServerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        vms_id: "",
        processor: "",
        location: '',
        os_version_id: '',
        hostname: '',
        auto_backups: '',
        bandwidth: 'unlimited',
        billingCycle: ''
    });
    const handleChange = (e)=>{
        console.log(selectedServerId);
        setSelectedServerId(server.id);
        setFormData({
            ...formData,
            processor: server.processor,
            location: server.location,
            [e.target.name]: e.target.value
        });
    };
    console.log("Form Data:", formData);
    // api os system
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("accessToken");
        if (token) {
            // console.log("Token found:", token);
            const FetchProject = async ()=>{
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
            };
            FetchProject();
        }
    }, []);
    // api vms plans
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("accessToken");
        if (token) {
            console.log("Token found:", token);
            const FetchProject = async ()=>{
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
            };
            FetchProject();
        }
    }, []);
    // host server api
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("accessToken");
        if (token) {
            const fetchHostServers = async ()=>{
                try {
                    const response = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/host-servers`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    });
                    const result = await response.json();
                    setHostServers(result.data.host_servers); // store array of servers
                } catch (error) {
                    console.error("Error fetching host servers:", error);
                }
            };
            fetchHostServers();
        }
    }, []);
    const [selectedOSId, setSelectedOSId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAppId, setSelectedAppId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleOSClick = (id)=>{
        setSelectedOSId(id);
    };
    const handleAppClick = (id)=>{
        setSelectedAppId(id);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const summary = summaryRef.current;
            if (!summary) return;
            if (window.innerWidth >= 1199) {
                // Get current width before fixing
                const summaryWidth = summary.parentElement.offsetWidth;
                summary.style.position = 'fixed';
                summary.style.top = '100px';
                summary.style.zIndex = '999';
                summary.style.width = `${summaryWidth}px`;
            } else {
                // Reset on mobile view
                summary.style.position = 'static';
                summary.style.top = '';
                summary.style.zIndex = '';
                summary.style.width = '';
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll(); // Run on mount
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    // auto load
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Simulate loading
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }, 900);
        return ()=>clearTimeout(timer);
    }, []);
    // modal for disk
    const handleCheckboxChange = (e)=>{
        if (e.target.checked) {
            const modal = new bootstrap.Modal(document.getElementById('projectCard1'));
            modal.show();
        }
    };
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5); // Default price for 1 GB
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
    // const handleDeployServer = async () => {
    //     try {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/server/deploy`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${Cookies.get("accessToken")}`,
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //         const result = await response.json();
    //         console.log("Deploy result:", result);
    //         alert(result?.data?.message || "Server deployed successfully!");
    //     } catch (error) {
    //         console.error("Deploy error:", error);
    //         alert("Something went wrong during deployment.");
    //     }
    // };
    const handleDeployServer = async ()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-secondary ms-2",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Deploy Server?",
            text: "Are you sure you want to deploy this server?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, deploy it!",
            cancelButtonText: "Cancel",
            reverseButtons: true
        }).then(async (result)=>{
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deploying...",
                    text: "Please wait while your server is being deployed.",
                    allowOutsideClick: false,
                    didOpen: ()=>{
                        Swal.showLoading();
                    }
                });
                try {
                    const response = await fetch(`${("TURBOPACK compile-time value", "http://staging.ekire.net/api")}/server/deploy`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("accessToken")}`
                        },
                        body: JSON.stringify(formData)
                    });
                    const result = await response.json();
                    console.log("Deploy result:", result);
                    if (response.ok && result?.data?.status === "success") {
                        Swal.fire("Deployed!", result?.data?.message || "Server deployed successfully.", "success");
                    } else {
                        Swal.fire("Failed!", result.message || "Server deployment failed.", "error");
                    }
                } catch (error) {
                    console.error("Deploy error:", error);
                    Swal.fire("Error!", "Something went wrong during deployment.", "error");
                }
            } else {
                swalWithBootstrapButtons.fire("Cancelled", "Server deployment cancelled.", "info");
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "position-relative",
            children: [
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100",
                    style: {
                        background: 'var(--bodybg-color)',
                        zIndex: 1000
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner-border text-primary",
                        role: "status",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "visually-hidden",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/server/create/page.jsx",
                            lineNumber: 342,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/server/create/page.jsx",
                        lineNumber: 341,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/server/create/page.jsx",
                    lineNumber: 334,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: `page-content ${isLoading ? 'pointer-events-none' : ''}`,
                    style: {
                        opacity: isLoading ? 0.5 : 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-fluid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row m-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "main-title",
                                                children: "Create New Server  "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                lineNumber: 351,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "app-line-breadcrumbs mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "f-s-14 f-w-500",
                                                            href: "/server",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "ph-duotone  ph-table f-s-16"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    " Server"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 355,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 354,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 353,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "active",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "f-s-14 f-w-500",
                                                            href: "#",
                                                            children: "Create New Server"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 361,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 360,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                lineNumber: 352,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/server/create/page.jsx",
                                        lineNumber: 350,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/server/create/page.jsx",
                                    lineNumber: 349,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    method: "POST",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row cart-table",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-xl-8 col-lg-12 col-md-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "card-body p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-lg-12",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Region"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 383,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 382,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "row",
                                                                                    children: hostServers.map((server1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "col-xxl-4 col-12",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                className: "active-device-session active-device-list",
                                                                                                id: "shareMenuLeft",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: `card cursor-pointer transition-all duration-300 ${selectedServerId === server1.id ? "border-selected" : "border-unselected"}`,
                                                                                                        onClick: ()=>{
                                                                                                            setSelectedServerId(server1.id);
                                                                                                            setFormData((prevData)=>({
                                                                                                                    ...prevData,
                                                                                                                    location: server1.location,
                                                                                                                    processor: server1.processor
                                                                                                                }));
                                                                                                        },
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "card-body",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "device-menu-item",
                                                                                                                draggable: "false",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                        className: "device-menu-img",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                                            src: server1.image_url,
                                                                                                                            alt: server1.country,
                                                                                                                            width: 32,
                                                                                                                            height: 20,
                                                                                                                            className: `transition-all duration-300 ${selectedServerId === server1.id ? "grayscale-0" : "grayscale"}`,
                                                                                                                            style: {
                                                                                                                                objectFit: "cover",
                                                                                                                                borderRadius: "4px"
                                                                                                                            }
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 405,
                                                                                                                            columnNumber: 97
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 404,
                                                                                                                        columnNumber: 93
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "device-menu-content",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                                                className: "mb-0 txt-ellipsis-1",
                                                                                                                                children: server1.location
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 416,
                                                                                                                                columnNumber: 97
                                                                                                                            }, this),
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                className: "mb-0 txt-ellipsis-1 text-secondary",
                                                                                                                                children: [
                                                                                                                                    "Processor : ",
                                                                                                                                    server1.processor
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 417,
                                                                                                                                columnNumber: 97
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 415,
                                                                                                                        columnNumber: 93
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 403,
                                                                                                                columnNumber: 89
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 402,
                                                                                                            columnNumber: 85
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 392,
                                                                                                        columnNumber: 81
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 391,
                                                                                                    columnNumber: 77
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 390,
                                                                                                columnNumber: 73
                                                                                            }, this)
                                                                                        }, server1.id, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 389,
                                                                                            columnNumber: 69
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 387,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 386,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 381,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 379,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 378,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 377,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "card-header",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    children: "OS/Application"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 436,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "card-body p-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "row",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "col-12",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "tab-wrapper ms-3 me-3 mb-3",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                    className: "tabs overflow-auto",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            className: `tab-link ${activeTab === 1 ? "active" : ""}`,
                                                                                            onClick: ()=>setActiveTab(1),
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "ph-bold  ph-align-right f-s-18"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 449,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                " Operating System"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 445,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                            className: `tab-link ${activeTab === 2 ? "active" : ""}`,
                                                                                            onClick: ()=>setActiveTab(2),
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                    className: "ph-fill ph-list-bullets f-s-18"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 455,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                " Application"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 451,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 444,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 443,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "content-wrapper",
                                                                                id: "card-container",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `tabs-content ${activeTab === 1 ? "active" : ""}`,
                                                                                        id: "tab-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "card-body",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "row simple-pricing-container app-arrow",
                                                                                                    children: os?.map((o, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "col-md-6 col-xl-3 p-3",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "simple-pricing-card card mb-0",
                                                                                                                    onClick: ()=>handleOSClick(o.id),
                                                                                                                    style: {
                                                                                                                        cursor: 'pointer'
                                                                                                                    },
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "card-body",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-header text-center",
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                                    className: "mb-3",
                                                                                                                                    children: o.name
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 470,
                                                                                                                                    columnNumber: 93
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 469,
                                                                                                                                columnNumber: 89
                                                                                                                            }, this),
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body text-center",
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                    alt: o.name,
                                                                                                                                    className: "img-fluid",
                                                                                                                                    src: o.icon,
                                                                                                                                    width: 45,
                                                                                                                                    height: 45
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 473,
                                                                                                                                    columnNumber: 93
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 472,
                                                                                                                                columnNumber: 89
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 468,
                                                                                                                        columnNumber: 85
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 467,
                                                                                                                    columnNumber: 81
                                                                                                                }, this),
                                                                                                                selectedOSId === o.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "app-form row g-3 needs-validation mt-0",
                                                                                                                    noValidate: true,
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: o.name,
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                                name: "os_version_id",
                                                                                                                                className: "form-select",
                                                                                                                                id: `${o.name}-version`,
                                                                                                                                required: true,
                                                                                                                                onChange: (e)=>setFormData((prev)=>({
                                                                                                                                            ...prev,
                                                                                                                                            os_version_id: e.target.value
                                                                                                                                        })),
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                        value: "",
                                                                                                                                        children: "Select Version"
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 491,
                                                                                                                                        columnNumber: 97
                                                                                                                                    }, this),
                                                                                                                                    o.versions?.map((version)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                            value: version.id,
                                                                                                                                            children: version.name
                                                                                                                                        }, version.id, false, {
                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                            lineNumber: 493,
                                                                                                                                            columnNumber: 101
                                                                                                                                        }, this))
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 480,
                                                                                                                                columnNumber: 93
                                                                                                                            }, this),
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "invalid-feedback",
                                                                                                                                children: "Please select a valid version."
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 498,
                                                                                                                                columnNumber: 93
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 479,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 478,
                                                                                                                    columnNumber: 85
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, o.id, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 466,
                                                                                                            columnNumber: 77
                                                                                                        }, this))
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 464,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 463,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 462,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 461,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: `tabs-content ${activeTab === 2 ? "active" : ""}`,
                                                                                        id: "tab-2",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "card",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "card-body",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "row simple-pricing-container app-arrow",
                                                                                                    children: app?.map((apps, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "col-md-6 col-xl-3 p-3",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "simple-pricing-card card mb-0",
                                                                                                                    onClick: ()=>handleAppClick(apps.id),
                                                                                                                    style: {
                                                                                                                        cursor: 'pointer'
                                                                                                                    },
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "card-body",
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-header text-center",
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                                    className: "mb-3",
                                                                                                                                    children: apps.name
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 518,
                                                                                                                                    columnNumber: 93
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 517,
                                                                                                                                columnNumber: 89
                                                                                                                            }, this),
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body text-center",
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                    alt: apps.name,
                                                                                                                                    className: "img-fluid",
                                                                                                                                    src: apps.icon,
                                                                                                                                    width: 45,
                                                                                                                                    height: 45
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 521,
                                                                                                                                    columnNumber: 93
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 520,
                                                                                                                                columnNumber: 89
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 516,
                                                                                                                        columnNumber: 85
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 515,
                                                                                                                    columnNumber: 81
                                                                                                                }, this),
                                                                                                                selectedAppId === apps.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "app-form row g-3 needs-validation mt-0",
                                                                                                                    noValidate: true,
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: apps.name,
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                                name: "os_version_id",
                                                                                                                                className: "form-select",
                                                                                                                                id: `${apps.name}-version`,
                                                                                                                                required: true,
                                                                                                                                onChange: (e)=>setFormData((prev)=>({
                                                                                                                                            ...prev,
                                                                                                                                            os_version_id: e.target.value
                                                                                                                                        })),
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                        value: "",
                                                                                                                                        children: "Select Version"
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 539,
                                                                                                                                        columnNumber: 97
                                                                                                                                    }, this),
                                                                                                                                    apps.versions?.map((version)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                            value: version.id,
                                                                                                                                            children: version.name
                                                                                                                                        }, version.id, false, {
                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                            lineNumber: 541,
                                                                                                                                            columnNumber: 101
                                                                                                                                        }, this))
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 528,
                                                                                                                                columnNumber: 93
                                                                                                                            }, this),
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "invalid-feedback",
                                                                                                                                children: "Please select a valid version."
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 546,
                                                                                                                                columnNumber: 93
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 527,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 526,
                                                                                                                    columnNumber: 85
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, apps.id, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 514,
                                                                                                            columnNumber: 77
                                                                                                        }, this))
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 512,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 511,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 510,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 509,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 460,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 439,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 435,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "card-body p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-lg-12",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Size"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 569,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 568,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card card-inside",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "card-header code-header tabs-disabled",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                            className: "p-0",
                                                                                            children: "CPU Type"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 573,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 572,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "card-body border-btm",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                className: "nav nav-tabs tab-outline-primary row border-0 tabs-disabled",
                                                                                                id: "Outline",
                                                                                                role: "tablist",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-lg-2 col-md-2 col-12 merge-tab",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "col-12",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                    className: "text-center title-cpu",
                                                                                                                    children: "Shared CPU"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 579,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 578,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "col-12",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                    className: "nav-item text-center d-flex justify-content-center w-100",
                                                                                                                    role: "presentation",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                        className: "nav-link w-100",
                                                                                                                        id: "basic-tab",
                                                                                                                        "data-bs-toggle": "tab",
                                                                                                                        "data-bs-target": "#basic-tab-pane",
                                                                                                                        type: "button",
                                                                                                                        role: "tab",
                                                                                                                        "aria-controls": "basic-tab-pane",
                                                                                                                        "aria-selected": "true",
                                                                                                                        children: "Basic"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 583,
                                                                                                                        columnNumber: 81
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 582,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 581,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 577,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-lg-9 col-md-9 col-12 merge-tab",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "col-12",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                    className: "text-center title-cpu",
                                                                                                                    children: "Dedicated CPU"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 590,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 589,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "col-12 d-flex flex-wrap justify-content-between my-cpu-tab",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        className: "nav-item",
                                                                                                                        role: "presentation",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                            className: "nav-link w-100",
                                                                                                                            id: "general-tab",
                                                                                                                            "data-bs-toggle": "tab",
                                                                                                                            "data-bs-target": "#general-tab-pane",
                                                                                                                            type: "button",
                                                                                                                            role: "tab",
                                                                                                                            "aria-controls": "general-tab-pane",
                                                                                                                            "aria-selected": "false",
                                                                                                                            children: "General Purpose"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 594,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 593,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        className: "nav-item",
                                                                                                                        role: "presentation",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                            className: "nav-link w-100",
                                                                                                                            id: "cpu-tab",
                                                                                                                            "data-bs-toggle": "tab",
                                                                                                                            "data-bs-target": "#cpu-tab-pane",
                                                                                                                            type: "button",
                                                                                                                            role: "tab",
                                                                                                                            "aria-controls": "cpu-tab-pane",
                                                                                                                            "aria-selected": "false",
                                                                                                                            children: "CPU-Optimized"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 597,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 596,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        className: "nav-item",
                                                                                                                        role: "presentation",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                            className: "nav-link w-100",
                                                                                                                            id: "memory-tab",
                                                                                                                            "data-bs-toggle": "tab",
                                                                                                                            "data-bs-target": "#memory-tab-pane",
                                                                                                                            type: "button",
                                                                                                                            role: "tab",
                                                                                                                            "aria-controls": "memory-tab-pane",
                                                                                                                            "aria-selected": "false",
                                                                                                                            children: "Memory-Optimized"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 600,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 599,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                        className: "nav-item",
                                                                                                                        role: "presentation",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                            className: "nav-link w-100",
                                                                                                                            id: "storage-tab",
                                                                                                                            "data-bs-toggle": "tab",
                                                                                                                            "data-bs-target": "#storage-tab-pane",
                                                                                                                            type: "button",
                                                                                                                            role: "tab",
                                                                                                                            "aria-controls": "storage-tab-pane",
                                                                                                                            "aria-selected": "false",
                                                                                                                            children: "Storage-Optimized"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 603,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 602,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 592,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 588,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 576,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "tab-content",
                                                                                                id: "OutlineContent",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "tab-pane fade show active",
                                                                                                    id: "basic-tab-pane",
                                                                                                    role: "tabpanel",
                                                                                                    "aria-labelledby": "basic-tab",
                                                                                                    tabIndex: 0,
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            className: "tabs-disabled",
                                                                                                            children: "Basic virtual machines with a mix of memory and compute resources. Best for small projects that can handle variable levels of CPU performance, like blogs, web apps and dev/test environments."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 612,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                            className: "mb-2 mt-5",
                                                                                                            children: "CPU Options"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 614,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "row simple-pricing-container app-arrow",
                                                                                                            children: plans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: `simple-pricing-card card ${selectedPlanId === plan.id ? "border border-primary shadow-lg" : ""}`,
                                                                                                                        children: [
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                                type: "hidden",
                                                                                                                                name: "vms_id"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 634,
                                                                                                                                columnNumber: 89
                                                                                                                            }, this),
                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "card-body",
                                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                    className: "simple-price-body",
                                                                                                                                    children: [
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: `simple-price-value text-center b-r-5 d-block ${selectedPlanId === plan.id ? 'bg-primary text-white' : 'bg-light-dark'}`,
                                                                                                                                            children: [
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                    className: "f-s-30 f-w-600 text-center",
                                                                                                                                                    children: [
                                                                                                                                                        "$",
                                                                                                                                                        plan.price,
                                                                                                                                                        "/"
                                                                                                                                                    ]
                                                                                                                                                }, void 0, true, {
                                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                    lineNumber: 641,
                                                                                                                                                    columnNumber: 101
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                    className: "f-s-12 f-w-600",
                                                                                                                                                    children: "per month"
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                    lineNumber: 642,
                                                                                                                                                    columnNumber: 101
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                    children: [
                                                                                                                                                        "$",
                                                                                                                                                        (plan.price / 720).toFixed(3),
                                                                                                                                                        "/hour"
                                                                                                                                                    ]
                                                                                                                                                }, void 0, true, {
                                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                    lineNumber: 643,
                                                                                                                                                    columnNumber: 101
                                                                                                                                                }, this)
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                            lineNumber: 637,
                                                                                                                                            columnNumber: 97
                                                                                                                                        }, this),
                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "simple-price-content",
                                                                                                                                            children: [
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                    className: "d-flex",
                                                                                                                                                    children: [
                                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                                className: `ph-bold ph-check bg-primary p-1 b-r-100 f-s-12 ${selectedPlanId === plan.id ? 'bg-primary text-white' : 'bg-light-dark'}`
                                                                                                                                                            }, void 0, false, {
                                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                                lineNumber: 648,
                                                                                                                                                                columnNumber: 111
                                                                                                                                                            }, this)
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 648,
                                                                                                                                                            columnNumber: 105
                                                                                                                                                        }, this),
                                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                            className: "ms-2 mb-0",
                                                                                                                                                            children: [
                                                                                                                                                                plan.ram,
                                                                                                                                                                " GB / ",
                                                                                                                                                                plan.cpu,
                                                                                                                                                                " CPU"
                                                                                                                                                            ]
                                                                                                                                                        }, void 0, true, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 650,
                                                                                                                                                            columnNumber: 105
                                                                                                                                                        }, this)
                                                                                                                                                    ]
                                                                                                                                                }, void 0, true, {
                                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                    lineNumber: 647,
                                                                                                                                                    columnNumber: 101
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                    className: "app-divider-v"
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                    lineNumber: 652,
                                                                                                                                                    columnNumber: 101
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                    className: "d-flex",
                                                                                                                                                    children: [
                                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                                className: `ph-bold ph-check bg-primary p-1 b-r-100 f-s-12 ${selectedPlanId === plan.id ? 'bg-primary text-white' : 'bg-light-dark'}`
                                                                                                                                                            }, void 0, false, {
                                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                                lineNumber: 654,
                                                                                                                                                                columnNumber: 111
                                                                                                                                                            }, this)
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 654,
                                                                                                                                                            columnNumber: 105
                                                                                                                                                        }, this),
                                                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                            className: "ms-2 mb-0",
                                                                                                                                                            children: [
                                                                                                                                                                plan.disk,
                                                                                                                                                                " GB NVMe SSDs"
                                                                                                                                                            ]
                                                                                                                                                        }, void 0, true, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 656,
                                                                                                                                                            columnNumber: 105
                                                                                                                                                        }, this)
                                                                                                                                                    ]
                                                                                                                                                }, void 0, true, {
                                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                    lineNumber: 653,
                                                                                                                                                    columnNumber: 101
                                                                                                                                                }, this)
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                            lineNumber: 646,
                                                                                                                                            columnNumber: 97
                                                                                                                                        }, this)
                                                                                                                                    ]
                                                                                                                                }, void 0, true, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 636,
                                                                                                                                    columnNumber: 93
                                                                                                                                }, this)
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 635,
                                                                                                                                columnNumber: 89
                                                                                                                            }, this)
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 630,
                                                                                                                        columnNumber: 85
                                                                                                                    }, this)
                                                                                                                }, plan.id, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 618,
                                                                                                                    columnNumber: 81
                                                                                                                }, this))
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 616,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 611,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 610,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 575,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 571,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 567,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 566,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 565,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 564,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 563,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "card-body p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-lg-12",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "card security-card-content",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-header pb-0",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                    children: "Automatic Backup"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 681,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 680,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body ",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "row ",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-12",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "form-check d-flex align-items-center gap-3",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                        className: "form-check-input",
                                                                                                        id: "invalidCheck2",
                                                                                                        type: "checkbox",
                                                                                                        checked: formData.auto_backups,
                                                                                                        onChange: (e)=>setFormData((prev)=>({
                                                                                                                    ...prev,
                                                                                                                    auto_backups: e.target.checked
                                                                                                                }))
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 689,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 688,
                                                                                                    columnNumber: 73
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                            className: "form-check-label f-s-18",
                                                                                                            htmlFor: "invalidCheck2",
                                                                                                            children: "Enable automated backup plan"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 703,
                                                                                                            columnNumber: 77
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            className: "form-check-label-p",
                                                                                                            children: [
                                                                                                                "Ensure the safety of your valuable data with the peace of mind that comes from automatic server backups – your fortress against unexpected data loss. Embrace reliability, effortlessly safeguard your work, and focus on what truly matters, while we handle the protection of your critical information with seamless automated backups ",
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                                                    className: "f-s-19 text-primary",
                                                                                                                    children: "$5/month"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 706,
                                                                                                                    columnNumber: 441
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 706,
                                                                                                            columnNumber: 77
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 702,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 687,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 686,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 685,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 683,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 679,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 678,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 677,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 676,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 675,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                lineNumber: 373,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-xl-4 col-lg-12 col-md-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "row",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-12",
                                                        ref: summaryRef,
                                                        id: "summaryCard",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "card",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "card-header",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        children: "Deploy Summary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 724,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "card-body",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                            className: "app-form row g-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "col-12",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "form-label",
                                                                                            htmlFor: "hostnameInput",
                                                                                            children: "Update Hostname"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 731,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            id: "hostnameInput",
                                                                                            type: "text",
                                                                                            className: "form-control",
                                                                                            placeholder: "New Hostname",
                                                                                            required: true,
                                                                                            checked: formData.hostname,
                                                                                            onChange: (e)=>setFormData((prev)=>({
                                                                                                        ...prev,
                                                                                                        hostname: e.target.value
                                                                                                    }))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 734,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 730,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "col-12",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "form-label",
                                                                                            htmlFor: "bandwidth",
                                                                                            children: "bandwidth"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 751,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                            name: "bandwidth",
                                                                                            className: "form-select",
                                                                                            required: true,
                                                                                            onChange: (e)=>setFormData((prev)=>({
                                                                                                        ...prev,
                                                                                                        bandwidth: e.target.value
                                                                                                    })),
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                    children: "Select Bandwidth"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 757,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                    selected: true,
                                                                                                    value: "unlimited",
                                                                                                    children: "Unlimited"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 758,
                                                                                                    columnNumber: 65
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 752,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "invalid-feedback",
                                                                                            children: "Please select a valid version."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 760,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 750,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "col-12",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                            className: "form-label",
                                                                                            htmlFor: "billingCycle",
                                                                                            children: "billingCycle"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 764,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                            name: "billingCycle",
                                                                                            className: "form-select",
                                                                                            required: true,
                                                                                            onChange: (e)=>setFormData((prev)=>({
                                                                                                        ...prev,
                                                                                                        billingCycle: e.target.value
                                                                                                    })),
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                    value: "",
                                                                                                    children: "Select billingCycle"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 770,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                    value: "hourlyBilling",
                                                                                                    children: "Hourly Billing"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 771,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                    value: "monthlyBilling",
                                                                                                    children: "Monthly Billing"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 772,
                                                                                                    columnNumber: 65
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 765,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "invalid-feedback",
                                                                                            children: "Please select a valid version."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 774,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 763,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 729,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 780,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "table-responsive ps-3",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "cart-gift text-end mt-4",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    className: "btn btn-primary rounded",
                                                                                    onClick: handleDeployServer,
                                                                                    children: "Deploy Server"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 785,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 783,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 782,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 727,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 723,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 722,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 721,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                lineNumber: 720,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/server/create/page.jsx",
                                        lineNumber: 371,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/server/create/page.jsx",
                                    lineNumber: 370,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/server/create/page.jsx",
                            lineNumber: 347,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": "true",
                            "aria-labelledby": "projectCardLabel",
                            className: "ltr dark modal fade",
                            id: "projectCard1",
                            tabIndex: -1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-dialog",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex align-items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "modal-title fs-5",
                                                            id: "projectCardLabel",
                                                            children: "Create Volume "
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 816,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iconify-icon", {
                                                            icon: "line-md:document-add",
                                                            className: "f-s-22",
                                                            style: {
                                                                color: "#198754"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 817,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 815,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "aria-label": "Close",
                                                    className: "btn-close",
                                                    "data-bs-dismiss": "modal",
                                                    type: "button"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 819,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/create/page.jsx",
                                            lineNumber: 814,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-body",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row align-items-center justify-content-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-lg-5 text-center align-self-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            alt: "",
                                                            className: "img-fluid b-r-10",
                                                            src: "../assets/images/new/cloud.png"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 824,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 823,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-lg-6 ps-4 ",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "d-flex align-items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "simplespin d-flex align-items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                className: "circle-btn decrement",
                                                                                role: "button",
                                                                                onClick: decrement,
                                                                                children: "-"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 829,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                className: "app-small-touchspin count f-s-19",
                                                                                type: "text",
                                                                                value: count,
                                                                                readOnly: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 830,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                className: "circle-btn increment",
                                                                                role: "button",
                                                                                onClick: increment,
                                                                                children: "+"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 831,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 828,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "f-s-18 m-0",
                                                                        children: "GB"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 833,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 827,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "f-s-18 text-primary fw-bold m-0",
                                                                    children: [
                                                                        " $",
                                                                        price,
                                                                        " /mo"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 836,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 835,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 826,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        className: "app-form mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "input-group",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        "aria-describedby": "inputGroupPrepend2",
                                                                        className: "form-control",
                                                                        id: "validationDefaultUsername",
                                                                        placeholder: "Volume Name",
                                                                        required: "",
                                                                        type: "text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 842,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 841,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 840,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "input-group",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        "aria-describedby": "inputGroupPrepend2",
                                                                        className: "form-control",
                                                                        id: "validationDefaultUsername",
                                                                        placeholder: "Add Location",
                                                                        required: "",
                                                                        type: "text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 847,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 846,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 845,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 839,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                lineNumber: 822,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/server/create/page.jsx",
                                            lineNumber: 821,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "modal-footer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-secondary",
                                                    "data-bs-dismiss": "modal",
                                                    type: "button",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 854,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-primary",
                                                    id: "addCard",
                                                    type: "button",
                                                    "data-bs-dismiss": "modal",
                                                    children: "Buy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 855,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/create/page.jsx",
                                            lineNumber: 853,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/server/create/page.jsx",
                                    lineNumber: 813,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/server/create/page.jsx",
                                lineNumber: 812,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/server/create/page.jsx",
                            lineNumber: 811,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/server/create/page.jsx",
                    lineNumber: 346,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/server/create/page.jsx",
            lineNumber: 331,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/server/create/page.jsx",
        lineNumber: 330,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Create;
}}),

};

//# sourceMappingURL=src_app_server_create_page_jsx_6abcf896._.js.map