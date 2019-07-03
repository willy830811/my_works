webpackHotUpdate("static\\development\\pages\\change_currency.js",{

/***/ "./pages/change_currency.js":
/*!**********************************!*\
  !*** ./pages/change_currency.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");






var _jsxFileName = "C:\\Users\\\u674E\u5A01\\Desktop\\my_works\\work_0617\\pages\\change_currency.js";





var SelectCurrency =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SelectCurrency, _React$Component);

  function SelectCurrency(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SelectCurrency);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SelectCurrency).call(this, props));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); //this.state = {order: this.props.order}

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SelectCurrency, [{
    key: "handleChange",
    value: function handleChange(event) {
      var order = this.props.order;
      var selected = event.target.value;
      this.props.onChange(selected, order);
    }
  }, {
    key: "render",
    value: function render() {
      var temp_arr = [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "\u8ACB\u9078\u64C7")];
      var all_rate = this.props.all_rate;

      for (var item in all_rate.data.rates) {
        temp_arr.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, item));
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, temp_arr);
    }
  }]);

  return SelectCurrency;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var InputCurrency =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(InputCurrency, _React$Component2);

  function InputCurrency(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputCurrency);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InputCurrency).call(this, props));
    _this2.handleChange = _this2.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InputCurrency, [{
    key: "handleChange",
    value: function handleChange(event) {
      var howMuch = event.target.value;
      this.props.onChange(howMuch);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\u8ACB\u8F38\u5165\u60A8\u60F3\u8981\u63DB\u532F\u7684\u91D1\u984D", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.props.currency.first), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), "\u7E3D\u5171\u53EF\u63DB\u6210", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        readonly: "readonly",
        value: this.props.amount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.props.currency.second));
    }
  }]);

  return InputCurrency;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Exchange =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Exchange, _React$Component3);

  function Exchange(props) {
    var _this3;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Exchange);

    _this3 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Exchange).call(this, props));
    _this3.state = {
      amount: 0,
      currency: {
        first: null,
        second: null
      },
      selected_rate: null,
      all_rate: {
        data: {
          rates: null
        }
      }
    };
    _this3.changeSelect = _this3.changeSelect.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3));
    _this3.changeInput = _this3.changeInput.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3));
    _this3.componentDidMount = _this3.componentDidMount.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3));
    return _this3;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Exchange, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://data.fixer.io/api/latest?access_key=e8984e205db89c1c5523644643ed7d28').then(function (response) {
        self.setState({
          all_rate: response
        });
      }).catch(function (error) {});
    }
  }, {
    key: "changeSelect",
    value: function changeSelect(selected, order) {
      var currencies = this.state.currency;
      currencies[order] = selected;
      console.log(currencies);
      this.setState({
        currency: currencies
      });

      if (currencies.first != null && currencies.second != null) {
        this.setState({
          selected_rate: this.state.all_rate.data.rates[currencies.first] / this.state.all_rate.data.rates[currencies.second]
        });
      }
    }
  }, {
    key: "changeInput",
    value: function changeInput(howMuch) {
      var new_howMuch = howMuch / this.state.selected_rate;
      this.setState({
        amount: new_howMuch
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u6211\u60F3\u8981\u5C07", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SelectCurrency, {
        onChange: this.changeSelect,
        order: "first",
        all_rate: this.state.all_rate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), "\u63DB\u6210", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SelectCurrency, {
        onChange: this.changeSelect,
        order: "second",
        all_rate: this.state.all_rate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(InputCurrency, {
        onChange: this.changeInput,
        amount: this.state.amount,
        currency: this.state.currency,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }));
    }
  }]);

  return Exchange;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

function change_currency_app() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Exchange, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (change_currency_app); //ReactDOM.render(<Exchange />, document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=change_currency.js.230a2f37f005600139a9.hot-update.js.map