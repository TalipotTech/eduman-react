(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export AppContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5248);




const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AppProvider = ({ children  })=>{
    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .selectProducts */ .nR)?.map((item)=>item.product).flat();
    const product = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_product_slice__WEBPACK_IMPORTED_MODULE_3__/* .selectProduct */ .Fn);
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(products);
    const [categoryActive, setCategoryActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500);
    const [sizeActive, setSizeActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [showSidebar, setShowSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // handle Category Change
    const handleCategoryChange = (category)=>{
        setCategoryActive(category);
        const newProducts = products.filter((item)=>item.category === category);
        setItems(newProducts);
    };
    // handle price change
    const handlePriceChange = (value)=>{
        setPrice(value);
        const newProducts = products.filter((item)=>item.price < value);
        setItems(newProducts);
    };
    // handle sizes
    const handleProductSizes = (size)=>{
        setSizeActive(size);
        const newProducts = products.filter((item)=>item.sizes.indexOf(size) > -1);
        setItems(newProducts);
    };
    // handle sizes
    const handleColors = (color)=>{
        setColor(color);
        const newProducts = products.filter((item)=>item.colors.indexOf(color) > -1);
        setItems(newProducts);
    };
    // handle select change
    const handleSelectChange = (e)=>{
        if (e.target.value === "Default Sorting") {
            setItems(products);
        }
        if (e.target.value === "Short by new") {
            const newProducts = products.filter((item)=>item.product__sale?.indexOf("new") > -1);
            setItems(newProducts);
        }
        if (e.target.value === "Short by featured") {
            const newProducts1 = products.filter((item)=>item.feature_prd);
            setItems(newProducts1);
        }
        if (e.target.value === "Short by price") {
            const newProducts2 = products.sort((a, b)=>a.price - b.price);
            setItems(newProducts2);
        }
    };
    // all values
    const value = {
        items,
        setItems,
        price,
        setPrice,
        handleCategoryChange,
        categoryActive,
        handlePriceChange,
        price,
        handleProductSizes,
        sizeActive,
        handleColors,
        color,
        handleSelectChange,
        showSidebar,
        setShowSidebar,
        product
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: value,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppProvider);


/***/ }),

/***/ 3847:
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
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3716);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5858);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7031);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _redux_store__WEBPACK_IMPORTED_MODULE_7__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _redux_store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








if (false) {}



let persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_9__.persistStore)(_redux_store__WEBPACK_IMPORTED_MODULE_7__/* .store */ .h);
function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Raleway:wght@300;400;500;600;700;800&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/fontAwesome5Pro.css"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/flaticon.css"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
                store: _redux_store__WEBPACK_IMPORTED_MODULE_7__/* .store */ .h,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10__.PersistGate, {
                    persistor: persistor,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_AppContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {})
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ 8463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports searchSlice, search_bar */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isOpen: false
};
const searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState,
    reducers: {
        search_bar: (state, { payload  })=>{
            state.isOpen = payload;
        }
    }
});
const { search_bar  } = searchSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSlice.reducer);


/***/ }),

/***/ 9059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports wishlistSlice, add_to_wishlist, remove_wishlist_product, wishlistItems */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    wishlist: []
};
const wishlistSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "wishlist",
    initialState,
    reducers: {
        add_to_wishlist: (state, { payload  })=>{
            const productIndex = state.wishlist.findIndex((item)=>item.id === payload.id);
            if (productIndex >= 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`${payload.product_name} already added to wishlist`, {
                    position: "top-left"
                });
            } else {
                state.wishlist.push(payload);
                console.log("added wishlisted");
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${payload?.product_name} added to wishlist`, {
                    position: "top-left"
                });
            }
        },
        remove_wishlist_product: (state, { payload  })=>{
            state.wishlist = state.wishlist.filter((item)=>item.id !== payload.id);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`remove from your wishlist`, {
                position: "top-left"
            });
        }
    }
});
const { add_to_wishlist , remove_wishlist_product  } = wishlistSlice.actions;
const wishlistItems = (state)=>state?.wishlist?.wishlist;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishlistSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5858:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8936);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_search_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8463);
/* harmony import */ var _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9059);
/* harmony import */ var _features_cart_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2577);
/* harmony import */ var _features_product_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5248);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_4__, _features_cart_slice__WEBPACK_IMPORTED_MODULE_5__]);
([_features_wishlist_slice__WEBPACK_IMPORTED_MODULE_4__, _features_cart_slice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


 // defaults to localStorage for web




const persistConfig = {
    key: "root",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default()),
    version: 1,
    blacklist: [
        "products"
    ]
};
const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    products: _features_product_slice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
    search: _features_search_slice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
    cart: _features_cart_slice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
    wishlist: _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP
});
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, rootReducer);
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 1127:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 8936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2577], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();