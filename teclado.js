const SETA_ESQUERDA = 37;
const SETA_ACIMA = 38;
const SETA_DIREITA = 39;
const SETA_ABAIXO = 40;
const ESPACO = 32;

class Teclado {

	constructor(){
		
		this.presseds = [];
		this.arrShot = [];
		this.funcShot = [];

		document.addEventListener('keydown', (e) => {
			let pressed = e.keyCode;
			this.presseds[pressed] = true;

			if(this.funcShot[pressed] && !this.arrShot[pressed]){
			   this.arrShot[pressed] = true;
			   this.funcShot[pressed]();
			}
			
		});

		document.addEventListener('keyup', (e) => {
			this.presseds[e.keyCode] = false;
			this.arrShot[e.keyCode] = false;
		});
	}

	pressionada(keyPressed){
		return this.presseds[keyPressed];
	}

	shoted(pressed, callback){
		this.funcShot[pressed] = callback;
	}

	get SETA_ESQUERDA(){
		return SETA_ESQUERDA;
	}

	get SETA_ACIMA(){
		return SETA_ACIMA;
	}

	get SETA_DIREITA(){
		return SETA_DIREITA;
	}

	get SETA_ABAIXO(){
		return SETA_ABAIXO;
	}

	get ESPACO(){
		return ESPACO;
	}
}