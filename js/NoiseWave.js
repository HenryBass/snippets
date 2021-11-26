function randomColor(range) {
  return [(Math.random() * range), (Math.random() * range), (Math.random() * range)] 
}

function setup() {
  var width = windowWidth;
  var height = windowHeight;
  createCanvas(width, height)
  background(255); 
  window.middle = height/2;
  color = 255;
  steps = 30;

  var loops = 20;

  size = 100;

  for (var n = 0; n < loops; n++) {
    var x = 0;
    var y = window.middle + (Math.random() * size);

    stroke(color);
    
    for (var i = 0; i < steps; i++) {

      newY = window.middle + (Math.random() * size)

      line(x, y, x + (width / steps), newY)

      y = newY;

      x += (width / steps)
    }
    color -= (255 / loops);
  }

}
