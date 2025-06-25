const Reservation = require('../models/reservations')
const logger = require('../logger')

exports.allReservations = (req,res) => {
    res.json(Reservation.getAll())
}

exports.createReservatio = (req,res) => {
    const { name, date, time, guests } = req.body
    if(!name || !date || !time || !guests) {
        return res.status(400).json({ error : "Tutti i campi sono obbligatori" })
    }
    const newReservatio = Reservation.create({ name, date, time, guests})
    logger.info('Prenotazione creata', { reservation: newReservatio})
    res.status(200).json(newReservatio)
}

exports.updateGuests = (req,res) => {
    const id = parseInt(req.params.id)
    const { guests } = req.body
    if(guests === undefined) {
        return res.status(400).json({ erro: 'Il campo ospiti è obbligatorio' })
    }
    const update = Reservation.update(id, guests)
    if(update){
        logger.info('Quantità di persone aggiornata', { id, guests })
        res.json(update)
    } else {
        res.status(400).json({ erro: 'Prenotazione non trovata' })
    }
}

exports.deleteReservatio = (req,res) => {
    const id = parseInt(req.params.id)
    const sucess = Reservation.delete(id)
    if(sucess) {
        logger.info('Prenotazione cancellata', { id })
        res.json({ message: 'Prenotazione cancellata con successo' })
    } else {
        res.status(400).json({ error: 'Prenotazione non trovata' })
    }
}