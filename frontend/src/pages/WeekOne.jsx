import { Link } from "react-router-dom";
import "../assets/css/WeekOne.css";

export default function WeekOne() {
  return (
    <>
      <div className="data-container">
        <h1>Which problem set would you like to play?</h1>
      </div>
      <Link to={"mario-less"}>Mario Less</Link>
    </>
  );
}
