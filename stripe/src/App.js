import React, { useState, useEffect } from "react";
import "./App.css";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://stripe-camo.global.ssl.fastly.net/c7fb7c85465460c3cd051fac2e5d709663511f61918aeccae2b6588b7ee9e0ed/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878537a4277534464486557744e574464425a6a6c3166475a735833526c633352666357466f576e46616146565056466f3157556859616b5670656d646d5a477377303041455a4b38706169"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Sunglasses</h3>
      <h5>$190.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}