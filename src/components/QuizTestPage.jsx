import React from "react";
import htmlIcon from "../images/htmlIcon.svg";
import cssIcon from "../images/cssIcon.svg";
import jsIcon from "../images/javascriptIcon.svg";
import lastIcon from "../images/accesibiltyIcon.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";



function QuizTestPage() {


  const navigate = useNavigate()
  const handleTest = (value) => {
    navigate(value)
  }



  return (
    <div className="quizTestBox">
      <div className="quizzTestTitle">
        <h1>
          Welcome to the <br />{" "}
          <span className="frontendQuiz">Frontend Quiz!</span>{" "}
        </h1>
        <p>Pick the subject to get started</p>
      </div>
      <div className="subjectBox">
        <div onClick={() => handleTest('html')}  className="testHtml">
          <img src={htmlIcon} alt="" />
          <p>HTML</p>
        </div>
        <div onClick={() => handleTest('css')} className="testCss">
          <img src={cssIcon} alt="" />
          <p>CSS</p>
        </div>
        <div onClick={() => handleTest('javascript')} className="testJs">
          <img src={jsIcon} alt="" />
          <p>Javascript</p>
        </div>
        <div onClick={() => handleTest('accessibility')} className="testLastIcon">
          <img src={lastIcon} alt="" />
          <p>Accessibility</p>
        </div>
      </div>
    </div>
  );
}

export default QuizTestPage;
