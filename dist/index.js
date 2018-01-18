webpackJsonp([2],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function component(id, caption, appImport) {
  var element = document.createElement('div');

  element.innerHTML = caption;
  element.id = id;
  element.addEventListener('click', appImport);
  return element;
}

document.body.appendChild(component('firstApp', 'load App #1', function () {
  __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 1)).then(function (app) {
    return app.default('firstApp');
  });
}));

document.body.appendChild(component('secondApp', 'load App #2', function () {
  __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 1)).then(function (app) {
    return app.default('secondApp');
  });
}));

var _gh = {};
_gh.appThree = function () {
  __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 4)).then(function (app) {
    return app.default('appThree');
  });
};

// this then could be called everywhere on the page
// maybe when clicking on a prerendered version of the gallery to load and open the lightbox
window._gh = _gh;

/***/ })

},[3]);