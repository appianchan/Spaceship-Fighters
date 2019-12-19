import moving_obj from "./MovingObject";
import Bullet from "./bullets";
import Util from "./util";

// import shipimage from "../pictures/spaceship.png"


const DEFAULTS = {
    COLOR: "#505050",
    RADIUS: 25,
    SPEED: 6
};

class Ship extends moving_obj {
    constructor(props) {
        super(props);
        // this.image = url(shipimage);
        this.vel = props.vel || [0,0];
        this.radius = DEFAULTS.RADIUS;
        this.color = DEFAULTS.COLOR;
    }
    power(impulse) {
        // debugger;
        if (this.vel[0] === 0){
            this.vel[0] += impulse[0];
            this.vel[1] += impulse[1];
        }
        // debugger;
        if(impulse[0] === 10 && this.vel[0] === -10){
            this.vel[0] = 10;
        }
        if (impulse[0] === -10 && this.vel[0] === 10) {
            this.vel[0] = -10;
        }
        if(impulse[0] === 20){
            this.vel[0] = 0;
        }
        
    };

    fireBullet() {
        const x = this.pos[0];
        const y = this.pos[1];
        
        


        const bullet = new Bullet({
            pos: [x + 30, y],
            vel: [0,-4]
        });

        this.game.add(bullet);
    };
    draw(ctx) {
        // const image = document.getElementById('ship');
        var image = new Image();
        if (this.pos[0] <= 0){
            this.pos[0] = 0;
        } 
        if (this.pos[0] >= 940) {
            this.pos[0] = 940;
        } 
        // ctx.fillStyle = this.color;
        // ctx.beginPath();
        // ctx.arc(
        //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI
        // );
        // ctx.fill();

        

        image.src = "https://opengameart.org/sites/default/files/spaceship.pod_.1.png";
        ctx.drawImage(image, this.pos[0], this.pos[1], 60, 60);

    
    }

    isCollidedWith(otherObject) {
        const newcenter = [this.pos[0] + 30, this.pos[1] + 30]
        const centerDist = Util.dist(newcenter, otherObject.pos);
        return centerDist <= (this.radius + otherObject.radius);
    //     var x = 0;
    //     var y = 0;
    //     while(x <= 60)  {
    //         while (y <= 60){
    //         if ((otherObject.pos[0] + otherObject.radius) === (this.pos + x) ||
    //             (otherObject.pos[1] + otherObject.radius) === (this.pos + y)){
    //             return true;
    //         }
    //         y = y + 1;
    //         }
    //         x = x + 1;
    //     }
    //     return false;
    }
    move(timeDelta) {
        const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
        // timeDelta is number of milliseconds since last move
        // if the computer is busy the time delta will be larger
        // in this case the MovingObject should move farther in this frame
        // velocity of object is how far it should move in 1/60th of a second
        
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

        // if (this.game.isOutOfBounds(this.pos)) {
        //     // if (this.isWrappable) {
        //     //     this.pos = this.game.wrap(this.pos);
        //     // } else 

        //         this.game.remove(this);

        // }
    };


}

export default Ship;