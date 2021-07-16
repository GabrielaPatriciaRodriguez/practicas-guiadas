const personas = [{
    name: "Pancho",
    genero: "masculino",
    profesion: "Abogado",
    esRica: false,
    Ciudad: "Posadas",
    Edad: 58,
    Nacimiento : 12/11/1963,
    hijos: 3,
    Comida: "asado" // :(
  }, {
    name: "Lindolfo",
    genero: "masculino",
    profesion: "Desconocido",
    esRica: false,
    Ciudad: "Virasoro",
    Edad: 68,
    Nacimiento: 12/12/1952,
    Hijos: 6,
    Comida: "asado" // :(
  }, {
    name: "Hernan",
    genero: "masculino",
    profesion: "Abogado",
    esRica: false,
    Ciudad: "Monte Caseros",
    Edad: 37,
    Nacimiento: 23/04/1984,
    Hijos: 2,
    Comida: "asado" // :(
  }, {
    name: "Patricia",
    genero: "femenino",
    profesion: "Abogado",
    esRica: false,
    Ciudad: "Virasoro", 
    Edad: 36,
    Nacimiento: 09/03/1985,
    Hijos: 2,
    Comida: "pastas" // :(
  }]


  personas.push({
    name: "Betty",
    genero: "femenino",
    profesion: "Ama de casa",
    esRica: true,
    Ciudad: "Virasoro", 
    Edad: 58,
    Nacimiento: 29/11/1963,
    Hijos: 6,
    Comida: "verduras"
  });
  
  console.log(personas);
  
  //Añadir un elemento al principio del array:
  // let nuevaFruta = frutas.unshift("Frutilla")
  
  personas.unshift({
    name: "Anahi",
    genero: "femenino",
    profesion: "Estudiante",
    esRica: true,
    Ciudad: "Posadas", 
    Edad: 20,
    Nacimiento: 15/05/2001,
    Hijos: 0,
    Comida: "Pastel de papas"
  });
  
  console.log(personas);
  
  // crear una funcion que traiga personas de posadas de genero femenino
  
  function mujeresDePosadas(arrayQueLeVasApasar, generoF, ciudadP) {
    let nuevoArray = [];
    for (let i= 0; i < arrayQueLeVasApasar.length; i= i + 1){
      if (arrayQueLeVasApasar[i].genero === generoF && arrayQueLeVasApasar[i].Ciudad === ciudadP) {       
        nuevoArray.push(arrayQueLeVasApasar[i])
    }
     }
    return nuevoArray
  };
  console.log(mujeresDePosadas(personas,"femenino","Posadas"));