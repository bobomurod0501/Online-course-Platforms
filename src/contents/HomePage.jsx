import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Card1 from "../components/Card";
import { useParams } from "react-router-dom";



const fetchData = async() => {
    return await axios.get('http://localhost:3000/courses')
}

function HomePage() {

const params = useParams()

// console.log(params)

if(params.component == "dashboard"){
  return <div>
    <h1>Dashboard page</h1>
  </div>
}
if(params.component == "activeuser"){
  return <div>
    <h1>Active user page</h1>
  </div>
}
if(params.component == "disableuser"){
  return <div>
    <h1>Disabled user page</h1>
  </div>
}
if(params.component == "profile"){
  return <div>
    <h1> Profile page</h1>
  </div>
}


  
  const {data, isLoading, isError, error,} = useQuery('courses', fetchData, {staleTime:1000000})

if(isLoading){
  return <div>
    <h1>Loading...</h1>
  </div>
}
if(isError){
  return  <div>
    <h1>{error.message}</h1>
  </div>
}

// console.log(data)

  return (
    <div>
      <div>
        <h1></h1>
        <h1>Learning is what you Make of it. Make it Yours at SkillGro </h1>
        <img className="homeLogoImg" src="https://www.janbasktraining.com/blog/uploads/images/Online_IT_Courses_1_6.webp" alt="" />
        <Card1 data={data}/>
      </div>
    </div>
  );
}

export default HomePage;
