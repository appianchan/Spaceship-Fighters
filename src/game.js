
import moving_obj from "./MovingObject";
import MainEnemy from "./MainEnemy";
import Ship from "./ship";
import Bullet from "./bullets"

class Game{
    
    constructor(){
        this.enemyships = [];
        this.bullets = [];
        this.ships = [];
        this.BG_COLOR = "#000000";
        this.DIM_X = 1000;
        this.DIM_Y = 800;
        this.FPS = 32;
    }
    
    createenemyships(){
        let i = 0;
        while(this.enemyships.length !== 6){
            this.enemyships.push(new MainEnemy({
                pos: [i * 200, 100],
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
    };
    checkCollisions() {
        const allObjects = this.allObjects();
        for (let i = 0; i < allObjects.length - 1; i++) {
            for (let j = i+1; j < allObjects.length; j++) {
                const obj1 = allObjects[i];
                const obj2 = allObjects[j];
                // debugger;
                if (obj1 instanceof Ship){
                    continue;
                };
                if (obj1 instanceof MainEnemy && obj2 instanceof MainEnemy) {
                    continue;
                };
                if (obj1.isCollidedWith(obj2)) {
                    //  && (!obj1 instanceof Ship || !obj2 instanceof Ship)
                    // debugger;
                    // const collision = obj1.collideWith(obj2);
                    // if (collision) return;
                    this.remove(obj1);
                    this.remove(obj2);
                    return;
                }
            }
        }
    };
    draw(ctx){
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        ctx.fillStyle = this.BG_COLOR;
        ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
        this.allObjects().forEach(function (object) {
            object.draw(ctx);
        });
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
