exports.ids = [13,1,2,3,4,5,8,9,10,11];
exports.modules = Array(34).concat([
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background.df48bff.png";

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue-chartjs"
var external_vue_chartjs_ = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineChart.vue?vue&type=script&lang=js&

/* harmony default export */ var LineChartvue_type_script_lang_js_ = ({
  extends: external_vue_chartjs_["Line"],
  props: {
    increase: {
      type: Boolean,
      required: true
    },
    datasets: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0.1119, 'rgba(95, 223, 146, 0.5)');
    this.gradient.addColorStop(0.1118, 'rgba(95, 223, 146, 0.3)');
    this.gradient.addColorStop(0.93, 'rgba(196, 196, 196, 0)');
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
    this.gradient2.addColorStop(0, 'rgba(255, 189, 189, 0.5)');
    this.gradient2.addColorStop(0.94, 'rgba(196, 196, 196, 0)');
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Data One',
        borderColor: this.increase ? '#28C165' : '#F4574D',
        borderWidth: 1,
        backgroundColor: this.increase ? this.gradient : this.gradient2,
        data: this.datasets
      }]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      },
      tooltips: {
        callbacks: {
          label: tooltipItem => {
            return tooltipItem.yLabel;
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false,
            color: 'rgba(0, 0, 0, 0)'
          }
        }],
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false,
            color: 'rgba(0, 0, 0, 0)'
          }
        }]
      }
    });
  }
});
// CONCATENATED MODULE: ./components/LineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LineChartvue_type_script_lang_js_ = (LineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/LineChart.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3a287a50"
  
)

