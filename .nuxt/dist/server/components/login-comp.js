exports.ids = [12,6];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__);
// mixins/aos.js


/* harmony default export */ __webpack_exports__["a"] = ({
  mounted() {
    aos__WEBPACK_IMPORTED_MODULE_0___default.a.init({
      disable: 'phone'
    });
  }
});

/***/ }),

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

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginComp.vue?vue&type=template&id=4558345c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"h-screen"},[_vm._ssrNode("<div class=\"container h-full px-6\">","</div>",[_vm._ssrNode("<div class=\"g-6 flex h-full flex-wrap items-center justify-center lg:justify-between\">","</div>",[_vm._ssrNode("<div class=\"mb-12 md:mb-0 md:w-8/12 lg:w-6/12\"><img src=\"https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg\" alt=\"Phone image\" class=\"w-full\"></div> "),_vm._ssrNode("<div class=\"md:w-8/12 lg:ml-6 lg:w-5/12 shadow-lg sm:shadow-md bg-white\">","</div>",[_vm._ssrNode("<form class=\"p-8\">","</form>",[_vm._ssrNode("<div data-te-input-wrapper-init class=\"relative mb-6\">","</div>",[_vm._ssrNode("<div class=\"space-y-6\">","</div>",[_c('LandingExchange',{attrs:{"exchange-selected":_vm.currencySelected,"exchanges":_vm.currencies,"title":"Email","name":"email","type":"email","default-value":""}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-te-input-wrapper-init class=\"relative mb-6\">","</div>",[_c('LandingExchange',{attrs:{"exchange-selected":_vm.cryptoSelected,"exchanges":_vm.cryptocurrencies,"title":"password","name":"password","type":"password","default-value":""}})],1),_vm._ssrNode(" <div class=\"mb-6 flex items-center justify-between\"><div class=\"mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]\"><input id=\"exampleCheck3\" type=\"checkbox\" value checked=\"checked\" class=\"relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]\"> <label for=\"exampleCheck3\" class=\"inline-block pl-[0.15rem] hover:cursor-pointer\"> Remember me </label></div> <a href=\"#!\" class=\"text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600\">Forgot password?</a></div> "),_c('BaseButton',{staticClass:"w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium"},[_vm._v("Login")]),_vm._ssrNode(" <div class=\"my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300\"><p class=\"mx-4 mb-0 text-center font-semibold dark:text-neutral-200\">OR</p></div> <div class=\"flex w-full self-center justify-center items-center\"><button type=\"button\" data-te-ripple-init data-te-ripple-color=\"light\" class=\"mx-1 h-9 w-9 rounded-full bg-blue-gradient uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-gradient hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-gradient focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-gradient active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 24 24\" class=\"mx-auto h-3.5 w-3.5\"><path d=\"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z\"></path></svg></button> <button type=\"button\" data-te-ripple-init data-te-ripple-color=\"light\" class=\"mx-1 h-9 w-9 rounded-full bg-blue-gradient uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-gradient hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-gradient focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-gradient active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 193\" class=\"mx-auto h-3.5 w-3.5\"><path fill=\"#ffffff\" d=\"M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z\"></path> <path fill=\"#ffffff\" d=\"M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z\"></path> <path fill=\"#ffffff\" d=\"m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z\"></path> <path fill=\"#ffffff\" d=\"M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z\"></path> <path fill=\"#ffffff\" d=\"m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z\"></path></svg></button></div>")],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LoginComp.vue?vue&type=template&id=4558345c&

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginComp.vue?vue&type=script&lang=js&
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


/* harmony default export */ var LoginCompvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  mixins: [aos["a" /* default */]],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: 'country-icon/eng.png',
        name: 'USD'
      },
      currencies: [{
        img: 'country-icon/eng.png',
        name: 'USD'
      }],
      cryptoSelected: {
        img: 'crypto-icon/bitcoin.png',
        name: 'BTC'
      },
      cryptocurrencies: [{
        img: 'crypto-icon/bitcoin.png',
        name: 'BTC'
      }],
      trendings: [{
        id: 1,
        name: 'Bitcoin',
        price: 43180.13,
        logo: 'bitcoin.png',
        increase: true,
        data: [40, 35, 60, 75, 60, 75, 50]
      }, {
        id: 2,
        name: 'Ethereum',
        price: 3480.65,
        logo: 'ethereum.png',
        increase: false,
        data: [25, 30, 60, 50, 80, 55, 80]
      }, {
        id: 3,
        name: 'Solana',
        price: 150.2,
        logo: 'solana.png',
        increase: true,
        data: [40, 45, 40, 80, 50, 60, 35]
      }, {
        id: 4,
        name: 'Dogecoin',
        price: 0.1572,
        logo: 'dogecoin.png',
        increase: true,
        data: [35, 70, 60, 80, 50, 60, 40]
      }],
      topGainers: [{
        id: 1,
        name: 'PAPPAY',
        price: 0.00374,
        logo: 'pappay.png',
        increase: true,
        data: [30, 50, 45, 60, 70, 40, 45]
      }, {
        id: 2,
        name: 'Bitcoin Asia',
        price: 0.02096,
        logo: 'bitcoin-asia.png',
        increase: true,
        data: [25, 60, 50, 60, 35, 50, 70]
      }, {
        id: 3,
        name: 'MoonRock',
        price: 0.004907,
        logo: 'moonrock.png',
        increase: true,
        data: [40, 35, 40, 25, 50, 70, 45]
      }, {
        id: 4,
        name: 'NinjaFloki',
        price: 0.000123,
        logo: 'ninjafloki.png',
        increase: true,
        data: [45, 35, 40, 30, 25, 45, 35]
      }],
      recents: [{
        id: 1,
        name: 'MetaCraft',
        price: 0.0608,
        logo: 'metacraft.png',
        increase: false,
        data: [40, 50, 45, 60, 35, 40, 45]
      }, {
        id: 2,
        name: 'Frog',
        price: 0.5875,
        logo: 'frog.png',
        increase: false,
        data: [25, 50, 45, 48, 40, 60, 45]
      }, {
        id: 3,
        name: 'Musk Doge',
        price: 0.04041,
        logo: 'musk-doge.png',
        increase: true,
        data: [25, 35, 60, 45, 50, 45, 45]
      }, {
        id: 4,
        name: '2SHARE',
        price: 1366.24,
        logo: '2share.png',
        increase: true,
        data: [35, 30, 60, 50, 35, 45, 40]
      }],
      accordions: [{
        title: 'How does the AI-powered resume builder enhance my resume?',
        description: "Our AI-powered resume builder utilizes advanced algorithms to analyze your skills, experiences, and qualifications. It provides personalized suggestions to optimize your resume's content, format, and keywords. This ensures that your resume stands out and effectively highlights your strengths, increasing your chances of getting noticed by employers."
      }, {
        title: 'Will my personal information be secure when using the AI-powered resume builder?',
        description: 'We prioritize the security and privacy of our users. Your personal information is treated with the utmost confidentiality and protected through advanced security measures. Rest assured that your data is stored securely and handled in compliance with the highest industry standards.'
      }, {
        title: 'Can I access the AI-powered resume builder on multiple devices?',
        description: 'Yes! Our resume builder is designed to be accessible from various devices, including desktops, laptops, tablets, and mobile phones. You can seamlessly switch between devices and continue working on your resume from anywhere at any time. All your progress and changes will be saved automatically, ensuring a smooth and uninterrupted resume building experience.'
      }, {
        title: 'Can I customize the resume templates provided by the AI-powered builder?',
        description: 'Absolutely! While our AI-powered resume builder offers pre-designed templates to choose from, you have full customization control. You can modify the layout, fonts, colors, and sections to create a resume that aligns with your personal brand and showcases your unique professional identity.'
      }],
      steps: [{
        img: 'login.png',
        title: 'Sign Up',
        description: 'Start your journey towards a professional and impactful resume by signing up for our platform. '
      }, {
        img: 'create.png',
        title: 'Build Resume',
        description: "Once you've signed up, dive into our intuitive resume builder."
      }, {
        img: 'download.png',
        title: 'Download',
        description: "When you're satisfied with your resume, it's time to download and share it with potential employers."
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/LoginComp.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginCompvue_type_script_lang_js_ = (LoginCompvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/LoginComp.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LoginCompvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e0775cb4"
  
)

/* harmony default export */ var LoginComp = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LandingExchange: __webpack_require__(36).default,BaseButton: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=login-comp.js.map