//import p5 from "p5";

// export default function sketch(p) {
//   const inc = 0.01;

//   p.setup = function() {
//     p.createCanvas(window.innerWidth * 1.5, window.innerHeight * 1.5);
//     p.pixelDensity(1);
//   };

//   p.draw = function() {
//     p.noLoop();
//     var yoff = 0;
//     p.loadPixels();

//     let { width, height, pixels } = p;

//     for (var y = 0; y < height; y++) {
//       var xoff = 0;
//       for (var x = 0; x < width; x++) {
//         var index = (x + y * width) * 4;
//         var r = p.noise(xoff, yoff) * 255;
//         p.pixels[index + 0] = r;
//         pixels[index + 1] = r;
//         pixels[index + 2] = r;
//         pixels[index + 3] = 255;
//         xoff += inc;
//       }
//       yoff += inc;
//     }
//     p.updatePixels();
//   };
// }

export default function sketch(p) {
  let t = 0; // time variable

  p.setup = function() {
    p.createCanvas(window.innerWidth * 1.5, window.innerHeight * 1.5);
    //p.noStroke();
    p.fill("#c4c4c4");
  };

  let { width, height, PI, mouseX, mouseY } = p;

  p.draw = function() {
    p.background(10, 10); // translucent background (creates trails)

    // make a x and y grid of ellipses
    for (let x = 0; x <= width; x = x + 30) {
      for (let y = 0; y <= height; y = y + 30) {
        // starting point of each circle depends on mouse position
        let xAngle = p.map(mouseX, 0, width, -4 * PI, 4 * PI, true);
        let yAngle = p.map(mouseY, 0, height, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        let angle = xAngle * (x / width) + yAngle * (y / height);

        // each particle moves in a circle
        let myX = x + 20 * p.cos(2 * PI * t + angle);
        let myY = y + 20 * p.sin(2 * PI * t + angle);

        p.ellipse(myX, myY, 10); // draw particle
      }
    }

    t = t + 0.01; // update time
  };
}
