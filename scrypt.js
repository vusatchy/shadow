
let walls = [];
let particle;
const sceneW = 800;
const sceneH = 800;
function setup() {
    createCanvas(1600, 800);
    /*for (let i = 0; i < 5; i++) {

        let x1 = random(sceneW);
        let x2 = random(sceneW);
        let y1 = random(sceneH);
        let y2 = random(sceneH);

        walls.push(new Boundary(x1, y1, x2, y2));
    }*/

    walls.push(new Boundary(0, 0, sceneW, 0));
    walls.push(new Boundary(0, sceneH, 0, 0));
    walls.push(new Boundary(sceneW, sceneH, 0, sceneH));
    walls.push(new Boundary(sceneW, 0, sceneW, sceneH));

    drawMap(walls);

    particle = new Particle();
}

function draw() {

    if(keyIsDown(LEFT_ARROW)) {
        particle.rotate(0.05);
        console.log(particle.rays.length);
    } else if(keyIsDown(RIGHT_ARROW)) {
        particle.rotate(-0.05);
    }


    background(0);
    particle.update(mouseX, mouseY)
    particle.show();
    for (let wall of walls) {
        wall.show();
    }
    const scene = particle.look(walls); 
    const w = sceneW / scene.length;
    push();
    translate(sceneW, 0);
    for(let i = 0 ; i < scene.length ; i++) {
        noStroke();
        const b = map(scene[i],0 ,sceneW ,255, 0);
        const h = map(scene[i],0 ,sceneW ,sceneH, 0);
        fill(b);
        rectMode(CENTER);
        rect(i * w + w / 2, sceneH / 2, w, h);
    }
    pop();
}


