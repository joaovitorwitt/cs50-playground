import { useState } from "react";
import "../../assets/css/W2/Readability.css";

export default function Readability() {
  const [textString, setTextString] = useState("");
  const [grade, setGrade] = useState("");

  async function calculateTextGrade(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/cs50-playground/v1/week2/readability",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            string: textString,
          }),
        }
      );

      const data = await response.json();

      setGrade(data.Grade);
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <div className="readability-wrapper">
        <div className="problem-set-description">
          <p>
            Find out the grade level for your text! Enter some text to calculate
            the approximate grade level for your text
          </p>
        </div>
        <div className="problem-set-screen">
          <form onSubmit={calculateTextGrade} className="grid readability-form">
            <textarea
              value={textString}
              onChange={(e) => setTextString(e.target.value)}
              className="standard-textarea-input"
            ></textarea>
            <input type="submit" value={"check grade text"} className="btn" />
          </form>
          <div className="display-value">
            <p>Grade: {grade ? grade : 0}</p>
          </div>
        </div>
      </div>
    </>
  );
}
