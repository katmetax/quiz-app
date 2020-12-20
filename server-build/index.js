/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.tsx":
/*!**************************!*\
  !*** ./server/index.tsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/store */ \"./src/store/index.tsx\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/App */ \"./src/App.tsx\");\n\n\n\n\n\n\n\n\n\nconst PORT = 8000;\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(\"^/$\", (req, res) => {\n  const context = {};\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(\"./build/index.html\"), \"utf-8\", (err, data) => {\n    if (err) {\n      console.log(err);\n      return res.status(500).send(`Error: ${err}`);\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n      store: _src_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null))))}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, \"../\", \"build\")));\napp.listen(PORT, () => {\n  console.log(`App launched on ${PORT}`);\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/index.tsx?");

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/App.scss?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var _components_quizComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/quizComponent */ \"./src/components/quizComponent/index.tsx\");\n/* harmony import */ var _components_resultsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/resultsPage */ \"./src/components/resultsPage/index.tsx\");\n/* harmony import */ var _data_quizData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/quizData */ \"./src/data/quizData.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"App-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    exact: true,\n    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_quizComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({}, props, {\n      questionData: _data_quizData__WEBPACK_IMPORTED_MODULE_5__[\"quizData\"]\n    }))\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/results-page\",\n    component: _components_resultsPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/components/quizComponent/index.tsx":
/*!************************************************!*\
  !*** ./src/components/quizComponent/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions/index.tsx\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/quizComponent/styles.scss\");\n\n\n\n\n\n\nconst QuizComponent = ({\n  questionData\n}) => {\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  const [currentIndex, setIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(-1);\n  const [pageNumber, setPageNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const quizState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state);\n\n  const clickHandler = (question, answer, answerIndex, questionNo, correctAnswer) => {\n    const answeredCorrectly = correctAnswer === answer;\n    selectedAnswer(question, answer, questionNo, answerIndex, answeredCorrectly);\n    setIndex(answerIndex);\n  };\n\n  const selectedAnswer = (question, answer, questionNo, answerIndex, answeredCorrectly) => {\n    return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"saveAnswer\"])({\n      question,\n      answer,\n      questionNo,\n      answerIndex,\n      answeredCorrectly\n    }));\n  };\n\n  const getSelectedIndex = questionNo => {\n    const questionSaved = quizState.quiz.filter(quizItems => quizItems.questionNo === questionNo)[0];\n\n    if (questionSaved) {\n      return setIndex(questionSaved.answerIndex);\n    }\n\n    return setIndex(-1);\n  };\n\n  const btnClick = (context, questionNo) => {\n    setPageNumber(pageNumber + (context === 'next' ? +1 : -1));\n    getSelectedIndex(questionNo);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Quiz App\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"quiz-container\",\n    \"data-testid\": \"question-root\"\n  }, questionData.map((item, questionIndex) => {\n    if (questionIndex === pageNumber) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: questionIndex\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, questionIndex + 1, \". \", item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        \"data-testid\": \"answers-list\"\n      }, item.answers.map((answer, answerIndex) => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: answerIndex,\n          className: currentIndex === answerIndex ? 'active' : '',\n          onClick: () => clickHandler(item.question, answer, answerIndex, questionIndex, item.correctAnswer),\n          \"data-testid\": \"answers-option\"\n        }, answer);\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"control-buttons\"\n      }, pageNumber + 1 > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"back-button\",\n        onClick: () => btnClick('prev', questionIndex - 1),\n        \"data-testid\": \"back-btn\"\n      }, \"Back\"), pageNumber + 1 < questionData.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"next-button\",\n        onClick: () => btnClick('next', questionIndex + 1),\n        disabled: currentIndex === -1,\n        \"data-testid\": \"next-btn\"\n      }, \"Next\"), pageNumber + 1 === questionData.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/results-page\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"next-button\",\n        \"data-testid\": \"results-btn\"\n      }, \"See results?\"))));\n    }\n\n    return null;\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizComponent);\n\n//# sourceURL=webpack:///./src/components/quizComponent/index.tsx?");

/***/ }),

/***/ "./src/components/quizComponent/styles.scss":
/*!**************************************************!*\
  !*** ./src/components/quizComponent/styles.scss ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/quizComponent/styles.scss?");

/***/ }),

