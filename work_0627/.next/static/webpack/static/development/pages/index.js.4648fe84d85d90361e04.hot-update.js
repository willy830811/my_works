webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./actions/index.js");





var _jsxFileName = "C:\\Users\\\u674E\u5A01\\Desktop\\my_works\\work_0627\\components\\Header.js";





var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this = this;

      var previousPage = this.props.previousPage;

      var title = function title() {
        switch (_this.props.page) {
          case 'shop_list':
            return '好康多';

          case 'coupon_list':
            return '優惠項目';

          case 'coupon_content':
            return '優惠內容';

          default:
            return null;
        }
      };

      var menu_icon = function menu_icon() {
        switch (_this.props.page) {
          case 'shop_list':
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              src: "/static/slidemenu.svg",
              className: "position-absolute",
              style: {
                height: '18px'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            });

          case 'coupon_list':
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              src: "/static/back-btn.svg",
              className: "position-absolute",
              style: {
                height: '18px',
                left: '11px'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            });

          case 'coupon_content':
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              src: "/static/back-btn.svg",
              className: "position-absolute",
              style: {
                height: '18px',
                left: '11px'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            });

          default:
            return null;
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "position-fixed",
        style: {
          top: '0',
          height: '48px',
          width: '100%',
          backgroundColor: '#bf3829',
          zIndex: '1'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "position-absolute",
        style: {
          top: '15px',
          left: '0'
        },
        onClick: function onClick() {
          return previousPage();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, menu_icon()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "position-absolute",
        style: {
          top: '5px',
          left: '24px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/app_logo.png",
        style: {
          height: '61px',
          width: '58px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "position-absolute",
        style: {
          top: '12px',
          left: '91px',
          fontSize: '17px',
          color: '#FFF'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, title()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "position-absolute",
        style: {
          top: '15px',
          right: '31px'
        },
        onClick: function onClick() {
          previousPage();
          previousPage();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/home.svg",
        className: "position-absolute",
        style: {
          height: '19px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    page: state.page_now
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    previousPage: function previousPage() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["previousPage"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ })

})
//# sourceMappingURL=index.js.4648fe84d85d90361e04.hot-update.js.map