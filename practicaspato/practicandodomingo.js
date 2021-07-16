const persona = {
    nombre: "Juan Rodriguez",
    edad: 62,
    genero: "M",
    profesion: "albañil y yesista",
    educacion: "primaria completa",
    ciudad: "Monte Caseros",
    humano: true
}
let personas = [ ]

//
function crearPersonas(nombre, edad, genero, profesion, educacion, ciudad, humano) {
    return { 
        nombre,
        edad,
        genero,
        profesion,
        educacion,
        ciudad,
        humano
    }
    
}

personas.push(crearPersonas("Rodriguez Patricia", 36, "F", "Programadora", "Universitaria", "Virasoro", true))
personas.push(crearPersonas("Rodriguez Lorena", 31, "F", "Programadora", "Secundario completo", "Virasoro", true))
personas.push(crearPersonas("Ayala Maximiliano", 28, "M", "Programador", "Universitario", "Resistencia", true))
 console.log(personas)

 //Hacer una funcion que traiga personas menores a 30

 function personasMenoresATreinta (personasQueLeVoyAPasar) {
     let arrayPersonsFilter = [ ];
     for (let i = 0; i < personasMenoresATreinta.length; i++) {
        if (personasQueLeVoyAPasar[i].edad > 30) {
            arrayPersonsFilter.push(personasQueLeVoyAPasar[i])
        }
         
     }
 }
 