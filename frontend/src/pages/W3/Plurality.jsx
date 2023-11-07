import { useState } from "react";
import "../../assets/css/W3/Plurality.css";
import "../../assets/css/Weeks.css";

export default function Plurality() {
  const [arrayOfCandidates, setArrayOfCandidates] = useState([]);

  function calculatePluralityElection(e) {
    e.preventDefault();

    const candidatesArray = arrayOfCandidates
      .split(",")
      .map((name) => name.trim());
    console.log(candidatesArray);
  }

  return (
    <>
      <div className="plurality-wrapper">
        <div className="problem-set-description">
          <p>
            Lets run a plurality election. In the plurality vote, every voter
            gets to vote for one candidate. At the end, whichever candidate has
            the greatest number of votes is declared the winner of the election.
          </p>
        </div>

        <div className="problem-set-screen">
          <form
            className="grid plurality-form"
            onSubmit={calculatePluralityElection}
          >
            <input
              type="text"
              placeholder="Name of the candidates separated by comma"
              className="standard-text-input"
              onChange={(e) => setArrayOfCandidates(e.target.value)}
              value={arrayOfCandidates}
            />

            <input
              type="number"
              className="standard-number-input"
              placeholder="Number of people that will be voting"
            />

            <input type="submit" className="btn" value={"Calculate Election"} />
          </form>
        </div>
      </div>
    </>
  );
}
