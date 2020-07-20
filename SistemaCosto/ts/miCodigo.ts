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
  let contenido =$('#contenido');
  let altoMenu = $('#menuP').height() as number;
  barraLateral.css("margin-top", altoMenu+15);
  asignarAltoBarraLateral();
  contenido.load(`./parciales/${datos.ayuda.ficheroHTML}`);
  contenido.css("margin-top", altoMenu+15);

}
function asignarAltoBarraLateral(){
    let altoMenu = $('#menuP').height() as number;
    let altoPagina = $(window).height() as number;
    $("#sidebar").height( altoPagina );
}


$(document).ready(() => {
  let ayudas = [
    './JSON/SCosto.json',
    './JSON/produccion.json',
    './JSON/enconstruccion.json',
    './JSON/enconstruccion.json'
  ];
  let url = window.location.search;
  let parametros = new URLSearchParams(url);
  let numeroAyuda = parametros.get('Ayuda');
  let indice = 0;
  if( numeroAyuda ){
    indice = parseInt(numeroAyuda);
  }
   $.getJSON(ayudas[indice], renderizandoJSON);
  let barraLateral = $('#sidebar');
  

});
