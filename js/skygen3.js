// Creative Tech
// Final Project - Milky Way Generator
// Inouye Solar Telescope Postcard Creator

// constants
let frameCounter;
let filePrefix;
let fileSuffix;
let timeCode;
let starsCount = 100;
let starsoffset;


function setup() {
	createCanvas(windowWidth,windowHeight);
	let xloc = random(windowWidth);
	drawNightSky();
} // end setup


function drawNightSky() {
	console.log("space...the final frontier");
	let xloc = random(width);
	drawSky();
	drawStars();
	drawMilkyWay(xloc,0,90,300, color(88,144,218));
	drawMilkyWay(xloc,0,70,200, color(26,108,182));
	drawMilkyWay(xloc,0,30,100, color(255));
}


function drawSky() {
  // tie color to color wheel
  // background(31,59,86); // dark blue sky #1F3B56
}

function drawStars() {
 noStroke();
 fill(255); // white stars
 ellipseMode(RADIUS);

 let maxStars = random(30,1500);
    for (i = 0; i < maxStars; i++) {
     let starRadius = random(1,6 ); // need a random star size
     ellipse(random(width), random(height), starRadius, starRadius);
   }
}


/* BEGIN MILKY WAY */
function drawMilkyWay(xloc, yloc, galaxy_opacity, galaxyBreadth, galaxyColor) {
 // need a starting point. If near the center, Milky Way will be somewhat vertical
 // if starting point near the left or right edges, Milky Way will be more horizontal
 // starting point near bottom would have forks (maybe) near the top
 // starting point near the top would have forks (maybe) below

  console.log("under the milky way");

  noStroke();
  let xloc_original = xloc;
  fill(255,255,255,galaxy_opacity);

  let thresholdX = width * .15; // how close to right or left are we
  let noiseScale = 100;
  let noiseStep = 0.02;
	let controlPointStep;
  let nextx = random(xloc-width/10,xloc+width/10);
  let nexty = random(yloc, yloc+height/10);

 beginShape();

   curveVertex(xloc, 0); // start of shape

  // right side of galaxy edge
   for(i = 0; i < height; i+=height/30) {
    curveVertex(xloc, i);
    xloc = random(xloc-width*noiseStep,xloc+width*noiseStep);
    yloc = random(yloc, yloc+height/30);
  }

  // vertex(xloc,height);
  xloc = xloc - 100;
  curveVertex(xloc,height);
  // println("after vertex");

  // left side of galaxy edge
  for(j = height; j > 0; j-=height/30) {
  // println("left side");
    curveVertex(xloc, j);
     xloc = random(xloc-width*noiseStep,xloc+width*noiseStep);
     yloc = yloc-height/30;
   }

  curveVertex(xloc,0);
  endShape();
}

/* END Milky Way */

function changeSky(color) {
	let bg = '#' + color;
	document.body.style.background = bg;
 	// document.getElementById('skycolor').style.backgroundColor = bg;
	// alert(document.body.style.background);
}

function resetSky() {
	window.location.reload();
}

// download the image to your computer
function saveSky() {
	console.log("Save the sky!!");

}
