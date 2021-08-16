//importar
const { Vertebrado } = require("./class-animal.js")

//const pato = new Vertebrado("vertebrado", "herbivoro", "terrestre", "oviparo", "hace cuac");
const humano = new Vertebrado("vertebrado", "omnivoro", "terrestre", "viviparo", "es el mas inteligente");

console.log(pato);
//console.log(pato.caractFundamentales());

console.log(humano);
console.log(humano.segunHabitad());
console.log(humano.segunAlimentacion());
console.log(humano.caractFundamentales());