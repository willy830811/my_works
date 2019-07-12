webpackHotUpdate("static\\development\\pages\\index.js",{

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
      return state === 'list' ? 'map' : 'list';

    default:
      return state;
  }
};

var location = function location() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lat: '121',
    lon: '25'
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GET_LOCATION':
      return action.location;

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
    index_marker: 0,
    index_shop: 0,
    index_coupon: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SELECT_MARKER':
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        index_marker: action.index
      });

    case 'SELECT_SHOP':
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        index_shop: action.index
      });

    case 'SELECT_COUPON':
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
        index_coupon: action.index
      });

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
        case 'shop_list':
          return 'shop_list';

        case 'coupon_list':
          return 'shop_list';

        case 'coupon_content':
          return 'coupon_list';

        default:
          return state;
      }

    case 'NEXT_PAGE':
      switch (state) {
        case 'shop_list':
          return 'coupon_list';

        case 'coupon_list':
          return 'coupon_content';

        case 'coupon_content':
          return 'coupon_content';

        default:
          return state;
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  browsing_mode: browsing_mode,
  location: location,
  data: data,
  data_now: data_now,
  page_now: page_now
}));

/***/ })

})
//# sourceMappingURL=index.js.1a904fdb1c5a02146b5a.hot-update.js.map