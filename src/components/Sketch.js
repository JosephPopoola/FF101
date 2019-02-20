export default function sketch(p) {
  let a = 1.4,
    b = -2.1,
    c = 2.8,
    d = -2.5;
  let x = 1,
    y = 1;

  let date = new Date();

  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);

    a = date.getHours() / 10;
    c = date.getSeconds() / 10;
    d = date.getDate() / -10;
  };

  p.draw = function() {
    for (let index = 0; index < 1000; index++) {
      let oldX = x;
      let oldY = y;
      x = p.sin(a * oldY) - p.cos(b * oldX);
      y = p.sin(c * oldX) - p.cos(d * oldY);

      let scaledX = p.map(x, -2, 2, 0, p.width);
      let scaledY = p.map(y, -2, 2, 0, p.height);

      let alpha = p.map(date.getSeconds(), 0, 59, 40, 100);

      p.stroke(196, 196, 196, alpha);

      p.point(scaledX, scaledY);
    }
    window.setTimeout(endDat, 20000);
  };

  let endDat = function() {
    p.noLoop();
  };
}
