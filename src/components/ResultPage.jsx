import React from "react";
import htmlIcon from "../images/htmlIcon.svg";
import "../style/resultPage.scss";
import { useContext } from "react";
import { contextProvider } from "../provider/MainProvider";
import { useNavigate } from "react-router-dom";




function ResultPage() {
const navigate = useNavigate()
  const states = useContext(contextProvider)

    const {trueAnswer, setTrueAnswer, testData, setTestData} = states
const playAgainFunction = () => {
  navigate("/dashboard")
  setTrueAnswer(0)
}
console.log(testData[0])
  return (
    <div className="resultPageBox">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img style={{ backgroundColor: `${testData[0]?.color}`, padding:"10px", borderRadius:"10px" }} src={testData[0]?.icon} alt="" />
        <h3 style={{ fontSize: "32px" }}>{testData[0]?.title}</h3>
      </div>

      <div className="boxR">
        <p>
          Quiz completed <br /> <span>You scored:</span>{" "}
        </p>
        <div>
          <div className="resultBox">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img style={{ backgroundColor: `${testData[0]?.color}`, padding:"10px", borderRadius:"10px" }} src={testData[0]?.icon} alt="" />
              <h3 style={{ fontSize: "32px" }}>{testData[0]?.title}</h3>
            </div>
            <h1>{trueAnswer}</h1>
            <div>
              <h3>out of 10</h3>
            </div>
          </div>
          <div>
            <button onClick={playAgainFunction} className="playAgainButton"> Play again</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
