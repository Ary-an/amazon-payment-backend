const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.STRIPE_PAYMENT_KEY);
require("dotenv").config();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(PORT, (req, res) => {
  console.log("server is running on ", PORT);
});
