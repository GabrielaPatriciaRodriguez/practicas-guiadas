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
    //carnivoros - herbivoros - omnivoros
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
    //terrestre - acuatico
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
        this.caracteristicas = Array.isArray(caracteristicas) ? [...caracteristicas]: []
        //this.caracteristicas = [] //otra opcion 
    }
    caractFundamentales (){
        return this.caracteristicas;
    }
    //otra opcion
    /*setCaracteristica(caracteristicas){
    this.caracteristicas = [...this.caracteristicas,...caracteristicas]
  } */
}

let perro = new Vertebrado("vertebrado", "carnivoro", "terrestre", "viviparo", ["cuadrupedo"]);

console.log(perro);


//para exportar
module.exports = {
 Vertebrado
}