/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-trading-tools.7af7841.webp";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/edit_resume.8106187.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2share.png": 42,
	"./bitcoin-asia.png": 43,
	"./bitcoin.png": 44,
	"./dogecoin.png": 45,
	"./ethereum.png": 46,
	"./frog.png": 47,
	"./metacraft.png": 48,
	"./moonrock.png": 49,
	"./musk-doge.png": 50,
	"./ninjafloki.png": 51,
	"./pappay.png": 52,
	"./solana.png": 53
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
webpackContext.id = 41;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2share.785d7a0.png";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM2SURBVHgBlZXNaxNBFMDfm9mt/QhSi1gVbFPbCI3mJNqrSD0oSks9+Q+IHryoWCh4EEvBm3hrsScRPAl+IEItIp5aPanNJTXUKrX1YGOwapPdeb6ZTTa7S9Im77KzuzPv974HoAH5mTzblU8Nz670jHQ3ck7Uu1ED7F32DA7Qydg+NdMIqC5IGQDd6hDNCcA4JRoBYfDlR/zM3uZW63hoAwob2nHCAD5WbMKUAlrCDORpFBS5wTP/wJnfk36xWn63gj8NoE88wRaqfIzxulMBZBEwqSrfeSlOqAStwWP4jUECNGesIV49rQoxFrawhWnprTUgTkDPpOczespNkPlJCyWPlvlHCYSHVVRl7ZwYQA8DPpW27CaQDzYBOgDko03/pA4h8j7jcQ0RWwJKOcBBF+TtImAXg8YLgPsJxHlOw476QCGIKywJMQgBDKSbAI9yGJp5fUwZ5eJGEeS1or/HB7XpSFpNVSG6TOVOuoOdEAIERU1b4F63Qd3lVLJ+PF3xxgd1spftaiJY3qIMMI0W52rJQk2hDwLojQT10AJa5ETr+pCRPZ+5CiN9ZIUaTVuSdGtCsE+ZEgW2VoeG3rGNGxDuNix5lFKJGDAIRk5ZQlhT0O918nYirjiVF1auJq1IOwc80qABN9GWh0nRpJyLKi0yut63E1rgcL2VQO/ZoFaO1HgxlJOQ16xP63VZv2hNP1+2c8VBtVQCYW2ImuLEX7XBvdwE6iUn4wCH7YiqDuCR4+acwQ7Wb2JUBhGDoJegHsHyrGiJ/DjozbQyQH/yE6FBmMMx+I5QK3TikgPyXgHkdME0KOga+YYhD2BNgLtOo2WAltDsInAKyAmlL8KbSZF+wf4A3PH6hq32AZQ15QsSw1O5eklpUFb4HtGsBPeWDbDOxt/kZ56fFzgv960QADaqJ9SCWhIAGY9WGcRzUVeXNlN7Ww+gOuQvhsc13y14zjX3Cazwv17+99W7W/SaVs1NqbH+eX9dDSIEzBUXaSj4TeqhqWeaHjmRm1G9lhmVE2M6l5UTxGPNmQ/q2KIrKvKHR0+x3X4lSqBoH2x3vi5ICJRUCZWuH9CwaNCv1PCMHqqNnPsPVlWQgTRlc+gAAAAASUVORK5CYII="

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bitcoin.2efeba4.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dogecoin.ef19fa0.png";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHBSURBVHgBzZXPK0RRFMcPxu/fhbBAUQrRRDELFqKUrcUooWTlHyALFv4AbJiF8jdYSUkWShasrGxEJCmRpPz8nu6Zul3z3juvQU59mrn3nXO+795z7n1E/9DywBwoChOUSeGsHTSDeJigMCIlICb/x0GNNjCMSD+IyP8CMK8N1Io0gEZnrgd0ksI0Ijlg0OPZAiikHxDpJlOPVFYLJihNEU7eFeDDnVZNaYj0Oj7ZZM6IPcdNMOuXJMvnWSuZ4iaT8/ngreMGqBChV/AJ6sAVOEuVKOIhwElj8tb1oEnm7LgyUAyewSOYBHsyVq1kGIyAKKh0/PIFktXkkqkd+72AIzeZV02OwSnIIL3tkFnJN/NaCb/ViYi1kNmWpNkrYbsEU+LLfudakXvQB8rBKrgDHWRqkRR5AktgBUyDKrCZKplfC+/Km42BCzKF3ZZn/DtEprsSZA5lwitR0J5zcFz8uIMOwQ2Z8zMDSsVvlDzaVyPCxrdv1BpzvQas8QZY80ugubv2wa01tq8QLnoiKIFG5B1sgTdnnse8ZR9BCbTfkwdw4Mytg2tFrO/d5Ron5KukjcypXqZfMr4+FinE9/3P7AsBIj10rSdnZQAAAABJRU5ErkJggg=="

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/frog.ae03a20.png";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAAAAADhgtq/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmARcCMDgIp06qAAABDUlEQVQoz5XSMUvDQBjG8X90cMnQFPfW0UmdHMVPYhA/gINdmyLE1ToLXp0dFBwclEY3QbDg4nYnuDdfoORxSEKuLYI+y8H94Die90W/hT9Ino1OzfOyuOMIgOjAzct5mzrh0JckwMugkQvmM6zFrXu3a2FIlFcSw4n7PAJg20qQVLIBqVT0gcNcErQLCWkCpJLUKw8BVkK6B1JNv9xOJrlEAm4lJAOksp0tJz22Ygm4lpDuStnNpbOAUsYSki2lJ30bY14kwHl/s/2mSzarXw8glY2zMk8PcFVJ3qF1Y70eukXd2zggiBsI3puuR36fq8afz0e3eeptYdpmbwUI9i9nyxuSv2aT6f92ZzE//GqUhj4mcFUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDEtMjNUMDI6NDg6NDcrMDA6MDCKZb1WAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAxLTIzVDAyOjQ4OjQ3KzAwOjAw+zgF6gAAAABJRU5ErkJggg=="

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/moonrock.71ab538.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/musk-doge.f53083a.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ninjafloki.768bc7a.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pappay.4e13578.png";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMHSURBVHgB3VW/axRBFH5vZvZOVM6ACJJWjVgIKRIsrEKqRGuxEhsbGxsNYpM77QzYGO38A2KjlY0JqQIRToigjZBOxUYNAZG7nR9+b3Z2bzfcX3AbNm/n/Zhv5ntz3xBNysNHHcuvd2ZV5qessWQN0cjixR8dE1v3j+JkbIo1/aYOcHPjw2rOrmsDsIMh9p7YZaTY4w2kdUY296gKiEk8kHJcxCgAAHUasYA6jzrUa+/7ugS4/erjKrvQZQAoz0ikZBmJ8MECq2FV8tfzFSz75CPuBz65GEHuvvgUAYqCcgJFXBtzbcKjE/PRHPkm6v890V78fXr5UN9f+7Kq7AiguZNacSMmu0uxctK0i2IH1Hdn9OJ3AMgmjB6E46z0cybwF1fgE6eaWMuk4B0zSgOF48JqWC56hnwVkEuuADB82B6Gp58TwGQ9/Oze/len6YLF0XPGk4O1pU2+sTEcYxdpLKwzki/W/8zZL72/trBXgqiWpeutof7RHmhqxVclq6k9VNSONsVq4zbyClvGU2xgzh7Lzfbym53Zaifyb/3O/gwZs+1UmC5XOtpBfcXVasfHYm01PsBZWHh74+peJSsCpCnbRnC6mmQMPa42tomm0aJGgGmOA5WHhYZ2rd/6NtPKaMNpN+XSSm3Zmzixq3wuA4CCNumazxQgHj6bfF6HPzQxT4Oud0u/OkPDK+C+UzVRJRqysqlEudCgpB9EPvlzoQf0CY0eYpa3vFAFn/tn6gA611uZD3MiJywCKdb4QpMgOVarKCUq9ke0CgAiRfAT5IcBJtLiDMaokcWRUr2owrtXQscMwhbEbq4p46XKNqW+Uusklk2pr6myo97ao8tdvXs+dFoq30TSPDcKqVLY5l0yAldj7p5SubGV3uMnl7qyCXNKhU074HmGtmhsU/jVzkc6tEM/5Bu0xRi+tfQKt2H8PWCsYp6K1EidQ+7Aud7DtYvdshWGhrxiTHkGnFCJ61SRGlrycj8H4dfGZIh+vIo9Y9VDR7EuXtWpjqQ39uDBy3N7NJHPfweDNd8YAc+HAAAAAElFTkSuQmCC"

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/create_cv.3eef614.gif";

