class Nave {
	constructor(ctx, teclado, img){
		this.ctx = ctx;
		this.teclado = teclado;
		this.img = img;
		this.x = 0;
		this.y = 0;
		this.vel = 0
	}

	shot(){
		const t = new Tiro(this.ctx, this);
		this.animation.newSprite(t);
	}

	update(){
		if(this.teclado.pressionada(this.teclado.SETA_ESQUERDA) && this.x > 0)
			this.x -= this.vel;

		if(this.teclado.pressionada(this.teclado.SETA_DIREITA) && 
			this.x < this.ctx.canvas.width - this.img.width)
			this.x += this.vel;

		if(this.teclado.pressionada(this.teclado.SETA_ACIMA) && this.y > 0)
			this.y -= this.vel;

		if(this.teclado.pressionada(this.teclado.SETA_ABAIXO) && 
			this.y < this.ctx.canvas.height - this.img.height)
			this.y += this.vel;
	}

	draw(){
		this.ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height);
	}
}