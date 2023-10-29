import { useState } from "react";
import "../../assets/css/W2/Bulbs.css";

export default function Bulbs() {
  const [inputMessage, setInputMessage] = useState("");
  const [encodedMessage, setEncodedMessage] = useState([]);

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
          <p>
            Type a message and encoded it to binary!{" "}
            <span style={{ color: "yellow" }}>Yellow</span> represent 1,{"  "}
            <span
              style={{
                color: "rgb(100, 100, 100)",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              }}
            >
              {" "}
              Black{" "}
            </span>
            represent 0
          </p>
        </div>
        <div className="problem-set-screen">
          <form onSubmit={encodeMessage} className="grid bulbs-form">
            <textarea
              type="text"
              placeholder="Type your message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="standard-textarea-input"
            ></textarea>
            <input type="submit" value={"Encode"} className="btn" />
          </form>
          {/* find a way to display correctly */}
          <div className="display-value display-value-bulbs">
            {encodedMessage.map((line, index) => {
              return <div key={index}>{line}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
