import moving_obj from "./MovingObject";

const DEFAULTS = {
    COLOR: "#234567",
    RADIUS: 3,
    SPEED: 100
};


class Bullet extends moving_obj {
    constructor(props) {
        super(props);
        this.radius = DEFAULTS.RADIUS;
        this.color = DEFAULTS.COLOR;
    }


}

export default Bullet;