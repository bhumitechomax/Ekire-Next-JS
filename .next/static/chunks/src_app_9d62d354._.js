(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_9d62d354._.js", {

"[project]/src/app/MemberListTable.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$list$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/list.js/src/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
// Use JSDoc to define the Member type
/**
 * @typedef {object} Member
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {string} createdAt
 * @property {'Active' | 'Block'} status
 */ const initialMembers = [
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
        email: 'nurrishtmal@gmail.com',
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
    },
    {
        id: 9,
        name: 'Teri Dactyl',
        email: 'teri@example.com',
        createdAt: '2021-08-01',
        status: 'Active'
    },
    {
        id: 10,
        name: 'Paige Turner',
        email: 'paige@example.com',
        createdAt: '2023-11-15',
        status: 'Block'
    },
    {
        id: 11,
        name: 'Artie Choke',
        email: 'artie@test.com',
        createdAt: '2022-09-05',
        status: 'Active'
    },
    {
        id: 12,
        name: 'Penny Wise',
        email: 'penny@money.com',
        createdAt: '2024-01-22',
        status: 'Active'
    }
];
// Simple Button Component
const Button = ({ variant, className, children, onClick, ...props })=>{
    let baseClass = 'px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
    if (variant === 'outline') {
        baseClass += ' border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100';
    } else if (variant === 'ghost') {
        baseClass += ' bg-transparent text-gray-700 hover:bg-gray-100';
    } else {
        baseClass += ' bg-blue-500 text-white hover:bg-blue-600'; // Default button style
    }
    const combinedClass = baseClass + ' ' + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...props,
        className: combinedClass,
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
};
_c = Button;
// Simple Dialog Component
const Dialog = ({ open, onOpenChange, children })=>{
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-xl p-4 w-full max-w-md",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/MemberListTable.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onOpenChange(false),
                className: "absolute top-2 right-2 text-gray-500 hover:text-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XCircle, {
                    className: "h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/src/app/MemberListTable.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/MemberListTable.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
};
_c1 = Dialog;
const DialogTrigger = ({ asChild, children, ...props })=>{
    if (asChild) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
};
_c2 = DialogTrigger;
const DialogContent = ({ className, children, ...props })=>{
    const combinedClass = "p-4 " + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: combinedClass,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
};
_c3 = DialogContent;
const DialogHeader = ({ className, children, ...props })=>{
    const combinedClass = "space-y-1.5 " + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: combinedClass,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
};
_c4 = DialogHeader;
const DialogTitle = ({ className, children, ...props })=>{
    const combinedClass = "text-lg font-semibold " + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: combinedClass,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
};
_c5 = DialogTitle;
const DialogDescription = ({ className, children, ...props })=>{
    const combinedClass = "text-sm text-gray-500 " + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: combinedClass,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 105,
        columnNumber: 9
    }, this);
};
_c6 = DialogDescription;
const DialogFooter = ({ className, children, ...props })=>{
    const combinedClass = "flex justify-end " + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: combinedClass,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 115,
        columnNumber: 9
    }, this);
};
_c7 = DialogFooter;
// Simple Input Component
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, type, ...props }, ref)=>{
    const baseClass = "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
    const combinedClass = baseClass + ' ' + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: combinedClass,
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 127,
        columnNumber: 16
    }, this);
});
_c8 = Input;
Input.displayName = 'Input';
// Simple Label Component
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, ...props }, ref)=>{
    const baseClass = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
    const combinedClass = baseClass + ' ' + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: combinedClass,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 138,
        columnNumber: 13
    }, this);
});
_c9 = Label;
Label.displayName = "Label";
// Simple Select Component
const Select = ({ onValueChange, value, children, ...props })=>{
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const handleSelectChange = (e)=>{
        const newValue = e.target.value;
        setSelected(newValue);
        onValueChange(newValue);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: selected,
            onChange: handleSelectChange,
            className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/MemberListTable.tsx",
            lineNumber: 156,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 155,
        columnNumber: 9
    }, this);
};
_s(Select, "KgnPjjEI7mNfr40I5e62ifoouAE=");
_c10 = Select;
const SelectTrigger = ({ className, children, ...props })=>{
    const baseClass = "flex items-center justify-between rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2";
    const combinedClass = baseClass + ' ' + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: combinedClass,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 171,
        columnNumber: 9
    }, this);
};
_c11 = SelectTrigger;
const SelectValue = ({ placeholder, children, className, ...props })=>{
    const baseClass = "truncate";
    const combinedClass = baseClass + ' ' + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ...props,
        className: combinedClass,
        children: children || placeholder
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 181,
        columnNumber: 9
    }, this);
};
_c12 = SelectValue;
const SelectContent = ({ className, children, ...props })=>{
    const baseClass = "relative z-10 w-full overflow-auto rounded-md border bg-white text-sm shadow-md";
    const combinedClass = baseClass + ' ' + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        className: combinedClass,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 191,
        columnNumber: 9
    }, this);
};
_c13 = SelectContent;
const SelectItem = ({ value, children, onSelect, ...props })=>{
    const baseClass = "cursor-pointer px-3 py-2.5 hover:bg-gray-100";
    const combinedClass = baseClass + ' ' + props.className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props,
        value: value,
        className: combinedClass,
        onClick: ()=>{
            if (onSelect) {
                onSelect(value);
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 201,
        columnNumber: 9
    }, this);
};
_c14 = SelectItem;
const Table = ({ children, className, ...props })=>{
    const baseClass = "w-full border-collapse";
    const combinedClass = baseClass + ' ' + className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        ...props,
        className: combinedClass,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 215,
        columnNumber: 9
    }, this);
};
_c15 = Table;
const TableHeader = ({ children, className, ...props })=>{
    const baseClass = "";
    const combinedClass = className ? baseClass + ' ' + className : baseClass;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ...props,
        className: combinedClass,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 225,
        columnNumber: 9
    }, this);
};
_c16 = TableHeader;
const TableBody = ({ children, className, ...props })=>{
    const baseClass = "";
    const combinedClass = className ? baseClass + ' ' + className : baseClass;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ...props,
        className: combinedClass,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 235,
        columnNumber: 9
    }, this);
};
_c17 = TableBody;
const TableRow = ({ children, className, ...props })=>{
    const baseClass = "";
    const combinedClass = className ? baseClass + ' ' + className : baseClass;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ...props,
        className: combinedClass,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 245,
        columnNumber: 9
    }, this);
};
_c18 = TableRow;
const TableCell = ({ children, className, ...props })=>{
    const baseClass = "px-4 py-2 border-b";
    const combinedClass = className ? baseClass + ' ' + className : baseClass;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ...props,
        className: combinedClass,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 255,
        columnNumber: 9
    }, this);
};
_c19 = TableCell;
const TableHead = ({ children, className, ...props })=>{
    const baseClass = "px-4 py-2 border-b font-semibold text-left";
    const combinedClass = className ? baseClass + ' ' + className : baseClass;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ...props,
        className: combinedClass,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 265,
        columnNumber: 9
    }, this);
};
_c20 = TableHead;
const MemberListTable = ()=>{
    _s1();
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMembers);
    const [newMember, setNewMember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        createdAt: '',
        status: 'Active'
    });
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    const [editMemberId, setEditMemberId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMembers = members.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber)=>{
        if (pageNumber < 1) {
            pageNumber = 1;
        }
        if (pageNumber > totalPages) {
            pageNumber = totalPages;
        }
        setCurrentPage(pageNumber);
    };
    const totalPages = Math.ceil(members.length / itemsPerPage);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setNewMember((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleAddMember = ()=>{
        if (newMember.name && newMember.email && newMember.createdAt) {
            if (editMemberId) {
                setMembers(members.map((member)=>member.id === editMemberId ? {
                        ...member,
                        ...newMember,
                        id: editMemberId
                    } // Keep the ID
                     : member));
                setEditMemberId(null);
            } else {
                const nextId = Math.max(0, ...members.map((m)=>m.id)) + 1;
                setMembers([
                    ...members,
                    {
                        id: nextId,
                        ...newMember
                    }
                ]);
            }
            setNewMember({
                name: '',
                email: '',
                createdAt: '',
                status: 'Active'
            });
            setOpen(false);
            setCurrentPage(1);
        } else {
            alert('Please fill in all fields.');
        }
    };
    const handleDeleteMember = (id)=>{
        setMembers(members.filter((member)=>member.id !== id));
        setCurrentPage(1);
    };
    const handleEditMember = (member)=>{
        setNewMember({
            name: member.name,
            email: member.email,
            createdAt: member.createdAt,
            status: member.status
        });
        setEditMemberId(member.id);
        setOpen(true);
    };
    const filteredMembers = currentMembers.filter((member)=>Object.values(member).join(' ').toLowerCase().includes(searchQuery.toLowerCase()));
    const generatePageNumbers = ()=>{
        const pages = [];
        if (totalPages <= 7) {
            for(let i = 1; i <= totalPages; i++){
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, 5, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemberListTable.useEffect": ()=>{
            if (listRef.current) {
                const options = {
                    valueNames: [
                        'id',
                        'name',
                        'email',
                        'createdAt',
                        'status',
                        'actions'
                    ]
                };
                const memberList = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$list$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](listRef.current, options);
                return ({
                    "MemberListTable.useEffect": ()=>{
                        memberList.destroy();
                    }
                })["MemberListTable.useEffect"];
            }
        }
    }["MemberListTable.useEffect"], [
        members
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-start md:items-center justify-between mb-4 md:mb-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-gray-800 mb-4 md:mb-0",
                        children: "Members"
                    }, void 0, false, {
                        fileName: "[project]/src/app/MemberListTable.tsx",
                        lineNumber: 391,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4 items-start md:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
                                open: open,
                                onOpenChange: setOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogTrigger, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            variant: "outline",
                                            className: "bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Plus, {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MemberListTable.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 33
                                                }, this),
                                                " Add Member"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/MemberListTable.tsx",
                                            lineNumber: 395,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 394,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogContent, {
                                        className: "sm:max-w-[425px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogHeader, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogTitle, {
                                                        children: editMemberId ? 'Edit Member' : 'Add Member'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogDescription, {
                                                        children: [
                                                            "Fill out the form below to ",
                                                            editMemberId ? 'update' : 'add',
                                                            " a new member."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                lineNumber: 400,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-4 py-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-4 items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                                htmlFor: "name",
                                                                className: "text-right",
                                                                children: "Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                id: "name",
                                                                name: "name",
                                                                value: newMember.name,
                                                                onChange: handleInputChange,
                                                                className: "col-span-3",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-4 items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                                htmlFor: "email",
                                                                className: "text-right",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                id: "email",
                                                                name: "email",
                                                                type: "email",
                                                                value: newMember.email,
                                                                onChange: handleInputChange,
                                                                className: "col-span-3",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-4 items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                                htmlFor: "createdAt",
                                                                className: "text-right",
                                                                children: "Created At"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                                id: "createdAt",
                                                                name: "createdAt",
                                                                type: "date",
                                                                value: newMember.createdAt,
                                                                onChange: handleInputChange,
                                                                className: "col-span-3",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-4 items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                                htmlFor: "status",
                                                                className: "text-right",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                                onValueChange: (value)=>{
                                                                    const statusValue = value === 'Active' || value === 'Block' ? value : 'Active';
                                                                    setNewMember((prev)=>({
                                                                            ...prev,
                                                                            status: statusValue
                                                                        }));
                                                                },
                                                                value: newMember.status,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectTrigger, {
                                                                        className: "col-span-3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectValue, {
                                                                            placeholder: "Select a status"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/MemberListTable.tsx",
                                                                            lineNumber: 460,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                                        lineNumber: 459,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectContent, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                                                                value: "Active",
                                                                                children: "Active"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                                lineNumber: 463,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectItem, {
                                                                                value: "Block",
                                                                                children: "Block"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                                lineNumber: 464,
                                                                                columnNumber: 45
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                                        lineNumber: 462,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                lineNumber: 406,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogFooter, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                    type: "button",
                                                    onClick: handleAddMember,
                                                    className: "bg-green-500 hover:bg-green-600 text-white",
                                                    children: editMemberId ? 'Update' : 'Add'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MemberListTable.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                lineNumber: 469,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 399,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/MemberListTable.tsx",
                                lineNumber: 393,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Search, {
                                        className: "absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 481,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                        type: "text",
                                        placeholder: "Search members...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "pl-8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 482,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/MemberListTable.tsx",
                                lineNumber: 480,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/MemberListTable.tsx",
                        lineNumber: 392,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/MemberListTable.tsx",
                lineNumber: 390,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-md border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                    ref: listRef,
                    className: "list",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHeader, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                        className: "w-[80px]",
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 497,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 498,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 499,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                        children: "Created At"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 500,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 501,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableHead, {
                                        className: "text-right",
                                        children: "Action"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                        lineNumber: 502,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/MemberListTable.tsx",
                                lineNumber: 496,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/MemberListTable.tsx",
                            lineNumber: 495,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableBody, {
                            className: "list",
                            children: filteredMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                            className: "font-medium id",
                                            children: member.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/MemberListTable.tsx",
                                            lineNumber: 508,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                            className: "name",
                                            children: member.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/MemberListTable.tsx",
                                            lineNumber: 509,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                            className: "email",
                                            children: member.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/MemberListTable.tsx",
                                            lineNumber: 510,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                            className: "createdAt",
                                            children: member.createdAt
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/MemberListTable.tsx",
                                            lineNumber: 511,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                            className: "status",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: member.status === 'Active' ? 'px-2 py-1 rounded bg-green-100 text-green-800' : 'px-2 py-1 rounded bg-red-100 text-red-800',
                                                children: member.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                lineNumber: 513,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/MemberListTable.tsx",
                                            lineNumber: 512,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableCell, {
                                            className: "text-right actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: ()=>handleEditMember(member),
                                                    className: "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 mr-1" // Added mr-1
                                                    ,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "lucide lucide-pencil-line",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M9 13h-3c-.6 0-1-.4-1-1v-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 530,
                                                                columnNumber: 257
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M15 5v2a2 2 0 0 1-2 2h-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 530,
                                                                columnNumber: 295
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "16 8 21 3 15 3 16 8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 530,
                                                                columnNumber: 331
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "8.5",
                                                                cy: "8.5",
                                                                r: "2.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 530,
                                                                columnNumber: 371
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 15v-2s0-2-2-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/MemberListTable.tsx",
                                                                lineNumber: 530,
                                                                columnNumber: 406
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MemberListTable.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: ()=>handleDeleteMember(member.id),
                                                    className: "bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Trash2, {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/MemberListTable.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MemberListTable.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/MemberListTable.tsx",
                                            lineNumber: 523,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, member.id, true, {
                                    fileName: "[project]/src/app/MemberListTable.tsx",
                                    lineNumber: 507,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/MemberListTable.tsx",
                            lineNumber: 505,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/MemberListTable.tsx",
                    lineNumber: 494,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/MemberListTable.tsx",
                lineNumber: 493,
                columnNumber: 13
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center mt-4 space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "outline",
                        onClick: ()=>paginate(1),
                        disabled: currentPage === 1,
                        className: "hover:bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronsLeft, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/MemberListTable.tsx",
                            lineNumber: 555,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/MemberListTable.tsx",
                        lineNumber: 549,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "outline",
                        onClick: ()=>paginate(currentPage - 1),
                        disabled: currentPage === 1,
                        className: "hover:bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeft, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/MemberListTable.tsx",
                            lineNumber: 563,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/MemberListTable.tsx",
                        lineNumber: 557,
                        columnNumber: 21
                    }, this),
                    generatePageNumbers().map((page, index)=>page === '...' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500",
                            children: "..."
                        }, `ellipsis-${index}`, false, {
                            fileName: "[project]/src/app/MemberListTable.tsx",
                            lineNumber: 567,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variant: currentPage === page ? 'default' : 'outline',
                            onClick: ()=>paginate(page),
                            className: currentPage === page ? 'bg-blue-500 text-white hover:bg-blue-600' : 'hover:bg-gray-100',
                            children: page
                        }, page, false, {
                            fileName: "[project]/src/app/MemberListTable.tsx",
                            lineNumber: 571,
                            columnNumber: 29
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "outline",
                        onClick: ()=>paginate(currentPage + 1),
                        disabled: currentPage === totalPages,
                        className: "hover:bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/MemberListTable.tsx",
                            lineNumber: 587,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/MemberListTable.tsx",
                        lineNumber: 581,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "outline",
                        onClick: ()=>paginate(totalPages),
                        disabled: currentPage === totalPages,
                        className: "hover:bg-gray-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronsRight, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/MemberListTable.tsx",
                            lineNumber: 595,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/MemberListTable.tsx",
                        lineNumber: 589,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/MemberListTable.tsx",
                lineNumber: 548,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/MemberListTable.tsx",
        lineNumber: 389,
        columnNumber: 9
    }, this);
};
_s1(MemberListTable, "oHggafkb9p6+YlORXh+Kl1ZkS98=");
_c21 = MemberListTable;
const __TURBOPACK__default__export__ = MemberListTable;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "Dialog");
__turbopack_context__.k.register(_c2, "DialogTrigger");
__turbopack_context__.k.register(_c3, "DialogContent");
__turbopack_context__.k.register(_c4, "DialogHeader");
__turbopack_context__.k.register(_c5, "DialogTitle");
__turbopack_context__.k.register(_c6, "DialogDescription");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "Input");
__turbopack_context__.k.register(_c9, "Label");
__turbopack_context__.k.register(_c10, "Select");
__turbopack_context__.k.register(_c11, "SelectTrigger");
__turbopack_context__.k.register(_c12, "SelectValue");
__turbopack_context__.k.register(_c13, "SelectContent");
__turbopack_context__.k.register(_c14, "SelectItem");
__turbopack_context__.k.register(_c15, "Table");
__turbopack_context__.k.register(_c16, "TableHeader");
__turbopack_context__.k.register(_c17, "TableBody");
__turbopack_context__.k.register(_c18, "TableRow");
__turbopack_context__.k.register(_c19, "TableCell");
__turbopack_context__.k.register(_c20, "TableHead");
__turbopack_context__.k.register(_c21, "MemberListTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$MemberListTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/MemberListTable.tsx [app-client] (ecmascript)");
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
    // const [members, setMembers] = useState([
    //     { id: 1, name: 'Allie Grater', email: 'graterallie@gmail.com', createdAt: '2021-03-19', status: 'Block' },
    //     { id: 2, name: 'Rhoda Report', email: 'reportrhoda@gmail.com', createdAt: '2020-01-19', status: 'Active' },
    //     { id: 3, name: 'Rose Bush', email: 'rose@gmail.com', createdAt: '2020-10-26', status: 'Active' },
    //     { id: 4, name: 'Dave Allippa', email: 'dave@gmail.com', createdAt: '2020-06-19', status: 'Block' },
    //     { id: 5, name: 'Emma Grate', email: 'emma@gmail.com', createdAt: '2022-03-20', status: 'Block' },
    //     { id: 6, name: 'Mal Nurrisht', email: 'Nurrishtmal@gmail.com', createdAt: '2019-12-29', status: 'Active' },
    //     { id: 7, name: 'Bess Twishes', email: 'twishes@gmail.com', createdAt: '2020-05-16', status: 'Block' },
    //     { id: 8, name: 'C. Yasoon', email: 'yasoon@gmail.com', createdAt: '2022-02-16', status: 'Active' },
    // ]);
    // // State for the new member being added
    // const [newMember, setNewMember] = useState({ name: '', email: '', createdAt: '', status: 'Status' });
    // const [searchQuery, setSearchQuery] = useState('');
    // // State to keep track of the next available ID
    // const [nextId, setNextId] = useState(members.length + 1);
    // // Pagination state
    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemsPerPage] = useState(5);
    // const [pageNumbers, setPageNumbers] = useState([]);
    // const [showModal, setShowModal] = useState(false); // Add state to control modal visibility
    // const tableRef = useRef(null);
    // const listInstance = useRef(null);
    // const sliderRef = useRef(null);
    // useEffect(() => {
    //     import('bootstrap/dist/js/bootstrap.bundle')
    //         .then(() => {
    //             console.log('Bootstrap bundle loaded.');
    //         })
    //         .catch(error => {
    //             console.error('Error loading Bootstrap bundle:', error);
    //         });
    // }, []);
    // useEffect(() => {
    //     const calculatedPageNumbers = [];
    //     for (let i = 1; i <= Math.ceil(members.length / itemsPerPage); i++) {
    //         calculatedPageNumbers.push(i);
    //     }
    //     setPageNumbers(calculatedPageNumbers);
    // }, [members, itemsPerPage]);
    // useEffect(() => {
    //     const loadListJs = async () => {
    //         try {
    //             //Dynamically load the scripts
    //             const script3 = document.createElement('script');
    //             script3.src = '../assets/vendor/listJs/list.min.js';
    //             script3.async = true;
    //             document.body.appendChild(script3);
    //             script3.onload = () => {
    //                 // Initialize List.js
    //                 if (tableRef.current) {
    //                     listInstance.current = new List(tableRef.current.id, {
    //                         valueNames: ['name', 'email', 'createdAt', 'status']
    //                     });
    //                 }
    //             }
    //             //Cleanup
    //             return () => {
    //                 if (script3.parentNode) script3.parentNode.removeChild(script3);
    //                 if (listInstance.current) {
    //                     listInstance.current.destroy();
    //                 }
    //             };
    //         } catch (error) {
    //             console.error('Failed to load List.js:', error);
    //         }
    //     };
    //     loadListJs();
    // }, [members]);
    // useEffect(() => {
    //     // Initialize noUiSlider
    //     const sliderElement = document.getElementById('price-slider');
    //     if (sliderElement && !sliderRef.current) {
    //         sliderRef.current = noUiSlider.create(sliderElement, {
    //             start: [20, 80],
    //             connect: true,
    //             range: {
    //                 'min': 0,
    //                 'max': 100
    //             }
    //         });
    //         sliderRef.current.on('update', function (values, handle) {
    //             const min = Math.round(values[0]);
    //             const max = Math.round(values[1]);
    //             console.log(`Min: ${min}, Max: ${max}`);
    //             // You can update your filtering logic here based on the slider values
    //         });
    //     }
    //     return () => {
    //         if (sliderRef.current) {
    //             sliderRef.current.destroy();
    //             sliderRef.current = null;
    //         }
    //     };
    // }, []);
    // // Handles changes in the input fields of the add member modal
    // const handleInputChange = (e) => {
    //     const { id, value } = e.target;
    //     setNewMember(prevState => ({
    //         ...prevState,
    //         [id.replace('-field', '')]: value,
    //     }));
    // };
    // const handleAddMember = (e) => {
    //     e.preventDefault();
    //     if (newMember.name && newMember.email && newMember.createdAt && newMember.status !== 'Status') {
    //         const newMembersArray = [...members, { ...newMember, id: nextId }];
    //         setMembers(newMembersArray);
    //         setNextId(nextId + 1);
    //         setNewMember({ name: '', email: '', createdAt: '', status: 'Status' });
    //         setCurrentPage(1);
    //         setPageNumbers(Array.from({ length: Math.ceil(newMembersArray.length / itemsPerPage) }, (_, i) => i + 1));
    //         setShowModal(false);
    //         const modalElement = document.getElementById('exampleModal');
    //         if (modalElement) {
    //             const modalInstance = bootstrap.Modal.getInstance(modalElement);
    //             if (modalInstance) {
    //                 modalInstance.hide();
    //             }
    //         }
    //     } else {
    //         alert('Please fill in all the fields and select a status.');
    //     }
    // };
    // // Handles the deletion of a member
    // const handleDeleteMember = (idToDelete) => {
    //     const updatedMembers = members.filter(member => member.id !== idToDelete);
    //     setMembers(updatedMembers);
    //     setPageNumbers(Array.from({ length: Math.ceil(updatedMembers.length / itemsPerPage) }, (_, i) => i + 1));
    // };
    // // Logic to get current members for the page
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentMembers = members.slice(indexOfFirstItem, indexOfLastItem);
    // // Logic to handle page changes
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // const handleSearch = (e) => {
    //     setSearchQuery(e.target.value);
    //     if (listInstance.current) {
    //         listInstance.current.search(e.target.value);
    //     }
    // };
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
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$MemberListTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 49
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
                                                    lineNumber: 668,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iconify-icon", {
                                                    icon: "line-md:text-box-to-text-box-multiple-transition",
                                                    className: "animated-box-multiple-transition f-s-22"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                    lineNumber: 669,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 667,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "Close",
                                            className: "btn-close",
                                            "data-bs-dismiss": "modal",
                                            type: "button"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 671,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                    lineNumber: 666,
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
                                                            lineNumber: 677,
                                                            columnNumber: 104
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                        lineNumber: 677,
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
                                                        lineNumber: 678,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/project/[slug]/page.jsx",
                                                lineNumber: 676,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                                            lineNumber: 675,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                                        lineNumber: 674,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                    lineNumber: 673,
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
                                            lineNumber: 684,
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
                                            lineNumber: 685,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                                    lineNumber: 683,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/project/[slug]/page.jsx",
                            lineNumber: 665,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/project/[slug]/page.jsx",
                        lineNumber: 664,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/project/[slug]/page.jsx",
                    lineNumber: 663,
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
_s(ViewPage, "te+Exs+X9nBGTmleyfr0bYvAsF8=", false, function() {
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

//# sourceMappingURL=src_app_9d62d354._.js.map