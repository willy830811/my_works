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




var mapStateToProps = function mapStateToProps(state) {
  return {
    coupons: state.data[state.data_now.index_shop].event
  };
};
/*
const mapDispatchToProps = dispatch => ({
  toggleMode: id => dispatch(toggleTodo(id))
})
*/


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    selectCoupon: function (_selectCoupon) {
      function selectCoupon(_x) {
        return _selectCoupon.apply(this, arguments);
      }

      selectCoupon.toString = function () {
        return _selectCoupon.toString();
      };

      return selectCoupon;
    }(function (index) {
      return dispatch(selectCoupon(index));
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_components_CouponList__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

})
//# sourceMappingURL=index.js.69b03d49f273e9bad0d0.hot-update.js.map