import { useState } from "react";

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
          <form onSubmit={encryptMessage}>
            <input
              type="text"
              placeholder="key"
              value={substitutionKey}
              onChange={(e) => setSubstitutionKey(e.target.value)}
            />

            <textarea
              placeholder="message that your want to encrypt"
              value={substitutionPlaintext}
              onChange={(e) => setSubstitutionPlaintext(e.target.value)}
            ></textarea>

            <input type="submit" value={"Encrypt"} />
          </form>
          {ciphertext}
        </div>
      </div>
    </>
  );
}