function drawMap(walls) {
	const size = sceneW * 60 / 1550;
    //outher boundaries
    walls.push(new Boundary(size, size, sceneW - size, size));
    walls.push(new Boundary(size, sceneH - size, size, size));
    walls.push(new Boundary(sceneW - size, sceneH - size, size, sceneH - size));
    walls.push(new Boundary(sceneW - size, size, sceneW - size, sceneH - size));

    //left part
    let wallSize1 = sceneW * 300 / 1550;
    walls.push(new Boundary(size, (sceneH - 2 * size) / 4, size + wallSize1, (sceneH - 2 * size) / 4));
    walls.push(new Boundary(size, (sceneH - 2 * size) / 4 + size, size + wallSize1, (sceneH - 2 * size) / 4 + size));
    walls.push(new Boundary(size + wallSize1, (sceneH - 2 * size) / 4, size + wallSize1, (sceneH - 2 * size) / 4 + size));

    let wallSize2 = sceneW * 150 / 1550;
    walls.push(new Boundary(size + wallSize1, (sceneH - 2 * size) / 4 + size, size + wallSize1,
        (sceneH - 2 * size) / 4 + size + wallSize2));
    walls.push(new Boundary(wallSize1, (sceneH - 2 * size) / 4 + size, wallSize1,
        (sceneH - 2 * size) / 4 + size + wallSize2));
    walls.push(new Boundary(wallSize1, (sceneH - 2 * size) / 4 + size + wallSize2, wallSize1 + size,
        (sceneH - 2 * size) / 4 + size + wallSize2));

    let wallSize3 = sceneW * 150 / 1550;;
    walls.push(new Boundary(wallSize1, 3 * (sceneH - 2 * size) / 4, wallSize1 + wallSize3 + size,
        3 * (sceneH - 2 * size) / 4));
    walls.push(new Boundary(wallSize1, 3 * (sceneH - 2 * size) / 4 + size, wallSize1 + wallSize3,
        3 * (sceneH - 2 * size) / 4 + size));
    walls.push(new Boundary(wallSize1, 3 * (sceneH - 2 * size) / 4, wallSize1,
        3 * (sceneH - 2 * size) / 4 + size));
    walls.push(new Boundary(wallSize1 + wallSize3, 3 * (sceneH - 2 * size) / 4, wallSize1 + wallSize3,
        3 * (sceneH - 2 * size) / 4 + size));


    walls.push(new Boundary(wallSize1 + wallSize3, 3 * (sceneH - 2 * size) / 4, wallSize1 + wallSize3,
        sceneH - size));
    walls.push(new Boundary(wallSize1 + wallSize3 + size, 3 * (sceneH - 2 * size) / 4, wallSize1 + wallSize3 + size,
        sceneH - size));


    //small square
    walls.push(new Boundary(46 * sceneW / 100, (sceneH - 2 * size) / 4, size + 46 * sceneW / 100, (sceneH - 2 * size) / 4));
    walls.push(new Boundary(46 * sceneW / 100, (sceneH - 2 * size) / 4 + size, size + 46 * sceneW / 100, (sceneH - 2 * size) / 4 + size));
    walls.push(new Boundary(46 * sceneW / 100, (sceneH - 2 * size) / 4 + size, 46 * sceneW / 100, (sceneH - 2 * size) / 4));
    walls.push(new Boundary(46 * sceneW / 100 + size, (sceneH - 2 * size) / 4 + size, 46 * sceneW / 100 + size, (sceneH - 2 * size) / 4));


    walls.push(new Boundary(46 * sceneW / 100, 3 * (sceneH - 2 * size) / 4, size + 46 * sceneW / 100, 3 * (sceneH - 2 * size) / 4));
    walls.push(new Boundary(46 * sceneW / 100, 3 * (sceneH - 2 * size) / 4 + size, size + 46 * sceneW / 100, 3 * (sceneH - 2 * size) / 4 + size));
    walls.push(new Boundary(46 * sceneW / 100, 3 * (sceneH - 2 * size) / 4 + size, 46 * sceneW / 100, 3 * (sceneH - 2 * size) / 4));
    walls.push(new Boundary(46 * sceneW / 100 + size, 3 * (sceneH - 2 * size) / 4 + size, 46 * sceneW / 100 + size, 3 * (sceneH - 2 * size) / 4));


    //right part
    let wallSize4 = 5 * size;
    walls.push(new Boundary(60 * sceneW / 100, 0 + 2 * size, 60 * sceneW / 100 + wallSize4, 0 + 2 * size));
    walls.push(new Boundary(60 * sceneW / 100, sceneH - 2 * size, 60 * sceneW / 100 + wallSize4, sceneH - 2 * size));
    walls.push(new Boundary(60 * sceneW / 100 + wallSize4, sceneH - 2 * size, 60 * sceneW / 100 + wallSize4, 0 + 2 * size));
    walls.push(new Boundary(60 * sceneW / 100, 0 + 3 * size, 60 * sceneW / 100 + wallSize4 - size, 0 + 3 * size));
    walls.push(new Boundary(60 * sceneW / 100, sceneH - 3 * size, 60 * sceneW / 100 + wallSize4 - size, sceneH - 3 * size));
    walls.push(new Boundary(60 * sceneW / 100 + wallSize4 - size, sceneH - 3 * size, 60 * sceneW / 100 + wallSize4 - size, 0 + 3 * size));
    walls.push(new Boundary(60 * sceneW / 100, 0 + 2 * size, 60 * sceneW / 100, 0 + 3 * size));
    walls.push(new Boundary(60 * sceneW / 100, sceneH - 2 * size, 60 * sceneW / 100, sceneH - 3 * size));

    let wallsize5 = 2 * size;
    walls.push(new Boundary(60 * sceneW / 100, 0 + 3 * size, 60 * sceneW / 100, 0 + 3 * size + wallsize5));
    walls.push(new Boundary(60 * sceneW / 100 + size, 0 + 3 * size, 60 * sceneW / 100 + size, 0 + 3 * size + wallsize5));
    walls.push(new Boundary(60 * sceneW / 100, 0 + 3 * size + wallsize5, 60 * sceneW / 100 + size, 0 + 3 * size + wallsize5));


    walls.push(new Boundary(60 * sceneW / 100, sceneH - 3 * size, 60 * sceneW / 100, sceneH - 3 * size - wallsize5));
    walls.push(new Boundary(60 * sceneW / 100 + size, sceneH - 3 * size, 60 * sceneW / 100 + size, sceneH - 3 * size - wallsize5));
    walls.push(new Boundary(60 * sceneW / 100, sceneH - 3 * size - wallsize5, 60 * sceneW / 100 + size, sceneH - 3 * size - wallsize5));

    //inner square
    walls.push(new Boundary(60 * sceneW / 100 + 2 * size, 0 + 3 * size + wallsize5, 60 * sceneW / 100  + 3 * size, 0 + 3 * size + wallsize5));
    walls.push(new Boundary(60 * sceneW / 100 + 2 * size, 0 + 3 * size + wallsize5 - size, 60 * sceneW / 100  + 3 * size, 0 + 3 * size + wallsize5 - size));
    walls.push(new Boundary(60 * sceneW / 100 + 2 * size, 0 + 3 * size + wallsize5, 60 * sceneW / 100 + 2 * size, 0 + 3 * size + wallsize5 - size));
    walls.push(new Boundary(60 * sceneW / 100 + 3 * size, 0 + 3 * size + wallsize5, 60 * sceneW / 100 + 3 * size, 0 + 3 * size + wallsize5 - size));




}