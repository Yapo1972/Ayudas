interface elementosAyuda {
  titulo: string;
  ficheroHTML:string;
  elementos: Array<{
    texto: string;
    indice: string;
  }>;
}
interface jsonAyuda {
  ayuda: elementosAyuda;
}

function renderizandoJSON(datos: jsonAyuda) {
  $("#titulo").text(datos.ayuda.titulo);
  var elementos = datos.ayuda.elementos;
  let barraLateral = $("#sidebar");
  for (let i = 0; i< elementos.length; i++ ) {
    let elementoAdicionar = $(
      `<a class="btn-link btn-block text-left p-2" href='#${elementos[i].indice}'>${elementos[i].texto}</a>`
    );
    barraLateral.append(elementoAdicionar);
  }
}
function asignarAltoBarraLateral(){
    let altoMenu = $('#menuP').height() as number;
    let altoPagina = $(window).height() as number;
    $("#sidebar").height( altoPagina );
}


$(document).ready(() => {
   $.getJSON("./JSON/SCosto.json", renderizandoJSON);
  let barraLateral = $('#sidebar');
  let contenido =$('#contenido');
  let altoMenu = $('#menuP').height() as number;
  barraLateral.css("margin-top", altoMenu+15);
  asignarAltoBarraLateral();
  contenido.load('./parciales/costos.html');
  contenido.css("margin-top", altoMenu+15);
  

});
