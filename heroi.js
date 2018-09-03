const DIREITA = 1;
const ESQUERDA = 2;

class Heroi {
	constructor(ctx, teclado, animation){
		this.ctx = ctx;
		this.teclado = teclado;
		this.animation = animation;
		this.x = 0;
		this.y = 0;

		this.direction = DIREITA;
	}

	update(){
		const { teclado, ctx } = this;

		if(teclado.pressionada(teclado.SETA_ESQUERDA) && this.x > 0){
			this.direction = ESQUERDA;
			this.x -= 10;
		}
		else if(teclado.pressionada(teclado.SETA_DIREITA) && this.x < ctx.canvas.width - 20){
			this.direction = DIREITA;
			this.x += 10;
		}
	}

	draw(){
		this.ctx.fillRect(this.x, this.y, 20, 50);
	}

	shot(){
		const shot = new Bola(this.ctx);
		shot.x = this.x + 10;
		shot.y = this.y + 10;
		shot.raio = 2;
		shot.color = 'red';

		if(this.direction == ESQUERDA)
			shot.velX = -20;
		else
			shot.velX = 20;

		this.animation.newSprite(shot);
	}
}
