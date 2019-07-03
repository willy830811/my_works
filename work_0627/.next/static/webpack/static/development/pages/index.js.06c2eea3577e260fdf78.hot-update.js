webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: toggleMode, downloadData, selectShop, selectCoupon, previousPage, nextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMode", function() { return toggleMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadData", function() { return downloadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectShop", function() { return selectShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCoupon", function() { return selectCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousPage", function() { return previousPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPage", function() { return nextPage; });
var toggleMode = function toggleMode() {
  return {
    type: 'TOGGLE_MODE'
  };
};
var downloadData = function downloadData(raw_data) {
  return {
    type: 'DOWNLOAD_DATA',
    raw_data: raw_data
  };
};
var selectShop = function selectShop(index) {
  return {
    type: 'SELECT_SHOP',
    index: index
  };
};
var selectCoupon = function selectCoupon(index) {
  return {
    type: 'SELECT_COUPON',
    index: index
  };
};
var previousPage = function previousPage() {
  return {
    type: 'PREVIOUS_PAGE'
  };
};
var nextPage = function nextPage() {
  return {
    type: 'NEXT_PAGE'
  };
};

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


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

var data_now = function data_now() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    index_shop: 0,
    index_coupon: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SELECT_SHOP':
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        visibilityFilter: action.filter
      });
      {
        index_shop: action.index;
      }

    case 'SELECT_COUPON':
      return {
        index_coupon: action.index
      };

    default:
      return state;
  }
};

var page_now = function page_now() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'shop_list';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'PREVIOUS_PAGE':
      switch (state) {
        case shop_list:
          return;

        case coupon_list:
          return;

        case coupon_content:
          return;

        default:
          return state;
      }

    case 'NEXT_PAGE':
      switch (state) {
        case shop_list:
          return;

        case coupon_list:
          return;

        case coupon_content:
          return;

        default:
          return state;
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  browsing_mode: browsing_mode,
  data: data,
  data_now: data_now,
  page_now: page_now
}));

/***/ })

})
//# sourceMappingURL=index.js.06c2eea3577e260fdf78.hot-update.js.map