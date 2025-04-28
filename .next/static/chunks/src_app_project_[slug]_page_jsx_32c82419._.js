(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_project_[slug]_page_jsx_32c82419._.js", {

"[project]/src/app/project/[slug]/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nouislider$2f$dist$2f$nouislider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nouislider/dist/nouislider.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ViewPage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Get slug from URL
    const { projects } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    // auto load
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewPage.useEffect": ()=>{
            // Simulate loading
            const timer = setTimeout({
                "ViewPage.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["ViewPage.useEffect.timer"], 900);
            return ({
                "ViewPage.useEffect": ()=>clearTimeout(timer)
            })["ViewPage.useEffect"];
        }
    }["ViewPage.useEffect"], []);
    // for add member in table
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            name: 'Allie Grater',
            email: 'graterallie@gmail.com',
            createdAt: '2021-03-19',
            status: 'Block'
        },
        {
            id: 2,
            name: 'Rhoda Report',
            email: 'reportrhoda@gmail.com',
            createdAt: '2020-01-19',
            status: 'Active'
        },
        {
            id: 3,
            name: 'Rose Bush',
            email: 'rose@gmail.com',
            createdAt: '2020-10-26',
            status: 'Active'
        },
        {
            id: 4,
            name: 'Dave Allippa',
            email: 'dave@gmail.com',
            createdAt: '2020-06-19',
            status: 'Block'
        },
        {
            id: 5,
            name: 'Emma Grate',
            email: 'emma@gmail.com',
            createdAt: '2022-03-20',
            status: 'Block'
        },
        {
            id: 6,
            name: 'Mal Nurrisht',
            email: 'Nurrishtmal@gmail.com',
            createdAt: '2019-12-29',
            status: 'Active'
        },
        {
            id: 7,
            name: 'Bess Twishes',
            email: 'twishes@gmail.com',
            createdAt: '2020-05-16',
            status: 'Block'
        },
        {
            id: 8,
            name: 'C. Yasoon',
            email: 'yasoon@gmail.com',
            createdAt: '2022-02-16',
            status: 'Active'
        }
    ]);
    // State for the new member being added
    const [newMember, setNewMember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        createdAt: '',
        status: 'Status'
    });
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // State to keep track of the next available ID
    const [nextId, setNextId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(members.length + 1);
    // Pagination state
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [itemsPerPage, setItemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [pageNumbers, setPageNumbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Add state to control modal visibility
    const tableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewPage.useEffect": ()=>{
            __turbopack_context__.r("[project]/node_modules/bootstrap/dist/js/bootstrap.bundle.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then({
                "ViewPage.useEffect": ()=>{
                    console.log('Bootstrap bundle loaded.');
                }
            }["ViewPage.useEffect"]).catch({
                "ViewPage.useEffect": (error)=>{
                    console.error('Error loading Bootstrap bundle:', error);
                }
            }["ViewPage.useEffect"]);
        }
    }["ViewPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewPage.useEffect": ()=>{
            const calculatedPageNumbers = [];
            for(let i = 1; i <= Math.ceil(members.length / itemsPerPage); i++){
                calculatedPageNumbers.push(i);
            }
            setPageNumbers(calculatedPageNumbers);
        }
    }["ViewPage.useEffect"], [
        members,
        itemsPerPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewPage.useEffect": ()=>{
            const loadListJs = {
                "ViewPage.useEffect.loadListJs": async ()=>{
                    try {
                        //Dynamically load the scripts
                        const script3 = document.createElement('script');
                        script3.src = '../assets/vendor/listJs/list.min.js';
                        script3.async = true;
                        document.body.appendChild(script3);
                        script3.onload = ({
                            "ViewPage.useEffect.loadListJs": ()=>{
                                // Initialize List.js
                                if (tableRef.current) {
                                    listInstance.current = new List(tableRef.current.id, {
                                        valueNames: [
                                            'name',
                                            'email',
                                            'createdAt',
                                            'status'
                                        ]
                                    });
                                }
                            }
                        })["ViewPage.useEffect.loadListJs"];
                        //Cleanup
                        return ({
                            "ViewPage.useEffect.loadListJs": ()=>{
                                if (script3.parentNode) script3.parentNode.removeChild(script3);
                                if (listInstance.current) {
                                    listInstance.current.destroy();
                                }
                            }
                        })["ViewPage.useEffect.loadListJs"];
                    } catch (error) {
                        console.error('Failed to load List.js:', error);
                    }
                }
            }["ViewPage.useEffect.loadListJs"];
            loadListJs();
        }
    }["ViewPage.useEffect"], [
        members
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewPage.useEffect": ()=>{
            // Initialize noUiSlider
            const sliderElement = document.getElementById('price-slider');
            if (sliderElement && !sliderRef.current) {
                sliderRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nouislider$2f$dist$2f$nouislider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(sliderElement, {
                    start: [
                        20,
                        80
                    ],
                    connect: true,
                    range: {
                        'min': 0,
                        'max': 100
                    }
                });
                sliderRef.current.on('update', {
                    "ViewPage.useEffect": function(values, handle) {
                        const min = Math.round(values[0]);
                        const max = Math.round(values[1]);
                        console.log(`Min: ${min}, Max: ${max}`);
                    // You can update your filtering logic here based on the slider values
                    }
                }["ViewPage.useEffect"]);
            }
            return ({
                "ViewPage.useEffect": ()=>{
                    if (sliderRef.current) {
                        sliderRef.current.destroy();
                        sliderRef.current = null;
                    }
                }
            })["ViewPage.useEffect"];
        }
    }["ViewPage.useEffect"], []);
    // Handles changes in the input fields of the add member modal
    const handleInputChange = (e)=>{
        const { id, value } = e.target;
        setNewMember((prevState)=>({
                ...prevState,
                [id.replace('-field', '')]: value
            }));
    };
    const handleAddMember = (e)=>{
        e.preventDefault();
        if (newMember.name && newMember.email && newMember.createdAt && newMember.status !== 'Status') {
            const newMembersArray = [
                ...members,
                {
                    ...newMember,
                    id: nextId
                }
            ];
            setMembers(newMembersArray);
            setNextId(nextId + 1);
            setNewMember({
                name: '',
                email: '',
                createdAt: '',
                status: 'Status'
            });
            setCurrentPage(1);
            setPageNumbers(Array.from({
                length: Math.ceil(newMembersArray.length / itemsPerPage)
            }, (_, i)=>i + 1));
            setShowModal(false);
            const modalElement = document.getElementById('exampleModal');
            if (modalElement) {
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (modalInstance) {
                    modalInstance.hide();
                }
            }
        } else {
            alert('Please fill in all the fields and select a status.');
        }
    };
    // Handles the deletion of a member
    const handleDeleteMember = (idToDelete)=>{
        const updatedMembers = members.filter((member)=>member.id !== idToDelete);
        setMembers(updatedMembers);
        setPageNumbers(Array.from({
            length: Math.ceil(updatedMembers.length / itemsPerPage)
        }, (_, i)=>i + 1));
    };
    // Logic to get current members for the page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMembers = members.slice(indexOfFirstItem, indexOfLastItem);
    // Logic to handle page changes
    const paginate = (pageNumber)=>setCurrentPage(pageNumber);
    const handleSearch = (e)=>{
        setSearchQuery(e.target.value);
        if (listInstance.current) {
            listInstance.current.search(e.target.value);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "position-relative",
            children: [
                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100",
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
                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                            lineNumber: 207,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                        lineNumber: 206,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                    lineNumber: 199,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                "Magdalena Wisozk ",
                                                projects || "",
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 216,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "app-line-breadcrumbs mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "f-s-14 f-w-500",
                                                        href: "/project",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "ph-duotone  ph-table f-s-16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 49
                                                                }, this),
                                                                " Projects"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                            lineNumber: 220,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                        lineNumber: 219,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                    lineNumber: 218,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "f-s-14 f-w-500",
                                                        href: "#",
                                                        children: "Magdalena Wisozk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                        lineNumber: 226,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 217,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                lineNumber: 214,
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
                                                className: "tabs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: `tab-link ${activeTab === 1 ? "active" : ""}`,
                                                        onClick: ()=>setActiveTab(1),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "ph-bold ph-hard-drives f-s-18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                lineNumber: 242,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Servers"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                        lineNumber: 239,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: `tab-link ${activeTab === 2 ? "active" : ""}`,
                                                        onClick: ()=>setActiveTab(2),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "ph-bold  ph-users f-s-18"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                lineNumber: 247,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Members"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                lineNumber: 238,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 237,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "content-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `tabs-content ${activeTab === 1 ? "active" : ""}`,
                                                    id: "tab-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "card-header border-btm d-flex align-items-center justify-content-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        children: "Project Servers"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-end",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "btn btn-primary h-45 icon-btn m-2",
                                                                            "data-bs-target": "#projectCard2",
                                                                            "data-bs-toggle": "modal",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "ph ph-circles-three-plus f-s-18"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                    lineNumber: 259,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                "  Add New"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                lineNumber: 255,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "card-body",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/assets/images/New/nodata.gif",
                                                                        width: 500,
                                                                        height: 500,
                                                                        alt: "nodata"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                lineNumber: 263,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                    lineNumber: 253,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `tabs-content ${activeTab === 2 ? "active" : ""}`,
                                                    id: "tab-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "card p-30 equal-card ",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "card-header ps-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    children: "Member's List"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                lineNumber: 275,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "card-body p-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    id: "myTable",
                                                                    ref: tableRef,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "list-table-header d-flex justify-content-sm-between mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "btn btn-primary b-r-22",
                                                                                    "data-bs-target": "#exampleModal",
                                                                                    "data-bs-toggle": "modal",
                                                                                    type: "button",
                                                                                    onClick: ()=>setShowModal(true),
                                                                                    children: "Add"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                    lineNumber: 281,
                                                                                    columnNumber: 17
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    "aria-hidden": "true",
                                                                                    "aria-labelledby": "exampleModalLabel",
                                                                                    className: "modal",
                                                                                    id: "exampleModal",
                                                                                    tabIndex: -1,
                                                                                    className: `modal ${showModal ? 'show' : ''}`,
                                                                                    style: {
                                                                                        display: showModal ? 'block' : 'none'
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "modal-dialog",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "modal-content",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "modal-header",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                                                            className: "modal-title fs-5",
                                                                                                            id: "exampleModalLabel",
                                                                                                            children: "Add Employee"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                            lineNumber: 290,
                                                                                                            columnNumber: 33
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                            "aria-label": "Close",
                                                                                                            className: "btn-close m-0",
                                                                                                            "data-bs-dismiss": "modal",
                                                                                                            type: "button",
                                                                                                            onClick: ()=>setShowModal(false)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                            lineNumber: 291,
                                                                                                            columnNumber: 33
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                    lineNumber: 289,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                                    id: "add_employee_form",
                                                                                                    onSubmit: handleAddMember,
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "modal-body",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "mb-3",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                            className: "form-label",
                                                                                                                            children: "Name :"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                            lineNumber: 296,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                            className: "form-control",
                                                                                                                            id: "name-field",
                                                                                                                            placeholder: "Name",
                                                                                                                            required: true,
                                                                                                                            type: "text",
                                                                                                                            value: newMember.name,
                                                                                                                            onChange: handleInputChange
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                            lineNumber: 297,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                    lineNumber: 295,
                                                                                                                    columnNumber: 37
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "mb-3",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                            className: "form-label",
                                                                                                                            children: "Email :"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                            lineNumber: 300,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                            className: "form-control",
                                                                                                                            id: "email-field",
                                                                                                                            placeholder: "Email",
                                                                                                                            required: true,
                                                                                                                            type: "email",
                                                                                                                            value: newMember.email,
                                                                                                                            onChange: handleInputChange
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                            lineNumber: 301,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                    lineNumber: 299,
                                                                                                                    columnNumber: 37
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "mb-3",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                            className: "form-label",
                                                                                                                            children: "Created At :"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                            lineNumber: 304,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                                            className: "form-control",
                                                                                                                            id: "createdAt-field",
                                                                                                                            required: true,
                                                                                                                            type: "date",
                                                                                                                            value: newMember.createdAt,
                                                                                                                            onChange: handleInputChange
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                            lineNumber: 305,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                    lineNumber: 303,
                                                                                                                    columnNumber: 37
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                    className: "mb-3",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                                            className: "form-label",
                                                                                                                            children: "Status :"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                            lineNumber: 308,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                                                            "aria-label": "Default select example",
                                                                                                                            className: "form-select",
                                                                                                                            id: "status-field",
                                                                                                                            value: newMember.status,
                                                                                                                            onChange: handleInputChange,
                                                                                                                            children: [
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    value: "Status",
                                                                                                                                    children: "Status"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                                    lineNumber: 310,
                                                                                                                                    columnNumber: 45
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    value: "Active",
                                                                                                                                    children: "Active"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                                    lineNumber: 311,
                                                                                                                                    columnNumber: 45
                                                                                                                                }, this),
                                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                                                    value: "Block",
                                                                                                                                    children: "Block"
                                                                                                                                }, void 0, false, {
                                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                                    lineNumber: 312,
                                                                                                                                    columnNumber: 45
                                                                                                                                }, this)
                                                                                                                            ]
                                                                                                                        }, void 0, true, {
                                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                            lineNumber: 309,
                                                                                                                            columnNumber: 41
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                    lineNumber: 307,
                                                                                                                    columnNumber: 37
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                            lineNumber: 294,
                                                                                                            columnNumber: 33
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                            className: "modal-footer add",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    className: "btn btn-secondary",
                                                                                                                    "data-bs-dismiss": "modal",
                                                                                                                    type: "button",
                                                                                                                    onClick: ()=>setShowModal(false),
                                                                                                                    children: "Close"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                    lineNumber: 317,
                                                                                                                    columnNumber: 37
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    className: "btn btn-primary",
                                                                                                                    id: "add-btn",
                                                                                                                    type: "submit",
                                                                                                                    children: "Add"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                    lineNumber: 318,
                                                                                                                    columnNumber: 37
                                                                                                                }, this),
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                                    className: "btn btn-success b-r-22",
                                                                                                                    id: "edit-btn",
                                                                                                                    style: {
                                                                                                                        display: 'none'
                                                                                                                    },
                                                                                                                    children: "Edit"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                    lineNumber: 319,
                                                                                                                    columnNumber: 37
                                                                                                                }, this)
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                            lineNumber: 316,
                                                                                                            columnNumber: 33
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                    lineNumber: 293,
                                                                                                    columnNumber: 29
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                            lineNumber: 288,
                                                                                            columnNumber: 25
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                        lineNumber: 287,
                                                                                        columnNumber: 21
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                    lineNumber: 286,
                                                                                    columnNumber: 17
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                                    action: "#",
                                                                                    className: "app-form app-icon-form ",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "position-relative ",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                "aria-label": "Search",
                                                                                                className: "form-control search b-r-22",
                                                                                                placeholder: "Search...",
                                                                                                type: "search",
                                                                                                value: searchQuery,
                                                                                                onChange: handleSearch
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                lineNumber: 329,
                                                                                                columnNumber: 25
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "ti ti-search text-dark"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                lineNumber: 337,
                                                                                                columnNumber: 25
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                        lineNumber: 328,
                                                                                        columnNumber: 21
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                    lineNumber: 327,
                                                                                    columnNumber: 17
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                            lineNumber: 280,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mb-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "form-label",
                                                                                    children: "Price Range:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                    lineNumber: 343,
                                                                                    columnNumber: 17
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    id: "price-slider"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                    lineNumber: 344,
                                                                                    columnNumber: 17
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "d-flex justify-content-between mt-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            id: "price-min"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                            lineNumber: 346,
                                                                                            columnNumber: 21
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            id: "price-max"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                            lineNumber: 347,
                                                                                            columnNumber: 21
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                    lineNumber: 345,
                                                                                    columnNumber: 17
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                            lineNumber: 342,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "overflow-auto app-scroll",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                                                className: "table  table-bottom-border  list-table-data align-middle mb-0",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                            className: "app-sort",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    className: "ps-2 ms-0",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                        className: "form-check-input  checkAll mt-0 ms-2",
                                                                                                        name: "checkAll",
                                                                                                        type: "checkbox"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                        lineNumber: 357,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                    lineNumber: 356,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    children: "ID"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                    lineNumber: 359,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    className: "sort",
                                                                                                    "data-sort": "name",
                                                                                                    scope: "col",
                                                                                                    children: "Name"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                    lineNumber: 360,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    className: "sort",
                                                                                                    "data-sort": "email",
                                                                                                    scope: "col",
                                                                                                    children: "Email"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                    lineNumber: 361,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    className: "sort",
                                                                                                    "data-sort": "createdAt",
                                                                                                    scope: "col",
                                                                                                    children: "Created At"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                    lineNumber: 362,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    className: "sort",
                                                                                                    "data-sort": "status",
                                                                                                    scope: "col",
                                                                                                    children: "Status"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                    lineNumber: 363,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                    className: "sort",
                                                                                                    "data-sort": "action",
                                                                                                    scope: "col",
                                                                                                    children: "Action"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                    lineNumber: 364,
                                                                                                    columnNumber: 29
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                            lineNumber: 355,
                                                                                            columnNumber: 25
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                        lineNumber: 354,
                                                                                        columnNumber: 21
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                                        className: "list",
                                                                                        id: "t-data",
                                                                                        children: currentMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                                        scope: "row",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                            className: "form-check-input mt-0 ms-2",
                                                                                                            name: "item",
                                                                                                            type: "checkbox"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                            lineNumber: 370,
                                                                                                            columnNumber: 49
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                        lineNumber: 370,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        children: member.id
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                        lineNumber: 371,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "name",
                                                                                                        children: member.name
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                        lineNumber: 372,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        children: member.email
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                        lineNumber: 373,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        children: member.createdAt
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                        lineNumber: 374,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "status",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: `badge bg-${member.status === 'Active' ? 'success' : 'danger'}-subtle text-${member.status === 'Active' ? 'success' : 'danger'} text-uppercase`,
                                                                                                            children: member.status
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                            lineNumber: 376,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                        lineNumber: 375,
                                                                                                        columnNumber: 33
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                                        className: "remove",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                            className: "btn remove-item-btn btn-md btn-danger-light b-r-22 d-flex gap-1",
                                                                                                            onClick: ()=>handleDeleteMember(member.id),
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                                    className: "ph-fill  ph-trash f-s-22"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                                    lineNumber: 382,
                                                                                                                    columnNumber: 41
                                                                                                                }, this),
                                                                                                                "  Remove"
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                            lineNumber: 381,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                        lineNumber: 380,
                                                                                                        columnNumber: 33
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, member.id, true, {
                                                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                                lineNumber: 369,
                                                                                                columnNumber: 29
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                        lineNumber: 367,
                                                                                        columnNumber: 21
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                lineNumber: 353,
                                                                                columnNumber: 17
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                            lineNumber: 352,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "list-pagination",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                className: "pagination",
                                                                                children: pageNumbers.map((number)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                        className: `page-item ${currentPage === number ? 'active' : ''}`,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>paginate(number),
                                                                                            className: "page-link",
                                                                                            children: number
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                            lineNumber: 396,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    }, number, false, {
                                                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                        lineNumber: 395,
                                                                                        columnNumber: 25
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                                lineNumber: 393,
                                                                                columnNumber: 17
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                            lineNumber: 392,
                                                                            columnNumber: 13
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                lineNumber: 278,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                        lineNumber: 274,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                    lineNumber: 271,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 252,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                    lineNumber: 236,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                lineNumber: 235,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                        lineNumber: 212,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                    lineNumber: 211,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": "true",
                    "aria-labelledby": "projectCardLabel",
                    className: "modal fade",
                    id: "projectCard2",
                    tabIndex: -1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-dialog",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "modal-title fs-5",
                                                    id: "projectCardLabel",
                                                    children: "Add new server to project "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                    lineNumber: 667,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iconify-icon", {
                                                    icon: "line-md:text-box-to-text-box-multiple-transition",
                                                    className: "animated-box-multiple-transition f-s-22"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                    lineNumber: 668,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 666,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "Close",
                                            className: "btn-close",
                                            "data-bs-dismiss": "modal",
                                            type: "button"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 670,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                    lineNumber: 665,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-body",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "app-form",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "input-group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "input-group-text",
                                                        id: "inputGroupPrepend2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "ph-fill  ph-copy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                            lineNumber: 676,
                                                            columnNumber: 104
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                        lineNumber: 676,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        "aria-describedby": "inputGroupPrepend2",
                                                        className: "form-control",
                                                        id: "validationDefaultUsername",
                                                        placeholder: "Enter Server Id",
                                                        required: "",
                                                        type: "text"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                        lineNumber: 677,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                lineNumber: 675,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 674,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                        lineNumber: 673,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                    lineNumber: 672,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-footer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-secondary",
                                            "data-bs-dismiss": "modal",
                                            type: "button",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 683,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-primary",
                                            id: "addCard",
                                            type: "button",
                                            "data-bs-dismiss": "modal",
                                            children: "Submit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 684,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                    lineNumber: 682,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                            lineNumber: 664,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                        lineNumber: 663,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                    lineNumber: 662,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/project/[slug]/page.jsx",
            lineNumber: 196,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/project/[slug]/page.jsx",
        lineNumber: 195,
        columnNumber: 9
    }, this);
}
_s(ViewPage, "bzxo8e7mut3L3qN7EJKDu5muxRQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ViewPage;
const __TURBOPACK__default__export__ = ViewPage;
var _c;
__turbopack_context__.k.register(_c, "ViewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_project_%5Bslug%5D_page_jsx_32c82419._.js.map