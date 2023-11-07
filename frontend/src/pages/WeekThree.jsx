import { Link } from "react-router-dom";
import "../assets/css/Weeks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function WeekThree() {
  return (
    <>
      <div className="data-container">
        <Link to={"/"} className="return-home-icon">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <h1>Which problem set would you like to play?</h1>
      </div>

      <nav className="problem-set-wrapper">
        <Link to={"plurality"} className="list-link">
          Plurality
        </Link>
        <Link to={"runoff"} className="list-link">
          Runoff
        </Link>
        <Link to={"tideman"} className="list-link">
          Tideman
        </Link>
      </nav>
    </>
  );
}
