let totalIngresado = 0;
let precioServicio = 500;
let cambio = 0;

while (totalIngresado < precioServicio) {
  let tipoMoneda = prompt("Ingrese tipo de moneda (500 o 1000) o billete (2000 o 5000): ");
  let monto = parseInt(prompt("Ingrese monto: "));
  
  if (tipoMoneda == "500" || tipoMoneda == "1000" || tipoMoneda == "2000" || tipoMoneda == "5000") {
    totalIngresado += monto;
  } else {
    alert("Tipo de moneda o billete no válido");
  }
}

if (totalIngresado > precioServicio) {
  cambio = totalIngresado - precioServicio;
  alert("Gracias por su compra. Su cambio es de $" + cambio);
} else {
  alert("Gracias por su compra");
}

alert("¡Vuelve pronto!");
