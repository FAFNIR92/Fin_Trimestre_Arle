let servicio = prompt("Bienvenido a Lavan Ya, ¿Qué servicio desea solicitar?");

let n1 = Lavado
let n2 = Planchado

let tipoLavado;
if (servicio === "1") {
  tipoLavado = prompt("¿Qué tipo de lavado desea solicitar?");
  
  let Tipolavado2 = Enseco
  let TipoLavado3 = Normal
}

let cantidadPrendas = parseInt(prompt("¿Cuántas prendas desea lavar o planchar?"));

let costo;
if (servicio === "1") {
  if (tipoLavado === "1") {
    costo = cantidadPrendas * 2000;
  } else if (tipoLavado === "2") {
    costo = cantidadPrendas * 1500;
  } else {
    alert("Opción inválida");
  }
} else if (servicio === "2") {
  costo = cantidadPrendas * 1800;
  costo += 3000;
} else {
  alert("Opción inválida");
}

alert(`El costo total de su servicio es de ${costo} pesos.`);
