const myuuid = require('uuid')

const reservations = [
    { id: 1, name: "Giovanni Rossi", date: "2025-06-25", time: "19:00", guests: 2 },
    { id: 2, name: "Maria Bianchi", date: "2025-06-25", time: "20:00", guests: 4 } 
]

let myuuid = uuidv4();

class Reservation {
    static getAll() {
        return reservations
    }

    static create({ name, date, time, guests }) {
        const reservation = { id: uuidv4, name, date, time, guests }
        reservations.push(reservation)
        return reservation
    }

    static updateGuests(id,guests) {
        const reservation = reservations.find(r => r.id === id)
        if(reservation) {
            reservations.guests = guests
            return reservation
        }
        return null
    }

    static delete(id) {
        const index = reservations.findIndex(r => r.id === id)
        if(index) {
            reservations.splice(index, 1)
            return true
        }
        return false
    }
}

module.exports = Reservation