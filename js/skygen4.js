// Creative Coding
// based on my Final Project - Milky Way Generator in Creative Coding
// Refactored from Processing
// added curvy edges to Milky Way, Redraw sky, change color of sky

// constants
let frameCounter;
let filePrefix;
let fileSuffix;
let timeCode;
let starsCount = 100;
let starsoffset;
let t;
let moon = false;
let skyColor = "1F3B56";

function setup() {
	t = 0;
	createCanvas(windowWidth,windowHeight);
	let xloc = random(windowWidth);
	drawNightSky(skyColor);
	let skyDiv;
	skyDiv = createDiv();
	skyDiv.position(0,0);
} // end setup


function drawNightSky(bg) {
	console.log("space...the final frontier");
	let xloc = random(width);
	// drawSky();
	changeSky(bg);
	drawStars();
	drawMilkyWay(xloc,0,90,300, color(88,144,218));
	drawMilkyWay(xloc,0,70,200, color(26,108,182));
	drawMilkyWay(xloc,0,30,100, color(255));
	// drawMoon();
}


function drawSky() {
	console.log("up in the air junior birdman");
	// wondering if I can draw a smoky line...this one will be a circlish type of line
	translate(width/2, height/2)
	beginShape();
	for (var i = 0; i<200; i++) {
		var ang = map(i, 0, 200, 0, TWO_PI);
		var rad = 200 * noise(i*0.01, t*0.005);
		var x= rad * cos(ang);
		var y = rad * sin(ang);
		curveVertex(x,y);
	}
	endShape(CLOSE);
	t +=1;
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

function drawMoon() {
	if (moon = true) {
		fill(255);
		noStroke();
		ellipseMode(RADIUS);
		let moonRadius = floor(random(0,300));
		ellipse(random(width), random(height), moonRadius, moonRadius );
	} else {
		nofill();
		ellipse(0,0,0,0);
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
  let noiseStep = 0.05;
	let controlPointStep;
  let nextx = random(xloc-width/10,xloc+width/10);
  let nexty = random(yloc, yloc+height/10);
	let vertexes = floor(random(10,30));

 beginShape();

   curveVertex(xloc, -30); // start of shape

	 // add bend to shape. Maybe the farther from the bottom, the more bend


  // right side of galaxy edge
   for(i = 0; i < height; i+=height/vertexes) {
    curveVertex(xloc, i);
    xloc = random(xloc-width*noiseStep,xloc+width*noiseStep);
    yloc = random(yloc, yloc+height/vertexes);
  }

  // vertex(xloc,height);
  xloc = xloc - 100;
  curveVertex(xloc,height);
  // println("after vertex");

  // left side of galaxy edge
  for(j = height; j > 0; j-=height/vertexes) {
  // println("left side");
    curveVertex(xloc, j);
     xloc = random(xloc-width*noiseStep,xloc+width*noiseStep);
     yloc = yloc-height/vertexes;
   }

  curveVertex(xloc,-30);
  endShape();
}

/* END Milky Way */

function changeSky(color) {
	let bg = '#' + color;
	// skyDiv.style('background-color', bg);
	// background(bg);
	document.body.style.background = bg;
 	// document.getElementById('skyDiv').style.backgroundColor = bg;
	// alert(document.body.style.background);
	console.log("skycolor: " + bg);
}

function resetSky() {
	// window.location.reload();
	// get the color of the sky so it doesn't reset
	let bg = document.body.style.background;
	console.log("in reset sky - color: " + bg);
	clear();
	drawNightSky(bg);
}

// download the image to your computer
function saveSky() {
	console.log("Save the sky!!");
	let c = createCanvas(1920,1280);
	saveCanvas('c','mySkyGen','jpg');

}

function addMoon() {
	if (moon) {
    moon = false;
  } else {
    moon = true
		drawMoon(moon);
  }
	console.log("moon state: " + moon);
}
