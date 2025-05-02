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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Create() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedOS, setSelectedOS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authMethod, setAuthMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ssh');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOSClick = (os)=>{
        setSelectedOS(os);
    };
    const summaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    // range
    // const [value, setValue] = useState(10);
    // const sliderRef = useRef(null);
    // const tooltipRef = useRef(null);
    // const min = 10;
    // const max = 10240;
    // const handleSliderChange = (e) => {
    //     const newValue = parseInt(e.target.value);
    //     setValue(newValue);
    //     // Move the tooltip with the slider thumb
    //     const slider = sliderRef.current;
    //     const tooltip = tooltipRef.current;
    //     if (slider && tooltip) {
    //         const sliderWidth = slider.offsetWidth;
    //         const percent = (newValue - min) / (max - min);
    //         const thumbOffset = percent * (sliderWidth - 16); 
    //         tooltip.style.left = `${thumbOffset}px`;
    //     }
    // };
    // useEffect(() => {
    //     handleSliderChange({ target: { value } }); // Initial positioning
    // }, []);
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
                            lineNumber: 140,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/server/create/page.jsx",
                        lineNumber: 139,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/server/create/page.jsx",
                    lineNumber: 132,
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
                                                lineNumber: 149,
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
                                                                        lineNumber: 154,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    " Server"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 153,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 152,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 151,
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
                                                            lineNumber: 159,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                lineNumber: 150,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/server/create/page.jsx",
                                        lineNumber: 148,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/server/create/page.jsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                                lineNumber: 176,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 175,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card-body",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "row",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-lg-12 col-xxl-4",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                            className: "active-device-session active-device-list",
                                                                                            id: "shareMenuLeft",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "card share-menu-active",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "card-body",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "device-menu-item",
                                                                                                            draggable: "false",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "device-menu-img",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                        className: "flag-icon flag-icon-usa f-s-25 text-success"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 187,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 186,
                                                                                                                    columnNumber: 85
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "device-menu-content",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                                            className: "mb-0 txt-ellipsis-1",
                                                                                                                            children: "New York"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 190,
                                                                                                                            columnNumber: 89
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                            className: "mb-0 txt-ellipsis-1 text-secondary",
                                                                                                                            children: "(NY)"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 191,
                                                                                                                            columnNumber: 89
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 189,
                                                                                                                    columnNumber: 85
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "device-menu-icons",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                        className: "ph-fill  ph-check-circle me-1 text-success f-s-19"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 195,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 194,
                                                                                                                    columnNumber: 85
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 185,
                                                                                                            columnNumber: 81
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 184,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 183,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 182,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 181,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 180,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-lg-12 col-xxl-4",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                            className: "active-device-session  active-device-list",
                                                                                            id: "shareMenuRight",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "card",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "card-body",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "device-menu-item ",
                                                                                                            draggable: "false",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                    className: "device-menu-img",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                        className: "flag-icon flag-icon-aus f-s-25 text-primary"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 210,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 209,
                                                                                                                    columnNumber: 85
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "device-menu-content",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                                            className: "mb-0 txt-ellipsis-1",
                                                                                                                            children: "Sydney "
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 213,
                                                                                                                            columnNumber: 89
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                            className: "mb-0 txt-ellipsis-1 text-secondary",
                                                                                                                            children: "(Australia)"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 214,
                                                                                                                            columnNumber: 89
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 212,
                                                                                                                    columnNumber: 85
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 208,
                                                                                                            columnNumber: 81
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 207,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 206,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 205,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 204,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 203,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 178,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 173,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 172,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 170,
                                                    columnNumber: 33
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
                                                                lineNumber: 232,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 231,
                                                            columnNumber: 37
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
                                                                                                lineNumber: 244,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            " Operating System"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 240,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: `tab-link ${activeTab === 2 ? "active" : ""}`,
                                                                                        onClick: ()=>setActiveTab(2),
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ph-fill ph-list-bullets f-s-18"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 250,
                                                                                                columnNumber: 61
                                                                                            }, this),
                                                                                            " Application"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 246,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 239,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 238,
                                                                            columnNumber: 49
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
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('Ubuntu'),
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
                                                                                                                                children: "Ubuntu"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 264,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 263,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "Ubuntu",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/Ubuntu.png",
                                                                                                                                width: 45,
                                                                                                                                height: 45
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 267,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 266,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 262,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 261,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'Ubuntu' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "Ubuntu",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "ubuntuVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "18.04"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 275,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "20.04"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 276,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "22.04"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 277,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 274,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid version."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 279,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 273,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 271,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 260,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('Windows'),
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
                                                                                                                                children: "Windows"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 288,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 287,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "Windows",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/Windows.png",
                                                                                                                                width: 45,
                                                                                                                                height: 45
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 291,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 290,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 286,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 285,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'Windows' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "Windows",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "windowsVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "2019"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 299,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "2022"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 300,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 298,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 302,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 297,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 295,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 284,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('Linux'),
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
                                                                                                                                children: "Alma Linux"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 311,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 310,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "Linux",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/Linux.png",
                                                                                                                                width: 45,
                                                                                                                                height: 45
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 314,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 313,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 309,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 308,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'Linux' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "Linux",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "linuxVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "8.4"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 322,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "8.7"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 323,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "9.0"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 324,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "9.1"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 325,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "9.2"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 326,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 321,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 328,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 320,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 318,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 307,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('CentOS'),
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
                                                                                                                                children: "CentOS "
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 337,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 336,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "CentOS",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/CentOS.png",
                                                                                                                                width: 45,
                                                                                                                                height: 45
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 340,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 339,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 335,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 334,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'CentOS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "CentOS",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "centOSVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "7"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 348,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "8"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 349,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "8 Stream"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 350,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "9 Stream"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 351,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 347,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 353,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 346,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 344,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 333,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('Debian'),
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
                                                                                                                                children: "Debian "
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 362,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 361,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "Debian",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/Debian.png",
                                                                                                                                width: 45,
                                                                                                                                height: 45
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 365,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 364,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 360,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 359,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'Debian' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "Debian",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "debianVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "9"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 373,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "10"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 374,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "11"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 375,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "12"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 376,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 372,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 378,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 371,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 369,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 358,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('Rocky'),
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
                                                                                                                                children: "Rocky Linux "
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 387,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 386,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "Rocky",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/Rocky.png",
                                                                                                                                width: 45,
                                                                                                                                height: 45
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 390,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 389,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 385,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 384,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'Rocky' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "Rocky",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "rockyVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "8.4"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 398,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "9"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 399,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 397,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 401,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 396,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 394,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 383,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 259,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 258,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 257,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 256,
                                                                                    columnNumber: 53
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
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('Plesk'),
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
                                                                                                                                children: "Plesk"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 419,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 418,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center mb-3",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "Plesk",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/plesk-logo.png",
                                                                                                                                width: 64,
                                                                                                                                height: 64
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 422,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 421,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 417,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 416,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'Plesk' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "Plesk",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "pleskVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    disabled: true,
                                                                                                                                    defaultValue: true,
                                                                                                                                    children: "Select a Plesk Version"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 430,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "AlmaLinux"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 431,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "CentOS 7"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 432,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "Windows 2022"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 433,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 429,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid version."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 435,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 428,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 426,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 415,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('cPanel'),
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
                                                                                                                                children: "cPanel"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 444,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 443,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "cPanel",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/cPanel.png",
                                                                                                                                width: 67,
                                                                                                                                height: 62
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 447,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 446,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 442,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 441,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'cPanel' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "cPanel",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "cPanelVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    disabled: true,
                                                                                                                                    defaultValue: true,
                                                                                                                                    children: "Select a cPanel Version"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 455,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "Ubuntu 20.04"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 456,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "CloudLinux"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 457,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "AlmaLinux 8"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 458,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 454,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 460,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 453,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 451,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 440,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('Wordpress'),
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
                                                                                                                                children: "Wordpress"
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 469,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 468,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "Wordpress",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/wordpress.png",
                                                                                                                                width: 45,
                                                                                                                                height: 55
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 472,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 471,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 467,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 466,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'Wordpress' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "Wordpress",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "WordpressVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    disabled: true,
                                                                                                                                    defaultValue: true,
                                                                                                                                    children: "Select a Wordpress Version"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 480,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "Ubuntu 20.04"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 481,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 479,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 483,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 478,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 476,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 465,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('NGINX'),
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
                                                                                                                                children: "NGINX "
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 492,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 491,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "NGINX",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/nginx.png",
                                                                                                                                width: 45,
                                                                                                                                height: 64
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 495,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 494,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 490,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 489,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'NGINX' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "NGINX",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "nginxVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    disabled: true,
                                                                                                                                    defaultValue: true,
                                                                                                                                    children: "Select a NGINX Version"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 503,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "Ubuntu"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 504,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 502,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 506,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 501,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 499,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 488,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('OpenVPN'),
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
                                                                                                                                children: "OpenVPN "
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 515,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 514,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "OpenVPN",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/OpenVPN.png",
                                                                                                                                width: 45,
                                                                                                                                height: 64
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 518,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 517,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 513,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 512,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'OpenVPN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "OpenVPN",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "openVPNVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    disabled: true,
                                                                                                                                    defaultValue: true,
                                                                                                                                    children: "Select a OpenVPN Version"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 526,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "Ubuntu"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 527,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 525,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 529,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 524,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 522,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 511,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('MariaDB'),
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
                                                                                                                                children: "MariaDB "
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 538,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 537,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "MariaDB",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/mariadb.png",
                                                                                                                                width: 65,
                                                                                                                                height: 64
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 541,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 540,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 536,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 535,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'MariaDB' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "MariaDB",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "mariaDBVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    disabled: true,
                                                                                                                                    defaultValue: true,
                                                                                                                                    children: "Select a MariaDB Version"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 549,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "Ubuntu"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 550,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 548,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 552,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 547,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 545,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 534,
                                                                                                        columnNumber: 69
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "col-md-6 col-xl-3 p-3",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "simple-pricing-card card",
                                                                                                                onClick: ()=>handleOSClick('NextCloud'),
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
                                                                                                                                children: "NextCloud "
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 561,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 560,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "simple-price-body text-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                                                alt: "NextCloud",
                                                                                                                                className: "img-fluid",
                                                                                                                                src: "/assets/images/new/NextCloud.png",
                                                                                                                                width: 45,
                                                                                                                                height: 64
                                                                                                                            }, void 0, false, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 564,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 563,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 559,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 558,
                                                                                                                columnNumber: 73
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                                className: "app-form row g-3 needs-validation",
                                                                                                                noValidate: true,
                                                                                                                children: selectedOS === 'NextCloud' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "NextCloud",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            className: "form-select",
                                                                                                                            id: "nextCloudVersion",
                                                                                                                            required: true,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    disabled: true,
                                                                                                                                    defaultValue: true,
                                                                                                                                    children: "Select a NextCloud Version"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 572,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    children: "Ubuntu"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 573,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 571,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "invalid-feedback",
                                                                                                                            children: "Please select a valid state."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 575,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 570,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 568,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 557,
                                                                                                        columnNumber: 69
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 414,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 413,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 412,
                                                                                        columnNumber: 57
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 411,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 235,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 234,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 230,
                                                    columnNumber: 33
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
                                                                                lineNumber: 597,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 596,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card card-inside",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "card-header code-header",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                        className: "p-0",
                                                                                        children: "CPU Type"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 601,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 600,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "card-body border-btm",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                            className: "nav nav-tabs tab-outline-primary row border-0",
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
                                                                                                                lineNumber: 607,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 606,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "col-12",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                className: "nav-item text-center d-flex justify-content-center w-100",
                                                                                                                role: "presentation",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    className: "nav-link active w-100",
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
                                                                                                                    lineNumber: 611,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 610,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 609,
                                                                                                            columnNumber: 69
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 605,
                                                                                                    columnNumber: 65
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
                                                                                                                lineNumber: 618,
                                                                                                                columnNumber: 73
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 617,
                                                                                                            columnNumber: 69
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
                                                                                                                        lineNumber: 622,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 621,
                                                                                                                    columnNumber: 73
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
                                                                                                                        lineNumber: 625,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 624,
                                                                                                                    columnNumber: 73
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
                                                                                                                        lineNumber: 628,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 627,
                                                                                                                    columnNumber: 73
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
                                                                                                                        lineNumber: 631,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 630,
                                                                                                                    columnNumber: 73
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 620,
                                                                                                            columnNumber: 69
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 616,
                                                                                                    columnNumber: 65
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 604,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "tab-content",
                                                                                            id: "OutlineContent",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "tab-pane fade show active",
                                                                                                    id: "basic-tab-pane",
                                                                                                    role: "tabpanel",
                                                                                                    "aria-labelledby": "basic-tab",
                                                                                                    tabIndex: 0,
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            children: "Basic virtual machines with a mix of memory and compute resources. Best for small projects that can handle variable levels of CPU performance, like blogs, web apps and dev/test environments."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 639,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                            className: "mb-2 mt-2",
                                                                                                            children: "CPU Options"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 640,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "row simple-pricing-container app-arrow",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-primary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$10/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 647,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 648,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.015/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 649,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 646,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 654,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 653,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "1 GB/1 CPU"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 656,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 652,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 658,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 661,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 660,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "25 GB NVMe SSDs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 663,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 659,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 665,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 668,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 667,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "1 TB Transfer "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 670,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 666,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 651,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 645,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 644,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 643,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 642,
                                                                                                                    columnNumber: 73
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-secondary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$20/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 682,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 683,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.03/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 684,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 681,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 689,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 688,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "2 GB/1 CPU"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 691,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 687,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 693,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 696,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 695,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "50 GB NVMe SSDs "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 698,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 694,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 700,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 703,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 702,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "2 TB Transfer"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 705,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 701,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 686,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 680,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 679,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 678,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 677,
                                                                                                                    columnNumber: 73
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 641,
                                                                                                            columnNumber: 69
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 638,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "tab-pane fade",
                                                                                                    id: "general-tab-pane",
                                                                                                    role: "tabpanel",
                                                                                                    "aria-labelledby": "general-tab",
                                                                                                    tabIndex: 0,
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            children: "High performance virtual machines with a good balance of memory and dedicated hyper-threads from best in class Intel processors. A great choice for a wide range of mainstream, production workloads, like web app hosting, e-commerce sites, medium-sized databases, and enterprise applications."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 715,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                            className: "mb-2 mt-2",
                                                                                                            children: "CPU Options"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 716,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "row simple-pricing-container app-arrow",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-primary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$109/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 723,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 724,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.162/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 725,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 722,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 730,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 729,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "8 GB/4 CPUs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 732,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 728,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 734,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 737,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 736,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "50 GB NVMe SSDs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 739,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 735,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 741,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 744,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 743,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "5 TB Transfer "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 746,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 742,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 727,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 721,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 720,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 719,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 718,
                                                                                                                    columnNumber: 73
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-secondary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$219/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 758,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 759,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.324/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 760,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 757,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 765,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 764,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "16 GB/8 CPUs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 767,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 763,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 769,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 772,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 771,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "100 GB NVMe SSDs "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 774,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 770,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 776,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 779,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 778,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "8 TB Transfer"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 781,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 777,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 762,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 756,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 755,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 754,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 753,
                                                                                                                    columnNumber: 73
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 717,
                                                                                                            columnNumber: 69
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 714,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "tab-pane fade",
                                                                                                    id: "cpu-tab-pane",
                                                                                                    role: "tabpanel",
                                                                                                    "aria-labelledby": "cpu-tab",
                                                                                                    tabIndex: 0,
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            children: "Compute-optimized virtual machines with dedicated hyper-threads from best in class Intel processors. Best for CPU-intensive applications like CI/CD, video encoding and transcoding, machine learning, ad serving, batch processing, and active front-end web and application servers."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 791,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                            className: "mb-2 mt-2",
                                                                                                            children: "CPU Options"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 792,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "row simple-pricing-container app-arrow",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-primary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$159/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 799,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 800,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.234/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 801,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 798,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 806,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 805,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "16 GB/8 CPUs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 808,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 804,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 810,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 813,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 812,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "100 GB NVMe SSDs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 815,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 811,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 817,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 820,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 819,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "7 TB Transfer "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 822,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 818,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 803,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 797,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 796,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 795,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 794,
                                                                                                                    columnNumber: 73
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-secondary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$329/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 834,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 835,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.48/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 836,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 833,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 841,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 840,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "32 GB/16 CPUs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 843,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 839,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 845,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 848,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 847,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "200 GB NVMe SSDs "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 850,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 846,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 852,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 855,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 854,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "10 TB Transfer"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 857,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 853,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 838,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 832,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 831,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 830,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 829,
                                                                                                                    columnNumber: 73
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 793,
                                                                                                            columnNumber: 69
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 790,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "tab-pane fade",
                                                                                                    id: "memory-tab-pane",
                                                                                                    role: "tabpanel",
                                                                                                    "aria-labelledby": "memory-tab",
                                                                                                    tabIndex: 0,
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            children: "Memory-rich virtual machines with super fast NVMe storage, 8GB of RAM per vCPU and dedicated hyper-threads from best-in-class Intel processors. Ideal for RAM-intensive applications like high-performance databases, web scale in-memory caches, and real-time big data processing."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 867,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                            className: "mb-2 mt-2",
                                                                                                            children: "CPU Options"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 868,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "row simple-pricing-container app-arrow",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-primary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$199/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 875,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 876,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.288/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 877,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 874,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 882,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 881,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "32 GB/8 CPUs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 884,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 880,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 886,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 889,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 888,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "150 GB NVMe SSDs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 891,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 887,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 893,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 896,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 895,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "6 TB Transfer "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 898,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 894,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 879,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 873,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 872,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 871,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 870,
                                                                                                                    columnNumber: 73
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-secondary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$399/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 910,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 911,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.576/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 912,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 909,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 917,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 916,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "64 GB/16 CPUs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 919,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 915,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 921,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 924,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 923,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "300 GB NVMe SSDs "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 926,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 922,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 928,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 931,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 930,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "12 TB Transfer"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 933,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 929,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 914,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 908,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 907,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 906,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 905,
                                                                                                                    columnNumber: 73
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 869,
                                                                                                            columnNumber: 69
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 866,
                                                                                                    columnNumber: 65
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "tab-pane fade",
                                                                                                    id: "storage-tab-pane",
                                                                                                    role: "tabpanel",
                                                                                                    "aria-labelledby": "storage-tab",
                                                                                                    tabIndex: 0,
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                            children: "Droplets with large amounts of super fast NVMe storage, suitable for large NoSQL databases (e.g. MongoDB, Elasticsearch), time series databases, and other data warehouses."
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 943,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                            className: "mb-2 mt-2",
                                                                                                            children: "CPU Options"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 944,
                                                                                                            columnNumber: 69
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "row simple-pricing-container app-arrow",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-primary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$149/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 951,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 952,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.21/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 953,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 950,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 958,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 957,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "16 GB/4 CPUs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 960,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 956,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 962,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 965,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 964,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "500 GB NVMe SSDs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 967,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 963,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 969,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-primary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 972,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 971,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "4 TB Transfer "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 974,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 970,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 955,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 949,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 948,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 947,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 946,
                                                                                                                    columnNumber: 73
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "col-md-6 col-xl-4 p-3",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "simple-pricing-card card",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "card-body",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                className: "simple-price-body",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-value text-center b-r-5 bg-light-secondary d-block ",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: "f-s-30 f-w-600 text-center",
                                                                                                                                                children: "$299/"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 986,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                className: " f-s-12 f-w-600",
                                                                                                                                                children: "per month"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 987,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                children: "$0.42/hour"
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 988,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 985,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "simple-price-content",
                                                                                                                                        children: [
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 993,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 992,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "32 GB/8 CPUs"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 995,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 991,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 997,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex ",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 1000,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 999,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "1 TB NVMe SSDs "
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 1002,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 998,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "app-divider-v "
                                                                                                                                            }, void 0, false, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 1004,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this),
                                                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                                className: "d-flex",
                                                                                                                                                children: [
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                                                            className: "ph-bold  ph-check bg-secondary p-1 b-r-100 f-s-12"
                                                                                                                                                        }, void 0, false, {
                                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                            lineNumber: 1007,
                                                                                                                                                            columnNumber: 101
                                                                                                                                                        }, this)
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 1006,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this),
                                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                                                        className: "ms-2 mb-0",
                                                                                                                                                        children: "8 TB Transfer"
                                                                                                                                                    }, void 0, false, {
                                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                        lineNumber: 1009,
                                                                                                                                                        columnNumber: 97
                                                                                                                                                    }, this)
                                                                                                                                                ]
                                                                                                                                            }, void 0, true, {
                                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                lineNumber: 1005,
                                                                                                                                                columnNumber: 93
                                                                                                                                            }, this)
                                                                                                                                        ]
                                                                                                                                    }, void 0, true, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 990,
                                                                                                                                        columnNumber: 89
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 984,
                                                                                                                                columnNumber: 85
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 983,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 982,
                                                                                                                        columnNumber: 77
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 981,
                                                                                                                    columnNumber: 73
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 945,
                                                                                                            columnNumber: 69
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 942,
                                                                                                    columnNumber: 65
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 637,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 603,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "card-body Additional-disk",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                            className: "p-0 mb-4",
                                                                                            children: "Additional Disk"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 1021,
                                                                                            columnNumber: 61
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "row checkbox-div",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "col-12",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "form-check d-flex align-items-center gap-3",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                        className: "form-check-input",
                                                                                                                        id: "invalidCheck2",
                                                                                                                        required: true,
                                                                                                                        type: "checkbox",
                                                                                                                        onChange: handleCheckboxChange
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1027,
                                                                                                                        columnNumber: 81
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 1026,
                                                                                                                    columnNumber: 77
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                            className: "form-check-label f-s-18",
                                                                                                                            htmlFor: "invalidCheck2",
                                                                                                                            children: "Need more disk space? Add a volume with no manual setup."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1036,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                                            className: "form-check-label-p",
                                                                                                                            children: "Block storage volumes add extra disk space. We automatically format and mount your volume so it’s available as soon as your Droplet is, and you can move volumes seamlessly between Droplets at any time. Think of it like a flash drive for your VM."
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1039,
                                                                                                                            columnNumber: 81
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 1035,
                                                                                                                    columnNumber: 77
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 1025,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            "aria-hidden": "true",
                                                                                                            "aria-labelledby": "projectCardLabel",
                                                                                                            className: "modal fade",
                                                                                                            id: "projectCard2",
                                                                                                            tabIndex: -1,
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "modal-dialog modal-fullscreen-lg-down modal-dialog-centered",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "modal-content",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "modal-header",
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                                                                                    className: "modal-title",
                                                                                                                                    children: "Create Volume"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 1053,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                                    "aria-label": "Close",
                                                                                                                                    className: "btn-close m-0 fs-5",
                                                                                                                                    "data-bs-dismiss": "modal",
                                                                                                                                    type: "button"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 1054,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1052,
                                                                                                                            columnNumber: 85
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
                                                                                                                                            lineNumber: 1059,
                                                                                                                                            columnNumber: 97
                                                                                                                                        }, this)
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 1058,
                                                                                                                                        columnNumber: 93
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                        className: "col-lg-6 ps-4",
                                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                                            className: "simplespin",
                                                                                                                                            children: [
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                                                    className: "circle-btn decrement",
                                                                                                                                                    role: "button",
                                                                                                                                                    children: "-"
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                    lineNumber: 1063,
                                                                                                                                                    columnNumber: 101
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                                                    className: "app-small-touchspin count",
                                                                                                                                                    type: "text",
                                                                                                                                                    defaultValue: 1
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                    lineNumber: 1064,
                                                                                                                                                    columnNumber: 101
                                                                                                                                                }, this),
                                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                                                                    className: "circle-btn increment",
                                                                                                                                                    role: "button",
                                                                                                                                                    children: "+"
                                                                                                                                                }, void 0, false, {
                                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                                    lineNumber: 1065,
                                                                                                                                                    columnNumber: 101
                                                                                                                                                }, this)
                                                                                                                                            ]
                                                                                                                                        }, void 0, true, {
                                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                            lineNumber: 1062,
                                                                                                                                            columnNumber: 97
                                                                                                                                        }, this)
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 1061,
                                                                                                                                        columnNumber: 93
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 1057,
                                                                                                                                columnNumber: 89
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1056,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                            className: "modal-footer",
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                                    className: "btn btn-light-primary",
                                                                                                                                    type: "button",
                                                                                                                                    children: "Save changes"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 1093,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                                    className: "btn btn-light-secondary",
                                                                                                                                    "data-bs-dismiss": "modal",
                                                                                                                                    type: "button",
                                                                                                                                    children: "Close"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                    lineNumber: 1094,
                                                                                                                                    columnNumber: 89
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1092,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 1051,
                                                                                                                    columnNumber: 81
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1050,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 1049,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1023,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 1022,
                                                                                            columnNumber: 61
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 1020,
                                                                                    columnNumber: 57
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 599,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 595,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 594,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 593,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 592,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 591,
                                                    columnNumber: 33
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
                                                                                lineNumber: 1117,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 1116,
                                                                            columnNumber: 53
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
                                                                                                    required: true,
                                                                                                    type: "checkbox",
                                                                                                    defaultValue: true
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 1125,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1124,
                                                                                                columnNumber: 69
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                        className: "form-check-label f-s-18",
                                                                                                        htmlFor: "invalidCheck2",
                                                                                                        children: "Enable automated backup plan"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 1128,
                                                                                                        columnNumber: 73
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
                                                                                                                lineNumber: 1131,
                                                                                                                columnNumber: 437
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 1131,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1127,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 1123,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                    lineNumber: 1122,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 1121,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 1119,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 1115,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 1114,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 1113,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 1112,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 1111,
                                                    columnNumber: 33
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
                                                                                children: "Authentication Method"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 1150,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 1149,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card-body",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "row",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-lg-12 col-xxl-4",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                            className: "active-device-session active-device-list",
                                                                                            id: "shareMenuLeft",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: `card ${authMethod === 'ssh' ? 'share-menu-active' : ''}`,
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "card-body",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "device-menu-item",
                                                                                                            draggable: "false",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "select-item d-flex gap-2",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                            className: "form-check-input",
                                                                                                                            id: "inlineRadio2",
                                                                                                                            name: "authOption",
                                                                                                                            type: "radio",
                                                                                                                            value: "ssh",
                                                                                                                            checked: authMethod === 'ssh',
                                                                                                                            onChange: ()=>setAuthMethod('ssh')
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1162,
                                                                                                                            columnNumber: 93
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1161,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                        className: "form-check-label",
                                                                                                                        htmlFor: "inlineRadio2",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                            className: "d-flex align-items-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                className: "ms-2",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                        className: "fs-6",
                                                                                                                                        children: "SSH Key"
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 1175,
                                                                                                                                        columnNumber: 101
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                        className: "d-block text-secondary",
                                                                                                                                        children: "Connect to your Server with an SSH key pair"
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 1176,
                                                                                                                                        columnNumber: 101
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 1174,
                                                                                                                                columnNumber: 97
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1173,
                                                                                                                            columnNumber: 93
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1172,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1160,
                                                                                                                columnNumber: 85
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 1159,
                                                                                                            columnNumber: 81
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 1158,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 1157,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1156,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 1155,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 1154,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "col-lg-12 col-xxl-4",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                            className: "active-device-session active-device-list",
                                                                                            id: "shareMenuRight",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: `card ${authMethod === 'password' ? 'share-menu-active' : ''}`,
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "card-body",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "device-menu-item",
                                                                                                            draggable: "false",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "select-item d-flex gap-2",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                            className: "form-check-input",
                                                                                                                            id: "inlineRadio1",
                                                                                                                            name: "authOption",
                                                                                                                            type: "radio",
                                                                                                                            value: "password",
                                                                                                                            checked: authMethod === 'password',
                                                                                                                            onChange: ()=>setAuthMethod('password')
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1197,
                                                                                                                            columnNumber: 93
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1196,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                        className: "form-check-label",
                                                                                                                        htmlFor: "inlineRadio1",
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                            className: "d-flex align-items-center",
                                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                className: "ms-2",
                                                                                                                                children: [
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                        className: "fs-6",
                                                                                                                                        children: "Password"
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 1210,
                                                                                                                                        columnNumber: 101
                                                                                                                                    }, this),
                                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                                        className: "d-block text-secondary",
                                                                                                                                        children: "Connect to your Server as the “root” user via password"
                                                                                                                                    }, void 0, false, {
                                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                        lineNumber: 1211,
                                                                                                                                        columnNumber: 101
                                                                                                                                    }, this)
                                                                                                                                ]
                                                                                                                            }, void 0, true, {
                                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                                lineNumber: 1209,
                                                                                                                                columnNumber: 97
                                                                                                                            }, this)
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1208,
                                                                                                                            columnNumber: 93
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1207,
                                                                                                                        columnNumber: 89
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1195,
                                                                                                                columnNumber: 85
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 1194,
                                                                                                            columnNumber: 81
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 1193,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 1192,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1191,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 1190,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 1189,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "row",
                                                                                        children: [
                                                                                            authMethod === 'ssh' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "col-lg-4",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                    className: "app-form row g-3 needs-validation",
                                                                                                    noValidate: true,
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "SSH mt-4",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                className: "form-label",
                                                                                                                htmlFor: "SSHVersion",
                                                                                                                children: "Select SSH Key"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1227,
                                                                                                                columnNumber: 81
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                className: "form-select",
                                                                                                                id: "SSHVersion",
                                                                                                                required: true,
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                    children: "No option"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                    lineNumber: 1231,
                                                                                                                    columnNumber: 85
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1230,
                                                                                                                columnNumber: 81
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "invalid-feedback",
                                                                                                                children: "Please select a valid version."
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1233,
                                                                                                                columnNumber: 81
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 1226,
                                                                                                        columnNumber: 77
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 1225,
                                                                                                    columnNumber: 73
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1224,
                                                                                                columnNumber: 69
                                                                                            }, this),
                                                                                            authMethod === 'password' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "col-lg-8 col-12",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                        className: "app-form row ",
                                                                                                        noValidate: true,
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                className: "form-label",
                                                                                                                htmlFor: "password",
                                                                                                                children: "Create Root Password"
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1242,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                className: "input-group input-group-password",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                        className: "form-control",
                                                                                                                        id: "password",
                                                                                                                        placeholder: "Enter Password",
                                                                                                                        type: showPassword ? 'text' : 'password'
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1244,
                                                                                                                        columnNumber: 81
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                                        className: "input-group-text b-r-right",
                                                                                                                        onClick: ()=>setShowPassword((prev)=>!prev),
                                                                                                                        style: {
                                                                                                                            cursor: 'pointer'
                                                                                                                        },
                                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                            className: `ph f-s-20 eyes-icon ${showPassword ? 'ph-eye' : 'ph-eye-slash'}`
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                            lineNumber: 1255,
                                                                                                                            columnNumber: 85
                                                                                                                        }, this)
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1250,
                                                                                                                        columnNumber: 81
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1243,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 1241,
                                                                                                        columnNumber: 73
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 1261,
                                                                                                        columnNumber: 73
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                        children: "Password must meet the following requirements:"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 1262,
                                                                                                        columnNumber: 73
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                        className: "ph-fill ph-dot-outline"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1264,
                                                                                                                        columnNumber: 81
                                                                                                                    }, this),
                                                                                                                    " At least 8 characters long"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1264,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                        className: "ph-fill ph-dot-outline"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1265,
                                                                                                                        columnNumber: 81
                                                                                                                    }, this),
                                                                                                                    " Contains at least 1 uppercase letter (but not first or last)"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1265,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                        className: "ph-fill ph-dot-outline"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1266,
                                                                                                                        columnNumber: 81
                                                                                                                    }, this),
                                                                                                                    " Contains at least 1 number"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1266,
                                                                                                                columnNumber: 77
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                        className: "ph-fill ph-dot-outline"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                        lineNumber: 1267,
                                                                                                                        columnNumber: 81
                                                                                                                    }, this),
                                                                                                                    " Cannot end in a number or special character"
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                                lineNumber: 1267,
                                                                                                                columnNumber: 77
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                        lineNumber: 1263,
                                                                                                        columnNumber: 73
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1240,
                                                                                                columnNumber: 69
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 1222,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 1153,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 1152,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 1148,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 1147,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                            lineNumber: 1146,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 1145,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 1144,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/create/page.jsx",
                                            lineNumber: 169,
                                            columnNumber: 29
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
                                                                    children: "Order Summary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 1288,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 1287,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "card-body",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "table-responsive ps-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                            className: "table cart-side-table mb-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                        className: "total-price",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                children: " monthly"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1295,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                className: "text-end",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    id: "cart-sub",
                                                                                                    children: "$28.00"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 1297,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1296,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 1294,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                children: "Hourly"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1303,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                className: "text-end",
                                                                                                id: "cart-discount",
                                                                                                children: "$0.042"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1304,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 1302,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                children: "Quantity"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1309,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                className: "d-flex justify-content-end",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "simplespin",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                            className: "circle-btn decrement",
                                                                                                            role: "button",
                                                                                                            children: "-"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 1312,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                            className: "app-small-touchspin count",
                                                                                                            type: "text",
                                                                                                            defaultValue: 1
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 1313,
                                                                                                            columnNumber: 73
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                            className: "circle-btn increment",
                                                                                                            role: "button",
                                                                                                            children: "+"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                            lineNumber: 1314,
                                                                                                            columnNumber: 73
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 1311,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1310,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 1308,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 1293,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 1292,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 1320,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "card  scratch-card position-relative ",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "card-body",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "scratch-code-box",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                                className: "mb-0",
                                                                                                children: "WIN190EGHY018"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1324,
                                                                                                columnNumber: 65
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "flex-shrink-0",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    className: "btn btn-primary btn-sm b-r-24",
                                                                                                    id: "copyBtn",
                                                                                                    children: "copy"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 1326,
                                                                                                    columnNumber: 69
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                lineNumber: 1325,
                                                                                                columnNumber: 65
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 1323,
                                                                                        columnNumber: 61
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "mb-0",
                                                                                            children: [
                                                                                                "Valid till 4 May 2024. ",
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: "T&C Apply"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                                                    lineNumber: 1331,
                                                                                                    columnNumber: 108
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                                            lineNumber: 1331,
                                                                                            columnNumber: 65
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                                        lineNumber: 1330,
                                                                                        columnNumber: 61
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 1322,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 1321,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 1335,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "cart-gift text-end mt-4",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "btn btn-primary rounded",
                                                                                children: "Create Server"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 1337,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/server/create/page.jsx",
                                                                            lineNumber: 1336,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 1291,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 1290,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 1285,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                lineNumber: 1284,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/server/create/page.jsx",
                                            lineNumber: 1283,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/server/create/page.jsx",
                                    lineNumber: 168,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/server/create/page.jsx",
                            lineNumber: 145,
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
                                                            lineNumber: 1396,
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
                                                            lineNumber: 1397,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 1395,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "aria-label": "Close",
                                                    className: "btn-close",
                                                    "data-bs-dismiss": "modal",
                                                    type: "button"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                    lineNumber: 1399,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/create/page.jsx",
                                            lineNumber: 1394,
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
                                                            lineNumber: 1404,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 1403,
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
                                                                                lineNumber: 1409,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                className: "app-small-touchspin count f-s-19",
                                                                                type: "text",
                                                                                value: count,
                                                                                readOnly: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 1410,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                className: "circle-btn increment",
                                                                                role: "button",
                                                                                onClick: increment,
                                                                                children: "+"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                                lineNumber: 1411,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 1408,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "f-s-18 m-0",
                                                                        children: "GB"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                                        lineNumber: 1413,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 1407,
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
                                                                    lineNumber: 1416,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 1415,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 1406,
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
                                                                        lineNumber: 1422,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 1421,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 1420,
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
                                                                        lineNumber: 1427,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/server/create/page.jsx",
                                                                    lineNumber: 1426,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                                lineNumber: 1425,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/server/create/page.jsx",
                                                        lineNumber: 1419,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/server/create/page.jsx",
                                                lineNumber: 1402,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/server/create/page.jsx",
                                            lineNumber: 1401,
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
                                                    lineNumber: 1434,
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
                                                    lineNumber: 1435,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/server/create/page.jsx",
                                            lineNumber: 1433,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/server/create/page.jsx",
                                    lineNumber: 1393,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/server/create/page.jsx",
                                lineNumber: 1392,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/server/create/page.jsx",
                            lineNumber: 1391,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/server/create/page.jsx",
                    lineNumber: 144,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/server/create/page.jsx",
            lineNumber: 129,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/server/create/page.jsx",
        lineNumber: 128,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = Create;
}}),

};

//# sourceMappingURL=src_app_server_create_page_jsx_6abcf896._.js.map