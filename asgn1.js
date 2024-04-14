var isDrawing = false;
var canvas, ctx;

function main() {
  canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return;
  }
  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
}

var shape;
shape = "square";

function squares() {
  shape = "square"
}

function triangles() {
  shape = "triangle"
}

function circles() {
  shape = "circle"
}

function startDrawing(event) {
  isDrawing = true;
  draw(event);
}

function draw(event) {
  if (!isDrawing) return;
  var x = event.offsetX;
  var y = event.offsetY;
  var size = document.getElementById('size').value;
  var red = document.getElementById('red').value;
  var green = document.getElementById('green').value;
  var blue = document.getElementById('blue').value;
  ctx.fillStyle = 'rgba(' + red + ', ' + green + ', ' + blue + ', 1.0)';
  if (shape === "square") {
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }
  else if (shape === "triangle") {
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x + size / 2, y + size / 2);
    ctx.lineTo(x - size / 2, y + size / 2);
    ctx.closePath();
    ctx.fill();
  }
  else if (shape === "circle") {
    var segments = document.getElementById('segment').value;
    var radius = size / 2;
    var angle = Math.PI * 2 / segments;
    ctx.beginPath();
    for (var i = 0; i < segments; i++) {
      var xPos = x + radius * Math.cos(angle * i);
      var yPos = y + radius * Math.sin(angle * i);
      if (i === 0) {
        ctx.moveTo(xPos, yPos);
      } else {
        ctx.lineTo(xPos, yPos);
      }
    }
    ctx.closePath();
    ctx.fill();
  }
}

function stopDrawing() {
  isDrawing = false;
}

function clearCanvas() {
  var canvas = document.getElementById('example');
  if (!canvas) {
    console.error('Failed to retrieve the <canvas> element');
    return;
  }
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
