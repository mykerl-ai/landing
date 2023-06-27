exports.ids = [6];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Exchange.vue?vue&type=template&id=84bf3f72&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex items-center space-x-4"},[_vm._ssrNode("<div class=\"w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl\"><span class=\"text-sm font-medium pr-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]\">"+_vm._ssrEscape(" "+_vm._s(_vm.title)+" ")+"</span> <input"+(_vm._ssrAttr("type",_vm.type))+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("value",_vm.defaultValue))+" class=\"w-full text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/Exchange.vue?vue&type=template&id=84bf3f72&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Exchange.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Exchangevue_type_script_lang_js_ = ({
  name: 'LandingExchange',
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      require: true,
      default: ''
    },
    defaultValue: {
      type: [Number, String],
      default: ''
    },
    exchangeSelected: {
      type: Object,
      required: true
    },
    exchanges: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      openDropdown: false
    };
  },
  methods: {
    toggleDropdown() {
      this.openDropdown = !this.openDropdown;
    }
  }
});
// CONCATENATED MODULE: ./components/landing/Exchange.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_Exchangevue_type_script_lang_js_ = (Exchangevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/Exchange.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Exchangevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "65ef5306"
  
)

/* harmony default export */ var Exchange = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=landing-exchange.js.map