const express = require ('express')
const dotenv = require ('dotenv')
const reservationRoutes = require('./routers/reservations')
const logger = require('./logger')
const swaggerUi = require('swagger-ui-express'); 
const swaggerJsdoc = require('swagger-jsdoc');

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

const swaggerOptions = { 
  swaggerDefinition: {
    openapi: '3.0.0', 
    info: {
      title: 'API de Reservas', 
      version: '1.0.0',
      description: 'Documentação da API de Reservas para Restaurantes' 
    }
  },
  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.use('/api/reservations', reservationRoutes)

app.get('/', (req,res) => {
    res.send('API di Gestione Prenotazioni per Ristoranti')
})

app.listen(PORT, ()=> {
    logger.info(`Servidor in esecuzione sulla porta ${PORT}`)
    console.log(`Servidor in esecuzione sulla porta ${PORT}`)
}) 
