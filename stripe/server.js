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
        price: 'price_1K0qNAGykMX7Af9unzlVpwr3',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });

  res.redirect(303, session.url);
});

app.get('/success', (req,res)=>{
  res.status(200).send(`
  <body>
  <h1>purchase success</h1>
  </body>
  `)
})

app.listen(4242, () => console.log('Running on port 4242'));