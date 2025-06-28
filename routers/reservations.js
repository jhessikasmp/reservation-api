const express = require ("express")
const reservationController = require('../controllers/reservationController')
const router = express.Router()


/**
 * @swagger
 * /api/reservations:
 *   get:
 *     summary: Elenca tutte le prenotazioni
 *     responses:
 *       200:
 *         description: Elenco delle prenotazioni
 */
router.get('/', reservationController.allReservations)

/**
 * @swagger
 * /api/reservations:
 *   post:
 *     summary: Crea una nuova prenotazione
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *               guests:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Prenotazione creata
 */
router.post('/', reservationController.createReservation)


/**
 * @swagger
 * /api/reservations/{id}/guests:
 *   patch:
 *     summary: Aggiorna solo il numero di ospiti della prenotazione
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               guests:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Numero di ospiti aggiornato
 */
router.patch('/:id', reservationController.updateGuests)

/**
 * @swagger
 * /api/reservations/{id}:
 *   delete:
 *     summary: Cancella una prenotazione
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Prenotazione cancellata
 */
router.delete('/:id', reservationController.deleteReservation)

module.exports = router