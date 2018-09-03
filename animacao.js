class Animacao {
	constructor(ctx){
		this.sprites = [];
		this.isOn = false;
		this.ctx = ctx;
	}

	newSprite(sprite){
		this.sprites.push(sprite);
	}

	start(){
		this.isOn = true;
		this.nextFrame();
	}

	stop(){
		this.isOn = false;
	}

	nextFrame(){
		if(!this.isOn) return;

		this.clearScreen();

		for(var i in this.sprites){
			this.sprites[i].update();
			this.sprites[i].draw();
		}

		requestAnimationFrame(() => { this.nextFrame() })
	}


	clearScreen(){
		var ctx = this.ctx;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}

}