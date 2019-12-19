import moving_obj from "./MovingObject";
import Bullet from "./bullets"

const DEFAULTS = {
    COLOR: "#333456",
    RADIUS: 25,
    SPEED: 4
};


class MainEnemy extends moving_obj{
    constructor(props){
        super(props);
        this.radius = DEFAULTS.RADIUS;
        this.color = DEFAULTS.COLOR;
        this.health = 1;
        this.vel = props.vel || [2, 0]
    }
    draw(ctx) {
        // ctx.fillStyle = this.color;
        
        // ctx.beginPath();
        // ctx.arc(
            //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI
            // );
            // ctx.fill();
        var image = new Image();
        image.src = "https://www.pngkey.com/png/full/217-2170276_invader-space-invaders-enemy-png.png";
        ctx.drawImage(image, this.pos[0], this.pos[1], 60, 60);
    }
    fireBullet() {

        const bullet = new Bullet({
            pos: this.pos,
            vel: [0, 4],
            
        });
        
        this.game.add(bullet);
    };

    move(timeDelta) {
        
        const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
        // timeDelta is number of milliseconds since last move
        // if the computer is busy the time delta will be larger
        // in this case the MovingObject should move farther in this frame
        // velocity of object is how far it should move in 1/60th of a second
        
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        // this.changeDirection();
     

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        
        if(this.pos[0] >= 999){
            this.vel[0] = -2
        }
        if (this.pos[0] <= 0) {
            this.vel[0] = 2
        }
        
        
        
    };

    
}

export default MainEnemy;
