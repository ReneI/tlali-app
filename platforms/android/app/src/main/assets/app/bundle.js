module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Details.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/platform");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created() {
    console.log("is IOS platform: " + tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isIOS"]);
    console.log("is Android platform: " + tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_0__["isAndroid"]);
  },

  data() {
    return {
      bookmarked: false
    };
  },

  methods: {
    toggleBookmark() {
      this.bookmarked = !this.bookmarked;
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/http/http.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Details.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {},

  data() {
    return {
      datos: []
    };
  },

  mounted() {
    http__WEBPACK_IMPORTED_MODULE_0__["getJSON"]("https://o2dstvq9sb.execute-api.us-west-2.amazonaws.com/dev/articles").then(result => {
      this.datos = result;
    }, error => {
      console.log(error);
    });
  },

  methods: {
    onButtonTap() {},

    showDetails() {
      this.$navigateTo(_Details__WEBPACK_IMPORTED_MODULE_1__["default"], {
        animated: true,
        transition: {
          name: "fade",
          duration: 380,
          curve: "easeIn"
        }
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Details.vue?vue&type=style&index=0&id=7bbfd9b7&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.checkout[data-v-7bbfd9b7] {\n    horizontal-align: left;\n    border-radius: 10%;\n    background-color: white;\n    width: 170;\n    padding: 5 15;\n    margin-left: 18;\n    margin-top: 32;\n}\n.getroomImg[data-v-7bbfd9b7] {}\n.getroomBtn[data-v-7bbfd9b7] {\n    color: black;\n    background-color: white;\n    border-color: transparent;\n    border-width: 1;\n    padding: 0;\n    margin: 0 0 0 15;\n    height: 20;\n    font-size: 12pt;\n    font-weight: 600;\n    left: 18;\n}\n.getroomTotal[data-v-7bbfd9b7] {\n    color: black;\n    font-weight: bold;\n    font-size: 17;\n    padding: 0;\n    margin: 0 0 0 15;\n    vertical-align: top;\n}\n.screen[data-v-7bbfd9b7],\n.toolbar[data-v-7bbfd9b7] {\n    width: 100%;\n}\n.toolbar StackLayout[data-v-7bbfd9b7] {\n    height: 50;\n    width: 50;\n    margin-top: 10;\n    padding: 15;\n}\n.toolbar Image[data-v-7bbfd9b7] {\n    height: 21;\n    width: 21;\n}\n.header[data-v-7bbfd9b7] {\n    margin-top: 44;\n    padding-left: 18;\n}\n.description[data-v-7bbfd9b7] {\n    padding: 0 18;\n}\n.background-image Image[data-v-7bbfd9b7] {\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgb(230, 222, 116) 100%);\n    width: 100%;\n}\n.room-page[data-v-7bbfd9b7] {\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.room-page-content[data-v-7bbfd9b7] {\n    padding: 0 0 60;\n}\n.room-pics Image.first-child[data-v-7bbfd9b7] {\n    margin-left: 18;\n}\n.room-pics Image[data-v-7bbfd9b7] {\n    margin-right: 12;\n}\n.get-this-room Button[data-v-7bbfd9b7] {\n    background-color: #F9F9F9;\n    border-radius: 9;\n    color: #3E3E3E;\n    font-size: 12pt;\n    font-weight: 600;\n    left: 18;\n    margin-bottom: 54;\n    margin-top: 32;\n    padding: 0 7 22 29;\n    text-transform: uppercase;\n}\n.get-this-room Image[data-v-7bbfd9b7] {\n    left: 30;\n    top: 49;\n}\n.get-this-room Label[data-v-7bbfd9b7] {\n    color: #000000;\n    font-size: 16pt;\n    font-weight: bold;\n    left: 59;\n    top: 60;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bottom-tabs[data-v-67410f3a],\n    .header[data-v-67410f3a] {\n        padding: 18 18;\n}\n.see-all[data-v-67410f3a] {\n        padding: 0 18;\n}\n.titulo[data-v-67410f3a]{\n        font-size: 14pt;\n        font-weight: 800;\n}\n.blue[data-v-67410f3a] {\n  color:rgb(26, 141, 149);\n}\n.tabs[data-v-67410f3a] {\n        font-size: 13pt;\n        font-weight: bold;\n        padding: 0 9;\n}\n.tabs Label[data-v-67410f3a] {\n        border-bottom-color: #686871;\n        border-bottom-width: 1;\n        color: #979797;\n        padding-bottom: 12;\n        text-align: center;\n}\n.tabs Label.active[data-v-67410f3a] {\n        border-bottom-color: #ED2567;\n        border-bottom-width: 1;\n        color: #ED2567;\n}\n.content[data-v-67410f3a] {\n        padding: 32 0 0 0;\n}\n.content .h1[data-v-67410f3a],\n    .content .h2[data-v-67410f3a] {\n        padding-left: 14;\n                font-size: 10pt;\n}\n.room-list-header[data-v-67410f3a] {\n        margin-top: 24;\n}\n.see-all[data-v-67410f3a] {\n        color: #979797;\n        font-size: 10pt;\n        font-weight: 600;\n        text-align: right;\n}\n.rooms[data-v-67410f3a] {\n        margin-top: 18;\n}\n.home-panel[data-v-67410f3a] {\n\t\tvertical-align: center;\n\t\tfont-size: 20;\n\t\tmargin: 15;\n}\n.description-label[data-v-67410f3a] {\n\t\tmargin-bottom: 15;\n}\n.room[data-v-67410f3a] {\n        padding-right: 12;\n}\n.room.first-child[data-v-67410f3a] {\n        margin-left: 18;\n}\n.room .h2[data-v-67410f3a] {\n        padding-left: 0;\n}\n.room Image[data-v-67410f3a] {\n        border-radius: 12;\n}\n.room Label.h2[data-v-67410f3a] {\n        color: #CE9F70;\n        margin-top: 8.29;\n}\n.stars[data-v-67410f3a] {\n        margin-top: 8;\n}\n.stars Image[data-v-67410f3a] {\n        padding-right: 1.71;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Details.vue?vue&type=template&id=7bbfd9b7&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    {
      staticClass: "page",
      attrs: { actionBarHidden: "true", backgroundSpanUnderStatusBar: "true" }
    },
    [
      _c(
        "GridLayout",
        { staticClass: "room-page screen", attrs: { columns: "*" } },
        [
          _c(
            "AbsoluteLayout",
            { staticClass: "background-image", attrs: { row: "0", col: "0" } },
            [
              _c("Image", { attrs: { src: "~/assets/images/Group_48@3x.png" } })
            ],
            1
          ),
          _c(
            "DockLayout",
            { attrs: { stretchLastChild: "true", row: "0", col: "0" } },
            [
              _c(
                "DockLayout",
                {
                  staticClass: "toolbar",
                  attrs: {
                    dock: "top",
                    height: "50",
                    stretchLastChild: "false"
                  }
                },
                [
                  _c(
                    "StackLayout",
                    {
                      attrs: { dock: "left" },
                      on: {
                        tap: function($event) {
                          _vm.$navigateBack()
                        }
                      }
                    },
                    [
                      _c("Image", {
                        attrs: { src: "~/assets/images/chevron-left.png" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      attrs: { dock: "right" },
                      on: {
                        tap: function($event) {
                          _vm.toggleBookmark()
                        }
                      }
                    },
                    [
                      !_vm.bookmarked
                        ? _c("Image", {
                            attrs: { src: "~/assets/images/saved.png" }
                          })
                        : _vm._e(),
                      _vm.bookmarked
                        ? _c("Image", {
                            attrs: { src: "~/assets/images/saved-selected.png" }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "ScrollView",
                { attrs: { dock: "bottom" } },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "room-page-content" },
                    [
                      _c(
                        "GridLayout",
                        {
                          staticClass: "header",
                          attrs: {
                            columns: "*,*",
                            rows: "auto,auto",
                            height: "78"
                          }
                        },
                        [
                          _c("Label", {
                            staticClass: "h1",
                            attrs: {
                              text: "TIUTLO NOTICIA",
                              row: "0",
                              col: "0",
                              colspan: "6"
                            }
                          }),
                          _c("Label", {
                            staticClass: "h2",
                            attrs: {
                              text: "SECCION",
                              row: "1",
                              col: "0",
                              colspan: "6"
                            }
                          })
                        ],
                        1
                      ),
                      _c("Label", {
                        staticClass: "description",
                        attrs: {
                          textWrap: "true",
                          text: "o sociis natoque penatibus et magnis dis"
                        }
                      }),
                      _c(
                        "ScrollView",
                        {
                          staticClass: "room-pics",
                          attrs: {
                            height: "185",
                            orientation: "horizontal",
                            loaded: "disableScrollBar"
                          }
                        },
                        [
                          _c("StackLayout", {
                            attrs: { orientation: "horizontal" }
                          })
                        ],
                        1
                      ),
                      _c(
                        "GridLayout",
                        {
                          staticClass: "checkout",
                          attrs: { rows: "*,auto", columns: "auto,auto" }
                        },
                        [
                          _c("Image", {
                            staticClass: "getroomImg",
                            attrs: {
                              width: "30",
                              col: "0",
                              rowSpan: "2",
                              verticalAlignment: "center",
                              src: "~/assets/images/saved.png"
                            }
                          }),
                          _c("Button", {
                            staticClass: "getroomBtn",
                            attrs: { col: "1", row: "0", text: "COMPARTIR" }
                          }),
                          _c("Label", {
                            staticClass: "getroomTotal",
                            attrs: {
                              col: "1",
                              row: "1",
                              text: "FACEBOOK TWITTER"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    {
      staticClass: "page",
      attrs: { actionBarHidden: "true", backgroundSpanUnderStatusBar: "true" }
    },
    [
      _c(
        "DockLayout",
        { staticClass: "screen", attrs: { stretchLastChild: "true" } },
        [
          _c(
            "GridLayout",
            {
              staticClass: "bottom-tabs",
              attrs: {
                columns: "*,*,*,*",
                height: "71",
                orientation: "horizontal",
                dock: "bottom"
              }
            },
            [
              _c("Image", {
                attrs: {
                  row: "0",
                  col: "0",
                  height: "20",
                  src: "~/assets/images/home.png"
                }
              }),
              _c("Image", {
                attrs: {
                  row: "0",
                  col: "1",
                  height: "20",
                  src: "~/assets/images/explore.png"
                }
              }),
              _c("Image", {
                attrs: {
                  row: "0",
                  col: "2",
                  height: "20",
                  src: "~/assets/images/saved.png"
                }
              }),
              _c("Image", {
                attrs: {
                  row: "0",
                  col: "3",
                  height: "20",
                  src: "~/assets/images/contacts.png"
                }
              })
            ],
            1
          ),
          _c(
            "ScrollView",
            { attrs: { dock: "top" } },
            [
              _c(
                "StackLayout",
                { attrs: { orientation: "vertical" } },
                [
                  _c(
                    "GridLayout",
                    {
                      staticClass: "header",
                      attrs: { rows: "auto", columns: "*,auto,auto" }
                    },
                    [
                      _c(
                        "StackLayout",
                        { staticClass: "page m-20" },
                        [
                          _c(
                            "Label",
                            [
                              _c(
                                "FormattedString",
                                [
                                  _c("Span", {
                                    attrs: {
                                      text: "DGO",
                                      fontSize: "28",
                                      underline: "true",
                                      color: "#3D4FBF",
                                      foregroundColor: "white",
                                      fontFamily: "Courier"
                                    }
                                  }),
                                  _c("Span", { attrs: { text: " Noticias." } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c("Image", {
                        attrs: {
                          src: "~/assets/images/search.png",
                          verticalAlignment: "center",
                          marginRight: "25",
                          row: "0",
                          col: "1",
                          height: "22"
                        }
                      }),
                      _c("Image", {
                        attrs: {
                          src: "~/assets/images/chevron-left.png",
                          verticalAlignment: "center",
                          marginRight: "25",
                          row: "0",
                          col: "0",
                          height: "22"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "GridLayout",
                    {
                      staticClass: "tabs",
                      attrs: { columns: "*,*,*,*,*", height: "30" }
                    },
                    [
                      _c("Label", {
                        staticClass: "active",
                        attrs: { text: "PORTADA", row: "0", col: "0" }
                      }),
                      _c("Label", {
                        attrs: { text: "COLUMNAS", row: "0", col: "1" }
                      }),
                      _c("Label", {
                        attrs: { text: "HOROSCOPOS", row: "0", col: "2" }
                      }),
                      _c("Label", {
                        attrs: { text: "POLITICA", row: "0", col: "3" }
                      }),
                      _c("Label", {
                        attrs: { text: "DURANGO", row: "0", col: "4" }
                      })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "content" },
                    [
                      _c("Label", {
                        staticClass: "h1",
                        attrs: { text: "NACIONAL" }
                      }),
                      _c(
                        "GridLayout",
                        {
                          staticClass: "room-list-header",
                          attrs: {
                            rows: "auto",
                            columns: "*,auto",
                            height: "19"
                          }
                        },
                        [
                          _c("Label", {
                            staticClass: "h2",
                            attrs: {
                              text: "hoy",
                              row: "0",
                              col: "0",
                              colspan: "6"
                            }
                          }),
                          _c("Label", {
                            staticClass: "see-all",
                            attrs: {
                              text: "ver todas",
                              row: "0",
                              col: "1",
                              colspan: "2"
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "ScrollView",
                        {
                          staticClass: "rooms",
                          attrs: {
                            height: "185",
                            orientation: "horizontal",
                            loaded: "disableScrollBar"
                          }
                        },
                        [
                          _c(
                            "StackLayout",
                            { attrs: { orientation: "horizontal" } },
                            [
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "first-child room",
                                  attrs: {
                                    width: "138",
                                    pageTransition: "fade"
                                  },
                                  on: {
                                    tap: function($event) {
                                      _vm.showDetails()
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "StackLayout",
                                    {
                                      staticClass: "stars",
                                      attrs: {
                                        height: "20",
                                        orientation: "horizontal"
                                      }
                                    },
                                    [
                                      _c("Label", {
                                        staticClass: "h2",
                                        attrs: {
                                          height: "10",
                                          text: "DEPORTES"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("Label", {
                                    staticClass: "h2",
                                    attrs: { height: "21", text: "NOTiICIA" }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "StackLayout",
                                {
                                  staticClass: "room",
                                  attrs: { width: "138" },
                                  on: {
                                    tap: function($event) {
                                      _vm.showDetails()
                                    }
                                  }
                                },
                                [
                                  _c("StackLayout", {
                                    staticClass: "stars",
                                    attrs: {
                                      height: "9.71",
                                      orientation: "horizontal"
                                    }
                                  }),
                                  _c("Label", {
                                    staticClass: "h2",
                                    attrs: { height: "21", text: "NOTiICIA" }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "GridLayout",
                    { staticClass: "cardSection" },
                    [
                      _c(
                        "ListView",
                        {
                          attrs: {
                            separatorColor: "transparent",
                            items: _vm.datos,
                            "+alias": "item"
                          }
                        },
                        [
                          _c("v-template", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var item = ref.item
                                  var $index = ref.$index
                                  var $even = ref.$even
                                  var $odd = ref.$odd
                                  return _c(
                                    "StackLayout",
                                    {
                                      attrs: {
                                        backgroundColor: $even ? "red" : "blue"
                                      }
                                    },
                                    _vm._l(item.article, function(i) {
                                      return _c("Label", { attrs: { text: i } })
                                    })
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._l(_vm.datos, function(item) {
                    return _c(
                      "card-view",
                      {
                        staticClass: "card",
                        attrs: {
                          elevation: "40",
                          radius: "10",
                          pageTransition: "fade"
                        },
                        on: {
                          tap: function($event) {
                            _vm.showDetails()
                          }
                        }
                      },
                      [
                        _c(
                          "stack-layout",
                          [
                            _c("label", { attrs: { text: "Hello World" } }),
                            _c("Label", {
                              staticClass: "h2",
                              attrs: { text: item.author }
                            }),
                            _c("Label", {
                              staticClass: "h2",
                              attrs: { text: item.location }
                            }),
                            _c("Label", {
                              staticClass: "h2",
                              attrs: { text: item.publishStatus }
                            }),
                            _c("Label", {
                              staticClass: "h2",
                              attrs: { text: item.s3Dir }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\nThe imported CSS rules must precede all other types of rules.\n*/\n/* @import '~nativescript-theme-core/css/core.light.css'; */\n\n:root {\n\t--fondo: brown;\n\t--letras: #ADB4B8;\n\t--h1:#3C454A;\n\t--lineasrojas:#F7696B;\n\t--menu:#F4F6F7;\n\n  }\n  \n.btn {\n\tfont-size: 18;\n}\n\n.h1, .h2, .h3 {\n\tfont-weight: bold;\n}\n\nLabel.h1 {\n\tfont-size: 18pt;\n}\n\nLabel.h2 {\n\tfont-size: 16pt;\n}\n\n.screen {\n\tbackground-color:var(--fondo);\n\tcolor: var(--letras);\n\tfont-family: \"Segoe UI\";\n}\n\n.header Label {\n\tfont-size: 35pt;\n\tfont-weight: bold;\n}\n\n.header Label.h2 {\n\tfont-size: 18pt;\n}\n\n.expandable {\n\tmargin-top: 24;\n\tposition: relative;\n\tcolor: #979797;\n\tborder-bottom-color: #979797;\n\tborder-bottom-width: 2;\n\tmargin-left: 18;\n\tmargin-right: 18;\n}\n\n.chevron {\n\tdisplay: none;\n}\n\n.chevron .chevron-one {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: -8%;\n\theight: 10%;\n\twidth: 35%;\n\tbackground: #979797;\n\ttransform: rotate(45deg);\n}\n\n.chevron .chevron-two {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\theight: 10%;\n\twidth: 35%;\n\tbackground: #979797;\n\ttransform: rotate(-45deg);\n}\n\n.icon {\n\tfont-family: 'icomoon';\n\tfont-size: 20;\n }\n\n\n\n \n.card {\n    background-color: #fff;\n    color: #4d4d4d;\n    margin: 15 15 0;\n}\n.card-layout {\n    padding: 20;\n}\n.card-layout .h1 {\n    margin-bottom: 15;\n}", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var nativescript_pager_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-pager/vue/index.js");
/* harmony import */ var nativescript_pager_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_pager_vue__WEBPACK_IMPORTED_MODULE_2__);

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
            if (false) {}
        
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        



const labelModule = __webpack_require__("tns-core-modules/ui/label");

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement('RadSideDrawer', () => __webpack_require__("nativescript-ui-sidedrawer").RadSideDrawer);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement('CardView', () => __webpack_require__("../node_modules/nativescript-cardview/cardview.js").CardView);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_pager_vue__WEBPACK_IMPORTED_MODULE_2___default.a);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = true;
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h('frame', [h(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"])])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Details.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_7bbfd9b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Details.vue?vue&type=template&id=7bbfd9b7&scoped=true&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Details_vue_vue_type_style_index_0_id_7bbfd9b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Details.vue?vue&type=style&index=0&id=7bbfd9b7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_7bbfd9b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_7bbfd9b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7bbfd9b7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Details.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Details.vue?vue&type=style&index=0&id=7bbfd9b7&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_7bbfd9b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Details.vue?vue&type=style&index=0&id=7bbfd9b7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_7bbfd9b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_7bbfd9b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_7bbfd9b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_7bbfd9b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_7bbfd9b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Details.vue?vue&type=template&id=7bbfd9b7&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_7bbfd9b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Details.vue?vue&type=template&id=7bbfd9b7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_7bbfd9b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_7bbfd9b7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67410f3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true},"main":"app.js","name":"tns-template-vue","version":"3.2.0"};

/***/ }),

/***/ "nativescript-ui-sidedrawer":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/color":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/color");

/***/ }),

/***/ "tns-core-modules/data/observable":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/debugger/devtools-elements.js":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/debugger/devtools-elements.js");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/trace":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/trace");

/***/ }),

/***/ "tns-core-modules/ui/builder":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/builder");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/core/weak-event-listener":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/weak-event-listener");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/label":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/label");

/***/ }),

/***/ "tns-core-modules/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/stack-layout");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/utils/types":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/types");

/***/ })

/******/ });