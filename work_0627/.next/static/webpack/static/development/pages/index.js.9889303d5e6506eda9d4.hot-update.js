webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/LoadedCoupon.js":
/*!************************************!*\
  !*** ./containers/LoadedCoupon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_CouponList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CouponList */ "./components/CouponList.js");


 //let index = state.data_now.index_shop;
//console.log(index);
//let index = 0;

var mapStateToProps = function mapStateToProps(state) {
  return {
    //	index: state.data_now.index_shop,
    coupons: state.data[state.data_now.index].event
  };
};
/*
const mapDispatchToProps = dispatch => ({
  toggleMode: id => dispatch(toggleTodo(id))
})
*/


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_components_CouponList__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

})
//# sourceMappingURL=index.js.9889303d5e6506eda9d4.hot-update.js.map