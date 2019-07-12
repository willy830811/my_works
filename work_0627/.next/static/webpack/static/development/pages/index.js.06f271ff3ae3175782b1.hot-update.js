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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions/index.js");




/**/

var index = 0;
var limit = 10;
var lat = undefined.props.lat;
var lon = undefined.props.lon;
axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://test1.hokhang.com/hksCloudService/getEventService.php?appId=119871&dataGroupCode=01&primaryCategory=&index=' + index + '&limit=' + limit + '&lat=' + lat + '&lon=' + lon).then(function (response) {
  store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["downloadData"])(response.data.branch));
}).catch(function (error) {
  console.log(error);
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    lat: state.location.lat,
    lon: state.location.lon
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(DownloadData)); //export default DownloadData

/***/ })

})
//# sourceMappingURL=index.js.06f271ff3ae3175782b1.hot-update.js.map