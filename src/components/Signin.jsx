import React, { useState } from "react";
import show from "../eye.svg";
import notshow from "../notshow.svg";

const Signin = ({ handleValidation, emailError, isEnter, pass, ...props }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <form className="sign-in">
      <p>خوش آمدید</p>
      <input
        type="text"
        placeholder="* پست الکترونیک"
        onChange={(e) => handleValidation(e)}
        required
      />
      <span className="error">{emailError}</span>
      <div className="pass">
        <input
          placeholder="* کلمه عبور"
          type={passwordShown ? "text" : "password"}
          required
        />
        <img
          src={passwordShown ? notshow : show}
          onClick={togglePasswordVisiblity}
          alt=""
        />
        <p className="a" onClick={pass}>
          فراموش کردید؟
        </p>
      </div>
      <button type="submit" onClick={isEnter}>
        ورود
      </button>
    </form>
  );
};

export default Signin;
