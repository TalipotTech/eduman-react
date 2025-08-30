exports.id = 5053;
exports.ids = [5053];
exports.modules = {

/***/ 5053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1631);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6555);
/* harmony import */ var _helpers_getImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9239);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_7__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// Import Swiper styles




const CategorySlider = ()=>{
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch(`${process.env.APP_BACK_END_URL}/setting/home-02/categories`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json()).then((response)=>{
            setData(response.data);
        }).catch((err)=>console.error(err));
    }, []);
    return typeof data?.title !== "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "categories-area grey-2 pt-110 position-relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "category-shap-02",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "assets/img/shape/categorey-shap-02.png",
                        alt: "image not found"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 text-center mb-20",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "section-title mb-30",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        dangerouslySetInnerHTML: {
                                            __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default().sanitize(data.title)
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "category-main-wrapper position-relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "category-shap-01",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "assets/img/shape/categorey-shap-01.png",
                                                alt: "image not found"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "category-slide-wrapper position-relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "category-active",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                                                modules: [
                                                                    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                                                                    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
                                                                    swiper__WEBPACK_IMPORTED_MODULE_2__.Scrollbar,
                                                                    swiper__WEBPACK_IMPORTED_MODULE_2__.A11y,
                                                                    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
                                                                ],
                                                                spaceBetween: 30,
                                                                loop: true,
                                                                breakpoints: {
                                                                    320: {
                                                                        slidesPerView: 1
                                                                    },
                                                                    480: {
                                                                        slidesPerView: 1
                                                                    },
                                                                    640: {
                                                                        slidesPerView: 2
                                                                    },
                                                                    991: {
                                                                        slidesPerView: 3
                                                                    },
                                                                    1200: {
                                                                        slidesPerView: 3
                                                                    },
                                                                    1400: {
                                                                        slidesPerView: 5
                                                                    }
                                                                },
                                                                autoplay: {
                                                                    delay: 3000,
                                                                    disableOnInteraction: true
                                                                },
                                                                navigation: {
                                                                    nextEl: ".category-button-next",
                                                                    prevEl: ".category-button-prev"
                                                                },
                                                                children: data.items && data.items.map((categoryItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                            href: categoryItem.url ?? "",
                                                                            legacyBehavior: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "categories-wrapper text-center",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            className: "categiories-thumb",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                src: (0,_helpers_getImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(categoryItem.image),
                                                                                                alt: "img not found"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "categories-content",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                                    children: categoryItem.title
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                    children: categoryItem.subtitle
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)()))
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "category-nav",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "category-button-prev",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "far fa-long-arrow-left"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "category-button-next",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "far fa-long-arrow-right"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1631:
/***/ (() => {



/***/ })

};
;