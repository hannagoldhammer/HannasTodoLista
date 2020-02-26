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
/******/ 	__webpack_require__.p = "./public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const config = {\r\n    databaseURL: \"mongodb+srv://HannaGoldhammer:TheWalkingDead09@cluster0-rsihy.mongodb.net/todolist?retryWrites=true&w=majority\"\r\n}\r\n\r\nmodule.exports = config;\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {// Alla dependencies som jag behöver\r\nconst config = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\nconst todoRouter = __webpack_require__(/*! ./router/todoRouter */ \"./router/todoRouter.js\");\r\nconst sassMiddleware = __webpack_require__(/*! node-sass-middleware */ \"node-sass-middleware\");\r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst app = express();\r\n\r\n// För att läsa av data som postas till databasen. Denna datan är urlencodad.\r\napp.use(express.urlencoded({extended: true}));\r\n\r\n// Middleware för sass\r\napp.use(sassMiddleware({\r\n    src: path.join(__dirname, \"sass\"),\r\n    dest: path.join(__dirname, \"public\")\r\n}));\r\n\r\n// app.use(express.static(path.join(__dirname +'/public')))\r\napp.use(express.static('public'));\r\n\r\n// Läsa av views-mappen med ejs\r\napp.set(\"view engine\", \"ejs\");\r\n\r\n// Ligger här för att den ska kunna routa.\r\napp.use(todoRouter);\r\n\r\n\r\nif(false){}else{\r\n    \r\n}\r\n\r\n// Lyssna på port 8010\r\nconst port = process.env.PORT || 8030;\r\n\r\n// För att undvika error i terminalen när man använder mongoose.\r\nconst options = {\r\n    useUnifiedTopology: true, \r\n    useNewUrlParser: true\r\n}\r\n\r\n// Connecta till mongoose och starta sedan applikationen \r\nmongoose.connect(config.databaseURL, options).then(() => {\r\n    console.log(`You are successfully connected to port: ${port}`);\r\n    app.listen(port)\r\n})\r\n\r\nmodule.exports = {app};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./model/newTodos.js":
/*!***************************!*\
  !*** ./model/newTodos.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n\r\nconst schemaTodo = new mongoose.Schema(\r\n    {\r\n        // uppercase och lowercase: true. Uppdaterar det nya som skrivs in i listan och i databasen. Gammalt uppdateras inte. \r\n        text: {type: String, required: true, lowercase: true, minlength: 1}\r\n    }\r\n)\r\n\r\nconst newTodo = mongoose.model(\"New Todo\", schemaTodo);\r\n\r\nmodule.exports = newTodo;\n\n//# sourceURL=webpack:///./model/newTodos.js?");

/***/ }),

/***/ "./router/todoRouter.js":
/*!******************************!*\
  !*** ./router/todoRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst newTodos = __webpack_require__(/*! ../model/newTodos */ \"./model/newTodos.js\");\r\nconst router = express.Router();\r\n\r\n// Router för allt som ska in på förstasidan\r\nrouter.route(\"/todos\")\r\n    .get(async (req, res) => {\r\n        console.log(req.query)\r\n        const currentPage = req.query.page || 1;\r\n        const items = 3;\r\n        \r\n        const sort = req.query.sort;\r\n        \r\n        // Hitta alla newTodos som är sparade på databasen    \r\n        const allTodos = await newTodos.find();\r\n        const threeTodos = await newTodos.find().skip((currentPage - 1) * items).limit(items).sort({ text: sort });\r\n        const pagesCount = Math.ceil(allTodos.length / items)\r\n        \r\n        res.render(\"todos\", { threeTodos, pagesCount, currentPage });  \r\n    })\r\n\r\n    .post(async (req, res) => {\r\n        await new newTodos({ text: req.body.text }).save((error, success) => {\r\n            if (error) {\r\n                res.send(error._message)\r\n            } else\r\n                res.redirect(\"todos\")\r\n        });\r\n    })\r\n\r\n// Router för allt som ska in på update-sidan\r\nrouter.route(\"/update/:id\")\r\n    // För att uppdatera en todo\r\n    .get(async (req, res) => {\r\n        const updateSingelTodo = await newTodos.findById({ _id: req.params.id })\r\n        res.render(\"editTodo\", { updateSingelTodo });\r\n    })\r\n    .post(async (req, res) => {\r\n        await newTodos.updateOne({ _id: req.body.id }, { $set: { text: req.body.text } }, { runValidators: true });\r\n        res.redirect(\"/todos\");\r\n    })\r\n\r\n\r\nrouter.route(\"/todos/about\")\r\n    .get(async (req, res) => {\r\n        res.render(\"about\");\r\n    })\r\n\r\n// För att kunna göra en delete\r\nrouter.get(\"/delete/:id\", async (req, res) => {\r\n    await newTodos.deleteOne({ _id: req.params.id })\r\n    res.redirect(\"/todos\")\r\n})\r\n\r\nmodule.exports = router;\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./router/todoRouter.js?");

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./sass/main.scss?");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./index.js ./sass/main.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./index.js */\"./index.js\");\nmodule.exports = __webpack_require__(/*! ./sass/main.scss */\"./sass/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./index.js_./sass/main.scss?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "node-sass-middleware":
/*!***************************************!*\
  !*** external "node-sass-middleware" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-sass-middleware\");\n\n//# sourceURL=webpack:///external_%22node-sass-middleware%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });