let tamano = prompt("Bienvenido a nuestra tienda, ¿Qué tamaño desea solicitar?");
let n1 = pequeño
let n2 = Grande

let cantidadStickers = parseInt(prompt("¿Cuántos stickers desea solicitar?"));

if (cantidadStickers < 10) {
    alert("La cantidad mínima de stickers que puede solicitar es de 10.");
} else {
    let costo;
    if (tamano === "1") {
    costo = cantidadStickers * 4000;
    } else if (tamano === "2") {
      costo = cantidadStickers * 6000;
    } else {
      alert("Opción inválida");
    }

    alert(`El costo total de sus stickers es de ${costo} pesos.`);
}
