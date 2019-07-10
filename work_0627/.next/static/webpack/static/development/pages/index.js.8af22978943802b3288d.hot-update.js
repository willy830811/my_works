webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ShopMap.js":
/*!*******************************!*\
  !*** ./components/ShopMap.js ***!
  \*******************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/es/Recompose.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ShopItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShopItem */ "./components/ShopItem.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var react_google_maps_lib_components_addons_InfoBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-google-maps/lib/components/addons/InfoBox */ "./node_modules/react-google-maps/lib/components/addons/InfoBox.js");
/* harmony import */ var react_google_maps_lib_components_addons_InfoBox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_addons_InfoBox__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "C:\\Users\\\u674E\u5A01\\Desktop\\my_works\\work_0627\\components\\ShopMap.js";











var MyMapComponent = Object(recompose__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_10__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCt95qTXK2VBIGWxB8CiCWe8eBV475edOg&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: {
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }),
  containerElement: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: {
      height: 'calc(100% - 48px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }),
  mapElement: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: {
      height: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })
}), Object(recompose__WEBPACK_IMPORTED_MODULE_10__["withStateHandlers"])(function () {
  return {
    isOpen: false
  };
}, {
  onToggleOpen: function onToggleOpen(_ref) {
    var isOpen = _ref.isOpen;
    return function () {
      return {
        isOpen: !isOpen
      };
    };
  }
}), react_google_maps__WEBPACK_IMPORTED_MODULE_11__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_11__["withGoogleMap"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    onClick: function onClick() {
      return props.toggleMode();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    src: "/static/right-on.svg",
    className: "position-fixed",
    style: {
      width: '90px',
      right: '12px',
      bottom: '9px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMap"], {
    defaultZoom: 15,
    defaultCenter: {
      lat: 24.986913,
      lng: 121.455948
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.shops.map(function (shop, index) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_11__["Marker"], {
      key: index,
      position: {
        lat: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_7___default()(shop.lat),
        lng: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_7___default()(shop.lon)
      },
      onClick: function onClick() {
        props.selectMarker(index);
        props.onToggleOpen(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, props.isOpen && props.marker === index && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_google_maps_lib_components_addons_InfoBox__WEBPACK_IMPORTED_MODULE_14__["InfoBox"], {
      onCloseClick: props.onToggleOpen,
      options: {
        closeBoxURL: "",
        enableEventPropagation: true
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
      className: "list-unstyled",
      style: {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ShopItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
      onClick: function onClick() {
        props.selectShop(props.marker);
        props.nextPage();
      },
      content: props.shops[props.marker],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    onClick: function onClick() {
      return props.toggleMode();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    src: "/static/right-on.svg",
    className: "position-fixed",
    style: {
      width: '90px',
      right: '12px',
      bottom: '9px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })));
});
/*

*/

/*原infobox內容
<Marker
					position={{ lat: 24.97, lng: 121.43 }}
					onClick={props.onToggleOpen}
				>
					{props.isOpen && <InfoBox
						onCloseClick={props.onToggleOpen}
						options={{ closeBoxURL: ``, enableEventPropagation: true }}
					>
						<div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
							<div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
								Hello, Kaohsiung!
							</div>
						</div>
					</InfoBox>}
				</Marker>
*/

var ShopMap =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ShopMap, _React$PureComponent);

  function ShopMap() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShopMap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShopMap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isMarkerShown: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "delayedShowMarker", function () {
      setTimeout(function () {
        _this.setState({
          isMarkerShown: true
        });
      }, 3000);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMarkerClick", function (index) {
      _this.setState({
        isMarkerShown: false
      });

      _this.delayedShowMarker();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShopMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.delayedShowMarker();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MyMapComponent, {
        isMarkerShown: this.state.isMarkerShown,
        onMarkerClick: this.handleMarkerClick,
        shops: this.props.shops,
        marker: this.props.marker,
        selectMarker: this.props.selectMarker,
        selectShop: this.props.selectShop,
        nextPage: this.props.nextPage,
        toggleMode: this.props.toggleMode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      });
    }
  }]);

  return ShopMap;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    shops: state.data,
    marker: state.data_now.index_marker
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    selectMarker: function selectMarker(index) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["selectMarker"])(index));
    },
    selectShop: function selectShop(index) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["selectShop"])(index));
    },
    nextPage: function nextPage() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["nextPage"])());
    },
    toggleMode: function toggleMode() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__["toggleMode"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(ShopMap));

/***/ })

})
//# sourceMappingURL=index.js.8af22978943802b3288d.hot-update.js.map