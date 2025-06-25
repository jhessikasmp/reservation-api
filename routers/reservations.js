const express = require('express')
const reservationController = require("../controllers/reservationController")

const router = express.Router()

router.get('/', reservationController.allReservations)
router.post('/', reservationController.createReservatio)
router.patch('/:id', reservationController.updateGuests)
router.delete('/:id', reservationController.deleteReservatio)

module.exports = router