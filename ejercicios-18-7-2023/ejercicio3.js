let costoCasa = parseFloat(prompt("Bienvenido a Sucasa, Porfavor ingrese el costo de la casa:"));

let tipoInmueble = prompt("Ingrese el tipo de inmueble.");

let inmueble1 = Usado
let inmueble2 = Nuevo

let comision;
if (tipoInmueble === "1") {
  comision = costoCasa * 0.1;
} else if (tipoInmueble === "2") {
  comision = costoCasa * 0.12;
} else {
  alert("Opción inválida");
}

let valorPropietario = costoCasa - comision;
let valorInmobiliaria = comision;

alert(`El valor recibido por el propietario es de ${valorPropietario} pesos y el valor recibido por la inmobiliaria es de ${valorInmobiliaria} pesos.`);

