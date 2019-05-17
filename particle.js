class Particle {

    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        this.heading = 0;
        for (let a = 0; a < 40; a += 0.1) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    rotate(angle) {
        this.heading += angle;
        for(let i = 0; i < this.rays.length; i += 1) {
            this.rays[i].setAngle(radians(i / 10) + this.heading);
        }
    }

    update(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 6);
        for (let ray of this.rays) {
            ray.show();
        }
    }

    look(walls) {
        let scene = [];
        for (let ray of this.rays) {
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    let d = p5.Vector.dist(this.pos, pt);
                    const a = ray.direction.heading() - this.heading;
                    d *= cos(a);
                    if (d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
            scene.push(record);
        }
        return scene;
    }

}