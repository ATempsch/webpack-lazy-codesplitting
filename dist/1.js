webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = __webpack_require__(0);

var _preact2 = _interopRequireDefault(_preact);

var _RootComponent = __webpack_require__(6);

var _RootComponent2 = _interopRequireDefault(_RootComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (id) {
  _preact2.default.render(_preact2.default.h(
    'div',
    null,
    _preact2.default.h(_RootComponent2.default, {
      id: id,
      caption: 'this is some app, click it for loading lazy subcomponent'
    })
  ), document.body, document.getElementById(id));
};

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = __webpack_require__(0);

var _preact2 = _interopRequireDefault(_preact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_preact$Component) {
  _inherits(_class, _preact$Component);

  function _class() {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(_class, [{
    key: 'render',
    value: function render(_ref) {
      var _this2 = this;

      var id = _ref.id,
          caption = _ref.caption;

      var LazyComponent = this.state.lazyComponent;
      return _preact2.default.h(
        'div',
        { id: 'app' },
        _preact2.default.h(
          'div',
          {
            onClick: function onClick() {
              __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 5)).then(function (module) {
                _this2.setState({ lazyComponent: module.default });
              });
            }
          },
          id,
          ' -> ',
          caption
        ),
        !!LazyComponent && _preact2.default.h(LazyComponent, {
          id: 'lazyC',
          caption: 'this component just got lazy loaded. it\'s a subcomponent of appThree'
        })
      );
    }
  }]);

  return _class;
}(_preact2.default.Component);

exports.default = _class;

/***/ })

});