webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//import { combineReducers } from 'redux'
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
};

/* harmony default export */ __webpack_exports__["default"] = (data);
/*
export default combineReducers({
  browsing_mode,
  data
})
*/

/***/ })

})
//# sourceMappingURL=index.js.ca242ebe4b8f2d48a2a9.hot-update.js.map