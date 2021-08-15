class Animal {
    constructor(fisonomia, alimentacion, habitad, reproduccion){
        this.fisonomia = fisonomia,
        this.alimentacion = alimentacion,
        this.habitad = habitad,
        this.reproduccion = reproduccion
    }
    //vertebrados e invertebrados
    segunFisonomia (){
        if(this.fisonomia === "vertebrado"){ 
        return "Es un ser vivo que pertenece al reino animal, es " + this.fisonomia + 
        " es decir tiene esqueleto, columna vertebral.";
    } else{
        return " es un animal " + this.fisonomia + 
        " es decir no tienen huesos, esqueleto, columna vertebral.";
    }
    }
    //oviparos - viviparos
    segunComoNacen (){
        if(this.reproduccion === "viviparo"){ 
            return "Es un animal " + this.reproduccion +
            " es decir nacen del vientre de la madre.";
        } else {
            return "Es un animal " + this.reproduccion +
        " es decir nacen de huevos.";
        }
    }
    segunAlimentacion (){
        if(this.alimentacion === "carnivoro"){
            return "Es un animal " + this.alimentacion + " es decir se alimenta de carne."; 
        } else if (this.alimentacion === "herbivoro"){
            return "Es un animal " + this.alimentacion + 
            " es decir se alimenta de hierbas, vegetales.";
        } else {
            return "Es un animal " + this.alimentacion +
            " es decir come vegetales y carne."
        }
        
    }
    segunHabitad (){
        if(this.habitad === "terrestre"){
            return "Es un animal " + this.habitad + " es decir habita en la superficie terrestre.";
        } else {
            return "Es un animal " + this.habitad + " es decir habita en el agua.";
        }
    }
}
let humano = new Animal("vertebrado", "omnivoro", "terrestre", "viviparo");
let vivora = new Animal("invertebrado", "carnivoro", "terrestre", "oviparo");
let caballo = new Animal("vertebrados", "herbivoro", "terrestre", "viviparo");

class Vertebrado extends Animal {
    constructor(fisonomia, alimentacion, habitad, reproduccion, caracteristicas){
        super(fisonomia, alimentacion, habitad, reproduccion),
        this.caracteristicas = caracteristicas
    }
    caractFundamentales (){
        return this.caracteristicas;
    }
}

let perro = new Vertebrado("vertebrado", "carnivoro", "terrestre", "viviparo");
perro.caracteristicas = "cuadrupedo";
console.log(perro);



// module.exports = {
//     Alimento
//   }
//   para exportar
//   const { Alimento } = require("./alimento.js")
//   para importar