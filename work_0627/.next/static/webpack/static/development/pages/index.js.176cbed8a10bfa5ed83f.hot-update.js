webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/DownloadData.js":
/*!************************************!*\
  !*** ./components/DownloadData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");



var limit;
var lat;
var lon;

function DownloadData() {
  console.log('toto');
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://test1.hokhang.com/hksCloudService/getEventService.php?appId=119871&dataGroupCode=01&primaryCategory=&index=0&limit=5&lat=24.986913&lon=121.455948').then(function (response) {
    console.log(store.getState());
    store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["downloadData"])(response.data.branch));
    console.log(store.getState());
  }).catch(function (error) {
    console.log('error');
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadData);

/***/ })

})
//# sourceMappingURL=index.js.176cbed8a10bfa5ed83f.hot-update.js.map