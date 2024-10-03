import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Result from "./components/Result";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [bgColor, setBgColor] = useState("antiquewhite");
  const [contentColor, setContentColor] = useState("black");
  const [hcolor, setHcolor] = useState("#3c0005");
  const [btnColor, setBtnColor] = useState("#ff9100");
  const [bmi, setBmi] = useState(0);
  const [hoverButton1, setHoverButton1] = useState(false);
  const [hoverButton2, setHoverButton2] = useState(false);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [isHeight, setisHeight] = useState(false);
  const [isWeight, setisWeight] = useState(false);
  const [themeText, setThemeText] = useState("Off");
  const commonStyle = {
    width: "150px",
    height: "50px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.5s ease, transform 0.5s ease",
  };

  const button1Style = {
    ...commonStyle,
    color: "black",
    width: "200px",
    border: "1px solid #6e2121",
    backgroundColor: hoverButton1 ? "coral" : "lightblue",
    transform: hoverButton1 ? "scale(1.1)" : "scale(1)",
  };

  const button2Style = {
    ...commonStyle,
    backgroundColor: hoverButton2 ? btnColor : "lightcoral",
    transform: hoverButton2 ? "scale(1.1)" : "scale(1)",
  };
  // const[isCalculate,setIsCalculate] =

  function changeTheme() {
    console.log(bgColor);
    if (bgColor == "antiquewhite") {
      setBgColor("black");
      setContentColor("white");
      setHcolor("white");
      setBtnColor("#ff9100");
    } else {
      setBgColor("antiquewhite");
      setContentColor("black");
      setHcolor("#3c0005");
      setBtnColor("#75bf5f");

    }
  }

  function calculate(weight, height) {
    if (weight > 700 || height > 2.51) {
      alert("Entered values are out of range");
      setHeight(null);
      setWeight(null);
    } else if (weight > 0 && height > 0) {
      setBmi(weight / height ** 2);
      setIsClicked(!isClicked);
    } 
    else if(weight==null && height==null){
      alert("Please enter a input values");
    }
    else if(weight==null){
      alert("Please enter a value of Weight(kg)");
      setHeight(height);
    

    }
    else {
      alert("Please enter a value of Height(m)");
      setWeight(weight);
    }

  }
  return (
    <div style={{ backgroundColor: `${bgColor}`, color: `${contentColor}` }}>
      {isClicked ? (
        <Result
          clickstate={isClicked}
          clickfun={setIsClicked}
          bmi={bmi}
          button1Style={button1Style}
          setHoverButton1={setHoverButton1}
          themeText={themeText}
          setThemeText={setThemeText}
        />
      ) : (
        <Landing
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
          themeText={themeText}
          setThemeText={setThemeText}
          hColor={hcolor}
          changeTheme={changeTheme}
          calculatefun={calculate}
          button2Style={button2Style}
          setHoverButton2={setHoverButton2}
          isHeight={isHeight}
          setisHeight={setisHeight}
          isWeight={isWeight}
          bgColor = {contentColor}
          setisWeight={setisWeight}
        />
      )}
    </div>
  );
}

export default App;
