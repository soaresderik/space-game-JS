class Animacao {
	constructor(ctx){
		this.sprites = [];
		this.isOn = false;
		this.ctx = ctx;
		this.process = [];
	}

	newSprite(sprite){
		this.sprites.push(sprite);
		sprite.animation= this;
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

		// this.clearScreen();

		for(var i in this.sprites){
			this.sprites[i].update();
			this.sprites[i].draw();
		}

		for(var i in this.process)
			this.process[i].process();

		requestAnimationFrame(() => this.nextFrame() )
	}

	newProcess(process){
		this.process.push(process);
		process.animation = this;
	}


	clearScreen(){
		var ctx = this.ctx;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}

}