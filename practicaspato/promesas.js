//Funciones asincronas -

//Ejemplo de funcion con callback (llamar de vuelta) - genera callback help 
//genera piramide del infierno, callback sobre callback sobre callback...
//y no trata el tema de los errores

// function sumar(x,y){
//     console.log(x+y);
//   }
  
//   function calcular(callback){
//     let x;
//     let y;
//     setTimeout(function(){
//       x = 5;
//       y = 10;
//       callback(x,y);
//     }, 1000);
//   }
  
//   calcular(sumar)
  
//   //Ejemplo de promesas
//   //PROMESAS: Es la promesa de un resultado
  
//   const nuevaPromesa = new Promise(function(resolve, reject){
//     let err;
//     setTimeout(function(){
//       // consulta db
//       resolve([1,2,3,4,5,6,7,8,9,10]);
//     }, 1000);
//     if(err){
//       reject(err);
//     }
//   })
  
//   nuevaPromesa // Esto simula consulta a base de datos(que puede demorar);
//   .then(function(resultado){
//     // En el primer then se ejecuta si la promesa se resuelve
//     console.log(resultado.reduce((a,b)=>a+b))
//   }).catch(function(err){
//     // En el catch se ejecuta si la promesa se rechaza
//     console.log(err);
//   })
//-----------------------------------------------

//Ejemplo de Promesa de JAN
let desarrollo = new Promise(function(resolve, reject) {
   //Accion o acciones para conseguir un resultado satisfactorio
    setTimeout(()=> {
        const proyecto = "paquete"
        let aleatorio = Math.random()
        if(aleatorio < 0.4){
            resolve(proyecto)
        } else {
            reject("Proyecto no entregado")
        }
    }, 5000)
})
desarrollo
.then((proyecto) => console.log(proyecto))
.catch((error) => console.log(error))
.finally(() => console.log("proyecto finalizado"))

//-----------------------------------------------
  // Ejemplo de async await
  
//   const algo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve([1,2,3,4,5,6,7,8,9,10]);
//     }, 5000);
//   });
  
//   const nuevoEvento = new Event("patoLore")
  
//   nuevoEvento.addEventListener(() => {
//     console.log("Esto se ejecuta cuando el evento se dispara")
//   });
  
  
//   async function consultaMasSuma(){
//     try {
//       const result = await algo
//       console.log(result.reduce((a,b)=>a+b))
//     } catch (error) {
//       console.log(error)
//     }
//   }
  
//   consultaMasSuma();