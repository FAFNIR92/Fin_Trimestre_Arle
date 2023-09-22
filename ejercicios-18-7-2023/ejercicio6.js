// Mostrar menú de opciones
let opcion = prompt("Bienvenido a Italiana Pizza, ¿Qué desea ordenar?");
let n1 = Pizza
let n2 = Sándwiches
let n3 = Ensaladas

let cantidad = prompt("¿Cuántas porciones desea ordenar?");

let costo;
if (opcion === "1") {
  costo = cantidad * 7000;
} else if (opcion === "2") {
  costo = cantidad * 5000;
} else if (opcion === "3") {
  costo = cantidad * 15000;
} else {
  alert("Opción inválida");
}

let agregarSalsa = confirm("¿Desea agregar salsa por un costo adicional de 3000?");

if (agregarSalsa) {
  costo += 3000;
}

alert(`El costo total de su orden es de ${costo} pesos.`);


