import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51M5wNrGcZNQtrpugJapX6PBzbPSpmzJjs9l0yRuEYaiwu5w8eXJ5sFOYYkzYxNVi7bKeeQiZiQSmPgg0f4qOaDdb00XN8qoGq6', {
  apiVersion: '2020-08-27',
});
const handler = async (req, res) => {
  const { amount, description, payment_intent_id } = req.body;
  if (payment_intent_id) {
    try {
      // If a payment_intent_id is passed, retrieve the paymentIntent
      const current_intent = await stripe.paymentIntents.retrieve(
        payment_intent_id
      );
      // If a paymentIntent is retrieved update its amount
      if (current_intent) {
        const updated_intent = await stripe.paymentIntents.update(
          payment_intent_id,
          {
            amount: amount*100,
          }
        );
        res.status(200).json(updated_intent);
        return;
      }
    } catch (e) {
      //Catch any error and return a status 500
      if (e.code !== 'resource_missing') {
        const errorMessage =
          e instanceof Error ? e.message : 'Internal server error';
        res.status(500).json({ statusCode: 500, message: errorMessage });
        return;
      }
    }
  }
  try {
    // Create PaymentIntent
    const params = {
      amount: amount*100,
      currency: 'usd',
      description: description,
      // confirm: true,
      // confirmation_method: 'manual',
      automatic_payment_methods: {
        enabled: true,
      },
    };
    const payment_intent = await stripe.paymentIntents.create(params);
    //Return the payment_intent object
    res.status(200).json(payment_intent);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Internal server error';
    res.status(500).json({ statusCode: 500, message: errorMessage });
  }
};
export default handler;
