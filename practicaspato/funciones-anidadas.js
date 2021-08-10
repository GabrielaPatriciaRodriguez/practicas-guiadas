//FUNCIONES ANIDADAS: Son funciones dentro de otras funciones

function decorar (texto) {
    return "****" + texto + "****"
};
console.log(decorar("Hola"));

function decorarMucho (texto) {
    let a = decorar(texto);
    return "---" + a + "---";
}
console.log(decorarMucho("Hola"));