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
            Here, based on the number of cents, we can see how many coins will
            be necessary for the change
          </p>
        </div>
        <div className="problem-set-screen">
          <form onSubmit={calculateNumberOfCoins}>
            <input
              type="text"
              placeholder="number of cents"
              value={numberOfCents}
              onChange={(e) => setNumberOfCents(e.target.value)}
            />
            <input type="submit" value={"Calculate Coins"} />
          </form>
        </div>
        <p>{numberOfCoins}</p>
      </div>
    </>
  );
}
