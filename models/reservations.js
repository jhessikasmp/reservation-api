const reservations = [
    { id: 1, name: "Giovanni Rossi", date: "2025-06-25", time: "19:00", guests: 2 },
    { id: 2, name: "Maria Bianchi", date: "2025-06-25", time: "20:00", guests: 4 } 
]

let idCounter = 3

class Reservation {
    static getAll() {
        return reservations
    }

    static create({ name, date, time, guests }) {
        const reservation = { id: idCounter, name, date, time, guests}
        reservations.push(reservation)
        return reservation
    }

    static update(id, guests) {
        const reservation = reservations.find(resev => resev.id === id)
        if(reservation) {
            reservation.guests = guests
            return reservation
        }
        return null
    }

    static delete(id) {
        const index = reservations.findIndex(resev => resev.id === id)
        if(index !== -1) {
            reservations.splice(index, 1)
            return true
        }
        return null
    }
}

module.exports = Reservation