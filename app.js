const express = require ("express")
const dotenv = require("dotenv")
const reservationsRouter = require('./routers/reservations')
const logger = require("./logger")
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

//swagger setup
const swaggerOption = {
  swaggerDefinition: {
    opeapi: '3.0.0',
    info: {
      title: 'API di Prenotazioni',
      version: '1.0.0',
      description: 'Documentazione della API di Prenotazioni per Ristoranti'
    }
  },
  apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsdoc(swaggerOption)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//Routers
app.use('/api/reservations', reservationsRouter)
app.get('/', (req,res)=> {
  res.send('API di Gestione Prenotazioni per Ristoranti')
})

app.listen(PORT, ()=> {
  logger.info(`Servidor in esecuzione sulla porta ${PORT}`)
  console.log(`Servidor in esecuzione sulla porta ${PORT}`)
})