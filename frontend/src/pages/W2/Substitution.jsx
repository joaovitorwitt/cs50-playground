import { useState } from "react";
import "../../assets/css/W2/Substitution.css";

export default function Substitution() {
  const [substitutionKey, setSubstitutionKey] = useState("");
  const [substitutionPlaintext, setSubstitutionPlaintext] = useState("");

  const [ciphertext, setCiphertext] = useState("");

  async function encryptMessage(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/cs50-playground/v1/week2/substitution",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key: substitutionKey,
            plaintext: substitutionPlaintext,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      setCiphertext(data.ciphertext);
    } catch (error) {
      throw new Error(error);
    }
  }

  // TODO: feature that generates a random key
  // containing all the letters from the alphabet
  function generateRandomKey() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newAlphabet = alphabet.split("");

    for (let i = newAlphabet.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i * 1));
      var temp = newAlphabet[i];
      newAlphabet[i] = newAlphabet[j];
      newAlphabet[j] = temp;
    }
    const shuffledAlphabet = newAlphabet.join(""); // Convert the array back to a string
    console.log(shuffledAlphabet);
    setSubstitutionKey(shuffledAlphabet);
  }

  return (
    <>
      <div className="substitution-wrapper">
        <div className="problem-set-description">
          <p>
            Encrypt a message by replacing every letter with other letter from
            the alphabet
          </p>
        </div>
        <div className="problem-set-screen">
          <form onSubmit={encryptMessage} className="grid substitution-form">
            <textarea
              placeholder="Plaintext"
              value={substitutionPlaintext}
              onChange={(e) => setSubstitutionPlaintext(e.target.value)}
              className="standard-textarea-input"
              required
            ></textarea>
            <div className="input-row">
              <input
                className="standard-text-input"
                type="text"
                placeholder="key"
                value={substitutionKey}
                onChange={(e) => setSubstitutionKey(e.target.value)}
                required
              />
              <button
                className="generate-key-btn"
                onClick={generateRandomKey}
                type="button"
              >
                Generate Random key
              </button>
            </div>

            <input type="submit" value={"Encrypt"} className="btn" />
          </form>
          <div className="display-value">
            <p>Ciphertext: {ciphertext}</p>
          </div>
        </div>
      </div>
    </>
  );
}
