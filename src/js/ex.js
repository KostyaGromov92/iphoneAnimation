let canvas = document.createElement('canvas');

let ctx = canvas.getContext('2d');

let height = $(window).height();
let width = $(window).width();

canvas.width = width;
canvas.height = height;

document.querySelectorAll('.animation')[0].appendChild(canvas);

let path = '-42.7,-50,-21,-50,0,-15.4,21,-50,42.7,-50,10.9,-1,44,50,22.3,50,0,13.4,-22.3,50,-44,50,-10.9,-1'.split(/\ |,/).map(function(H) {
  return parseFloat(H);
});

console.log(path);

function draw(state) {
  	ctx.clearRect(0,0,width, height);
  	ctx.beginPath();
  	ctx.moveTo(path[0] + width/2, path[1] + height/2);

  	for (var i = 2; i < path.length; i=+2) {
  		ctx.lineTo(path[i] + width/2 ,path[i+1] + height/2);
  	}

  	ctx.closePath();
  	ctx.fill();	

  	//ctx.fillRect(0,0,width*state, height);  	
}

module.exports = draw; 
