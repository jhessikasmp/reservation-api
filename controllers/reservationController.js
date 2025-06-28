const { validate: isUuid } = require('uuid');
const reservation = require("../models/reservations");
const logger = require("..//logger"); 

exports.allReservations = (req, res) => {
    const all = reservation.getAll(); 
    res.json(all);
};

exports.createReservation = (req, res) => {
    const { name, date, time, guests } = req.body;
    if (!name || !date || !time || !guests) {
        return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
    }
    const newReservation = reservation.create({ name, date, time, guests });
    logger.info('Pronotazione creata', { reservation: newReservation });
    res.status(201).json({ message: `In caso di disdetta, la prenotazione deve essere annullata o comunque comunicata con almeno un'ora di anticipo rispetto all'orario stabilito`, newReservation });
};

exports.updateGuests = (req, res) => {
    const id = req.params.id;
    const { guests } = req.body;
    if (!isUuid(id)) {
        return res.status(400).json({ error: 'ID non è stata trovato' });
    }
    if (guests === undefined) {
        return res.status(400).json({ error: 'Per modificare il numero di ospiti, il campo guests è obbligatorio' });
    }

    const updated = reservation.updateGuests(id, guests);

    if (updated) {
        logger.info('Quantità di persone aggiornata', { id, guests });
        res.json(updated);
    } else {
        res.status(404).json({ erro: 'Purtroppo la prenotazione non è stata trovata' });
    }
};

exports.deleteReservation = (req, res) => {
    const id = req.params.id;

    if (!isUuid(id)) {
        return res.status(400).json({ error: 'ID non è stata trovato' });
    }

    const success = reservation.delete(id);

    if (success) {
        logger.info('Prenotazione cancellata', { id });
        res.json({ message: 'Prenotazione cancellata con successo' });
    } else {
        res.status(404).json({ erro: 'Purtroppo la prenotazione non è stata trovata' });
    }
};