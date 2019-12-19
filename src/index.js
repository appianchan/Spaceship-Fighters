import moving_obj from "./MovingObject";
import MainEnemy from "./MainEnemy";
import Ship from "./ship";
import Game from "./game";
import GameView from "./gameview"


// console.log("Webpack is working!");


document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById("game-canvas");
    // canvasEl.width = Game.DIM_X;
    // canvasEl.height = Game.DIM_Y;
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 1000, 800);
    
    // mo.draw(ctx);
    // enemy.draw(ctx);
    // player.draw(ctx);
    const game = new Game();
    new GameView(game, ctx).start();
});
// window.player = player;
// window.mo = mo;
// window.enemy = enemy;