import moving_obj from "./MovingObject";

const DEFAULTS = {
    COLOR: "#333456",
    RADIUS: 25,
    SPEED: 4
};


class MainEnemy extends moving_obj{
    constructor(props){
        super(props);
        this.radius = DEFAULTS.RADIUS;
        this.speed = DEFAULTS.SPEED;
        this.color = DEFAULTS.COLOR;
        this.health = 1;
        this.vel = [0, 0];
    }

    
}

export default MainEnemy;
