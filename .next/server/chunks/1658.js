"use strict";
exports.id = 1658;
exports.ids = [1658];
exports.modules = {

/***/ 1658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useSticky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6711);
/* harmony import */ var _HeaderOne_MobileMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6819);
/* harmony import */ var _HeaderOne_HeaderMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2607);
/* harmony import */ var _HeaderOne_DropdownCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5336);
/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8886);
/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(local_storage_fallback__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4007);
/* harmony import */ var _HeaderTwo_HeaderTopTwo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8396);
/* harmony import */ var _helpers_getImage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9239);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6161);
/* harmony import */ var _Common_SidebarCart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HeaderTwo_HeaderTopTwo__WEBPACK_IMPORTED_MODULE_10__, react_hook_form__WEBPACK_IMPORTED_MODULE_11__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__, _Common_SidebarCart__WEBPACK_IMPORTED_MODULE_16__]);
([_HeaderTwo_HeaderTopTwo__WEBPACK_IMPORTED_MODULE_10__, react_hook_form__WEBPACK_IMPORTED_MODULE_11__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__, _Common_SidebarCart__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const HeaderFour = ()=>{
    // sticky nav
    const { sticky  } = (0,_hooks_useSticky__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [cartOpen, setCartOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [path, setPath] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const UserObj = JSON.parse(local_storage_fallback__WEBPACK_IMPORTED_MODULE_8___default().getItem(_hooks_useStorage__WEBPACK_IMPORTED_MODULE_9__/* .LOCAL_STORAGE_KEYS.APP_USER */ .d.APP_USER));
    const logout = ()=>{
        local_storage_fallback__WEBPACK_IMPORTED_MODULE_8___default().removeItem(_hooks_useStorage__WEBPACK_IMPORTED_MODULE_9__/* .LOCAL_STORAGE_KEYS.APP_TOKEN */ .d.APP_TOKEN);
        local_storage_fallback__WEBPACK_IMPORTED_MODULE_8___default().removeItem(_hooks_useStorage__WEBPACK_IMPORTED_MODULE_9__/* .LOCAL_STORAGE_KEYS.APP_USER */ .d.APP_USER);
        local_storage_fallback__WEBPACK_IMPORTED_MODULE_8___default().clear();
        router.push("/login");
    };
    const validationSchema = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>yup__WEBPACK_IMPORTED_MODULE_13__.object({}), []);
    const { handleSubmit , register , setValue , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_12__.yupResolver)(validationSchema)
    });
    const handleSearchFilter = async (data)=>{
        router.push("/courses?search=" + data.search);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPath(router.pathname);
        fetch(`${"http://127.0.0.1:8000/api/v1"}/site-setting/header`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json()).then((response)=>{
            setData(response.data);
        }).catch((err)=>console.error(err));
    }, [
        router
    ]);
    const { quantity  } = (0,_hooks_use_cart_info__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    return typeof data?.site_header_logo !== "undefined" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderTwo_HeaderTopTwo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                data: data
            }),
            data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: sticky ? "sticky header-area sticky-header" : "header-area sticky-header",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "header-main-wrapper",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xxl-7 col-xl-9 col-lg-7 col-md-5 col-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "header-left d-flex align-items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "header-logo mr-50",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/",
                                                    legacyBehavior: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: (0,_helpers_getImage__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(data.site_header_logo),
                                                            alt: "logo"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "category-menu d-none",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "Category-click",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                                                            className: "cattext",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    dangerouslySetInnerHTML: {
                                                                        __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_14___default().sanitize(data.site_header_category_icon)
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text",
                                                                    children: data.site_header_category_title
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "dropdown-category",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderOne_DropdownCategory__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "main-menu d-none d-xl-block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                                    id: "mobile-menu",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderOne_HeaderMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xxl-5 col-xl-3 col-lg-5 col-md-7 col-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "header-right d-flex align-items-center justify-content-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "header-search d-none d-xxl-block mr-30",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                    onSubmit: handleSubmit(handleSearchFilter),
                                                    autoComplete: "off",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "search-icon p-relative",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                name: "search",
                                                                type: "text",
                                                                placeholder: "Search courses...",
                                                                ...register("search")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "submit",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-search"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cart-wrapper mr-30",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "cart-toggle-btn",
                                                    onClick: ()=>{
                                                        setCartOpen(!cartOpen);
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "header__cart-icon p-relative",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "far fa-shopping-cart"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "item-number",
                                                                children: quantity
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            UserObj?.id == null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "user-btn-inner p-relative d-none d-md-block",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "user-btn-wrapper",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "user-btn-content",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: "/login",
                                                                    legacyBehavior: true,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "user-btn-sign-in",
                                                                        children: data.site_header_login_text
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "d-none d-md-block",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: "/registration",
                                                            legacyBehavior: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "user-btn-sign-in",
                                                                children: data.site_header_signup_text
                                                            })
                                                        })
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "bd-profile-dropdown",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "button",
                                                            className: "side-toggle",
                                                            children: [
                                                                "Profile ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "far fa-chevron-down"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: "sub-menu",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "pb-0",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        href: "/my-profile",
                                                                        legacyBehavior: true,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            children: [
                                                                                "Hi, ",
                                                                                UserObj.first_name,
                                                                                " ",
                                                                                UserObj.last_name
                                                                            ]
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        href: "/my-profile",
                                                                        legacyBehavior: true,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            children: "Edit Account"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        type: "button",
                                                                        className: "side-toggle header-3",
                                                                        onClick: ()=>{
                                                                            logout();
                                                                        },
                                                                        children: "Logout"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "menu-bar d-xl-none ml-20",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "side-toggle",
                                                    onClick: ()=>{
                                                        setMenuOpen(!menuOpen);
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bar-icon",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderOne_MobileMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                data: data,
                menuOpen: menuOpen,
                setMenuOpen: setMenuOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setMenuOpen(false),
                className: menuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Common_SidebarCart__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                cartOpen: cartOpen,
                setCartOpen: setCartOpen
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setCartOpen(false),
                className: cartOpen ? "body-overlay opened" : "body-overlay"
            })
        ]
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderFour);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;