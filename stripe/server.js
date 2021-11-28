const stripe = require('stripe')('sk_test_51K0pH7GykMX7Af9uDmsAZo6fCK8LxkkeJapDXzJUnWEYT8bkzR2zqLuTUqqgUyDgHfygqAsKlTFz4LQSXc38222V00oXeALEWa');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: 'price_1K0pZ4GykMX7Af9umrCBn3C1',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));