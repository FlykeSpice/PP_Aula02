/* Exemplo Notas */

class Notas {
	ap1 : number;
	ap2 : number;
	apf : number;
	constructor(ap1 : number, ap2 : number, apf : number) {
		this.ap1 = ap1;
		this.ap2 = ap2;
		this.apf = apf;
	}

	media() {
		return (this.ap1+this.ap2+this.apf)/3;
	}
	
}

let claudio : Notas = new Notas(5.0,4,9);
let luiz : Notas = new Notas(6,6,6);
let lidia : Notas = new Notas(5,6,3);

if(claudio.media() >= 6)
	console.log("Claudio passou")
else
	console.log("Claudio nao passou")

if(luiz.media() >= 6)
	console.log("Luiz passou")
else
	console.log("Luiz nao passou")

if(lidia.media() >= 6)
	console.log("Lidia passou")
else
	console.log("Lidia nao passou")


