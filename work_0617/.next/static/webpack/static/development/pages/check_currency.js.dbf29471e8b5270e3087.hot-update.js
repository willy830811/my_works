webpackHotUpdate("static\\development\\pages\\check_currency.js",{

/***/ "./pages/check_currency.js":
/*!*********************************!*\
  !*** ./pages/check_currency.js ***!
  \*********************************/
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");





var _jsxFileName = "C:\\Users\\\u674E\u5A01\\Desktop\\my_works\\work_0617\\pages\\check_currency.js";



 //import BarGraph from '../components/BarGraph';

var check_currency =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(check_currency, _React$Component);

  function check_currency(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, check_currency);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(check_currency).call(this, props));
    _this.state = {
      month_rate: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(check_currency, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var month_rate = [];
      var base = 'EUR';
      var currency = 'JPY';
      var today = new Date();
      var self = this;

      for (var i = 0; i < 30; i++) {
        var date = new Date();
        date.setDate(today.getDate() - i);
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://data.fixer.io/api/' + date + '?access_key=e8984e205db89c1c5523644643ed7d28&base=' + base + '&symbols=' + currency).then(function (response) {
          console.log(response); //self.setState({all_rate: response});

          month_rate.push(response.rates[currency]);
          this.setState({
            month_rate: month_rate
          });
        }).catch(function (error) {}); //console.log(month_rate);
      }

      console.log(month_rate);
      setTimeout(function () {
        console.log(month_rate);
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var today = new Date();
      var date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate(); //console.log(this.state.month_rate);

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BarGraph, {
        month_rate: this.state.month_rate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }));
    }
  }]);

  return check_currency;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var BarGraph =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BarGraph, _React$Component2);

  function BarGraph() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BarGraph);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BarGraph).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BarGraph, [{
    key: "render",
    value: function render() {
      var list = ['bo'];

      for (var i = 0; i < 30; i++) {
        list.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SingleBar, {
          today_rate: this.props.month_rate[i],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        })); //console.log(this.props.month_rate[i]);
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, list, "yo");
    }
  }]);

  return BarGraph;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var SingleBar =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SingleBar, _React$Component3);

  function SingleBar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SingleBar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SingleBar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SingleBar, [{
    key: "render",
    value: function render() {
      var height = this.props.today_rate;
      var style = {
        backgroundColor: 'red',
        height: height //console.log(this.props.today_rate);

      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, this.props.today_rate);
    }
  }]);

  return SingleBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (check_currency);

/***/ })

})
//# sourceMappingURL=check_currency.js.dbf29471e8b5270e3087.hot-update.js.map