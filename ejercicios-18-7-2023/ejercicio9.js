let votosAnaMariaSuarez = 0;
let votosDiegoAcero = 0;

for (let i = 1; i <= 10; i++) {
  let voto = parseInt(prompt(`Votante ${i}: ¿1. Ana Maria Suarez o 2. Diego Acero?`));
  
  if (voto === 1) {
    votosAnaMariaSuarez++;
  } else if (voto === 2) {
    votosDiegoAcero++;
  } else {
    console.log("Opción inválida. Voto no contabilizado.");
  }
}

if (votosAnaMariaSuarez > votosDiegoAcero) {
  console.log("El ganador es Ana Maria Suarez");
} else if (votosDiegoAcero > votosAnaMariaSuarez) {
  console.log("El ganador es Diego Acero");
} else {
  console.log("Hubo un empate");
}
