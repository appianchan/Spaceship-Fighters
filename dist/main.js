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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n\n\n\nconst DEFAULTS = {\n    COLOR: \"#333456\",\n    RADIUS: 25,\n    SPEED: 4\n};\n\n\nclass MainEnemy extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(props){\n        super(props);\n        this.radius = DEFAULTS.RADIUS;\n        this.color = DEFAULTS.COLOR;\n        this.health = 1;\n        this.vel = props.vel || [2, 0]\n    }\n    draw(ctx) {\n        // ctx.fillStyle = this.color;\n        \n        // ctx.beginPath();\n        // ctx.arc(\n            //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI\n            // );\n            // ctx.fill();\n        \n        var image = new Image();\n        image.src = \"https://www.pngkey.com/png/full/217-2170276_invader-space-invaders-enemy-png.png\";\n        ctx.drawImage(image, this.pos[0], this.pos[1], 50, 40);\n    }\n    fireBullet() {\n\n        const bullet = new _bullets__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            pos: this.pos,\n            vel: [0, 4],\n            \n        });\n        \n        this.game.add(bullet);\n    };\n\n    move(timeDelta) {\n        \n        const NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n        // timeDelta is number of milliseconds since last move\n        // if the computer is busy the time delta will be larger\n        // in this case the MovingObject should move farther in this frame\n        // velocity of object is how far it should move in 1/60th of a second\n        \n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n            offsetX = this.vel[0] * velocityScale,\n            offsetY = this.vel[1] * velocityScale;\n\n        // this.changeDirection();\n     \n\n        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n        \n        if(this.pos[0] >= 950){\n            this.vel[0] = -2\n        }\n        if (this.pos[0] <= 0) {\n            this.vel[0] = 2\n        }\n        \n        \n        \n    };\n\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainEnemy);\n\n\n//# sourceURL=webpack:///./src/MainEnemy.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n\n\nconst DEFAULTS = {\n    COLOR: \"#234567\",\n    RADIUS: 3,\n    SPEED: 100\n};\n\n\nclass Bullet extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(props) {\n        super(props);\n        this.radius = DEFAULTS.RADIUS;\n        this.color = DEFAULTS.COLOR;\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/bullets.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _MainEnemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainEnemy */ \"./src/MainEnemy.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n\n\n\n\n\n\nclass Game{\n    \n    constructor(){\n        this.enemyships = [];\n        this.bullets = [];\n        this.ships = [];\n        this.gamewon = false;\n        this.gameloss = false;\n        this.startscreen = true;\n        this.BG_COLOR = \"#000000\";\n        this.DIM_X = 1000;\n        this.DIM_Y = 800;\n        this.FPS = 32;\n\n    }\n    \n    createenemyships(){\n        let i = 0;\n        while(this.enemyships.length !== 6){\n            this.enemyships.push(new _MainEnemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                pos: [i * 150, 100],\n                game: this\n            }));\n            i++;\n        }\n     \n        return this.enemyships;\n    }\n\n    isOutOfBounds(pos) {\n        return (pos[0] < 0) || (pos[1] < 0) ||\n            (pos[0] > this.DIM_X) || (pos[1] > this.DIM_Y);\n    };\n\n    allObjects(){\n        // debugger;\n        return [].concat(this.enemyships, this.ships, this.bullets);\n    }\n    addShip() {\n        const ship = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            pos: [800, 700],\n            game: this\n        });\n\n        this.add(ship);\n\n        return ship;\n    };\n\n    remove(object) {\n        if (object instanceof _bullets__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            this.bullets.splice(this.bullets.indexOf(object), 1);\n        } else if (object instanceof _MainEnemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            this.enemyships.splice(this.enemyships.indexOf(object), 1);\n        } else if (object instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n            this.ships.splice(this.ships.indexOf(object), 1);\n        } else {\n            throw new Error(\"unknown type of object\");\n        }\n        if(this.enemyships.length === 0){\n            this.gamewon = true;\n        }\n    };\n    checkCollisions() {\n        const allObjects = this.allObjects();\n        for (let i = 0; i < allObjects.length - 1; i++) {\n            for (let j = i+1; j < allObjects.length; j++) {\n                const obj1 = allObjects[i];\n                const obj2 = allObjects[j];\n                // debugger;\n                // if (obj1 instanceof Ship){\n                //     continue;\n                // };\n                if (obj1 instanceof _MainEnemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"] && obj2 instanceof _MainEnemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n                    continue;\n                };\n                if (obj1.isCollidedWith(obj2)) {\n                    //  && (!obj1 instanceof Ship || !obj2 instanceof Ship)\n                    // debugger;\n                    // const collision = obj1.collideWith(obj2);\n                    // if (collision) return;\n                    if (obj1 instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"] || obj2 instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]){\n                        this.gameloss = true;\n                    }\n                    this.remove(obj1);\n                    this.remove(obj2);\n                    return;\n                }\n            }\n        }\n        return true;\n    };\n    draw(ctx){\n        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n        ctx.fillStyle = this.BG_COLOR;\n        ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n        if (this.gameloss === true){\n            var image = new Image();\n            image.src = \"http://vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/77/S2e16_You_lose.png/revision/latest?cb=20141109223427\";\n            ctx.drawImage(image, 60, 100, 900, 400);\n            \n        }else if(this.gamewon === true){\n            var image = new Image();\n            image.src = \"https://ak7.picdn.net/shutterstock/videos/34233727/thumb/1.jpg\";\n            ctx.drawImage(image, 60, 100, 900, 400);\n\n        } else if (this.startscreen === true) {\n            ctx.fillStyle = \"blue\";\n            ctx.font = \"30px Arial\";\n\n            ctx.fillText(\"Hello World\", 100, 500);\n        }else{\n        \n        this.allObjects().forEach(function (object) {\n            object.draw(ctx);\n        });\n        }\n    }\n    \n\n    step(delta, time) {\n        this.moveObjects(delta, time);\n        this.checkCollisions();\n        \n    };\n\n    moveObjects(delta, time) {\n        this.enemyfirebullet(time);\n    \n        this.allObjects().forEach(function (object) {\n            object.move(delta);\n        });\n    }\n\n    enemyfirebullet(time) {\n        if(time % 1000 >= 980){\n        for(let i = 0; i < this.enemyships.length; i++){\n          \n            \n                \n            let enemy = this.enemyships[i];\n            const bullet = new _bullets__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                pos: [enemy.pos[0],enemy.pos[1]+26],\n                vel: [0, 4],\n\n            });\n            this.add(bullet);\n                \n           \n            \n        }\n        }\n    }\n    \n    add(object) {\n        if (object instanceof _MainEnemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n            this.enemyships.push(object);\n        } else if (object instanceof _bullets__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n            this.bullets.push(object);\n        } else if (object instanceof _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n            this.ships.push(object);\n        } else {\n            throw new Error(\"unknown type of object\");\n        }\n    };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass GameView{\n    constructor(game, ctx) {\n\n    this.ctx = ctx;\n    this.game = game;\n    this.ship = this.game.addShip();\n    this.enemyships = this.game.createenemyships();\n    this.MOVES = {\n        a: [-10, 0],\n        d: [10, 0],\n        s: [20,0]\n    };\n    this.startscreen = true;\n}\n\n\nbindKeyHandlers() {\n    const ship = this.ship;\n    const game = this.game;\n    const moves = ['w', 's', 'a', 'd'];\n\n    // Object.keys(MOVES).forEach(function (k) {\n    //     const move = this.MOVES[k];\n    //     key(k, function () { ship.power(move); });\n    // });\n    var i;\n    for(i = 0; i < moves.length; i++){\n        const control = moves[i];\n        const move = this.MOVES[control];\n        key(control, function () { ship.power(move); });\n        key(control, function () { ship.power(move); });\n        \n        \n    }\n\n    key(\"space\", function () { ship.fireBullet(); });\n    key(\"return\", function () { game.startscreen = false; });\n};\n\n\n\nstart() {\n    this.bindKeyHandlers();\n    this.lastTime = 0;\n    // start the animation\n    this.openingscreen();\n    requestAnimationFrame(this.animate.bind(this));\n};\n\nanimate(time) {\n    const lol = time % 1000;\n\n    const timeDelta = time - this.lastTime;\n    \n    \n    \n    this.game.draw(this.ctx);\n    if(this.game.startscreen === false){\n        this.game.step(timeDelta, time);\n    }\n    this.lastTime = time;\n    \n    \n        \n    requestAnimationFrame(this.animate.bind(this));\n    \n   \n        \n    \n    \n    \n    \n    \n    // every call to animate requests causes another call to animate\n    \n};\n\nopeningscreen(){\n    this.ctx.fillStyle = \"blue\";\n    this.ctx.font = \"30px Arial\";\n\n    this.ctx.fillText(\"Hello World\", 100, 500);\n}\n\n// gameover(){\n//     var image = new Image();\n//     image.src = \"https://opengameart.org/sites/default/files/spaceship.pod_.1.png\";\n//     ctx.drawImage(image, this.pos[0], this.pos[1], 60, 60);\n// }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _MainEnemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainEnemy */ \"./src/MainEnemy.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _gameview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameview */ \"./src/gameview.js\");\n\n\n\n\n\n\n\n// const mo = new moving_obj({\n//     pos: [220, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// const enemy = new MainEnemy({\n//     pos: [800, 0],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// const player = new Ship({\n//     pos: [800, 700],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\nconsole.log(\"Webpack is working!\");\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    // canvasEl.width = Game.DIM_X;\n    // canvasEl.height = Game.DIM_Y;\n    const ctx = canvasEl.getContext(\"2d\");\n    ctx.fillStyle = \"#000000\";\n    ctx.fillRect(0, 0, 1000, 800);\n    \n    // mo.draw(ctx);\n    // enemy.draw(ctx);\n    // player.draw(ctx);\n    const game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    new _gameview__WEBPACK_IMPORTED_MODULE_4__[\"default\"](game, ctx).start();\n});\n// window.player = player;\n// window.mo = mo;\n// window.enemy = enemy;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _bullets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullets */ \"./src/bullets.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\n// import shipimage from \"../pictures/spaceship.png\"\n\n\nconst DEFAULTS = {\n    COLOR: \"#505050\",\n    RADIUS: 25,\n    SPEED: 6\n};\n\nclass Ship extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(props) {\n        super(props);\n        // this.image = url(shipimage);\n        this.vel = props.vel || [0,0];\n        this.radius = DEFAULTS.RADIUS;\n        this.color = DEFAULTS.COLOR;\n    }\n    power(impulse) {\n        // debugger;\n        if (this.vel[0] === 0){\n            this.vel[0] += impulse[0];\n            this.vel[1] += impulse[1];\n        }\n        // debugger;\n        if(impulse[0] === 10 && this.vel[0] === -10){\n            this.vel[0] = 10;\n        }\n        if (impulse[0] === -10 && this.vel[0] === 10) {\n            this.vel[0] = -10;\n        }\n        if(impulse[0] === 20){\n            this.vel[0] = 0;\n        }\n        \n    };\n\n    fireBullet() {\n        const x = this.pos[0];\n        const y = this.pos[1];\n        \n        \n\n\n        const bullet = new _bullets__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            pos: [x + 30, y],\n            vel: [0,-4]\n        });\n\n        this.game.add(bullet);\n    };\n    draw(ctx) {\n        // const image = document.getElementById('ship');\n        var image = new Image();\n        if (this.pos[0] <= 0){\n            this.pos[0] = 0;\n        } \n        if (this.pos[0] >= 940) {\n            this.pos[0] = 940;\n        } \n        // ctx.fillStyle = this.color;\n        // ctx.beginPath();\n        // ctx.arc(\n        //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI\n        // );\n        // ctx.fill();\n\n        \n\n        image.src = \"https://opengameart.org/sites/default/files/spaceship.pod_.1.png\";\n        ctx.drawImage(image, this.pos[0], this.pos[1], 60, 60);\n\n    \n    }\n\n    isCollidedWith(otherObject) {\n        const newcenter = [this.pos[0] + 30, this.pos[1] + 30]\n        const centerDist = _util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dist(newcenter, otherObject.pos);\n        return centerDist <= (this.radius + otherObject.radius);\n    //     var x = 0;\n    //     var y = 0;\n    //     while(x <= 60)  {\n    //         while (y <= 60){\n    //         if ((otherObject.pos[0] + otherObject.radius) === (this.pos + x) ||\n    //             (otherObject.pos[1] + otherObject.radius) === (this.pos + y)){\n    //             return true;\n    //         }\n    //         y = y + 1;\n    //         }\n    //         x = x + 1;\n    //     }\n    //     return false;\n    }\n    move(timeDelta) {\n        const NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n        // timeDelta is number of milliseconds since last move\n        // if the computer is busy the time delta will be larger\n        // in this case the MovingObject should move farther in this frame\n        // velocity of object is how far it should move in 1/60th of a second\n        \n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n            offsetX = this.vel[0] * velocityScale,\n            offsetY = this.vel[1] * velocityScale;\n\n        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n        // if (this.game.isOutOfBounds(this.pos)) {\n        //     // if (this.isWrappable) {\n        //     //     this.pos = this.game.wrap(this.pos);\n        //     // } else \n\n        //         this.game.remove(this);\n\n        // }\n    };\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/ship.js?");

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