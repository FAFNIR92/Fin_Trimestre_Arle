let marca = prompt("Ingrese la marca de carro (Chevrolet, Mazda o Renault): ");

switch (marca) {
  case "Chevrolet":
    console.log("Referencias disponibles: Captiva, Tracker");
    let referenciaChevrolet = prompt("Ingrese la referencia de carro: ");
    
    if (referenciaChevrolet == "Captiva") {
      console.log("Información de la Chevrolet Captiva");
      console.log("...");
    } else if (referenciaChevrolet == "Tracker") {
      console.log("Información de la Chevrolet Tracker");
      console.log("...");
    } else {
      console.log("Referencia no válida");
    }
    
    break;
    
  case "Mazda":
    console.log("Referencias disponibles: CX-5, CX-9");
    let referenciaMazda = prompt("Ingrese la referencia de carro: ");
    
    if (referenciaMazda == "CX-5") {
      console.log("Información de la Mazda CX-5");
      console.log("...");
    } else if (referenciaMazda == "CX-9") {
      console.log("Información de la Mazda CX-9");
      console.log("...");
    } else {
      console.log("Referencia no válida");
    }
    
    break;
    
  case "Renault":
    console.log("Referencias disponibles: Duster, Sandero");
    let referenciaRenault = prompt("Ingrese la referencia de carro: ");
    
    if (referenciaRenault == "Duster") {
      console.log("Información de la Renault Duster");
      console.log("...");
    } else if (referenciaRenault == "Sandero") {
      console.log("Información de la Renault Sandero");
      console.log("...");
    } else {
      console.log("Referencia no válida");
    }
    
    break;
    
  default:
    console.log("Marca no válida");
}
