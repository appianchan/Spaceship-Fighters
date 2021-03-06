
import moving_obj from "./MovingObject";
import MainEnemy from "./MainEnemy";
import Ship from "./ship";
import Bullet from "./bullets"

class Game{
    
    constructor(){
        this.enemyships = [];
        this.bullets = [];
        this.ships = [];
        this.gamewon = false;
        this.gameloss = false;
        this.startscreen = true;
        this.restart = false;
        this.BG_COLOR = "#000000";
        this.DIM_X = 1000;
        this.DIM_Y = 800;
        this.FPS = 32;

    }
    
    createenemyships(){
        this.enemyships = [];
        let i = 0;
        while(this.enemyships.length !== 6){
            this.enemyships.push(new MainEnemy({
                pos: [i * 150, 100],
                game: this
            }));
            i++;
        }
     
        return this.enemyships;
    }

    isOutOfBounds(pos) {
        return (pos[0] < 0) || (pos[1] < 0) ||
            (pos[0] > this.DIM_X) || (pos[1] > this.DIM_Y);
    };

    allObjects(){
        // debugger;
        return [].concat(this.enemyships, this.ships, this.bullets);
    }
    addShip() {
        this.ships = [];
        const ship = new Ship({
            pos: [800, 700],
            game: this
        });

        this.add(ship);

        return ship;
    };

    remove(object) {
        if (object instanceof Bullet) {
            this.bullets.splice(this.bullets.indexOf(object), 1);
        } else if (object instanceof MainEnemy) {
            this.enemyships.splice(this.enemyships.indexOf(object), 1);
        } else if (object instanceof Ship) {
            this.ships.splice(this.ships.indexOf(object), 1);
        } else {
            throw new Error("unknown type of object");
        }
        if(this.enemyships.length === 0){
            this.gamewon = true;
        }
    };
    checkCollisions() {
        const allObjects = this.allObjects();
        for (let i = 0; i < allObjects.length - 1; i++) {
            for (let j = i+1; j < allObjects.length; j++) {
                const obj1 = allObjects[i];
                const obj2 = allObjects[j];
                // debugger;
                // if (obj1 instanceof Ship){
                //     continue;
                // };
                if (obj1 instanceof MainEnemy && obj2 instanceof MainEnemy) {
                    continue;
                };
                if (obj1.isCollidedWith(obj2)) {
                    //  && (!obj1 instanceof Ship || !obj2 instanceof Ship)
                    // debugger;
                    // const collision = obj1.collideWith(obj2);
                    // if (collision) return;
                    if (obj1 instanceof Ship || obj2 instanceof Ship){
                        this.gameloss = true;
                    }
                    this.remove(obj1);
                    this.remove(obj2);
                    return;
                }
            }
        }
        return true;
    };
    draw(ctx){
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        ctx.fillStyle = this.BG_COLOR;
        ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
        if (this.gameloss === true){
            var image = new Image();
            image.src = "http://vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/77/S2e16_You_lose.png/revision/latest?cb=20141109223427";
            ctx.drawImage(image, 60, 100, 900, 400);
            
        }else if(this.gamewon === true){
            var image = new Image();
            image.src = "https://ak7.picdn.net/shutterstock/videos/34233727/thumb/1.jpg";
            ctx.drawImage(image, 60, 100, 900, 400);

        } else if (this.startscreen === true) {
            // ctx.fillStyle = "lawngreen";
            // ctx.font = "50px bold Verdana";
            // ctx.textBaseline = 'middle';
            // ctx.textAlign = "center";
            // ctx.fillText("Spaceship Fighter", 500, 200);


            // ctx.font = "20px Arial";
            // ctx.fillStyle = "DeepPink";
            // ctx.fillText("Use the 'a' and 'd' keys to move and the 's' key to stop moving", 500, 400)
            // ctx.fillText("Press space to shoot to destroy as many ships as you can!", 500, 430)


            ctx.font = "60px bold Gill Sans";
            ctx.fillStyle = "red";
            ctx.fillText("Press enter to start!", 270, 400)
            //500 is the width of the canvas / 2

        }else{
        
        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });
        }

        if (this.restart === true){
            this.gamewon = false;
            this.gameloss = false;
            this.addShip();
            this.createenemyships();
            this.bullets = [];
            this.restart = false;
            // this.allObjects().forEach(function (object) {
            //     object.draw(ctx);
            // });

        }
    }
    

    step(delta, time) {
        this.moveObjects(delta, time);
        this.checkCollisions();
        
    };

    moveObjects(delta, time) {
        this.enemyfirebullet(time);
    
        this.allObjects().forEach(function (object) {
            object.move(delta);
        });
    }

    enemyfirebullet(time) {
        if(time % 1000 >= 980){
        for(let i = 0; i < this.enemyships.length; i++){
          
            
                
            let enemy = this.enemyships[i];
            const bullet = new Bullet({
                pos: [enemy.pos[0],enemy.pos[1]+26],
                vel: [0, 4],

            });
            this.add(bullet);
                
           
            
        }
        }
    }
    
    add(object) {
        if (object instanceof MainEnemy) {
            this.enemyships.push(object);
        } else if (object instanceof Bullet) {
            this.bullets.push(object);
        } else if (object instanceof Ship) {
            this.ships.push(object);
        } else {
            throw new Error("unknown type of object");
        }
    };
}

export default Game;
