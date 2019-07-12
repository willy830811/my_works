webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: toggleMode, getLocation, downloadData, selectMarker, selectShop, selectCoupon, previousPage, nextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMode", function() { return toggleMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadData", function() { return downloadData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMarker", function() { return selectMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectShop", function() { return selectShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCoupon", function() { return selectCoupon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previousPage", function() { return previousPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPage", function() { return nextPage; });
var toggleMode = function toggleMode() {
  return {
    type: 'TOGGLE_MODE'
  };
};
var getLocation = function getLocation() {
  return {
    type: 'GET_LOCATION',
    location: location
  };
};
var downloadData = function downloadData(raw_data) {
  return {
    type: 'DOWNLOAD_DATA',
    raw_data: raw_data
  };
};
var selectMarker = function selectMarker(index) {
  return {
    type: 'SELECT_MARKER',
    index: index
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

/***/ })

})
//# sourceMappingURL=index.js.b2899c95c07b5685e9f4.hot-update.js.map