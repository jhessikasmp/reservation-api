# Restaurant Reservation API

A simple and scalable RESTful API for managing restaurant reservations, built with **Node.js** and **Express**. Ideal for small businesses looking to digitize their reservation system.

Deployed on [Render](https://render.com ), this project offers automatic deploys, structured logging, and easy integration with modern development tools.

## 🚀 Features

- **Create, list, update and delete** reservations
- Partial updates (of guests)
- Structured logging using **Winston**
- Auto-generated API documentation via **Swagger**
- Ready to deploy on **Render**
- Modular and scalable architecture

## 📦 Requirements

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/ ) >= 18.x
- [npm](https://www.npmjs.com/ ) >= 9.x (comes with Node.js)
- Git
- A GitHub account (for deploying on Render)

## 🧪 Local Installation

### 1. Clone the repository

```bash
git clone https://github.com/jhessikasmp/reservation-api.git 
cd reservation-api

2. Install dependencies:
npm install


3. Create a .env file:
PORT=3000


4. Start the server:
npm start


5. Access the API at [http://localhost:3000]

## API Usage

### Create a reservation
POST /api/reservations
Content-Type: application/json

{
"name": "Luca Verdi",
"date": "2025-06-30",
"time": "21:00",
"guests": 3
}


### Update only the number of guests
PATCH /api/reservations/1
Content-Type: application/json

{
"guests": 5
}

### All reservations
GET /api/reservations


### Cancel reservation
DELETE /api/reservations/1


### Interactive Documentation
Access [http://localhost:3000/api-docs](http://localhost:3000/api-docs) for Swagger documentation.

## Deploy on Render

1. Push the code to GitHub.
2. Create an account on [Render](https://render.com).
3. In the dashboard, click New > Web Service and connect your repository.
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `node app.js`
5. Click **Create Web Service**.
6. Render will build and provide a public URL.

##Monitoring and Logs

Application logs appear in the Render dashboard.
For advanced logs, integrate with tools like Datadog, Loggly, or use the logger.js file (based on Winston).

##Best Practices

Sensitive variables and configurations are in .env (do not commit this file).
Modular code, ready to scale.
Automatic documentation via Swagger.
Structured logs to facilitate monitoring and debugging.

##Contribution
Pull requests are welcome! For more details, see the [CONTRIBUTING.md] file.
