import { useState } from "react";
import "../../assets/css/W1/Credit.css";

export default function Credit() {
  const [isCardValid, setIsCardValid] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");

  async function validateCreditCard(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/cs50-playground/v1/week1/credit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credit_card_number: parseInt(creditCardNumber),
          }),
        }
      );
      // clear input fields
      setCreditCardNumber("");
      const data = await response.json();
      console.log(data);
      setIsCardValid(data.card);
    } catch (error) {
      throw new Error(error);
    }
  }
  return (
    <>
      <div className="credit-wrapper">
        <div className="problem-set-description">
          <p>
            Most cards use an algorithm invented by Hans Peter Luhn of IBM.
            Enter a card number to check if it is valid.
          </p>
        </div>

        <div className="problem-set-screen">
          <form onSubmit={validateCreditCard} className="grid credit-form">
            <input
              type="number"
              placeholder="Card Number"
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)}
              className="standard-number-input"
            />
            <input type="submit" value={"validate card"} className="btn" />
          </form>
          <div className="display-value">Card: {isCardValid}</div>
        </div>
      </div>
    </>
  );
}
