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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MainEnemy.js":
/*!**************************!*\
  !*** ./src/MainEnemy.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n\n\nconst DEFAULTS = {\n    COLOR: \"#333456\",\n    RADIUS: 25,\n    SPEED: 4\n};\n\n\nclass MainEnemy extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(props){\n        super(props);\n        this.radius = DEFAULTS.RADIUS;\n        this.speed = DEFAULTS.SPEED;\n        this.color = DEFAULTS.COLOR;\n        this.health = 1;\n        this.vel = [0, 0];\n    }\n\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainEnemy);\n\n\n//# sourceURL=webpack:///./src/MainEnemy.js?");

/***/ }),

/***/ "./src/MovingObject.js":
/*!*****************************!*\
  !*** ./src/MovingObject.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\nclass MovingObject{\n    constructor(options){\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.radius = options.radius;\n        this.color = options.color;\n        this.game = options.game;\n\n        \n    }\n\n    draw(ctx){\n        ctx.fillStyle = this.color;\n\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI\n        );\n        ctx.fill();\n    }\n    collideWith(otherObject) {\n        \n    };\n    remove() {\n        this.game.remove(this);\n    };\n    isCollidedWith(otherObject) {\n        const centerDist = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dist(this.pos, otherObject.pos);\n        return centerDist <= (this.radius + otherObject.radius);\n    };\n    move(timeDelta) {\n        const NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n        // timeDelta is number of milliseconds since last move\n        // if the computer is busy the time delta will be larger\n        // in this case the MovingObject should move farther in this frame\n        // velocity of object is how far it should move in 1/60th of a second\n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n            offsetX = this.vel[0] * velocityScale,\n            offsetY = this.vel[1] * velocityScale;\n\n        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n        // if (this.game.isOutOfBounds(this.pos)) {\n        //     // if (this.isWrappable) {\n        //     //     this.pos = this.game.wrap(this.pos);\n        //     // } else \n                \n        //         this.game.remove(this);\n            \n        // }\n    };\n\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/MovingObject.js?");

/***/ }),