/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/clever.8a49f14.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/diamon-cutts.05f2972.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gambio.da697ab.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/swiss-finance.7281595.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/folder.09f2ee2.jpg";

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrow.60f4e50.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/buy-crypto.46d8692.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/create.ef564c5.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/download.caddc2d.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fund.93372b0.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/login.d84b993.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sign-up.4afd242.png";

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("58dd9283", content, true, context)
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Section.vue?vue&type=template&id=0ae09308&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._b({staticClass:"relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden"},'div',_vm.$attrs,false),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/Section.vue?vue&type=template&id=0ae09308&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Section.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var Sectionvue_type_script_lang_js_ = ({
  name: 'BaseSection'
});
// CONCATENATED MODULE: ./components/base/Section.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_Sectionvue_type_script_lang_js_ = (Sectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/base/Section.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Sectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7bed6bc9"
  
)

/* harmony default export */ var Section = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/CryptoStatistic.vue?vue&type=template&id=92239d94&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._b({staticClass:"w-full lg:w-1/3 mt-6 lg:mt-0 overflow-hidden space-y-6"},'div',_vm.$attrs,false),[_vm._ssrNode("<div class=\"w-full flex items-center justify-between\">","</div>",[_vm._ssrNode("<span class=\"font-medium\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</span> "),_vm._ssrNode("<button href=\"#\" class=\"px-3 py-1 text-sm font-medium text-blue-500 flex items-center space-x-1 rounded-md hover:bg-blue-50 transition duration-300\">","</button>",[_vm._ssrNode("<span>More</span> "),_c('ChevronRightIcon',{attrs:{"size":16}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col\">","</div>",[_vm._ssrNode("<div class=\"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8\">","</div>",[_vm._ssrNode("<div class=\"px-2 sm:px-6 py-2 align-middle inline-block min-w-full overflow-hidden\">","</div>",[_vm._ssrNode("<table class=\"min-w-full\">","</table>",[_vm._ssrNode("<thead><tr><th class=\"text-left text-sm font-medium text-gray-500\">Name</th> <th class=\"text-left text-sm font-medium text-gray-500\">Price</th> <th class=\"hidden sm:block text-left text-sm font-medium text-gray-500\">Chart</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.datasets),function(data){return _vm._ssrNode("<tr class=\"border-b border-gray-200\">","</tr>",[_vm._ssrNode("<td class=\"py-4 whitespace-nowrap\"><div class=\"flex items-center space-x-2\"><img"+(_vm._ssrAttr("src",__webpack_require__(41)("./" + (data.logo))))+" alt> <span>"+_vm._ssrEscape(_vm._s(data.name))+"</span></div></td> "),_vm._ssrNode("<td class=\"py-4 whitespace-nowrap\">","</td>",[_vm._ssrNode("<div class=\"flex items-center\">","</div>",[(data.increase)?_c('PlusThickIcon',{staticClass:"text-emerald-500",attrs:{"size":14}}):_c('MinusThickIcon',{staticClass:"text-red-500",attrs:{"size":14}}),_vm._ssrNode(" <span>"+_vm._ssrEscape("$"+_vm._s(data.price))+"</span>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<td class=\"hidden sm:block whitespace-nowrap\">","</td>",[_vm._ssrNode("<div>","</div>",[_c('LineChart',{staticClass:"w-28 h-12 -mx-2",attrs:{"datasets":data.data,"increase":data.increase}})],1)])],2)}),0)],2)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/CryptoStatistic.vue?vue&type=template&id=92239d94&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/CryptoStatistic.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CryptoStatisticvue_type_script_lang_js_ = ({
  name: 'LandingCryptoStatistic',
  props: {
    title: {
      type: String,
      default: ''
    },
    datasets: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/landing/CryptoStatistic.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_CryptoStatisticvue_type_script_lang_js_ = (CryptoStatisticvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/CryptoStatistic.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_CryptoStatisticvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b04bd1b6"
  
)

/* harmony default export */ var CryptoStatistic = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LineChart: __webpack_require__(37).default})


/***/ }),
/* 74 */
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

/***/ }),
/* 75 */
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

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Accordion.vue?vue&type=template&id=116c825c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"relative border-b-2 border-gray-200"},[_vm._ssrNode("<button type=\"button\" class=\"w-full py-4 text-left\">","</button>",[_vm._ssrNode("<div class=\"flex items-center justify-between\">","</div>",[_vm._ssrNode("<span class=\"font-medium\">"+_vm._ssrEscape(_vm._s(_vm.accordion.title))+"</span> "),(_vm.selected)?_c('ChevronUpIcon',{attrs:{"size":20}}):_c('ChevronDownIcon',{attrs:{"size":20}})],2)]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"slide"}},[(_vm.selected)?_c('div',{staticClass:"relative overflow-hidden transition-all duration-700"},[_c('div',{staticClass:"py-2"},[_c('p',{staticClass:"text-sm text-gray-700 tracking-wide leading-relaxed"},[_vm._v("\n          "+_vm._s(_vm.accordion.description)+"\n        ")])])]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/Accordion.vue?vue&type=template&id=116c825c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/Accordion.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Accordionvue_type_script_lang_js_ = ({
  name: 'BaseAccordion',
  props: {
    accordion: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  }
});
// CONCATENATED MODULE: ./components/base/Accordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_Accordionvue_type_script_lang_js_ = (Accordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/base/Accordion.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_Accordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c6274a8"
  
)

/* harmony default export */ var Accordion = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/EditResumeImage.vue?vue&type=template&id=58f54491&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._b({staticClass:"col-span-12 lg:col-span-6"},'div',_vm.$attrs,false),[_vm._ssrNode("<div class=\"w-full\"><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt class=\"mt-4 sm:-mt-4\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/EditResumeImage.vue?vue&type=template&id=58f54491&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/EditResumeImage.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5157104c"
  
)

/* harmony default export */ var EditResumeImage = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/BuyTradeImage.vue?vue&type=template&id=0dd5f927&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._b({staticClass:"col-span-12 lg:col-span-6"},'div',_vm.$attrs,false),[_vm._ssrNode("<div class=\"w-full\"><img"+(_vm._ssrAttr("src",__webpack_require__(54)))+" alt class=\"mt-4 sm:-mt-4\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/BuyTradeImage.vue?vue&type=template&id=0dd5f927&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/BuyTradeImage.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b8110da"
  
)

/* harmony default export */ var BuyTradeImage = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/TradingToolImage.vue?vue&type=template&id=0916808f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._b({staticClass:"col-span-12 lg:col-span-6"},'div',_vm.$attrs,false),[_vm._ssrNode("<div class=\"w-full sm:mt-20 xl:mt-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(60)))+" alt class=\"w-full\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/TradingToolImage.vue?vue&type=template&id=0916808f&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/TradingToolImage.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3cce8548"
  
)

/* harmony default export */ var TradingToolImage = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/resume_folder.941c037.gif";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ellipse-1.4a34989.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ellipse-2.4f6027c.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ellipse-3.397d7d7.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/star.a8c53d6.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/question.c93a029.png";

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_667b2c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_667b2c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_667b2c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_667b2c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_667b2c20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(38);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(39);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".text-header-gradient[data-v-667b2c20]{background:#3984f4;background:linear-gradient(169.4deg,#3984f4 -6.01%,#0cd3ff 36.87%,#2f7cf0 78.04%,#0e65e8 103.77%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.bg-partner[data-v-667b2c20]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:50%}.bg-trading-tools[data-v-667b2c20]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:cover;background-position:50%}.max-h-0[data-v-667b2c20]{max-height:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 90 */,
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=667b2c20&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full"},[_vm._ssrNode("<section id=\"hero\" class=\"w-full pb-8\" data-v-667b2c20>","</section>",[_c('BaseSection',[_c('div',{staticClass:"col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left"},[_c('span',{staticClass:"text-base text-gradient font-semibold uppercase",attrs:{"data-aos":"fade-right","data-aos-once":"true"}},[_vm._v("Sign Up Today")]),_vm._v(" "),_c('h1',{staticClass:"text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10",attrs:{"data-aos":"fade-right","data-aos-once":"true"}},[_c('span',{staticClass:"text-header-gradient"},[_vm._v("Stand Out ")]),_vm._v(" from the Crowd:\n        ")]),_vm._v(" "),_c('p',{staticClass:"paragraph hidden sm:block",attrs:{"data-aos":"fade-down","data-aos-once":"true","data-aos-delay":"300"}},[_vm._v("\n          Experience the next generation of resume building with our advanced AI-powered platform.\n        ")]),_vm._v(" "),_c('div',{staticClass:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"700"}},[_c('BaseButton',{staticClass:"max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white",on:{"click":function($event){return _vm.$router.push({ name: 'loginPage' })}}},[_vm._v("\n            Get Started\n          ")]),_vm._v(" "),_c('BaseButton',{staticClass:"max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"},[_c('span',[_vm._v("Download App")]),_vm._v(" "),_c('ChevronDownIcon',{staticClass:"mt-1 text-[#0c66ee]",attrs:{"size":20}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"hidden sm:block col-span-12 lg:col-span-6"},[_c('div',{staticClass:"w-full"},[_c('img',{staticClass:"-mt-4",attrs:{"data-aos":"fade-up","data-aos-once":"true","src":__webpack_require__(82),"alt":""}})])]),_vm._v(" "),_c('img',{staticClass:"hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6",attrs:{"data-aos":"fade-up","data-aos-delay":"300","src":__webpack_require__(83)}}),_vm._v(" "),_c('img',{staticClass:"hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6",attrs:{"data-aos":"fade-up","data-aos-delay":"300","src":__webpack_require__(84)}}),_vm._v(" "),_c('img',{staticClass:"hidden sm:block absolute bottom-56 right-24 w-6",attrs:{"data-aos":"fade-up","data-aos-delay":"300","src":__webpack_require__(85)}}),_vm._v(" "),_c('img',{staticClass:"hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8",attrs:{"data-aos":"fade-up","data-aos-delay":"300","src":__webpack_require__(86)}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"hidden max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12\" data-v-667b2c20>","</section>",[_vm._ssrNode("<div class=\"w-full flex flex-col lg:flex-row items-center justify-center\" data-v-667b2c20>","</div>",[_c('LandingCryptoStatistic',{staticClass:"xl:border-r border-gray-200 lg:px-8",attrs:{"data-aos":"fade-up","title":"🔥 Trending","datasets":_vm.trendings}}),_vm._ssrNode(" "),_c('LandingCryptoStatistic',{staticClass:"xl:border-r border-gray-200 lg:px-8",attrs:{"data-aos":"fade-up","data-aos-delay":"150","title":"🚀 Top Gainers","datasets":_vm.topGainers}}),_vm._ssrNode(" "),_c('LandingCryptoStatistic',{staticClass:"lg:px-8",attrs:{"data-aos":"fade-up","data-aos-delay":"300","title":"💎 Recently Added","datasets":_vm.recents}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"w-full mt-8\" data-v-667b2c20>","</section>",[_c('BaseSection',[_c('LandingBuyTradeImage',{staticClass:"sm:hidden mb-8"}),_vm._v(" "),_c('div',{staticClass:"col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4",attrs:{"data-aos":"fade-right"}},[_c('h2',{staticClass:"text-4xl font-semibold sm:pr-8 xl:pr-12"},[_vm._v("\n          Start Building "),_c('br',{staticClass:"hidden sm:block"}),_vm._v("\n          Your Winning Resume Today!\n        ")]),_vm._v(" "),_c('p',{staticClass:"paragraph"},[_vm._v("\n          Take the first step towards landing your dream job by creating a compelling resume with our user-friendly\n          platform. Our intuitive resume builder empowers you to showcase your skills, qualifications, and\n          achievements with ease.\n        ")])]),_vm._v(" "),_c('LandingBuyTradeImage',{staticClass:"hidden sm:block",attrs:{"data-aos":"fade-left"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"w-full mt-2\" data-v-667b2c20>","</section>",[_c('BaseSection',[_c('EditResumeImage',{attrs:{"data-aos":"fade-right"}}),_vm._v(" "),_c('div',{staticClass:"col-span-12 lg:col-span-6 mt-4 xl:mt-8 space-y-6 px-4",attrs:{"data-aos":"fade-left"}},[_c('h2',{staticClass:"text-4xl font-semibold sm:pr-8 xl:pr-12"},[_vm._v("Already have a Resume?")]),_vm._v(" "),_c('p',{staticClass:"paragraph"},[_vm._v("\n          Give your existing resume a professional makeover and increase its impact with our easy-to-use editing\n          tools. Whether you need to update your work experience, refine your skills section, or reformat the layout,\n          our platform provides a seamless editing experience.\n        ")])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-partner relative max-w-full sm:mx-6 my-8 shadow sm:rounded-2xl overflow-hidden\" data-v-667b2c20>","</section>",[_vm._ssrNode("<div class=\"w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center\" data-v-667b2c20>","</div>",[_vm._ssrNode("<h3 data-aos=\"flip-down\" class=\"text-2xl text-neutral-800 font-semibold\" data-v-667b2c20>Trusted Partners Worldwide</h3> <p data-aos=\"flip-down\" class=\"paragraph\" data-v-667b2c20>We're partners with countless major organisations around the globe</p> "),_vm._ssrNode("<div data-aos=\"fade-up\" class=\"flex flex-wrap items-center justify-center\" data-v-667b2c20>","</div>",_vm._l((['clever.png', 'diamon-cutts.png', 'swiss-finance.png', 'gambio.png']),function(img){return _c('LandingPartnerImage',{key:img,attrs:{"img":img}})}),1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden\" data-v-667b2c20>","</section>",[_vm._ssrNode("<div class=\"relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6\" data-v-667b2c20>","</div>",[_c('LandingTradingToolImage',{staticClass:"sm:hidden"}),_vm._ssrNode(" "),_vm._ssrNode("<div data-aos=\"fade-right\" class=\"col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8\" data-v-667b2c20>","</div>",[_vm._ssrNode("<h2 class=\"text-4xl font-semibold\" data-v-667b2c20>\n          Advanced Resume Builder Empowered by\n\n          <span class=\"text-header-gradient\" data-v-667b2c20>AI Technology</span></h2> <div class=\"space-y-2\" data-v-667b2c20><h4 class=\"text-lg font-medium\" data-v-667b2c20>Unleash the Power of AI .</h4> <p class=\"paragraph text-sm xl:text-base\" data-v-667b2c20>\n            Our AI algorithms analyze your skills, experiences, and qualifications to provide personalized suggestions\n            and optimize your resume's content, format, and keywords. With AI guidance, you can create a standout\n            resume that catches the attention of employers\n          </p></div> <div class=\"space-y-2\" data-v-667b2c20><h4 class=\"text-lg font-medium\" data-v-667b2c20>Professional Access and Non-stop Availability</h4> <p class=\"paragraph text-sm xl:text-base\" data-v-667b2c20>\n            We offer premium access to our resume builder, catering to both individuals and institutions. With high\n            availability and seamless performance, you can create or edit your resume anytime, anywhere. Our platform\n            ensures that you have the tools and resources at your fingertips to make a lasting impression on potential\n            employers.\n          </p></div> <div class=\"space-y-2\" data-v-667b2c20><h4 class=\"text-lg font-medium\" data-v-667b2c20>Dedicated Customer Support</h4> <p class=\"paragraph text-sm xl:text-base\" data-v-667b2c20>\n            We understand the importance of exceptional customer support. Our team of professionals is available\n            around the clock to assist you with any questions or concerns you may have. Whether you need guidance on\n            optimizing your resume or technical assistance, our dedicated support staff is here to provide timely and\n            personalized help.\n          </p></div> "),_vm._ssrNode("<div class=\"flex flex-col sm:flex-row\" data-v-667b2c20>","</div>",[_c('BaseButton',{staticClass:"px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base",on:{"click":function($event){return _vm.$router.push({ name: 'loginPage' })}}},[_vm._v("\n            Get Started\n          ")]),_vm._ssrNode(" "),_c('BaseButton',{staticClass:"bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full"},[_vm._v("\n            Learn More\n          ")])],2)],2),_vm._ssrNode(" "),_c('LandingTradingToolImage',{staticClass:"hidden sm:block",attrs:{"data-aos":"fade-left"}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden\" data-v-667b2c20>","</section>",[_vm._ssrNode("<div class=\"w-full py-16 flex flex-col items-center\" data-v-667b2c20>","</div>",[_vm._ssrNode("<h2 data-aos=\"flip-down\" class=\"text-3xl sm:text-4xl font-semibold text-center\" data-v-667b2c20>\n        Get started in just a few minutes\n      </h2> "),_vm._ssrNode("<div data-aos=\"fade-up\" class=\"relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8\" data-v-667b2c20>","</div>",_vm._l((_vm.steps),function(step){return _c('LandingStep',{key:step.title,attrs:{"step":step}})}),1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"w-full my-24\" data-v-667b2c20>","</section>",[_c('BaseSection',[_c('div',{staticClass:"col-span-12 lg:col-span-6",attrs:{"data-aos":"fade-right","data-aos-delay":"150"}},[_c('div',{staticClass:"w-full"},[_c('img',{staticClass:"w-full",attrs:{"src":__webpack_require__(87),"alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8",attrs:{"data-aos":"fade-left","data-aos-delay":"150"}},[_c('span',{staticClass:"text-base text-gradient font-semibold uppercase mb-4 sm:mb-2"},[_vm._v("Support")]),_vm._v(" "),_c('h2',{staticClass:"text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6"},[_vm._v("Frequently asked questions")]),_vm._v(" "),_c('ul',{staticClass:"shadow-box"},_vm._l((_vm.accordions),function(accordion,index){return _c('BaseAccordion',{key:index,attrs:{"accordion":accordion}})}),1)])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full my-10 flex justify-center\" data-v-667b2c20>","</div>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700",attrs:{"data-aos":"flip-down","data-aos-delay":"150","href":"#navbar"}},[_vm._ssrNode("<span data-v-667b2c20>Back to top</span> "),_c('ArrowUpIcon',{attrs:{"size":20}})],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=667b2c20&scoped=true&

// EXTERNAL MODULE: ./components/landing/EditResumeImage.vue + 2 modules
var EditResumeImage = __webpack_require__(77);

// EXTERNAL MODULE: ./mixins/aos.js
var aos = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    EditResumeImage: EditResumeImage["default"]
  },
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
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "667b2c20",
  "797b70b0"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseButton: __webpack_require__(16).default,BaseSection: __webpack_require__(72).default,LandingCryptoStatistic: __webpack_require__(73).default,LandingBuyTradeImage: __webpack_require__(78).default,LandingPartnerImage: __webpack_require__(74).default,LandingTradingToolImage: __webpack_require__(79).default,LandingStep: __webpack_require__(75).default,BaseAccordion: __webpack_require__(76).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map