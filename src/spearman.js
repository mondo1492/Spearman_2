import buildStickamn from './stickman';

document.addEventListener("DOMContentLoaded", function(){
  return loadGame();
});



const loadGame = (x, y) => {

      buildStickamn(100,200, .4);
      document.addEventListener("click", function(){
        return test(0,0);
      });
};

const test = (x, y) => {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,550,400);
  ctx.fillStyle = "rgba(0,200,0,1)";
  ctx.fillRect(x, 20, 50, 50);
  ctx.restore();
  x += 1;
  var looper = setTimeout(()=>test(x,y) , 10);
};
