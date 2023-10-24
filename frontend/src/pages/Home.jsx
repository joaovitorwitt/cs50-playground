import { useState, useEffect } from "react";
import WelcomeTitle from "../components/WelcomeTitle";

export default function Home() {
  const [transformStyle, setTransformStyle] = useState();

  return (
    <>
      <div className="wrapper">
        <WelcomeTitle />
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </>
  );
}
