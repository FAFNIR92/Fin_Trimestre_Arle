let respuestasCorrectas = 0;

let pregunta1 = prompt("¿Pregunta 1?");
if (pregunta1 === "respuesta correcta") {
  respuestasCorrectas += 10;
}

let pregunta2 = prompt("¿Pregunta 2?");
if (pregunta2 === "respuesta correcta") {
  respuestasCorrectas += 10;
}

let pregunta3 = prompt("¿Pregunta 3?");
if (pregunta3 === "respuesta correcta") {
  respuestasCorrectas += 10;
}

let pregunta4 = prompt("¿Pregunta 4?");
if (pregunta4 === "respuesta correcta") {
  respuestasCorrectas += 10;
}

let pregunta5 = prompt("¿Pregunta 5?");
if (pregunta5 === "respuesta correcta") {
  respuestasCorrectas += 10;
}

console.log(`Obtuviste ${respuestasCorrectas} puntos`);
