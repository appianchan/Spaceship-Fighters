
class GameView{
    constructor(game, ctx) {

    this.ctx = ctx;
    this.game = game;
    this.ship = this.game.addShip();
    this.enemyships = this.game.createenemyships();
    this.MOVES = {
        a: [-10, 0],
        d: [10, 0],
        s: [20,0]
    };
    this.startscreen = true;
}


bindKeyHandlers() {
    const ship = this.ship;
    const game = this.game;
    const moves = ['w', 's', 'a', 'd'];

    // Object.keys(MOVES).forEach(function (k) {
    //     const move = this.MOVES[k];
    //     key(k, function () { ship.power(move); });
    // });
    var i;
    for(i = 0; i < moves.length; i++){
        const control = moves[i];
        const move = this.MOVES[control];
        key(control, function () { ship.power(move); });
        key(control, function () { ship.power(move); });
        
        
    }
    
    // key("r", function () { game.restart = true; });
    key("space", function () { ship.fireBullet(); });
    key("return", function () { game.startscreen = false; });
};



start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
};

animate(time) {
    const lol = time % 1000;

    const timeDelta = time - this.lastTime;
    
    
    
    this.game.draw(this.ctx);
    if(this.game.startscreen === false){
        if (this.game.restart === true){
            this.bindKeyHandlers();
            this.game.restart = false;
            this.game.gamewon = false;
            this.game.gameloss = false;
            this.game.addShip();
            this.game.createenemyships();
        }
        this.game.step(timeDelta, time);
    }
    this.lastTime = time;
    
    
        
    requestAnimationFrame(this.animate.bind(this));
    
   
        
    
    
    
    
    
    // every call to animate requests causes another call to animate
    
};

// gameover(){
//     var image = new Image();
//     image.src = "https://opengameart.org/sites/default/files/spaceship.pod_.1.png";
//     ctx.drawImage(image, this.pos[0], this.pos[1], 60, 60);
// }
}
export default GameView;