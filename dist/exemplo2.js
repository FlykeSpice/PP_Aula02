"use strict";
/*exemplo2*/
var Jogador = /** @class */ (function () {
    function Jogador(name, def, atk) {
        this.name = name;
        this.def = def;
        this.atk = atk;
    }
    Jogador.prototype.comparar = function (target) {
        if (this.atk == target.def) {
            console.log(this.name + " e " + target.name + " sao equivalentes");
        }
        else if (this.atk > target.def) {
            console.log(this.name + " tem mais forca que " + target.name);
        }
        else {
            console.log(this.name + " e mais fraco que " + target.name);
        }
    };
    return Jogador;
}());
var pedro = new Jogador("Pedro", 60, 60);
var joao = new Jogador("Joao", 128, 60);
var lucas = new Jogador("Lucas", 40, 30);
pedro.comparar(joao);
pedro.comparar(lucas);
joao.comparar(lucas);
