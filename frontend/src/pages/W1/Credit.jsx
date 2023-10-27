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
            Type a hypotetically card number and it will tell you if it is valid
            or not
          </p>
        </div>

        <div className="problem-set-screen">
          <form onSubmit={validateCreditCard}>
            <input
              type="text"
              placeholder="type the number of the credit card"
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)}
            />
            <input type="submit" value={"Check"} />
          </form>
          {isCardValid}
        </div>
      </div>
    </>
  );
}
