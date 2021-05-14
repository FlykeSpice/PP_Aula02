class Animal {
	som : string;
	constructor(som : string)
	{
		this.som = som;
	}
	fazSom()
	{
		console.log(this.som + " " + this.som + " " + this.som)
	}
}

let cachorro : Animal = new Animal("AU");
let gato : Animal = new Animal("Hiss");
let pato : Animal = new Animal("Quack");

cachorro.fazSom();
gato.fazSom();
pato.fazSom();
