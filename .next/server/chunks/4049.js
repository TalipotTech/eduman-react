exports.id = 4049;
exports.ids = [4049];
exports.modules = {

/***/ 4049:
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
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _helpers_getImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9239);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1631);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// Import Swiper styles

const BrandSlider = ()=>{
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch(`${"http://127.0.0.1:8000/api/v1"}/setting/home-01/brand`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json()).then((response)=>{
            setData(response.data);
        }).catch((err)=>console.error(err));
    }, []);
    return typeof data?.home_01_brand_images !== "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "brand-area theme-bg pt-90 pb-120",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-xl-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "brand-wrapper text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "brand-wrapper text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "brand-active",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                        modules: [
                                            swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
                                            swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
                                            swiper__WEBPACK_IMPORTED_MODULE_3__.Scrollbar,
                                            swiper__WEBPACK_IMPORTED_MODULE_3__.A11y,
                                            swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
                                        ],
                                        spaceBetween: 30,
                                        loop: true,
                                        breakpoints: {
                                            320: {
                                                slidesPerView: 1
                                            },
                                            480: {
                                                slidesPerView: 2
                                            },
                                            640: {
                                                slidesPerView: 3
                                            },
                                            768: {
                                                slidesPerView: 3
                                            },
                                            991: {
                                                slidesPerView: 4
                                            },
                                            1200: {
                                                slidesPerView: 5
                                            },
                                            1400: {
                                                slidesPerView: 6
                                            }
                                        },
                                        autoplay: {
                                            delay: 2000,
                                            disableOnInteraction: true
                                        },
                                        children: data.home_01_brand_images && JSON.parse(data.home_01_brand_images).map((brand, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "singel-brand",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        height: "100",
                                                        src: (0,_helpers_getImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(brand),
                                                        alt: "img not found"
                                                    })
                                                })
                                            }, "brand-" + index + "-" + String(brand).replaceAll(" ", "-")))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1631:
/***/ (() => {



/***/ })

};
;