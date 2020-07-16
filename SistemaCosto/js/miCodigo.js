"use strict";
var ejemplo = /** @class */ (function () {
    function ejemplo(num, cad) {
        this.valorNumerico = 0;
        this.valorCadena = "";
        this.valorNumerico = num;
        this.valorCadena = cad;
    }
    return ejemplo;
}());
function obtenerPorciento(valor, total, cantDecimales) {
    var resultado = "0";
    if (total > 0) {
        resultado = (valor * 100 / total).toFixed(cantDecimales) + " %";
    }
    return resultado;
}
$(document).ready(function () {
    $('.tema').click(function () {
        var datos = $(this).data();
    });
    $('#sidebar').height($(window).height());
});
