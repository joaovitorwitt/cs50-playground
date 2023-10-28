import { useState } from "react";

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
          <p>
            This program takes a string and a key, and encrypts using the cipher
            of caesar
          </p>
        </div>

        <div className="problem-set-screen">
          <form onSubmit={encryptStringUsingCaesar}>
            <textarea
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              required
            ></textarea>

            <input
              type="number"
              placeholder="key"
              required
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />

            <input type="submit" value={"encrypt"} />
          </form>
          {ciphertext}
        </div>
      </div>
    </>
  );
}
