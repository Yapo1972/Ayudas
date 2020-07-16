class ejemplo{
    valorNumerico:number = 0;
    valorCadena:string = "";
    constructor( num:number, cad:string){
        this.valorNumerico = num;
        this.valorCadena = cad;
    }
}

function obtenerPorciento(valor:number, total:number, cantDecimales: number ):string {
    let resultado = "0";
    if( total>0 ){
        resultado = `${(valor*100/total).toFixed(cantDecimales)} %`;
    }
    return resultado;
    
}

$(document).ready(()=>{
    $('.tema').click(function(){
        let datos = $(this).data();
    });

    $('#sidebar').height($(window).height() as number);




})