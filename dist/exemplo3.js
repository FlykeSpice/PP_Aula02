"use strict";
var Animal = /** @class */ (function () {
    function Animal(som) {
        this.som = som;
    }
    Animal.prototype.fazSom = function () {
        console.log(this.som + " " + this.som + " " + this.som);
    };
    return Animal;
}());
var cachorro = new Animal("AU");
var gato = new Animal("Hiss");
var pato = new Animal("Quack");
cachorro.fazSom();
gato.fazSom();
pato.fazSom();
