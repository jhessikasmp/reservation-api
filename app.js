const express = require ('express')
const dotenv = require ('dotenv')
const reservationRoutes = require('./routers/reservations')
const logger = require('./logger')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/reservations', reservationRoutes)

app.get('/', (req,res) => {
    res.send('API di Gestione Prenotazioni per Ristoranti')
})

app.listen(PORT, ()=> {
    logger.info(`Servidor in esecuzione sulla porta ${PORT}`)
    console.log(`Servidor in esecuzione sulla porta ${PORT}`)
}) 
