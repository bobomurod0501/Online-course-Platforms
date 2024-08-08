import React from "react";
import htmlIcon from "../images/htmlIcon.svg";
import { Flex, Progress } from "antd";
import "../style/htmlTest.scss";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";



const fetchQuizTestData = async () => {
  return await axios.get('http://localhost:3000/quizzes')
}



function HtmlTestPage() {
  const params = useParams()
  // console.log(params.testId)
  
  const navigate = useNavigate()
  const backFunc = () => {
  navigate("/dashboard")
  }

  const {data, isError, error, isLoading} = useQuery(['quiz'], fetchQuizTestData)
  if(isLoading){
    return <h1>Loading</h1>
  }
  
  if(isError){
    return <h1>{error.message}</h1>
  }

// console.log(data)

const newData = data?.data.filter((item) => (item.title).toLowerCase() == params.testId)
console.log(newData)


const checkTestAnswer = () => {}

  return (
    <div className="testPageBox" style={{ height: "90vh" }}>
      <div className="testPage">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img style={{background:`${newData[0].color}`}} src={newData[0].icon} alt="" />
          <p>{newData[0].title}</p>
        </div>
        <Button onClick={() => backFunc()} variant="outlined"> <ArrowBackIcon /> {" "}Back</Button>
      </div>
      <div className="questionsBox">
        <div className="testPageLeft">
          <p>Question 6 of 10</p>
          <h3>
            {newData[0].questions[1].question}
          </h3>

          <Flex gap="middle" vertical style={{ width: "500px" }}>
            <Progress
              percent={30}
              percentPosition={{ align: "start" }}
              size={[500, 15]}
            />
          </Flex>
        </div>
        <div className="testBtnBox">
          <button onClick={checkTestAnswer} className="testBtn">
            <span>A</span> {newData[0].questions[1].options[0]}
          </button>
          <button className="testBtn">
            <span>B</span> {newData[0].questions[1].options[1]}
          </button>
          <button className="testBtn">
            <span>C</span> {newData[0].questions[1].options[2]}
          </button>
          <button className="testBtn">
            <span>D</span> {newData[0].questions[1].options[3]}
          </button>
          <button className="testSubmitBtn"> Next</button>
        </div>
      </div>
    </div>
  );
}

export default HtmlTestPage;
