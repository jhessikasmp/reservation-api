const express = require('express')
const reservationController = require("../controllers/reservationController")

const router = express.Router()

/**
 * @swagger
 * /api/reservations:
 *   get:
 *     summary: Lista todas as reservas
 *     responses:
 *       200:
 *         description: Lista de reservas
 */
router.get('/', reservationController.allReservations)


/**
 * @swagger
 * /api/reservations:
 *   post:
 *     summary: Cria uma nova reserva
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
 *         description: Reserva criada
 */
router.post('/', reservationController.createReservatio)


/**
 * @swagger
 * /api/reservations/{id}/guests:
 *   patch:
 *     summary: Atualiza apenas o número de pessoas da reserva
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
 *         description: Número de pessoas atualizado
 */
router.patch('/:id', reservationController.updateGuests)


/**
 * @swagger
 * /api/reservations/{id}:
 *   delete:
 *     summary: Cancela uma reserva
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva cancelada
 */
router.delete('/:id', reservationController.deleteReservatio)

module.exports = router