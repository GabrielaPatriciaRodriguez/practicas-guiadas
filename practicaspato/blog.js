//Creamos un objeto que se llame Blog, que tenga propiedades (articulos "post", que van a ser
//objetos, a su vez van a tener propiedades: titulos "tittle", cuerpo "body", fecha, autores, comentarios)
// condicion: solo los que se encuentran en autores van a poder crear articulos "post"

const Blog = {
    autores: [],
    post: [],
    titulo: " ",
  };
  // Hacer una funcion que agregue un titulo a ese blog
  
  function agregarTitulo(recibeTitulo) {
    Blog.titulo = recibeTitulo;
  }
  agregarTitulo("El Blog de Patricia");
  console.log(Blog);
  
  // Funcion agregar autor
  function agregarAutor(recibeAutor) {
    Blog.autores.push(recibeAutor);
  }
  agregarAutor("Borges");
  agregarAutor("Bellucio");
  console.log(Blog);
  
  //Devuelve true si el autor se encuentra en el array autores sino devuelve false
  function seEncuentraEnAutores(recibeAutor) {
    for (let i = 0; i < Blog.autores.length; i = i + 1) {
      if (Blog.autores[i] === recibeAutor) {
        return true;
      } 
    }
    return false;
  }
  console.log(seEncuentraEnAutores("Bellucio"));
  
  //Hacer una funcion crear post, que reciba un titulo, body, y autor. Que devuelva un
  //un objeto con esos parametros: Tambien repasar funciones - scope

  
  function puedeCrearPost(titulo, body, autor) {
    if (seEncuentraEnAutores(autor)) {
      console.log(autor, "puede crear Post y " + agregarObjAPost);
    }
    else {
      console.log("No puede crear Post");
    }
  }
  puedeCrearPost(null, null, "Maximiliano");
  puedeCrearPost(null, null, "Bellucio");

  function agregarObjAPost(TituloDePost, autorDePost, Body) {
    Blog.post.push(TituloDePost);
  }
  agregarObjAPost({Titulo: "Programacion Patricia", autor: "Bellucio", body: " "});
  
  console.log(Blog);
  puedeCrearPost(null, null, "maxi");

  

  