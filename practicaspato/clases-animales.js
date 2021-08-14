class Animales {
    constructor(fisonomia, alimentacion, habitad, reproduccion){
        this.fisonomia = fisonomia,
        this.alimentacion = alimentacion,
        this.habitad = habitad,
        this.reproduccion = reproduccion
    }
    //vertebrados e invertabrados
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
let humano = new Animales("vertebrado", "omnivoro", "terrestre", "viviparo");
let vivora = new Animales("invertebrado", "carnivoro", "terrestre", "oviparo");
let caballo = new Animales("vertebrados", "herbivoro", "terrestre", "viviparo");



