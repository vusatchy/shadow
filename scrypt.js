const size = 60;
let walls = []
let particle;
function setup() {
    createCanvas(1550, 770);
    /*for (let i = 0; i < 5; i++) {

        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);

        walls.push(new Boundary(x1, y1, x2, y2));
    }*/

    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(0, height, 0, 0));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(width, 0, width, height));

    drawMap(walls);

    particle = new Particle();
}

function draw() {
    background(0);
    particle.update(mouseX, mouseY)
    particle.show();
    for (let wall of walls) {
        wall.show();
    }
    particle.look(walls);
}


function drawMap(walls) {

    //outher boundaries
    walls.push(new Boundary(size, size, width - size, size));
    walls.push(new Boundary(size, height - size, size, size));
    walls.push(new Boundary(width - size, height - size, size, height - size));
    walls.push(new Boundary(width - size, size, width - size, height - size));

    //left part
    let wallSize1 = 300;
    walls.push(new Boundary(size, (height - 2 * size) / 4, size + wallSize1, (height - 2 * size) / 4));
    walls.push(new Boundary(size, (height - 2 * size) / 4 + size, size + wallSize1, (height - 2 * size) / 4 + size));
    walls.push(new Boundary(size + wallSize1, (height - 2 * size) / 4, size + wallSize1, (height - 2 * size) / 4 + size));

    let wallSize2 = 150;
    walls.push(new Boundary(size + wallSize1, (height - 2 * size) / 4 + size, size + wallSize1,
        (height - 2 * size) / 4 + size + wallSize2));
    walls.push(new Boundary(wallSize1, (height - 2 * size) / 4 + size, wallSize1,
        (height - 2 * size) / 4 + size + wallSize2));
    walls.push(new Boundary(wallSize1, (height - 2 * size) / 4 + size + wallSize2, wallSize1 + size,
        (height - 2 * size) / 4 + size + wallSize2));

    let wallSize3 = 150;
    walls.push(new Boundary(wallSize1, 3 * (height - 2 * size) / 4, wallSize1 + wallSize3 + size,
        3 * (height - 2 * size) / 4));
    walls.push(new Boundary(wallSize1, 3 * (height - 2 * size) / 4 + size, wallSize1 + wallSize3,
        3 * (height - 2 * size) / 4 + size));
    walls.push(new Boundary(wallSize1, 3 * (height - 2 * size) / 4, wallSize1,
        3 * (height - 2 * size) / 4 + size));
    walls.push(new Boundary(wallSize1 + wallSize3, 3 * (height - 2 * size) / 4, wallSize1 + wallSize3,
        3 * (height - 2 * size) / 4 + size));


    walls.push(new Boundary(wallSize1 + wallSize3, 3 * (height - 2 * size) / 4, wallSize1 + wallSize3,
        height - size));
    walls.push(new Boundary(wallSize1 + wallSize3 + size, 3 * (height - 2 * size) / 4, wallSize1 + wallSize3 + size,
        height - size));


    //small square
    walls.push(new Boundary(46 * width / 100, (height - 2 * size) / 4, size + 46 * width / 100, (height - 2 * size) / 4));
    walls.push(new Boundary(46 * width / 100, (height - 2 * size) / 4 + size, size + 46 * width / 100, (height - 2 * size) / 4 + size));
    walls.push(new Boundary(46 * width / 100, (height - 2 * size) / 4 + size, 46 * width / 100, (height - 2 * size) / 4));
    walls.push(new Boundary(46 * width / 100 + size, (height - 2 * size) / 4 + size, 46 * width / 100 + size, (height - 2 * size) / 4));


    walls.push(new Boundary(46 * width / 100, 3 * (height - 2 * size) / 4, size + 46 * width / 100, 3 * (height - 2 * size) / 4));
    walls.push(new Boundary(46 * width / 100, 3 * (height - 2 * size) / 4 + size, size + 46 * width / 100, 3 * (height - 2 * size) / 4 + size));
    walls.push(new Boundary(46 * width / 100, 3 * (height - 2 * size) / 4 + size, 46 * width / 100, 3 * (height - 2 * size) / 4));
    walls.push(new Boundary(46 * width / 100 + size, 3 * (height - 2 * size) / 4 + size, 46 * width / 100 + size, 3 * (height - 2 * size) / 4));


    //right part
    let wallSize4 = 5 * size;
    walls.push(new Boundary(60 * width / 100, 0 + 2 * size, 60 * width / 100 + wallSize4, 0 + 2 * size));
    walls.push(new Boundary(60 * width / 100, height - 2 * size, 60 * width / 100 + wallSize4, height - 2 * size));
    walls.push(new Boundary(60 * width / 100 + wallSize4, height - 2 * size, 60 * width / 100 + wallSize4, 0 + 2 * size));
    walls.push(new Boundary(60 * width / 100, 0 + 3 * size, 60 * width / 100 + wallSize4 - size, 0 + 3 * size));
    walls.push(new Boundary(60 * width / 100, height - 3 * size, 60 * width / 100 + wallSize4 - size, height - 3 * size));
    walls.push(new Boundary(60 * width / 100 + wallSize4 - size, height - 3 * size, 60 * width / 100 + wallSize4 - size, 0 + 3 * size));
    walls.push(new Boundary(60 * width / 100, 0 + 2 * size, 60 * width / 100, 0 + 3 * size));
    walls.push(new Boundary(60 * width / 100, height - 2 * size, 60 * width / 100, height - 3 * size));

    let wallsize5 = 2 * size;
    walls.push(new Boundary(60 * width / 100, 0 + 3 * size, 60 * width / 100, 0 + 3 * size + wallsize5));
    walls.push(new Boundary(60 * width / 100 + size, 0 + 3 * size, 60 * width / 100 + size, 0 + 3 * size + wallsize5));
    walls.push(new Boundary(60 * width / 100, 0 + 3 * size + wallsize5, 60 * width / 100 + size, 0 + 3 * size + wallsize5));


    walls.push(new Boundary(60 * width / 100, height - 3 * size, 60 * width / 100, height - 3 * size - wallsize5));
    walls.push(new Boundary(60 * width / 100 + size, height - 3 * size, 60 * width / 100 + size, height - 3 * size - wallsize5));
    walls.push(new Boundary(60 * width / 100, height - 3 * size - wallsize5, 60 * width / 100 + size, height - 3 * size - wallsize5));

    //inner square
    walls.push(new Boundary(60 * width / 100 + 2 * size, 0 + 3 * size + wallsize5, 60 * width / 100  + 3 * size, 0 + 3 * size + wallsize5));
    walls.push(new Boundary(60 * width / 100 + 2 * size, 0 + 3 * size + wallsize5 - size, 60 * width / 100  + 3 * size, 0 + 3 * size + wallsize5 - size));
    walls.push(new Boundary(60 * width / 100 + 2 * size, 0 + 3 * size + wallsize5, 60 * width / 100 + 2 * size, 0 + 3 * size + wallsize5 - size));
    walls.push(new Boundary(60 * width / 100 + 3 * size, 0 + 3 * size + wallsize5, 60 * width / 100 + 3 * size, 0 + 3 * size + wallsize5 - size));




}