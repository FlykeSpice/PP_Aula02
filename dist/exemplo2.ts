/*exemplo2*/

class Jogador
{
	name : string;
	def : number;
	atk : number;

	constructor(name : string, def:number, atk:number) {
		this.name = name;
		this.def = def;
		this.atk = atk;
	}

	comparar(target : Jogador) {
		if(this.atk == target.def) {
			console.log(this.name + " e " + target.name + " sao equivalentes")
	        }	
		else if(this.atk > target.def) {
			console.log(this.name + " tem mais forca que " + target.name)
		}
		else {
			console.log(this.name + " e mais fraco que " + target.name)
		}
		       	
	}
}

let pedro : Jogador = new Jogador("Pedro", 60, 60)
let joao : Jogador = new Jogador("Joao",128,60)
let lucas : Jogador = new Jogador("Lucas",40,30)

pedro.comparar(joao)
pedro.comparar(lucas)
joao.comparar(lucas)
