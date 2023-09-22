class Hotel {
    constructor() {
        this.reservas = [];
        this.habitaciones = {
            individual: { total: 3, ocupadas: 0 },
            doble: { total: 3, ocupadas: 0 },
            familiar: { total: 3, ocupadas: 0 }
        };
    }

    reservar(nombre, paisOrigen, numPersonas, periodoEstadia, tipoHabitacion, fumador, mascota) {
        if (this.habitaciones[tipoHabitacion].ocupadas < this.habitaciones[tipoHabitacion].total) {
            if ((tipoHabitacion === 'individual' && numPersonas <= 2) ||
                (tipoHabitacion === 'doble' && numPersonas <= 4) ||
                (tipoHabitacion === 'familiar' && numPersonas <= 6)) {
                if (!(tipoHabitacion !== 'familiar' && mascota)) {
                    this.habitaciones[tipoHabitacion].ocupadas++;
                    this.reservas.push({
                        nombre,
                        paisOrigen,
                        numPersonas,
                        periodoEstadia,
                        tipoHabitacion,
                        fumador,
                        mascota
                    });
                    console.log('Reserva realizada con éxito.');
                } else {
                    console.log('Las mascotas solo se aceptan en habitaciones familiares.');
                }
            } else {
                console.log('No se puede exceder el número de personas por habitación.');
            }
        } else {
            console.log('No hay habitaciones disponibles de este tipo.');
        }
    }

    obtenerEstadisticas() {
        return this.reservas;
    }
}

let hotel = new Hotel();

hotel.reservar('Sebastian', 'Colombia', 2, '2 dias', 'individual', false, false);

console.log(hotel.obtenerEstadisticas());