"use strict";
exports.id = 2577;
exports.ids = [2577];
exports.modules = {

/***/ 2577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vu": () => (/* binding */ cart_product),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gq": () => (/* binding */ decrease_quantity),
/* harmony export */   "uZ": () => (/* binding */ remove_cart_product)
/* harmony export */ });
/* unused harmony exports cartSlice, clear_cart, cartProducts */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
react_toastify__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    cartProducts: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        cart_product: (state, { payload  })=>{
            console.log(payload);
            const productIndex = state.cartProducts.findIndex((item)=>item.id == payload.id);
            if (productIndex >= 0) {
                state.cartProducts[productIndex].quantity += 1;
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("Increase Product Quantity", {
                    position: "top-left"
                });
            } else {
                const tempProduct = {
                    ...payload,
                    quantity: 1
                };
                state.cartProducts.push(tempProduct);
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${payload.title} added to cart`, {
                    position: "top-left"
                });
            }
        },
        decrease_quantity: (state, { payload  })=>{
            const cartIndex = state.cartProducts.findIndex((item)=>item.id === payload.id);
            if (state.cartProducts[cartIndex].quantity > 1) {
                state.cartProducts[cartIndex].quantity -= 1;
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`Decrease cart quantity`, {
                    position: "top-left"
                });
            }
        },
        remove_cart_product: (state, { payload  })=>{
            state.cartProducts = state?.cartProducts?.filter((item)=>item.id !== payload.id);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`remove from your cart`, {
                position: "top-left"
            });
        },
        clear_cart: (state, { payload  })=>{
            const confirmMsg = window.confirm("Are you sure deleted your all cart items ?");
            if (confirmMsg) {
                state.cartProducts = [];
            }
        }
    }
});
const { cart_product , remove_cart_product , decrease_quantity , clear_cart  } = cartSlice.actions;
const cartProducts = (state)=>state?.cart?.cartProducts;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;