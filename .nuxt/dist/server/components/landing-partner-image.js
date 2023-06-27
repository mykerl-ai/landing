exports.ids = [8];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background.df48bff.png";

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./background.png": 35,
	"./clever.png": 56,
	"./diamon-cutts.png": 57,
	"./gambio.png": 58,
	"./swiss-finance.png": 59
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
webpackContext.id = 55;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/clever.8a49f14.png";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/diamon-cutts.05f2972.png";

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gambio.da697ab.png";

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/swiss-finance.7281595.png";

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/PartnerImage.vue?vue&type=template&id=38d9bd27&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(55)("./" + _vm.img)))+" alt class=\"sm:w-1/2 lg:w-72 mx-auto\">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/PartnerImage.vue?vue&type=template&id=38d9bd27&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/PartnerImage.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var PartnerImagevue_type_script_lang_js_ = ({
  props: {
    img: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/landing/PartnerImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_PartnerImagevue_type_script_lang_js_ = (PartnerImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/PartnerImage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_PartnerImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "65e0c8cd"
  
)

/* harmony default export */ var PartnerImage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-partner-image.js.map