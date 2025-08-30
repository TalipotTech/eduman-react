"use strict";
exports.id = 2805;
exports.ids = [2805];
exports.modules = {

/***/ 2805:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6555);
/* harmony import */ var _helpers_getImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9239);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5248);
/* harmony import */ var _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_3__, _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_7__]);
([uuid__WEBPACK_IMPORTED_MODULE_3__, _redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CourseTab = ()=>{
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [lessonCount, setLessonCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [allItems, setAllItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [displayItems, setDisplayItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [sectionData, setSectionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_6__/* .selectProducts */ .nR);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!Object.keys(allItems).length) {
            fetch(`${process.env.APP_BACK_END_URL}/courses/tabs-courses-and-categories`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }).then((response)=>response.json()).then((response)=>{
                if (response.data !== "undefined") {
                    let all_categories = Object.values(response.data.cats);
                    let selected_category = all_categories[0] ? all_categories[0] : "";
                    let selected_items = response.data.courses;
                    setLessonCount(response.data.lessons);
                    setAllItems(response.data.courses);
                    setCategories(all_categories);
                    setSelectedCategory(selected_category);
                    setDisplayItems(selected_items);
                }
            }).catch((err)=>console.error(err));
            fetch(`${process.env.APP_BACK_END_URL}/setting/home-01/course`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }).then((response)=>response.json()).then((response)=>{
                setSectionData(response.data);
            }).catch((err)=>console.error(err));
        }
    }, [
        categories,
        selectedCategory,
        allItems,
        sectionData
    ]);
    const handleCategorySelect = (category)=>{
        setSelectedCategory(category);
        setDisplayItems(allItems[category]);
    };
    return typeof displayItems !== "undefined" && sectionData?.home_01_course_section_title ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "course-area p-relative pt-110 pb-90",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "course-shape-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "assets/img/shape/portfolio-shap-1.png",
                    alt: "shape"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "course-shape-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "assets/img/shape/portfolio-shap-2.png",
                    alt: "shape"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "course-shape-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "assets/img/shape/portfolio-shap-3.png",
                    alt: "shape"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-5 col-lg-5 f-left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "section-title mb-50",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        dangerouslySetInnerHTML: {
                                            __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default().sanitize(sectionData?.home_01_course_section_title)
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-7 col-lg-7",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "portfolio-button mt-60",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav portfolio-button-tabs",
                                            id: "nav-tab",
                                            role: "tablist",
                                            children: categories && typeof categories.map === "function" && categories.map((category, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: `nav-link ${selectedCategory == category ? "active" : ""}`,
                                                    id: `nav-${category}-tab`,
                                                    "data-bs-toggle": "tab",
                                                    "data-bs-target": `#nav-${category}`,
                                                    type: "button",
                                                    role: "tab",
                                                    "aria-controls": `nav-${category}`,
                                                    "aria-selected": "false",
                                                    onClick: ()=>handleCategorySelect(category),
                                                    children: category
                                                }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()))
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "course-main-items",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tab-content portfolio-tabs-content",
                            id: "nav-tabContent",
                            children: categories && typeof categories.map === "function" && categories.map((category, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `tab-pane fade ${category == selectedCategory ? "show active" : ""}`,
                                    id: `nav-${category}`,
                                    role: "tabpanel",
                                    "aria-labelledby": `nav-${category}-tab`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row",
                                        children: allItems[category] && allItems[category].map((course)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-xl-4 col-lg-4 col-md-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "eduman-course-main-wrapper mb-30",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "eduman-course-thumb w-img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: `/course/${course.slug}`,
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: (0,_helpers_getImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(course.image_url),
                                                                        alt: "course-img"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "course-cart",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "course-info-wrapper",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "cart-info-body",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "cart-info-body-categories",
                                                                            children: course.categories && course.categories.map((cat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: `category-color category-color-1 ${cat.slug}`,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                        href: `/category/${cat.slug}`,
                                                                                        legacyBehavior: true,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            children: cat.title
                                                                                        })
                                                                                    })
                                                                                }, cat.title))
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: `/course/${course.slug}`,
                                                                            legacyBehavior: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    children: course.title
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "cart-lavel",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                                                    children: [
                                                                                        "Level : ",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: course.level
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    dangerouslySetInnerHTML: {
                                                                                        __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default().sanitize(course.more_info)
                                                                                    }
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "info-cart-text",
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default().sanitize(course.teaser)
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "course-action",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                    href: `/course/${course.slug}`,
                                                                                    legacyBehavior: true,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        className: "view-details-btn",
                                                                                        children: "View Details"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                    href: `/my-wishlist?cid=${course.id}`,
                                                                                    legacyBehavior: true,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                            className: "wishlist-btn",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "flaticon-like"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>dispatch((0,_redux_features_cart_slice__WEBPACK_IMPORTED_MODULE_7__/* .cart_product */ .Vu)(course)),
                                                                                    className: "c-share-btn",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                        className: "fal fa-shopping-cart"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "eduman-course-wraper",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "eduman-course-heading",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "cart-info-body-categories",
                                                                            children: course.categories && course.categories.map((cat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    className: `category-color category-color-1 mb-0 ${cat.slug}`,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                        href: `/category/${cat.slug}`,
                                                                                        legacyBehavior: true,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            children: cat.title
                                                                                        })
                                                                                    })
                                                                                }, cat.title))
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "couse-star d-none",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: course.rating
                                                                                }),
                                                                                course.ratingNumber,
                                                                                " ",
                                                                                course.ratingCount
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "eduman-course-text",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                            href: `/course/${course.slug}`,
                                                                            legacyBehavior: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                children: course.title
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "eduman-course-meta",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "eduman-course-price",
                                                                            children: [
                                                                                course.price !== "Free" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    className: "price-now",
                                                                                    children: [
                                                                                        "$",
                                                                                        course.price
                                                                                    ]
                                                                                }),
                                                                                course.price == "Free" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "price-now",
                                                                                    children: course.price
                                                                                }),
                                                                                course.discount !== "0.00" && course.discount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                                                                    className: "price-old",
                                                                                    children: [
                                                                                        "$",
                                                                                        course.discount
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "eduman-course-tutor",
                                                                            children: course.authors && course.authors.map((instructor)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                            href: `/instructor/${instructor.slug}`,
                                                                                            legacyBehavior: true,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                    src: (0,_helpers_getImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(instructor.logo_url),
                                                                                                    alt: "tutor-img"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                            href: `/instructor/${instructor.slug}`,
                                                                                            legacyBehavior: true,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                children: instructor.salute_name + " " + instructor.titel_name + " " + instructor.first_name + " " + instructor.last_name
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }, instructor.salute_name))
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "eduman-course-footer",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "course-lessson-svg",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            className: "fal fa-tv"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "ms-2",
                                                                            children: [
                                                                                lessonCount,
                                                                                " ",
                                                                                lessonCount > 1 ? "lessons" : "lesson"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "course-deteals-btn",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        href: `/course/${course.slug}`,
                                                                        legacyBehavior: true,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "me-2",
                                                                                    children: "View Details"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                    className: "far fa-arrow-right"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()))
                                    })
                                }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()))
                        })
                    })
                ]
            })
        ]
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fn": () => (/* binding */ selectProduct),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nR": () => (/* binding */ selectProducts)
/* harmony export */ });
/* unused harmony exports productSlice, single_product, priceFilter, specific_product, getSingleProduct */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    // products: product_data,
    product: {},
    priceFilter: null
};
const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "products",
    initialState,
    reducers: {
        single_product: (state, { payload  })=>{
            state.product = state.products.map((item)=>item.product).flat().find((product)=>product.id === payload);
        },
        specific_product: (state, { payload  })=>{
            state.product = state.products.map((item)=>item.product).flat().find((item)=>item.id == payload);
        },
        getSingleProduct: (state, { payload  })=>{
            state.product = payload;
        }
    }
});
const { single_product , priceFilter , specific_product , getSingleProduct  } = productSlice.actions;
const selectProducts = (state)=>state?.products?.products;
const selectProduct = (state)=>state?.products?.product;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);


/***/ })

};
;