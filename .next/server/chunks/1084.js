"use strict";
exports.id = 1084;
exports.ids = [1084];
exports.modules = {

/***/ 1084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7781);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8886);
/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(local_storage_fallback__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4007);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_6__);







const ThankyouMain = ()=>{
    const [sectionData, setSectionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [pageData, setPageData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const bearerToken = local_storage_fallback__WEBPACK_IMPORTED_MODULE_4___default().getItem(_hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__/* .LOCAL_STORAGE_KEYS.APP_TOKEN */ .d.APP_TOKEN);
    const UserObj = JSON.parse(local_storage_fallback__WEBPACK_IMPORTED_MODULE_4___default().getItem(_hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__/* .LOCAL_STORAGE_KEYS.APP_USER */ .d.APP_USER));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch(`${"http://127.0.0.1:8000/api/v1"}/setting/inner-page/thankyou`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json()).then((response)=>handleResponseData(response)).catch((err)=>console.error(err));
        // users data
        fetch(`${"http://127.0.0.1:8000/api/v1"}/users/me`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${bearerToken}`
            }
        }).then((response)=>response.json()).then((response)=>handleUserResData(response)).catch((err)=>console.error(err));
    }, []);
    const handleResponseData = (res)=>{
        setSectionData(res.data);
        let data = {
            "title": res.data.site_thankyou_title,
            "sub_title": res.data.site_thankyou_sub_title,
            "image": res.data.site_thankyou_banner_image,
            "description": res.data.site_thankyou_description,
            "keywords": res.data?.site_thankyou_keywords
        };
        setPageData(data);
    };
    const handleUserResData = (res)=>{
        let userData = JSON.stringify({
            id: res.user.id,
            email: res.user.email,
            first_name: res.user.first_name,
            last_name: res.user.last_name,
            role: res.user.role,
            end_at: res.user?.order?.end_at
        });
        local_storage_fallback__WEBPACK_IMPORTED_MODULE_4___default().setItem(_hooks_useStorage__WEBPACK_IMPORTED_MODULE_5__/* .LOCAL_STORAGE_KEYS.APP_USER */ .d.APP_USER, userData);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageData: pageData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "thanks-area pt-110 pb-120",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-6 col-md-8",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "become-intructor-text",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: sectionData?.site_thankyou_message ?? ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "description",
                                        dangerouslySetInnerHTML: {
                                            __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_6___default().sanitize(sectionData?.site_thankyou_description)
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: sectionData?.site_thankyou_btn_url ?? "/",
                                        legacyBehavior: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "edu-btn",
                                            children: sectionData?.site_thankyou_btn_text
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThankyouMain);


/***/ })

};
;