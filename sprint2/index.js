function capturar(){
    acumulador=0;
    function Persona(nombre,monto,acumulador){
        this.nombre=nombre;
        this.monto=monto;
    }
    let nombreCapturar = document.getElementById("nombre").value;
    /* console.log(nombreCapturar) */
    let montoCapturar = document.getElementById("monto").value;
    /* console.log(sumaCapturar); */

    nuevoSujeto = new Persona(nombreCapturar,montoCapturar);
    console.log(nuevoSujeto); 
    agregar();

    acumulador=+Number(monto);
}

const baseDatos= [];
function agregar(){
    baseDatos.push(nuevoSujeto);
    /* console.log(baseDatos); */
    document.getElementById("tabla").innerHTML +='<tbody><td>'+nuevoSujeto.nombre+'</td><td>$'+nuevoSujeto.monto+'</td></tbody>';
    document.getElementById("mitotal").innerHTML=acumulador;
};
