import moving_obj from "./MovingObject";
import Bullet from "./bullets"


const DEFAULTS = {
    // COLOR: "#505050",
    COLOR: "#503230",
    RADIUS: 100,
    SPEED: 6
};

class Ship extends moving_obj {
    constructor(props) {
        super(props);
        this.vel = props.vel || [0,0]
        this.radius = DEFAULTS.RADIUS;
        this.speed = DEFAULTS.SPEED;
        this.color = DEFAULTS.COLOR;
    }
    power(impulse) {
        this.vel[0] += impulse[0];
        this.vel[1] += impulse[1];
    };

    fireBullet() {


        // const relVel = Util.scale(
        //     Util.dir(this.vel),
        //     Bullet.SPEED
        // );

        // const bulletVel = [
        //     relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        // ];

        const bullet = new Bullet({
            pos: this.pos,
            vel: [0,-4],
            color: this.color,
            game: this.game
        });

        this.game.add(bullet);
    };
    draw(ctx) {
        if (this.game.isOutOfBounds(this.pos)){
            this.pos= [1000,700];
        } 
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI
        );
        ctx.fill();
    }


}

export default Ship;