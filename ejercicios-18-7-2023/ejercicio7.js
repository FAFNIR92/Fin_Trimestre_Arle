let tipo = prompt("¿Es devolución o pérdida?");
let dias = parseInt(prompt("¿Cuántos días de retraso?"));
let libros = parseInt(prompt("¿Cuántos libros prestados?"));
let revistas = parseInt(prompt("¿Cuántas revistas prestadas?"));

let multa = 0;

if (tipo === "pérdida") {
  multa = libros * 10000 + revistas * 10000;
} else {
  multa = libros * 600 * dias + revistas * 500 * dias;
}

console.log(`La multa es de $${multa}`);
