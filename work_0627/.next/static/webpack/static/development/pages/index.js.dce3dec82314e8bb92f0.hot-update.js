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



var index = 0;
var limit = 10;
var lat = 25;
var lon = 121;
/*
if (typeof window !== 'undefined') {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(res){
			console.log(res.coords);
			lat = res.coords.latitude;
			lon = res.coords.longitude;
		}, function(error){
			console.log(error);
			
		});
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
}
*/

function DownloadData() {
  var store = window.appStore;
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://test1.hokhang.com/hksCloudService/getEventService.php?appId=119871&dataGroupCode=01&primaryCategory=&index=' + index + '&limit=' + limit + '&lat=' + lat + '&lon=' + lon).then(function (response) {
    store.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["downloadData"])(response.data.branch));
  }).catch(function (error) {
    console.log(error);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (DownloadData);

/***/ })

})
//# sourceMappingURL=index.js.dce3dec82314e8bb92f0.hot-update.js.map