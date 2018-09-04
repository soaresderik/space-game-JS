class Fundo {
	constructor(ctx, img){
		this.ctx = ctx;
		this.img = img;
		this.vel = 0;
		this.positionEmenda = 0;
	}

	draw(){
		let posY = this.positionEmenda - this.img.height;
		this.ctx.drawImage(this.img, 0, posY, this.img.width, this.img.height);

		posY = this.positionEmenda;
		this.ctx.drawImage(this.img, 0, posY, this.img.width, this.img.height);
	}

	update(){
		this.positionEmenda += this.vel;

		if(this.positionEmenda > this.img.height)
			this.positionEmenda = 0;
	}
}