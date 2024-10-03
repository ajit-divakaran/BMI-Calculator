import { Button } from "@mui/material";
import React from "react";

const Result = (props) => {
  const { clickstate, clickfun, bmi , button1Style,setHoverButton1} = props;

  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else if (bmi >= 30 && bmi < 34.9) {
    category = 'Obesity Class 1';
  } else if (bmi >= 35 && bmi < 39.9) {
    category = 'Obesity Class 2';
  } else {
    category = 'Obesity Class 3';
  }

  return (

    <div
      className="container d-flex flex-column align-items-center pt-5"
      style={{ height: "100vh" }}
    >
     
      <h2 className="my-4">{`Your BMI is ${bmi.toFixed(3)}`}</h2>
      <h3 className="mt-3">{`Category: ${category}`}</h3>
      <Button
        className="mb-4 mt-5"
        variant="outlined"
        onClick={() => clickfun(!clickstate)}
        style={button1Style}
        onMouseEnter={()=>setHoverButton1(true)} 
        onMouseLeave={()=>setHoverButton1(false)}
        // { color: "black", border: '1px solid #6e2121', background: "#ffd183"
      >
        New Calculation
      </Button>
      <ul className="mt-5" style={{ listStyle: "none" }}>
        <li>Underweight: BMI less than 18.5</li>
        <li>Normal weight: BMI 18.5 to 24.9</li>
        <li>Overweight: BMI 25 to 29.9</li>
        <li>Obesity:</li>
        <li>Class 1: BMI 30 to 34.9</li>
        <li>Class 2: BMI 35 to 39.9</li>
        <li>Class 3 (Severe Obesity): BMI 40 or greater</li>
      </ul>
    </div>
  );
};

export default Result;
