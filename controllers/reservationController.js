const Reservation = require("../models/reservations")
const logger = require("../logger")

exports.allReservations = (req,res) => {
    res.json(Reservation.getAll)
}

exports.createReservation = (req,res) => {
    const { name, date, time, guests} = req.body
    if(!name || !date || !time || !guests) {
        return res.status(400).json({ error: 'tutti i campi sono obbligatori' })
    }
    const newReservation = Reservation.create({ name, date, time, guests})
    logger.info('Pronotazione creata', { reservation: newReservation})

    res.status(201).json({ messages: `In caso di disdetta, la prenotazione deve essere annullata o 
        comunque comunicata con almeno un ora di anticipo rispetto all orario stabilito`, newReservation})
}

exports.updateGuests = (req,req) => {
    const id = parseInt(req.params.id)
    const { guests } = req.body
    if(guests === undefined) {
        return res.status(400).json({ error: 'Per modificare il numero di ospiti, il campo guests è obbligatorio'})
    }
    const update = Reservation.updateGuests(id, guests)
    if(update) {
        logger.info('Quantità di persone aggiornata', { id, guests})
        res.json(update)
    } else {
        res.status(404).json({ erro: 'Purtroppo la prenotazione non è stata trovata' })
    }
}

exports.deleteReservation = (req,res) => {
    const id = parseInt(req.params.id)
    const sucess = Reservation.delete(id)
    confirm('Sei sicuro di voler cancellare la prenotazione?')
    if(confirm){
        logger.info('Prenotazione cancellata', { id })
        res.json({ message: 'Prenotazione cancellata con successo' })
    } else {
        res.satus(404).json({ erro: 'Purtroppo la prenotazione non è stata trovata' })
    }
}