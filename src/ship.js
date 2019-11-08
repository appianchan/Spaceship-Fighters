import moving_obj from "./MovingObject";
import Bullet from "./bullets"


const DEFAULTS = {
    COLOR: "#505050",
    RADIUS: 25,
    SPEED: 6
};

class Ship extends moving_obj {
    constructor(props) {
        super(props);
        this.vel = props.vel || [0,0]
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



        const bullet = new Bullet({
            pos: this.pos,
            vel: [0,-4]
        });

        this.game.add(bullet);
    };
    draw(ctx) {
        if (this.pos[0] <= 0){
            this.pos[0] = 0;
        } 
        if (this.pos[0] >= 1000) {
            this.pos[0] = 1000;
        } 
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI
        );
        ctx.fill();
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