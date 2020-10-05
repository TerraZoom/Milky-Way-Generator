// Creative Tech
// Final Project
// Inouye Solar Telescope Postcard Creator


// poster div is 612x792px


function setup(){
	var canvas = createCanvas(612, 792);
	canvas.parent('skybg');
	background(255);
}

function addCircle(){
	fill(random(256), random(256), random(256));
	ellipse(random(width), random(height), 20, 20);
}

function buttonClicked(){
	addCircle();
}


// constants
let starsCount = 100;
let starsoffset;


function drawNightSky() {
	clearBox("skybg");
	var canvas = createCanvas(612, 792);
	canvas.parent('skybg');
	let xloc = random(width);	
	drawSky();
	drawStars();
	drawMilkyWay(xloc,0,90,300, color(88,144,218));
	drawMilkyWay(xloc,0,70,200, color(26,108,182));
	drawMilkyWay(xloc,0,30,100, color(255));
}	

function drawSky() {
  background(31,59,86); // dark blue sky
}

function drawStars() {
 noStroke();
 fill(255); // white stars
 ellipseMode(RADIUS);
 
 let maxStars = random(30,starsCount);
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
  let nextx = random(xloc-width/10,xloc+width/10);
  let nexty = random(yloc, yloc+height/10);
  
 beginShape();
 
   vertex(xloc, 0); // start of shape

  // right side of galaxy edge
   for(i = 0; i < height; i+=height/30) {
    vertex(xloc, i);
    xloc = random(xloc-width*noiseStep,xloc+width*noiseStep);
    yloc = random(yloc, yloc+height/30);
  }
  
  // vertex(xloc,height);
  xloc = xloc - 100;
  vertex(xloc,height);
  // println("after vertex");
  
  // left side of galaxy edge
  for(j = height; j > 0; j-=height/30) {
  // println("left side");
    vertex(xloc, j);
     xloc = random(xloc-width*noiseStep,xloc+width*noiseStep);
     yloc = yloc-height/30;  
   }  
  
  vertex(xloc,0);
  endShape(); 
  
}
    
/* END Milky Way */


function socialThis(channel) {
	
}

function addBackground(background) {
	clearBox("skybg");
	var skybg = 'sky' + background;
	var sunbg = 'sun' + background;
	document.getElementById("poster").className = skybg;
	
	// add sun
	sunDiv = 'sunbg' + background;
	console.log("sunDiv: " + sunDiv);	
	
	
	// UGLY but it works!!
	// this if statement is not an elegant solution. Will have to try and make this a single function
	if(background == 1) {
		/* this is the starry background */
		clearBox("inouye");
		console.log("sun: " + sunDiv);
		drawNightSky();
		var iddiv = document.getElementById("identity");
		iddiv.style.backgroundColor = "#0e2133";
		iddivImg = document.createElement('img');
		iddivImg.setAttribute("src","assets/inouye_reverse.png");
		document.getElementById("inouye").appendChild(iddivImg);
	} else if (background == 2) {
		clearBox("inouye");
		console.log("sun: " + sunDiv);
		var sun = document.createElement('div');
		sun.setAttribute("id", "sundiv2");
		document.getElementById("skybg").appendChild(sun);			
		var iddiv = document.getElementById("identity");
		iddiv.style.backgroundColor = "#141e28";
		iddivImg = document.createElement('img');
		iddivImg.setAttribute("src","assets/inouye_reverse.png");
		document.getElementById("inouye").appendChild(iddivImg);
	} else if (background == 3) {
		clearBox("inouye");
		console.log("sun: " + sunDiv);		
		var sun = document.createElement('div');
		sun.setAttribute("id", "sundiv3");
		document.getElementById("skybg").appendChild(sun);			
		var iddiv = document.getElementById("identity");
		iddiv.style.backgroundColor = "#2e2a21";		
		iddivImg = document.createElement('img');
		iddivImg.setAttribute("src","assets/inouye_reverse.png");
		document.getElementById("inouye").appendChild(iddivImg);
	} else if (background == 4) {
		clearBox("inouye");
		console.log("sun: " + sunDiv);
		var sun = document.createElement('div');
		sun.setAttribute("id", "sundiv4");
		document.getElementById("skybg").appendChild(sun);			
		var iddiv = document.getElementById("identity");
		iddiv.style.backgroundColor = "#141e28";		
		iddivImg = document.createElement('img');
		iddivImg.setAttribute("src","assets/inouye_reverse.png");
		document.getElementById("inouye").appendChild(iddivImg);
	} else if (background == 5) {
		clearBox("inouye");
		console.log("sun: " + sunDiv);
		var sun = document.createElement('div');
		sun.setAttribute("id", "sundiv5");
		document.getElementById("skybg").appendChild(sun);					
		var iddiv = document.getElementById("identity");
		iddiv.style.backgroundColor = "#fbe38f";		
		iddivImg = document.createElement('img');
		iddivImg.setAttribute("src","assets/inouye_black.png");
		document.getElementById("inouye").appendChild(iddivImg);
	} else if (background == 6) {
		clearBox("inouye");
		console.log("sun: " + sunDiv);
		var sun = document.createElement('div');
		sun.setAttribute("id", "sundiv6");
		document.getElementById("skybg").appendChild(sun);			
		var iddiv = document.getElementById("identity");
		iddiv.style.backgroundColor = "#c18bac";			
		iddivImg = document.createElement('img');
		iddivImg.setAttribute("src","assets/inouye_black.png");
		document.getElementById("inouye").appendChild(iddivImg);
	} else if (background == 7) {
		clearBox("inouye");
		console.log("sun: " + sunDiv);
		var sun = document.createElement('div');
		sun.setAttribute("id", "sundiv7");
		document.getElementById("skybg").appendChild(sun);			
		var iddiv = document.getElementById("identity");
		iddiv.style.backgroundColor = "#2b4747";		
		iddivImg = document.createElement('img');
		iddivImg.setAttribute("src","assets/inouye_reverse.png");
		document.getElementById("inouye").appendChild(iddivImg);
	} else {
		clearBox("inouye");
		console.log("sun: " + sunDiv);
		var sun = document.createElement('div');
		sun.setAttribute("id", "sundiv8");
		document.getElementById("skybg").appendChild(sun);			
		var iddiv = document.getElementById("identity");
		iddiv.style.backgroundColor = "#519ac7";
		iddivImg = document.createElement('img');
		iddivImg.setAttribute("src","assets/inouye_reverse.png");
		document.getElementById("inouye").appendChild(iddivImg);		
	}
}

