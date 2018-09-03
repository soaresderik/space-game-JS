class Colisor{
	constructor(){
		this.sprites = [];
		this.whenConflict = null;
	}

	newSprite(sprite){
		this.sprites.push(sprite);
	}

	process(){

		let wasTested = new Object();

		for(let i in this.sprites){
			for(let j in this.sprites){
				if( i == j) continue;

				let id1 = this.stringUnique(this.sprites[i]);
				let id2 = this.stringUnique(this.sprites[j]);

				if(!wasTested[id1]) wasTested[id1] = [];
				if(!wasTested[id2]) wasTested[id2] = [];

				if(!(wasTested[id1].indexOf(id2) >= 0 || wasTested[id2].indexOf(id1) >= 0 )){
					this.onCollision(this.sprites[i], this.sprites[j]);

					wasTested[id1].push(id2);
					wasTested[id2].push(id1);
				}

				
			}
		}
	}

	onCollision(sprite1, sprite2){
		let squad1 = sprite1.squadCollision();
		let squad2 = sprite2.squadCollision();

		colision:
		for(let i in squad1){
			for(let j in squad2){
				if(this.isCollision(squad1[i], squad2[j])){
					sprite1.conflict(sprite2);
					sprite2.conflict(sprite1);

					if(this.whenConflict) this.whenConflict(sprite1, sprite2);

					break colision;
				}
			}
		}
	}


	isCollision(ret1, ret2){
		return (ret1.x + ret1.larg) > ret2.x  &&
				ret1.x < (ret2.x + ret2.larg) &&
			   (ret1.y + ret1.alt) > ret2.y   &&
			   ret1.y < (ret2.y + ret2.alt);	
	}

	stringUnique(sprite){
		let str = '';
		let squad = sprite.squadCollision();

		for(let i in squad){
			str += `x: ${squad[i].x}, y: ${squad[i].y},
					l: ${squad[i].larg}, a: ${squad[i].alt}`;
		}

		return str;
	}
}