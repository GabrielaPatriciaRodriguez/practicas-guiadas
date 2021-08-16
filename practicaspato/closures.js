//CLOSURES: Una funcion que retorna de otra funcion. hay q estar atentos xq estan por todos lados
//Es una caracteristica del lenguaje

function funcionUno () {
   let miVariable= 1;
    function funcionInterna () {
       console.log(miVariable); 
    }
    return funcionInterna;
}

//var variableExterna = funcionUno();
//console.log(variableExterna);
//variableExterna();

//otro ejemplo de una funcion que retorna de otra funcion
//accedemos a una funcion interna
function funcionDos () {
    let miVariable = "Patricia";
    function miNombre() {
        console.log(miVariable);
    }
    return miNombre;
}
let variableExterna = funcionDos();
console.log(variableExterna);
variableExterna();