const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const {Stripe} = require("stripe");
const stripe = new Stripe("sk_test_51M5wNrGcZNQtrpugJapX6PBzbPSpmzJjs9l0yRuEYaiwu5w8eXJ5sFOYYkzYxNVi7bKeeQiZiQSmPgg0f4qOaDdb00XN8qoGq6", {
  apiVersion: "2020-08-27",
});
const express = require("express");
const cors = require("cors");

const app = express();

// Automatically allow cross-origin requests
app.use(cors({origin: true}));
app.post("/api/create-payment-intent", async (req, res) => {
    const {amount, description, paymentIntentId} = req.body;
    if (paymentIntentId) {
        try {
            // If a paymentIntentId is passed, retrieve the paymentIntent
            // const currentIntent = await stripe.paymentIntents.retrieve(
            const currentIntent = stripe.paymentIntents.retrieve(
                paymentIntentId
            );
            // If a paymentIntent is retrieved update its amount
            if (currentIntent) {
            // const updatedIntent = await stripe.paymentIntents.update(
                const updatedIntent = stripe.paymentIntents.update(
                    paymentIntentId,
                    {
                    amount: amount*100,
                    }
                );
                res.status(200).json(updatedIntent);
                return;
            }
        } catch (e) {
            // Catch any error and return a status 500
            if (e.code !== "resource_missing") {
                const errorMessage = e instanceof Error ? e.message : "Internal server error";
                res.status(500).json({statusCode: 500, message: errorMessage});
                return;
            }
        }
    }
    try {
        // Create PaymentIntent
        const params = {
            amount: amount*100,
            currency: "usd",
            description: description,
            // confirm: true,
            confirmation_method: "manual",
            confirm: true,
            automatic_payment_methods: {
            enabled: true,
            },
        };
        // const paymentIntent = await stripe.paymentIntents.create(params);
        const paymentIntent = stripe.paymentIntents.create(params);
        // Return the payment_intent object
        res.status(200).json(paymentIntent);
    } catch (err) {
        const errorMessage =
            err instanceof Error ? err.message : "Internal server error";
        return res.status(500).json({statusCode: 500, message: errorMessage});
    }
});
exports.createPaymentIntent = functions.https.onRequest(app);
