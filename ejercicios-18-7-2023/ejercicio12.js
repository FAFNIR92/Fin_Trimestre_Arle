let equipos = [];
let partidos = [];

for (let i = 0; i < 2; i++) {
  let equipo = prompt("Ingrese el nombre del equipo " + (i+1) + ": ");
  equipos.push(equipo);
}

for (let i = 0; i < 3; i++) {
  let partido = [];
  
  for (let j = 0; j < 2; j++) {
    let marcador = parseInt(prompt("Ingrese el marcador del equipo " + equipos[j] + " en el partido " + (i+1) + ": "));
    partido.push(marcador);
  }
  
  partidos.push(partido);
}

let resultados = {};

for (let i = 0; i < equipos.length; i++) {
  let equipo = equipos[i];
  let puntos = 0;
  
  for (let j = 0; j < partidos.length; j++) {
    let partido = partidos[j];
    
    if (partido[i] > partido[(i+1)%2]) {
      puntos += 3;
    } else if (partido[i] == partido[(i+1)%2]) {
      puntos += 1;
    }
  }
  
  resultados[equipo] = puntos;
}

console.log(resultados);
