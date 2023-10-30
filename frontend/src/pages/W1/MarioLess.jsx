import { useState } from "react";
import "../../assets/css/W1/MarioLess.css";

export default function MarioLess() {
  const [pyramidHeight, setPyramidHeight] = useState("");
  const [actualPyramid, setActualPyramid] = useState([]);

  const [pyramidType, setPyramidType] = useState("");

  const handlePyramidTypeChange = (e) => {
    const selectedType = e.target.value;
    console.log("selected pyramid type: ", selectedType);
    setPyramidType(selectedType);
  };

  async function displayPyramid(e) {
    e.preventDefault();
    if (pyramidType === "Normal") {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/cs50-playground/v1/week1/mario-less`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              height: parseInt(pyramidHeight),
            }),
          }
        );
        setPyramidHeight("");
        const data = await response.json();
        console.log(data.pyramid);
        setActualPyramid(data.pyramid);
      } catch (error) {
        throw new Error(error);
      }
    } else if (pyramidType === "Complex") {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/cs50-playground/v1/week1/mario-more`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              height: parseInt(pyramidHeight),
            }),
          }
        );
        setPyramidHeight("");
        const data = await response.json();
        console.log(data.pyramid);
        setActualPyramid(data.pyramid);
      } catch (error) {
        throw new Error(error);
      }
    }
  }

  return (
    <>
      <div className="mario-less-wrapper">
        <div className="problem-description">
          <p>How high should your pyramid be?</p>
          <form onSubmit={displayPyramid} className="grid mario-form">
            <input
              type="number"
              placeholder="Pyramid Height"
              onChange={(e) => setPyramidHeight(e.target.value)}
              value={pyramidHeight}
              className="standard-number-input"
              required
            />
            <p>Which pyramid?</p>
            <div className="input-row-mario">
              <label htmlFor="">
                <input
                  type="radio"
                  value={"Normal"}
                  name="pyramid"
                  required
                  onChange={handlePyramidTypeChange}
                  checked={pyramidType === "Normal"}
                />
                Normal
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  value={"Complex"}
                  name="pyramid"
                  required
                  onChange={handlePyramidTypeChange}
                  checked={pyramidType === "Complex"}
                />
                Complex
              </label>
            </div>
            <input type="submit" value={"Set"} className="btn" />
          </form>
        </div>

        <div className="pyramid-screen">
          {actualPyramid.map((line, index) => {
            return (
              <div key={index} className="row">
                {line}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
