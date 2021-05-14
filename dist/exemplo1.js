"use strict";
/* Exemplo Notas */
var Notas = /** @class */ (function () {
    function Notas(ap1, ap2, apf) {
        this.ap1 = ap1;
        this.ap2 = ap2;
        this.apf = apf;
    }
    Notas.prototype.media = function () {
        return (this.ap1 + this.ap2 + this.apf) / 3;
    };
    return Notas;
}());
var claudio = new Notas(5.0, 4, 9);
var luiz = new Notas(6, 6, 6);
var lidia = new Notas(5, 6, 3);
if (claudio.media() >= 6)
    console.log("Claudio passou");
else
    console.log("Claudio nao passou");
if (luiz.media() >= 6)
    console.log("Luiz passou");
else
    console.log("Luiz nao passou");
if (lidia.media() >= 6)
    console.log("Lidia passou");
else
    console.log("Lidia nao passou");
