import WelcomeTitle from "../components/WelcomeTitle";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  // const [transformStyle, setTransformStyle] = useState();

  return (
    <>
      <div className="wrapper">
        <WelcomeTitle />
        <Link className="card" to={"/week-one"}>
          <div className="link-text">
            <h2>Week 1</h2>
          </div>
        </Link>
        <Link className="card" to={"/week-two"}>
          <div className="link-text">
            <h2>Week 2</h2>
          </div>
        </Link>
        <Link className="card" to={"/week-three"}>
          <div className="link-text">
            <h2>Week 3</h2>
          </div>
        </Link>
        <Link className="card" to={"/week-four"}>
          <div className="link-text">
            <h2>Week 4</h2>
          </div>
        </Link>
        <Link className="card" to={"/week-five"}>
          <div className="link-text">
            <h2>Week 5</h2>
          </div>
        </Link>
        <Link className="card" to={"/week-six"}>
          <div className="link-text">
            <h2>Week 6</h2>
          </div>
        </Link>
        <Link className="card" to={"/week-seven"}>
          <div className="link-text">
            <h2>Week 7</h2>
          </div>
        </Link>
        <Link className="card" to={"/week-eight"}>
          <div className="link-text">
            <h2>Week 8</h2>
          </div>
        </Link>
        <Link className="card" to={"/week-nine"}>
          <div className="link-text">
            <h2>Week 9</h2>
          </div>
        </Link>
      </div>
    </>
  );
}
