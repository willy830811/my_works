webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var response_default = [{
  name: null,
  event: [{
    title: null
  }]
}];

var browsing_mode = function browsing_mode() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'list';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'TOGGLE_MODE':
      return null;

    default:
      return state;
  }
};

var data = function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : response_default;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'DOWNLOAD_DATA':
      return action.raw_data;

    default:
      return state;
  }
}; //export default data


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  browsing_mode: browsing_mode,
  data: data
}));

/***/ })

})
//# sourceMappingURL=index.js.a83d75e1988c397226c3.hot-update.js.map