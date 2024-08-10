import React, { useState } from "react";
import { Flex, Progress } from "antd";
import "../style/htmlTest.scss";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useContext } from "react";
import { contextProvider } from "../provider/MainProvider";

const fetchQuizTestData = async () => {
  return await axios.get("http://localhost:3000/quizzes");
};

function HtmlTestPage() {
  const [questionNum, setQuestionNum] = useState(0);
  const [result, setResult] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const states = useContext(contextProvider);
  const { trueAnswer, setTrueAnswer, testData, setTestData } = states;
  const [variantA, setVariantA] = useState(false);
  const [variantB, setVariantB] = useState(false);
  const [variantC, setVariantC] = useState(false);
  const [variantD, setVariantD] = useState(false);

  // console.log(trueAnswer)
  const params = useParams();

  const navigate = useNavigate();
  const backFunc = () => {
    navigate("/dashboard");
  };

  const { data, isError, error, isLoading } = useQuery(
    ["quiz"],
    fetchQuizTestData
  );
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  const newData = data?.data.filter(
    (item) => item.title.toLowerCase() == params.testId
  );
  // console.log(newData);

  const submitButtonFunc = () => {
    setTestData(newData);
    if (isPressed) {
      setQuestionNum(
        questionNum == 9 ? 9 && navigate("resultpage") : questionNum + 1
      );
      questionNum == 9 ? setIsPressed(true) : setIsPressed(false);
    } else {
      alert("please select answer");
      setQuestionNum(questionNum);
    }
    if(result){
      setTrueAnswer(trueAnswer + 1);
    }

    setVariantA(false);
    setVariantB(false);
    setVariantC(false);
    setVariantD(false);
  };
  const checkTestAnswer = (val, variant) => {
    if (newData[0].questions[questionNum].answer == val) {
      setResult(true);
      
    } else {
      setResult(false);
    }
    setIsPressed(true);

    if (variant == "A") {
      setVariantA(true);
      setVariantB(false);
      setVariantC(false);
      setVariantD(false);
    } else if (variant == "B") {
      setVariantB(true);
      setVariantA(false);
      setVariantC(false);
      setVariantD(false);
    } else if (variant == "C") {
      setVariantC(true);
      setVariantA(false);
      setVariantB(false);
      setVariantD(false);
    } else {
      setVariantD(true);
      setVariantA(false);
      setVariantB(false);
      setVariantC(false);
    }
  };

  console.log(result);

  const borderColor = {
    border: "3px solid blue",
  };

  return (
    <div className="testPageBox" style={{ height: "90vh" }}>
      <div className="testPage">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            style={{ background: `${newData[0].color}` }}
            src={newData[0].icon}
            alt=""
          />
          <p>{newData[0].title}</p>
        </div>
        <Button onClick={() => backFunc()} variant="outlined">
          {" "}
          <ArrowBackIcon /> Back
        </Button>
      </div>
      <div className="questionsBox">
        <div className="testPageLeft">
          <p>Question {questionNum + 1} of 10</p>
          <h3>{newData[0].questions[questionNum].question}</h3>

          <Flex gap="middle" vertical style={{ width: "500px" }}>
            <Progress
              percent={(questionNum + 1) * 10}
              percentPosition={{ align: "start" }}
              size={[500, 15]}
            />
          </Flex>
        </div>
        <div className="testBtnBox">
          <button
            // style={}
            value={`${newData[0].questions[questionNum].options[0]}`}
            onClick={(e) => checkTestAnswer(e.target.value, "A")}
            className={`testBtn ${variantA ? "borderColor" : ""}`}
          >
            <span className={`${variantA ? "variantbackColor" : ""}`}>A</span>{" "}
            {newData[0].questions[questionNum].options[0]}
          </button>
          <button
            value={`${newData[0].questions[questionNum].options[1]}`}
            onClick={(e) => checkTestAnswer(e.target.value, "B")}
            className={`testBtn ${variantB ? "borderColor" : ""}`}
          >
            <span className={`${variantB ? "variantbackColor" : ""}`}>B</span>{" "}
            {newData[0].questions[questionNum].options[1]}
          </button>
          <button
            value={`${newData[0].questions[questionNum].options[2]}`}
            onClick={(e) => checkTestAnswer(e.target.value, "C")}
            className={`testBtn ${variantC ? "borderColor" : ""}`}
            // style={isPressed ? {border: "3px solid blue"} : ""}
          >
            <span className={`${variantC ? "variantbackColor" : ""}`}>C</span>{" "}
            {newData[0].questions[questionNum].options[2]}
          </button>
          <button
            value={`${newData[0].questions[questionNum].options[3]}`}
            onClick={(e) => checkTestAnswer(e.target.value, "D")}
            className={`testBtn ${variantD ? "borderColor" : ""}`}
            // style={isPressed ? {border:' 3px solid blue'} : ""}
          >
            <span className={`${variantD ? "variantbackColor" : ""}`}>D</span>{" "}
            {newData[0].questions[questionNum].options[3]}
          </button>
          <button onClick={() => submitButtonFunc()} className="testSubmitBtn">
            {" "}
            {questionNum == 9 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HtmlTestPage;