/***/ "./src/components/resultsPage/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/resultsPage/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/components/resultsPage/styles.scss\");\n\n\n\n\n\nconst ResultsPage = () => {\n  const quizState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(state => state);\n\n  const userQuizResults = () => {\n    const totalQuestionNum = quizState.quiz.length;\n    const correctAnswerNum = quizState.quiz.filter(quizItems => quizItems.answeredCorrectly === true).length;\n    const halfOrMoreCorrectAnswers = correctAnswerNum >= totalQuestionNum / 2;\n    const result = halfOrMoreCorrectAnswers ? 'Won' : 'Lost';\n    return {\n      result: result,\n      correctAnswersNum: correctAnswerNum,\n      allQuestionsNum: totalQuestionNum\n    };\n  };\n\n  const {\n    result,\n    correctAnswersNum,\n    allQuestionsNum\n  } = userQuizResults();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"results-page-container\",\n    \"data-test\": \"results-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"You \", result, \"!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"You got \", correctAnswersNum, \" out of \", allQuestionsNum, \" questions right!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"retake-button\",\n    \"data-testid\": \"retake-btn\"\n  }, \"Take the quiz again?\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultsPage);\n\n//# sourceURL=webpack:///./src/components/resultsPage/index.tsx?");

/***/ }),

/***/ "./src/components/resultsPage/styles.scss":
/*!************************************************!*\
  !*** ./src/components/resultsPage/styles.scss ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/resultsPage/styles.scss?");

/***/ }),

/***/ "./src/data/quizData.js":
/*!******************************!*\
  !*** ./src/data/quizData.js ***!
  \******************************/
/*! exports provided: quizData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quizData\", function() { return quizData; });\nconst quizData = [{\n  question: \"What is the capital of Canada?\",\n  answers: [\"Vancouver\", \"Ottawa\", \"Toronto\"],\n  correctAnswer: \"Ottawa\"\n}, {\n  question: \"Which planet in our solar system has the most amount of moons?\",\n  answers: [\"Saturn\", \"Jupiter\", \"Neptune\"],\n  correctAnswer: \"Saturn\"\n}, {\n  question: \"What programming language was named after a TV show?\",\n  answers: [\"Ruby\", \"Python\", \"Elixir\"],\n  correctAnswer: \"Python\"\n}, {\n  question: \"What does an ichthyophobe have a fear of?\",\n  answers: [\"Fish\", \"Insects\", \"The number five\"],\n  correctAnswer: \"Fish\"\n}];\n\n//# sourceURL=webpack:///./src/data/quizData.js?");

/***/ }),

/***/ "./src/store/actions/index.tsx":
/*!*************************************!*\
  !*** ./src/store/actions/index.tsx ***!
  \*************************************/
/*! exports provided: saveAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveAnswer\", function() { return saveAnswer; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/store/constants.ts\");\n\nconst saveAnswer = payload => {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"SAVE_ANSWER\"],\n    payload\n  };\n};\n\n//# sourceURL=webpack:///./src/store/actions/index.tsx?");

/***/ }),

/***/ "./src/store/constants.ts":
/*!********************************!*\
  !*** ./src/store/constants.ts ***!
  \********************************/
/*! exports provided: SAVE_ANSWER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SAVE_ANSWER\", function() { return SAVE_ANSWER; });\nconst SAVE_ANSWER = 'SAVE_ANSWER';\n\n//# sourceURL=webpack:///./src/store/constants.ts?");

/***/ }),

/***/ "./src/store/index.tsx":
/*!*****************************!*\
  !*** ./src/store/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.tsx\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])()); // TODO: configure composeWithDevTools to only show on dev env\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/store/index.tsx?");

/***/ }),

/***/ "./src/store/reducers/index.tsx":
/*!**************************************!*\
  !*** ./src/store/reducers/index.tsx ***!
  \**************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/store/constants.ts\");\n\nconst initialState = {\n  quiz: []\n}; // TODO: Refactor reducer\n\nconst rootReducer = (state = initialState, action) => {\n  if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__[\"SAVE_ANSWER\"]) {\n    const newArray = state.quiz.concat(action.payload);\n    const newPayload = newArray.filter(item => {\n      return !(item.questionNo === action.payload.questionNo && item.answer !== action.payload.answer);\n    }).sort((prevItem, currentItem) => {\n      return prevItem.questionNo - currentItem.questionNo;\n    }).filter((item, index, arr) => {\n      const prevIndex = index - 1;\n      return prevIndex !== -1 ? item.questionNo !== arr[prevIndex].questionNo : item;\n    });\n    return Object.assign({}, state, {\n      quiz: newPayload\n    });\n  }\n\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/index.tsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ })

/******/ });