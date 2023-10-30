import { Link } from "react-router-dom";
import "../assets/css/Weeks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function WeekFour() {
  return (
    <>
      <div className="data-container">
        <Link to={"/"} className="return-home-icon">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <h1>Which problem set would you like to play?</h1>
      </div>
      <nav className="problem-set-wrapper">
        <Link to={"volume"} className="list-link">
          Volume
        </Link>
        <Link to={"filter"} className="list-link">
          Filter
        </Link>
        <Link to={"recover"} className="list-link">
          Recover
        </Link>
        <Link to={"reverse"} className="list-link">
          Reverse
        </Link>
      </nav>
    </>
  );
}
