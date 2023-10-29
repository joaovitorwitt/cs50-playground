import { useState } from "react";
import "../../assets/css/W1/Cash.css";

export default function Cash() {
  const [numberOfCoins, setNumberOfCoins] = useState("");
  const [numberOfCents, setNumberOfCents] = useState("");

  async function calculateNumberOfCoins(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/cs50-playground/v1/week1/cash",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cents: parseInt(numberOfCents),
          }),
        }
      );

      const data = await response.json();
      setNumberOfCoins(data.coins);
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <div className="cash-wrapper">
        <div className="problem-set-description">
          <p>
            Calculate the number of coins owned based on the number of cents
          </p>
        </div>
        <div className="problem-set-screen">
          <form onSubmit={calculateNumberOfCoins} className="grid cash-form">
            <input
              type="number"
              placeholder="number of cents"
              value={numberOfCents}
              onChange={(e) => setNumberOfCents(e.target.value)}
              className="standard-number-input"
            />
            <input
              type="submit"
              value={"Calculate Coins"}
              className="btn cash-btn"
            />
          </form>
        </div>
        <div className="display-value">
          <p>Coins: {numberOfCoins ? numberOfCoins : 0}</p>
        </div>
      </div>
    </>
  );
}
