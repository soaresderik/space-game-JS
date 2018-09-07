class Ovni {
	constructor(ctx, img){
		this.ctx = ctx;
		this.img = img;
		this.x = 0;
		this.y = 0;
		this.vel = 0;
	}

	update(){
		this.y += this.vel
	}

	draw(){
		const{ ctx, img } = this;
		ctx.drawImage(img, this.x, this.y, img.width, img.height);
	}

	squadCollision(){
		var rets = [
			{x: this.x+20, y: this.y+1, width:25, height: 10},
			{x: this.x+2, y: this.y+11, width:60, height: 12},
			{x: this.x+20, y: this.y+23, width:25, height: 7}
		];

		let { ctx } = this;

		for(let i in rets){
			ctx.save();
			ctx.strokeStyle = 'yellow';
			ctx.strokeRect(rets[i].x, rets[i].y, rets[i].width, rets[i].height);
			ctx.restore();
		}

		return rets;
	}

	conflict(sprite){

	}
}