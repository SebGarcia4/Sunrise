// Drawing Sunrise

// Set up the canvas and the graphis context
let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;




// Store images in variables
let cloud = document.getElementById("cloud");

// Rectangle (Sky)
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);



// Circle (Sun)
ctx.fillStyle = "rgb(" + 255 + "," + 0 + ",0 )";
ctx.beginPath();
ctx.arc(200, 300, 30, 0, 2 * Math.PI); // Circle (0 to 2PI) with center (100, 500) and radius 50
ctx.fill();

// Rectangle (grass)
ctx.fillStyle = "rgb(" + 0 + "," + 150 + ",0 )";
ctx.fillRect(0, 300, 400, 100);


// DRAW Clouds
ctx.drawImage(cloud, 130, 120); // Cloud 1 
ctx.drawImage(cloud, 150, 130); // Cloud 2



