const buildStickman = (x, y, scale) => {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext("2d")) { // Check HTML5 canvas support
  let context = canvas.getContext("2d"); // get Canvas Context object

  context.beginPath();
  context.fillStyle = "bisque"; // #ffe4c4
  context.arc(scale * x, scale * y, scale * 30, 0, Math.PI * 2, true); // draw circle for head
  // (x,y) center, radius, start angle, end angle, anticlockwise
  context.fill();

  context.beginPath();
  context.strokeStyle = "black"; // color
  context.lineWidth = 3;
  context.arc(scale * x, scale * y, scale * 20, 0, Math.PI, false); // draw semicircle for smiling
  context.stroke();

  // eyes
  context.beginPath();
  context.fillStyle = "black"; // color
  context.arc(scale * (x-10), scale * (y-5), scale * 3, 0, Math.PI * 2, true); // draw left eye
  context.fill();
  context.arc(scale * (x+10), scale *(y-5), scale * 3, 0, Math.PI * 2, true); // draw right eye
  context.fill();

  // body
  context.beginPath();
  context.moveTo(scale * x, scale * (y+30));
  context.lineTo(scale * x, scale * (y+130));
  context.strokeStyle = "black";
  context.stroke();

  // arms
  context.beginPath();
  context.strokeStyle = "black"; // blue
  context.moveTo(scale * x, scale *(y+30));
  context.lineTo(scale * (x-50), scale * (y+80));
  context.moveTo(scale * x, scale * (y+30));
  context.lineTo(scale * (x+50), scale * (y+80));
  context.stroke();

  // legs
  context.beginPath();
  context.strokeStyle = "black";
  context.moveTo(scale * x, scale * (y+130));
  context.lineTo(scale * (x-50), scale * (y+230));
  context.moveTo(scale * x, scale * (y+130));
  context.lineTo(scale * (x+50), scale * (y+230));
  context.stroke();
  }
};

export default buildStickman;


//
// const buildStickman = (x, y) => {
//   var canvas = document.getElementById("canvas");
//   if (canvas.getContext("2d")) { // Check HTML5 canvas support
//   let context = canvas.getContext("2d"); // get Canvas Context object
//
//   context.beginPath();
//   context.fillStyle = "bisque"; // #ffe4c4
//   context.arc(200, 50, 30, 0, Math.PI * 2, true); // draw circle for head
//   // (x,y) center, radius, start angle, end angle, anticlockwise
//   context.fill();
//
//   context.beginPath();
//   context.strokeStyle = "black"; // color
//   context.lineWidth = 3;
//   context.arc(200, 50, 20, 0, Math.PI, false); // draw semicircle for smiling
//   context.stroke();
//
//   // eyes
//   context.beginPath();
//   context.fillStyle = "black"; // color
//   context.arc(190, 45, 3, 0, Math.PI * 2, true); // draw left eye
//   context.fill();
//   context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
//   context.fill();
//
//   // body
//   context.beginPath();
//   context.moveTo(200, 80);
//   context.lineTo(200, 180);
//   context.strokeStyle = "black";
//   context.stroke();
//
//   // arms
//   context.beginPath();
//   context.strokeStyle = "black"; // blue
//   context.moveTo(200, 80);
//   context.lineTo(150, 130);
//   context.moveTo(200, 80);
//   context.lineTo(250, 130);
//   context.stroke();
//
//   // legs
//   context.beginPath();
//   context.strokeStyle = "black";
//   context.moveTo(200, 180);
//   context.lineTo(150, 280);
//   context.moveTo(200, 180);
//   context.lineTo(250, 280);
//   context.stroke();
//   }
// };
//
// export default buildStickman;
