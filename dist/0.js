webpackJsonp([0,3],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = __webpack_require__(0);

var _preact2 = _interopRequireDefault(_preact);

var _Component = __webpack_require__(5);

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (id) {
  _preact2.default.render(_preact2.default.h(_Component2.default, { id: id, caption: 'this is some app.' }), document.body, document.getElementById(id));
};

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = __webpack_require__(0);

var _preact2 = _interopRequireDefault(_preact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var id = _ref.id,
      caption = _ref.caption;
  return _preact2.default.h(
    "div",
    { id: "app" },
    id,
    " -> ",
    caption
  );
};

/***/ })

});