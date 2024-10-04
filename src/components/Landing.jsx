import { TextField } from "@mui/material";
import React, { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const Landing = (props) => {
  const {
    weight,
    height,
    setHeight,
    setWeight,
    isHeight,
    isWeight,
    setisHeight,
    setisWeight,
    themeText,
    setThemeText,
    hcolor,
    changeTheme,
    calculatefun,
    button2Style,
    setHoverButton2,
    bgColor
  } = props;
  const[isWNegative,setIsWNegative]=useState(false)
  const[isHNegative,setIsHNegative]=useState(false)

  const handleWeightChange = (event) => {
    const value = event.target.value;
    console.log(event.target.value)
    if (value == "") {
      setWeight(null);
      setisWeight(false);
      setIsWNegative(false)
      
    } else if (value > 750) {
      setisWeight(true);
      setWeight(Number(value));
    } 
    else if(value<=0){
      setIsWNegative(true)
      setWeight(Number(value));
    }
    else {
      setWeight(Number(value));
      setisWeight(false);
      setIsWNegative(false)
    }
  };

  const handleHeightChange = (event) => {
    const value = event.target.value;
    
    if (value === "") {
      setHeight(null);
      setisHeight(false);
      setIsHNegative(false)
    } else if (value > 3) {
      setisHeight(true);
      setHeight(Number(value));
    } 
    else if(value<=0){
      setIsHNegative(true)
      setHeight(Number(value));
    }
    else {
      setHeight(Number(value));
      setisHeight(false);
      setIsHNegative(false)
    }
  };

  function passValues(weight, height) {
    calculatefun(weight, height);
    setWeight(null);
    setHeight(null);
  }






  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-1 col-md-2">

          </div>
          <div className="col-10 col-md-8 d-flex flex-column align-items-center gap-4 mt-5">
          <Tooltip title="Change theme">
            
            <button id="theme" className="d-md-none d-block text-align-right" style={{width:'5rem',padding:"10px",border:`1px solid black`,borderRadius:'5px',marginTop:"8px",transition:"transform 0.35s ease"}} onClick={()=>{changeTheme();setThemeText((e)=>e=="Off"?"On":"Off")}}>
                  
                  <img src="https://cdn-icons-png.flaticon.com/128/11881/11881185.png" width={"23px"} height={"23px"}></img>
            </button>
            </Tooltip>
            <h1 style={{ color: `${hcolor}`, fontFamily: "SharpGrotesk" }}>
              Calculate your BMI
            </h1>
            <p style={{ fontFamily: "Montilla" }}>
              Body mass index, or BMI, is used to determine whether you are in a
              healthy weight range for your height.
            </p>
            <div style={{textAlign:"left"}}>
              <div className="d-flex gap-2 align-items-center">
                <TextField
                  type="number"
                  placeholder="Enter your Weight"
                  value={weight === null ? "" : weight}
                  onChange={handleWeightChange}
                  variant="outlined"
                  InputProps={{
                    inputProps: {
                      style: {
                        backgroundColor: "#d8cccd6a",
                        color: bgColor=="black"?"#ff0000":"white",
                        width: "18rem",
                      },
                    },
                  }}
                />

                <span>In kg</span>
              </div>
              {isWeight && (
                <h5
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    marginTop:"5px",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  Please enter value in range
                </h5>
              )}
              {isWNegative && <h5
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    marginTop:"5px",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  Weight cannot be zero or negative
                </h5>}
            </div>
            <div style={{textAlign:"left"}}>
              <div className="d-flex gap-2 align-items-center">
                <TextField
                  type="number"
                  placeholder="Enter your Height"
                  value={height === null ? "" : height}
                  onChange={handleHeightChange}
                  variant="outlined"
                  InputProps={{
                    inputProps: {
                      style: {
                        backgroundColor: "#d8cccd6a",
                        color: bgColor=="black"?"#ff0000":"white",
                        width: "18rem",
                      },
                    },
                  }}
                />
                <span>In m</span>
              </div>
              {isHeight && (
                <h5
                  style={{ fontSize: "13px", marginTop:"5px",color: "red", textJustify: "left" }}
                >
                  Please enter value in range
                </h5>
              )}
                            {isHNegative && <h5
                  style={{
                    fontSize: "13px",
                    margin: "0",
                    marginTop:"5px",
                    color: "red",
                    textAlign: "left",
                  }}
                >
                  Height cannot be zero or negative
                </h5>}
            </div>
            <button
              className="btn"
              onClick={() => passValues(weight, height)}
              style={button2Style}
              onMouseEnter={() => setHoverButton2(true)}
              onMouseLeave={() => setHoverButton2(false)}
            >
              Calculate BMI
            </button>
          </div>
          <div className="col-1 col-md-2">
          <button id="theme1" className="d-none d-md-block" style={{width:'13vw',marginRight:"10rem",padding:"10px",border:'1px solid black',borderRadius:'5px',marginTop:"8px",fontSize:'1.3vw',transition:"transform 0.35s ease"}} onClick={()=>{changeTheme();setThemeText((e)=>e=="Off"?"On":"Off")}}>{`Dark Mode: ${themeText}`}</button>

          </div>
        </div>

      </div>

      <style>
        {`
          input::placeholder {
            color: #368200;
          }
        `}
      </style>
    </>
  );
};

export default Landing;
