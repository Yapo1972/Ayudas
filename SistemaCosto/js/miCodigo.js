"use strict";
function renderizandoJSON(datos) {
    $("#titulo").text(datos.ayuda.titulo);
    var elementos = datos.ayuda.elementos;
    var barraLateral = $("#sidebar");
    for (var i = 0; i < elementos.length; i++) {
        var elementoAdicionar = $("<a class=\"btn-link btn-block text-left p-2\" href='#" + elementos[i].indice + "'>" + elementos[i].texto + "</a>");
        barraLateral.append(elementoAdicionar);
    }
}
function asignarAltoBarraLateral() {
    var altoMenu = $('#menuP').height();
    var altoPagina = $(window).height();
    $("#sidebar").height(altoPagina);
}
$(document).ready(function () {
    $.getJSON("./JSON/SCosto.json", renderizandoJSON);
    var barraLateral = $('#sidebar');
    var contenido = $('#contenido');
    var altoMenu = $('#menuP').height();
    barraLateral.css("margin-top", altoMenu + 15);
    asignarAltoBarraLateral();
    contenido.load('./parciales/costos.html');
    contenido.css("margin-top", altoMenu + 15);
});
