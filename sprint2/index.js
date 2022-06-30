this.acumulador=0;
this.dividir=0;
function capturar(){
    function Persona(nombre,monto){
        this.nombre=nombre;
        this.monto=monto;
    }
    let nombreCapturar = document.getElementById("nombre").value;
    /* console.log(nombreCapturar) */
    let montoCapturar = document.getElementById("monto").value;
    /* console.log(sumaCapturar); */

    //Suma de los montoss
    for (i= 0; i<montoCapturar.length-2; i++) {
        acumulador=acumulador+Number(montoCapturar);
        dividir=acumulador/Number(montoCapturar.length);
        console.log(acumulador)
    }
  
    nuevoSujeto = new Persona(nombreCapturar,montoCapturar);
    agregar();

}

const baseDatos= [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    /* console.log(baseDatos); */
    document.getElementById("tabla").innerHTML +='<tbody><td>'+nuevoSujeto.nombre+'</td><td>$'+nuevoSujeto.monto+'</td></tbody>';
    document.getElementById("mitotal").innerHTML=acumulador;
    document.getElementById("cadauno").innerHTML=dividir;
};
