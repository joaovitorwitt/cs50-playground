import { Link } from "react-router-dom";
import "../assets/css/Weeks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function WeekTwo() {
  return (
    <>
      <div className="data-container">
        <Link to={"/"} className="return-home-icon">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <h1>Which problem set would you like to play?</h1>
      </div>
      <nav className="problem-set-wrapper">
        <Link to={"readability"} className="list-link">
          Readability
        </Link>
        <Link to={"bulbs"} className="list-link">
          Bulbs
        </Link>
        <Link to={"caesar"} className="list-link">
          Caesar
        </Link>
        <Link to={"substitution"} className="list-link">
          Substitution
        </Link>
      </nav>
    </>
  );
}