/***/ "./src/bullets.js":
/*!************************!*\
  !*** ./src/bullets.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n\n\nconst DEFAULTS = {\n    COLOR: \"#234567\",\n    RADIUS: 3,\n    SPEED: 100\n};\n\n\nclass Bullet extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(props) {\n        super(props);\n        this.radius = DEFAULTS.RADIUS;\n        this.speed = DEFAULTS.SPEED;\n        this.color = DEFAULTS.COLOR;\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/bullets.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _MainEnemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainEnemy */ \"./src/MainEnemy.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n\n\n\n\n\n\nclass Game{\n    \n    constructor(){\n        this.enemyships = [];\n        this.bullets = [];\n        this.ships = [];\n        this.BG_COLOR = \"#000000\";\n        this.DIM_X = 1000;\n        this.DIM_Y = 800;\n        this.FPS = 32;\n    }\n    \n    createenemyships(){\n        let i = 0;\n        while(this.enemyships.length !== 6){\n            this.enemyships.push(new _MainEnemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                pos: [i * 100, 100],\n                game: this\n            }));\n            i++;\n        }\n     \n        return this.enemyships;\n    }\n\n    isOutOfBounds(pos) {\n        return (pos[0] < 0) || (pos[1] < 0) ||\n            (pos[0] > this.DIM_X) || (pos[1] > this.DIM_Y);\n    };\n\n    allObjects(){\n        return [].concat(this.ships, this.enemyships, this.bullets);\n    }\n    addShip() {\n        const ship = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            pos: [800, 700],\n            game: this\n        });\n\n        this.add(ship);\n\n        return ship;\n    };\n\n    remove(object) {\n        if (object instanceof _bullets__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            this.bullets.splice(this.bullets.indexOf(object), 1);\n        } else if (object instanceof _MainEnemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            this.enemyships.splice(this.enemyships.indexOf(object), 1);\n        } else if (object instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n            this.ships.splice(this.ships.indexOf(object), 1);\n        } else {\n            throw new Error(\"unknown type of object\");\n        }\n    };\n    checkCollisions() {\n        const allObjects = this.allObjects();\n        for (let i = 0; i < allObjects.length - 1; i++) {\n            for (let j = i+1; j < allObjects.length; j++) {\n                const obj1 = allObjects[i];\n                const obj2 = allObjects[j];\n                // debugger;\n                if (obj1 instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]){\n                    continue;\n                };\n                if (obj1 instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n                    continue;\n                };\n\n                if (obj1.isCollidedWith(obj2)) {\n                    //  && (!obj1 instanceof Ship || !obj2 instanceof Ship)\n                    // debugger;\n                    // const collision = obj1.collideWith(obj2);\n                    // if (collision) return;\n                    this.remove(obj1);\n                    this.remove(obj2);\n                    return;\n                }\n            }\n        }\n    };\n    draw(ctx){\n        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n        ctx.fillStyle = this.BG_COLOR;\n        ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n        this.allObjects().forEach(function (object) {\n            object.draw(ctx);\n        });\n    }\n\n    step(delta) {\n        this.moveObjects(delta);\n        this.checkCollisions();\n    };\n\n    moveObjects(delta) {\n    this.allObjects().forEach(function (object) {\n        object.move(delta);\n    });\n}\n    \n    add(object) {\n        if (object instanceof _MainEnemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            this.enemyships.push(object);\n        } else if (object instanceof _bullets__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            this.bullets.push(object);\n        } else if (object instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n            this.ships.push(object);\n        } else {\n            throw new Error(\"unknown type of object\");\n        }\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass GameView{\n    constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n    this.ship = this.game.addShip();\n    this.enemyships = this.game.createenemyships();\n    this.MOVES = {\n        a: [-10, 0],\n        d: [10, 0]\n    };\n}\n\n\nbindKeyHandlers() {\n    const ship = this.ship;\n    const moves = ['w', 's', 'a', 'd'];\n\n    // Object.keys(MOVES).forEach(function (k) {\n    //     const move = this.MOVES[k];\n    //     key(k, function () { ship.power(move); });\n    // });\n    var i;\n    for(i = 0; i < moves.length; i++){\n        const control = moves[i];\n        const move = this.MOVES[control];\n        key(control, function () { ship.power(move); });\n        \n    }\n\n    key(\"space\", function () { ship.fireBullet(); });\n};\n\n\n\nstart() {\n    this.bindKeyHandlers();\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n};\n\nanimate(time) {\n    const timeDelta = time - this.lastTime;\n\n    this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n    \n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n};\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _MainEnemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainEnemy */ \"./src/MainEnemy.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _gameview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameview */ \"./src/gameview.js\");\n\n\n\n\n\n\n\n// const mo = new moving_obj({\n//     pos: [220, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// const enemy = new MainEnemy({\n//     pos: [800, 0],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// const player = new Ship({\n//     pos: [800, 700],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    // canvasEl.width = Game.DIM_X;\n    // canvasEl.height = Game.DIM_Y;\n    const ctx = canvasEl.getContext(\"2d\");\n    ctx.fillStyle = \"#FF0000\";\n    ctx.fillRect(0, 0, 1000, 800);\n    \n    // mo.draw(ctx);\n    // enemy.draw(ctx);\n    // player.draw(ctx);\n    const game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    new _gameview__WEBPACK_IMPORTED_MODULE_4__[\"default\"](game, ctx).start();\n});\n// window.player = player;\n// window.mo = mo;\n// window.enemy = enemy;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n\n\n\n\nconst DEFAULTS = {\n    COLOR: \"#505050\",\n    RADIUS: 25,\n    SPEED: 6\n};\n\nclass Ship extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(props) {\n        super(props);\n        this.vel = props.vel || [0,0]\n        this.radius = DEFAULTS.RADIUS;\n        this.speed = DEFAULTS.SPEED;\n        this.color = DEFAULTS.COLOR;\n    }\n    power(impulse) {\n        this.vel[0] += impulse[0];\n        this.vel[1] += impulse[1];\n    };\n\n    fireBullet() {\n\n\n        // const relVel = Util.scale(\n        //     Util.dir(this.vel),\n        //     Bullet.SPEED\n        // );\n\n        // const bulletVel = [\n        //     relVel[0] + this.vel[0], relVel[1] + this.vel[1]\n        // ];\n\n        const bullet = new _bullets__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            pos: this.pos,\n            vel: [0,-4],\n            color: this.color,\n            game: this.game\n        });\n\n        this.game.add(bullet);\n    };\n    draw(ctx) {\n        if (this.game.isOutOfBounds(this.pos)){\n            this.pos= [1000,700];\n        } \n        ctx.fillStyle = this.color;\n        ctx.beginPath();\n        ctx.arc(\n            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI\n        );\n        ctx.fill();\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Util = {\n    dist(pos1, pos2) {\n        return Math.sqrt(\n            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });