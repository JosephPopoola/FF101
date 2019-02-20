import p5 from "p5";

export default function sketch(p) {
  let nParticles = 50;
  let particles = [];
  let particleSize = 200;
  let maxCounter = 150;
  let lines = [];

  function checkCollisions() {
    lines = [];
    for (let i = 0; i < nParticles; i++) {
      for (let j = 0; j < nParticles; j++) {
        if (i !== j) {
          let distance = p5.Vector.dist(
            particles[i].position,
            particles[j].position
          );
          if (distance < particleSize) {
            if (particles[i].counter === 0) {
              particles[i].direction.rotate(Math.random());
              particles[i].counter = maxCounter;
            }
            if (particles[j].counter === 0) {
              particles[j].direction.rotate(Math.random());
              particles[j].counter = maxCounter;
            }
            lines.push([particles[i].position, particles[j].position, distance]);
          }
        }
      }
    }
  }

  function createParticle() {
    let particle = {};

    particle.position = p.createVector(
      Math.random() * p.width,
      Math.random() * p.height
    );

    particle.direction = p.createVector(Math.random(), Math.random());

    particle.update = function () {
      this.position.add(this.direction);
      if (this.position.x > p.width || this.position.x < 0) {
        this.position.x = p.width / 2;
      }
      if (this.position.y > p.height || this.position.y < 0) {
        this.position.y = p.height / 2;
      }
      if (this.counter > 0) {
        this.counter -= 1;
      }
    };
    particle.counter = 0;
    return particle;
  }

  const Dark = 'rgba(41,41,41,0.2)';
  const Light = 'rgba(196,196,196,0.2)';
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.stroke(Light);
    p.fill(Light);
    p.background(0, 0);

    for (let index = 0; index < nParticles; index++) {
      particles.push(createParticle());
    }
  };

  p.draw = function () {
    checkCollisions();
    for (let index = 0; index < nParticles; index++) {
      particles[index].update();
      p.ellipse(particles[index].position.x, particles[index].position.y, 1);
    }
    for (let i = 0; i < lines.length; i++) {
      p.line(lines[i][0].x, lines[i][0].y, lines[i][1].x, lines[i][1].y);
    }
    window.setTimeout(endDat, 30000);
  };

  let endDat = function () {
    p.noLoop();
  };
}
