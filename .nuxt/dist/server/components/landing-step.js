exports.ids = [9];
exports.modules = {

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow.png": 62,
	"./buy-crypto.png": 63,
	"./create.png": 64,
	"./download.png": 65,
	"./fund.png": 66,
	"./login.png": 67,
	"./sign-up.png": 68
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 61;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrow.60f4e50.png";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/buy-crypto.46d8692.png";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/create.ef564c5.png";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/download.caddc2d.png";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fund.93372b0.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/login.d84b993.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sign-up.4afd242.png";

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Step.vue?vue&type=template&id=199e08e0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(61)("./" + (_vm.step.img))))+" alt class=\"max-w-[245px] mx-auto\"> <h3 class=\"text-xl text-neutral-800 font-semibold\">"+_vm._ssrEscape(_vm._s(_vm.step.title))+"</h3> <p class=\"text-sm text-gray-700 leading-relaxed\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.step.description)+"\n  ")+"</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/Step.vue?vue&type=template&id=199e08e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Step.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Stepvue_type_script_lang_js_ = ({
  name: 'LandingStep',
  props: {
    step: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/landing/Step.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_Stepvue_type_script_lang_js_ = (Stepvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/Step.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Stepvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "01bc43a6"
  
)

/* harmony default export */ var Step = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-step.js.map