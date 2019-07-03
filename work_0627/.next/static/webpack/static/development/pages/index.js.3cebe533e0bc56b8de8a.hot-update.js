webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/SelectedContent.js":
/*!***************************************!*\
  !*** ./containers/SelectedContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_CouponContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CouponContent */ "./components/CouponContent.js");


 //import { toggleMode } from '../actions'

var index = 0;

var mapStateToProps = function mapStateToProps(state) {
  return {
    contents: state[index].event
  };
};
/*
const mapDispatchToProps = dispatch => ({
  toggleMode: id => dispatch(toggleTodo(id))
})
*/


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(_components_CouponContent__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

})
//# sourceMappingURL=index.js.3cebe533e0bc56b8de8a.hot-update.js.map