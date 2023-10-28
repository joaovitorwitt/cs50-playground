import { useState } from "react";

export default function Bulbs() {
  const [inputMessage, setInputMessage] = useState("");
  const [encodedMessage, setEncodedMessage] = useState("");

  async function encodeMessage(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/cs50-playground/v1/week2/bulbs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            string: inputMessage,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      setEncodedMessage(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <div className="bulbs-wrapper">
        <div className="problem-set-description">
          <p>Type a message and encoded it to binary</p>
        </div>
        <div className="problem-set-screen">
          <form onSubmit={encodeMessage}>
            <input
              type="text"
              placeholder="Type your message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <input type="submit" value={"Encode"} />
          </form>
          {/* find a way to display correctly */}
          {encodedMessage}
        </div>
      </div>
    </>
  );
}