function addTelescope(telescope) {
	clearBox("telescope");
	if(telescope == 'telescope1') {	
		console.log("telescope: " + telescope);
		var telescope = document.createElement('div');
		telescope.setAttribute("id", "telescope1");
		document.getElementById("telescope").appendChild(telescope);	
	} else if(telescope == 'telescope2') {
		console.log("telescope: " + telescope);
		var telescope = document.createElement('div');
		telescope.setAttribute("id", "telescope2");
		document.getElementById("telescope").appendChild(telescope);		
	} else if(telescope == 'telescope3') {
		console.log("telescope: " + telescope);
		var telescope = document.createElement('div');
		telescope.setAttribute("id", "telescope3");
		document.getElementById("telescope").appendChild(telescope);		
	} else if(telescope == 'telescope4') {
		console.log("telescope: " + telescope);
		var telescope = document.createElement('div');
		telescope.setAttribute("id", "telescope4");
		document.getElementById("telescope").appendChild(telescope);	
	} else if(telescope == 'telescope5') {
		console.log("telescope: " + telescope);
		var telescope = document.createElement('div');
		telescope.setAttribute("id", "telescope5");
		document.getElementById("telescope").appendChild(telescope);	
	} else if(telescope == 'telescope6') {
		console.log("telescope: " + telescope);
		var telescope = document.createElement('div');
		telescope.setAttribute("id", "telescope6");
		document.getElementById("telescope").appendChild(telescope);	
	} else {
		console.log("telescope: " + telescope);
		var telescope = document.createElement('div');
		telescope.setAttribute("id", "telescope7");
		document.getElementById("telescope").appendChild(telescope);	
	}
}

function addBlurb(blurb) {
	clearBox('blurb');
	if(blurb == 'blurb1') {	
		console.log("blurb: " + blurb);
		var blurb = document.createElement('div');
		blurb.setAttribute("id", "blurb1");
		document.getElementById("blurb").appendChild(blurb);
	} else if(blurb == 'blurb2') {
		console.log("blurb: " + blurb);
		var blurb = document.createElement('div');
		blurb.setAttribute("id", "blurb2");
		document.getElementById("blurb").appendChild(blurb);
	} else if(blurb == 'blurb3') {
		console.log("blurb: " + blurb);
		var blurb = document.createElement('div');
		blurb.setAttribute("id", "blurb3");
		document.getElementById("blurb").appendChild(blurb);
	} else if(blurb == 'blurb4') {
		console.log("blurb: " + blurb);
		var blurb = document.createElement('div');
		blurb.setAttribute("id", "blurb4");
		document.getElementById("blurb").appendChild(blurb);		
	} else if(blurb == 'blurb5') {
		console.log("blurb: " + blurb);
		var blurb = document.createElement('div');
		blurb.setAttribute("id", "blurb5");
		document.getElementById("blurb").appendChild(blurb);
	} else if(blurb == 'blurb6') {
		console.log("blurb: " + blurb);
		var blurb = document.createElement('div');
		blurb.setAttribute("id", "blurb6");
		document.getElementById("blurb").appendChild(blurb);		
	} else if(blurb == "blurb7") {
		console.log("blurb: " + blurb);
		var blurb = document.createElement('div');
		blurb.setAttribute("id", "blurb7");
		document.getElementById("blurb").appendChild(blurb);		
	} else {
		console.log("blurb: " + blurb);
		var blurb = document.createElement('div');
		blurb.setAttribute("id", "blurb8");
		document.getElementById("blurb").appendChild(blurb);		
	}
}


function clearBox(elementID){
    document.getElementById(elementID).innerHTML = "";
}

function printElem(divId) {
	domtoimage.toJpeg(document.getElementById(divId), { quality: 0.95 })
		.then(function (dataUrl) {
			var link = document.createElement('a');
			link.download = 'my-image-name.jpeg';
			link.href = dataUrl;
			link.click();
		});
	}