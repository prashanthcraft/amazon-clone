const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTR66AbQpXHWpbfBFPFV4KfXLu10fCrm28Z7wNAMoikJXWCyPnAdrxC0OFxKpY7sNvcLPq6mRRQR6kpSIMRntAJ00XrGx4wqn"
);

//API
// - APP Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit of currency
    currency: "inr",
  });

  //OK Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);
