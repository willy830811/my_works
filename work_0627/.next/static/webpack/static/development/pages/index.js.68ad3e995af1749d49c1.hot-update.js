webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ShopList.js":
/*!********************************!*\
  !*** ./components/ShopList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ShopItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ShopItem */ "./components/ShopItem.js");





var _jsxFileName = "C:\\Users\\\u674E\u5A01\\Desktop\\my_works\\work_0627\\components\\ShopList.js";



var ShopList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ShopList, _React$Component);

  function ShopList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShopList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShopList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShopList, [{
    key: "render",
    value: function render() {
      var shops = this.props.shops;
      var selectShop = this.props.selectShop;
      var nextPage = this.props.nextPage;
      var toggleMode = this.props.toggleMode;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container-fluid",
        style: {
          padding: '70px 0 0 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-none d-md-block",
        style: {
          position: 'relative',
          width: '100%',
          height: '62px',
          paddingLeft: '15px',
          zIndex: '1'
        },
        onClick: function onClick() {
          return toggleMode();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          margin: '6px 0 0 0',
          fontSize: '26px',
          letterSpacing: '-0.63px',
          color: '#232323'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "\u512A\u60E0\u5217\u8868"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/right-on.svg",
        style: {
          position: 'absolute',
          right: '24px',
          top: '13px',
          width: '90px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "row list-unstyled",
        style: {
          margin: '0',
          padding: '0 6px 10px 6px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, shops.map(function (shop, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: "col-12 col-md-4",
          style: {
            padding: '0'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: index,
          onClick: function onClick() {
            selectShop(index);
            nextPage();
          },
          content: shop,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "d-block d-md-none position-fixed",
        style: {
          right: '12px',
          bottom: '9px'
        },
        onClick: function onClick() {
          return toggleMode();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/left-on.svg",
        style: {
          width: '90px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })));
    }
  }]);

  return ShopList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); //<span key={index} onClick={() => {selectShop(index); nextPage();}}>{shop.name}</span>

/*
const ShopList = ({ shops }) => (
  <div>
    {shops.map(shop => (
	    <div>
	      	<span>{shop.name}</span>
	    </div>
    ))}
  </div>
)
*/


/* harmony default export */ __webpack_exports__["default"] = (ShopList);

/***/ })

})
//# sourceMappingURL=index.js.68ad3e995af1749d49c1.hot-update.js.map