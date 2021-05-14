function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	blendMode(MULTIPLY)
	background(0, 0.9)
	

	let clr1 = color("#fd1")
	let clr2 = color("#36f")
	
	noStroke()
	blendMode(LIGHTEST)
	translate(width/2, height/2)
	rotate(frameCount/10)
	
	for (let j = 0; j < 8; j++) {
		rotate(j / 8 * 2 * PI + random(-0.5, 0.5))
		
		let scaleDelta = random (0.9,0.95)
		
		push()
		for (let i = 0; i < 100; i++) {
			let midColor = lerpColor(clr1,clr2,i/30)
			fill(midColor)
			ellipse(0, 0, 100, 100)
			scale(scaleDelta)
			translate(12,12)
		}
		pop()
	}
	// ellipse(mouseX, mouseY, 20, 20);
}