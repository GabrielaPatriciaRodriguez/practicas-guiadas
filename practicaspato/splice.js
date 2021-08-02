// metodo splice en array:
// para quitar un elemento especifico o agregar

let diasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];

console.log(diasDeLaSemana);
console.log(diasDeLaSemana.length);

//quitando elementos con metodo splice (dia martes)

let martes = diasDeLaSemana.splice(1, 1); // me ubico en el indice a eliminar y hasta donde eliminar
console.log(diasDeLaSemana);
console.log(martes);

//agregando elementos con metodo splice

diasDeLaSemana.splice(4, 0, "sabado"); // en que indice quiero agregar
console.log("mmmmmmmmmmm" + diasDeLaSemana);
diasDeLaSemana.splice(1, 0, "martes");
console.log(diasDeLaSemana);

//eliminando y añadiendo a la vez. Cambiando sabado por domingo
diasDeLaSemana.splice(5, 1, "Domingo"); //5(en que indice quiero agregar o quitar),
// 1(cuantos elementos quiero quitar, 0 si no quiero quitar, quiero agregar),
// y luego lo que quiero colocar.
console.log(diasDeLaSemana);

//agregando tambien sabado
diasDeLaSemana.splice(5, 0, "Sabado"); // 5 (en que indice quiero agregar), 0 cuando quiero 
//agregar, y luego lo que quiero agregar.
console.log(diasDeLaSemana);
