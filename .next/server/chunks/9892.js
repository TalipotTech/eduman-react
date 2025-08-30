exports.id = 9892;
exports.ids = [9892];
exports.modules = {

/***/ 9892:
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
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1631);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_getImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9239);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// Import Swiper styles


const TestimonialSlider = ()=>{
    //for rating handle
    const getRating = (rating)=>{
        let empty_rating_count = 5 - rating;
        let ratings = [];
        for(let i = 0; i < rating; i++){
            ratings.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "fas fa-star"
            }, `s-${i}`));
        }
        for(let i1 = 0; i1 < empty_rating_count; i1++){
            ratings.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "far fa-star"
            }, `e-${i1}`));
        }
        return ratings;
    };
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch(`${process.env.APP_BACK_END_URL}/setting/home-01/testimonial`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json()).then((response)=>{
            setData(response.data);
        }).catch((err)=>console.error(err));
    }, []);
    return typeof data?.home_01_section_title !== "undefined" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "testimonial-area pb-120",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 offset-lg-3",
                        children: data.home_01_section_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-title text-center mb-55",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                dangerouslySetInnerHTML: {
                                    __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default().sanitize(data.home_01_section_title)
                                }
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "testimonial-active",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                        slidesPerView: 1
                                    },
                                    640: {
                                        slidesPerView: 1
                                    },
                                    991: {
                                        slidesPerView: 2
                                    },
                                    1200: {
                                        slidesPerView: 3
                                    },
                                    1400: {
                                        slidesPerView: 3
                                    }
                                },
                                pagination: {
                                    clickable: true,
                                    el: ".testimonial-pagination"
                                },
                                autoplay: {
                                    delay: 2000,
                                    disableOnInteraction: true
                                },
                                children: data.testimonials && data.testimonials.map((testimonialItem, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "testimonial-items position-relative",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "testimonial-header",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "testimonial-img",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: (0,_helpers_getImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(testimonialItem.profile_img),
                                                                    alt: "img not found"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "testimonial-title",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        children: testimonialItem.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: testimonialItem.designation
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "testimoni-quotes",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "assets/img/testimonial/quotes.png",
                                                            alt: "img not found"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "testimonial-body",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                children: testimonialItem.title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default().sanitize(testimonialItem.message)
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "testimonial-icon",
                                                        children: getRating(testimonialItem.rating)
                                                    })
                                                ]
                                            })
                                        })
                                    }, `${testimonialItem.title}-${index}`))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "testimonial-pagination text-center"
                        })
                    ]
                })
            ]
        })
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1631:
/***/ (() => {



/***/ })

};
;