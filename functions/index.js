const functions = require('firebase-functions');
const express = require("express"); 
const cors = require("cors"); 
const { response } = require('express');
const stripe = require("stripe")('sk_test_51HeSiSHwhXCmjb9pWFj75aoGmIFBfcGBYIFiBuWboyfK8ddWo6ZDC3aLt6Kk7o41tg7pwQfMdn4ij6oJ17nChsuR00IYOG4kbp')


//API

// App config
const app = express();

// middlewares
app.use(cors({ origin:true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request recieved >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// listen command
exports.api = functions.https.onRequest(app)


//example endpoint 
// http://localhost:5001/web-app-a865f/us-central1/api