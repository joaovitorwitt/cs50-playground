import { useState } from "react";
import "../../assets/css/W2/Caesar.css";

export default function Caesar() {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  async function encryptStringUsingCaesar(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/cs50-playground/v1/week2/caesar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            plaintext: plaintext,
            key: parseInt(key),
          }),
        }
      );

      const data = await response.json();
      setCiphertext(data.ciphertext);
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  }
  return (
    <>
      <div className="caesar-wrapper">
        <div className="problem-set-description">
          <p>Lets encrypt any text using the cipher of Caesar!</p>
        </div>

        <div className="problem-set-screen">
          <form
            onSubmit={encryptStringUsingCaesar}
            className="grid caesar-form"
          >
            <textarea
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              className="standard-textarea-input"
              placeholder="Plaintext"
              required
            ></textarea>

            <input
              type="number"
              placeholder="key"
              required
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="standard-number-input"
            />

            <input type="submit" value={"encrypt"} className="btn" />
          </form>
          <div className="display-value">Ciphertext: {ciphertext}</div>
        </div>
      </div>
    </>
  );
}
