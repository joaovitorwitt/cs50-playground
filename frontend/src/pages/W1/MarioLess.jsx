import { useState } from "react";
import "../../assets/css/W1/MarioLess.css";

export default function MarioLess() {
  const [pyramidHeight, setPyramidHeight] = useState("");
  const [actualPyramid, setActualPyramid] = useState();

  async function displayPyramid(e) {
    e.preventDefault();
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
      console.log(actualPyramid);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <div className="mario-less-wrapper">
        <div className="problem-description">
          <p>How high should your pyramid be?</p>
          <form onSubmit={displayPyramid}>
            <input
              type="text"
              placeholder="pyramid height"
              onChange={(e) => setPyramidHeight(e.target.value)}
              value={pyramidHeight}
            />
            <input type="submit" value={"Set"} />
          </form>
        </div>

        <div className="pyramid-screen">{actualPyramid}</div>
      </div>
    </>
  );
}
