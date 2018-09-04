class Tiro {
	constructor(ctx, nave){
		this.ctx = ctx;
		this.nave = nave;

		this.width = 4;
		this.height = 20;
		this.x = nave.x + nave.img.width / 2 - this.width / 2;
		this.y = nave.y - this.width;
		this.vel = 10;
		this.color = 'red';
	}

	update(){
		this.y -= this.vel;
	}

	draw(){
		this.ctx.save();
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		this.ctx.restore();
	}
}