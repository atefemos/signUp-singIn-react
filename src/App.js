import React, { useState } from "react";
import "./index.css";
import validator from "validator";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Enterance from "./components/Enterance";
import UserInformation from "./components/UserInformation";
import PassForget from "./components/PassForget";

function App() {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("آدرس ایمیل صحیح وارد کنید!");
    }
  };

  const [isLogIn, setIsLogIn] = useState(true);
  const handleIn = () => {
    setIsLogIn(false);
  };
  const handleUp = () => {
    setIsLogIn(true);
  };
  const [entrance, setEntrance] = useState(false);
  const handleEnter = () => {
    setEntrance(true);
  };
  const [intro, setIntro] = useState(false);
  const handleIntro = () => {
    setIntro(true);
  };

  const [passCode, setPassCode] = useState(false);
  const handlePass = () => {
    setPassCode(true);
  };

  const [fName, setFName] = useState("");

  const handleChange = (e) => {
    setFName(e.target.value);
  };

  return (
    <div className="container">
      <div
        className="header-box"
        style={{ display: entrance || intro || passCode ? "none" : "flex" }}
      >
        <div
          className={`box up ${isLogIn ? "box-active" : ""}`}
          onClick={handleUp}
        >
          ثبت نام
        </div>
        <div
          className={`box in ${!isLogIn ? "box-active" : ""}`}
          onClick={handleIn}
        >
          ورود
        </div>
      </div>
      {isLogIn && !intro && (
        <Signup
          handleValidation={validateEmail}
          emailError={emailError}
          isIntro={handleIntro}
          onChange={handleChange}
        />
      )}
      {!isLogIn && !entrance && !passCode && (
        <Signin
          handleValidation={validateEmail}
          emailError={emailError}
          isEnter={handleEnter}
          pass={handlePass}
        />
      )}
      {entrance && <Enterance />}

      {intro && <UserInformation fName={fName} />}
      {passCode && <PassForget />}
    </div>
  );
}

export default App;
