"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Temporizador.tsx":
/*!*************************************!*\
  !*** ./components/Temporizador.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Temporizador; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Temporizador_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Temporizador.module.css */ \"./styles/Temporizador.module.css\");\n/* harmony import */ var _styles_Temporizador_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Temporizador_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown-circle-timer */ \"./node_modules/react-countdown-circle-timer/lib/index.module.js\");\n\n\n\nfunction Temporizador(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Temporizador_module_css__WEBPACK_IMPORTED_MODULE_2___default().temporizador),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_1__.CountdownCircleTimer, {\n            duration: props.duracao,\n            size: 120,\n            isPlaying: true,\n            onComplete: props.tempoEsgotado,\n            colors: [\n                \"#004777\",\n                \"#F7B801\",\n                \"#A30000\",\n                \"#A30000\"\n            ],\n            colorsTime: [\n                7,\n                5,\n                2,\n                0\n            ],\n            children: function(param) {\n                var remainingTime = param.remainingTime;\n                return remainingTime;\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\quiz\\\\components\\\\Temporizador.tsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\quiz\\\\components\\\\Temporizador.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n};\n_c = Temporizador;\nvar _c;\n$RefreshReg$(_c, \"Temporizador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RlbXBvcml6YWRvci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBc0Q7QUFDYTtBQVFwRCxTQUFTRSxZQUFZLENBQUNDLEtBQXdCLEVBQUU7SUFDM0QscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCxxRkFBbUI7a0JBQy9CLDRFQUFDQyw4RUFBb0I7WUFDakJNLFFBQVEsRUFBRUosS0FBSyxDQUFDSyxPQUFPO1lBQ3ZCQyxJQUFJLEVBQUUsR0FBRztZQUNUQyxTQUFTO1lBQ1RDLFVBQVUsRUFBRVIsS0FBSyxDQUFDUyxhQUFhO1lBQy9CQyxNQUFNLEVBQUU7Z0JBQUMsU0FBUztnQkFBRSxTQUFTO2dCQUFFLFNBQVM7Z0JBQUUsU0FBUzthQUFDO1lBQ3BEQyxVQUFVLEVBQUU7QUFBQyxpQkFBQztBQUFFLGlCQUFDO0FBQUUsaUJBQUM7QUFBRSxpQkFBQzthQUFDO3NCQUN2QjtvQkFBR0MsYUFBYSxTQUFiQSxhQUFhO3VCQUFPQSxhQUFhO2FBQUE7Ozs7O2dCQUNsQjs7Ozs7WUFDckIsQ0FDVDtDQUNKO0FBZHVCYixLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVtcG9yaXphZG9yLnRzeD9iNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1RlbXBvcml6YWRvci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBDb3VudGRvd25DaXJjbGVUaW1lciB9IGZyb20gJ3JlYWN0LWNvdW50ZG93bi1jaXJjbGUtdGltZXInXHJcblxyXG5pbnRlcmZhY2UgVGVtcG9yaXphZG9yUHJvcHMge1xyXG4gICAga2V5OiBhbnlcclxuICAgIGR1cmFjYW86IG51bWJlclxyXG4gICAgdGVtcG9Fc2dvdGFkbzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZW1wb3JpemFkb3IocHJvcHM6IFRlbXBvcml6YWRvclByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVtcG9yaXphZG9yfT5cclxuICAgICAgICAgICAgPENvdW50ZG93bkNpcmNsZVRpbWVyXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17cHJvcHMuZHVyYWNhb31cclxuICAgICAgICAgICAgICAgIHNpemU9ezEyMH1cclxuICAgICAgICAgICAgICAgIGlzUGxheWluZ1xyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZT17cHJvcHMudGVtcG9Fc2dvdGFkb31cclxuICAgICAgICAgICAgICAgIGNvbG9ycz17WycjMDA0Nzc3JywgJyNGN0I4MDEnLCAnI0EzMDAwMCcsICcjQTMwMDAwJ119XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNUaW1lPXtbNywgNSwgMiwgMF19PlxyXG4gICAgICAgICAgICAgICAgeyh7IHJlbWFpbmluZ1RpbWUgfSkgPT4gcmVtYWluaW5nVGltZX1cclxuICAgICAgICAgICAgPC9Db3VudGRvd25DaXJjbGVUaW1lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDb3VudGRvd25DaXJjbGVUaW1lciIsIlRlbXBvcml6YWRvciIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwidGVtcG9yaXphZG9yIiwiZHVyYXRpb24iLCJkdXJhY2FvIiwic2l6ZSIsImlzUGxheWluZyIsIm9uQ29tcGxldGUiLCJ0ZW1wb0VzZ290YWRvIiwiY29sb3JzIiwiY29sb3JzVGltZSIsInJlbWFpbmluZ1RpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Temporizador.tsx\n");

/***/ })

});