function prepararFrutas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Las frutas están listas.");
        resolve(["fresa", "manzana", "mango"]);
      }, 2000); 
    });
}

function picarFrutas(frutas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Las frutas están picadas.");
      resolve(frutas);
    }, 1000); 
  });
}

function mezclarFrutasConHelado(frutas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Frutas y helado mezclado.");
      resolve("ensalada de frutas lista!");
    }, 1500); 
  });
}

function hacerHeladoDeFrutas() {
  prepararFrutas()
    .then(picarFrutas)
    .then(mezclarFrutasConHelado)
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.error("Hubo un error: " + error);
    });
}

hacerHeladoDeFrutas();
  