import { Link } from "react-router-dom";
import "../assets/css/WeekOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function WeekOne() {
  return (
    <>
      <div className="data-container">
        <Link to={"/"} className="return-home-icon">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <h1>Which problem set would you like to play?</h1>
      </div>
      <nav className="problem-set-wrapper">
        <Link to={"mario-less"} className="list-link">
          Mario Less
        </Link>
        <Link to={"mario-more"} className="list-link">
          Mario More
        </Link>
        <Link to={"cash"} className="list-link">
          Cash
        </Link>
        <Link to={"credit"} className="list-link">
          Credit
        </Link>
      </nav>
    </>
  );
}
