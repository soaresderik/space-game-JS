class Bola{

	constructor(ctx){
		this.ctx = ctx;
		this.x = 0;
		this.y = 0;
		this.velX =0;
		this.velY = 0;

		this.color = 'black';
		this.raio = 10;
	}

	update(){
		let { x, y, raio, ctx } = this;

		if( x < raio || x > ctx.canvas.width - raio)
			this.velX *= -1;

		if( y < raio || y > ctx.canvas.width - raio)
			this.velY *= -1;

		this.x += this.velX;
		this.y += this.velY;
	}

	draw(){
		let { x, y, raio, ctx, color } = this;

		ctx.save();

		ctx.fillStyle = color;

		ctx.beginPath();
		ctx.arc(x, y, raio, 0, 2 * Math.PI, false);
		ctx.fill();

		ctx.restore();
	}

	squadCollision(){
		return [
			{
				x: this.x - this.raio,
				y: this.y - this.raio,
				larg: this.raio * 2,
				alt: this.raio * 2
			}
		];
	}

	conflict(sprite){
		if(this.x < sprite.x)
			this.velX = -Math.abs(this.velX);
		else
			this.velX = Math.abs(this.velX);

		if(this.y < sprite.y)
			this.velY = -Math.abs(this.velY);
		else
			this.velY = Math.abs(this.velY);
	}
}