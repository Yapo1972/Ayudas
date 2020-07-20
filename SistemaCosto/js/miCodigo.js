"use strict";
function renderizandoJSON(datos) {
    $("#titulo").text(datos.ayuda.titulo);
    var elementos = datos.ayuda.elementos;
    var barraLateral = $("#sidebar");
    for (var i = 0; i < elementos.length; i++) {
        var elementoAdicionar = $("<a class=\"btn-link btn-block text-left p-2\" href='#" + elementos[i].indice + "'>" + elementos[i].texto + "</a>");
        barraLateral.append(elementoAdicionar);
    }
    var contenido = $('#contenido');
    var altoMenu = $('#menuP').height();
    barraLateral.css("margin-top", altoMenu + 15);
    asignarAltoBarraLateral();
    contenido.load("./parciales/" + datos.ayuda.ficheroHTML);
    contenido.css("margin-top", altoMenu + 15);
}
function asignarAltoBarraLateral() {
    var altoMenu = $('#menuP').height();
    var altoPagina = $(window).height();
    $("#sidebar").height(altoPagina);
}
$(document).ready(function () {
    var ayudas = [
        './JSON/SCosto.json',
        './JSON/produccion.json',
        './JSON/enconstruccion.json',
        './JSON/enconstruccion.json'
    ];
    var url = window.location.search;
    var parametros = new URLSearchParams(url);
    var numeroAyuda = parametros.get('Ayuda');
    var indice = 0;
    if (numeroAyuda) {
        indice = parseInt(numeroAyuda);
    }
    $.getJSON(ayudas[indice], renderizandoJSON);
    var barraLateral = $('#sidebar');
});
