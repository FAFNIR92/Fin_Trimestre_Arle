let tabla = parseInt(prompt("Ingrese el número de tabla de multiplicar: "));

for (let i = 1; i <= 10; i++) {
  let resultado = tabla * i;
  console.log(tabla + " x " + i + " = " + resultado);
}
