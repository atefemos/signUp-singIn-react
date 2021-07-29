import React, { useState } from "react";
import "../index.css";
import show from "../eye.svg";
import notshow from "../notshow.svg";
import DropDown from "./DropDownSity";

const Signup = ({
  handleValidation,
  emailError,
  isIntro,
  onChange,
  ...props
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const educationDegree = [
    "دیپلم",
    "کاردانی",
    "کارشناسی",
    " کارشناسی ارشد",
    "دکترا",
  ];

  const [edue, setEdue] = useState(false);

  const handleEdu = (e) => {
    if (e.target.value !== 0) {
      setEdue(true);
    }
    if (e.target.value === 0) {
      setEdue(false);
    }
  };

  return (
    <form className="sign-up">
      <p>رایگان ثبت نام کنید</p>
      <div className="name">
        <input
          type="text"
          placeholder="* نام"
          required
          name="fName"
          onChange={onChange}
        />
        <input type="text" placeholder="* نام خانوادگی" required name="lName" />
      </div>
      <div className="name">
        <select
          type="text"
          defaultValue="0"
          onChange={(e) => handleEdu(e)}
          name="edue"
        >
          <option value="0" disabled>
            تحصیلات
          </option>
          {educationDegree.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <DropDown />
      </div>
      <div className="name">
        <input
          type="text"
          placeholder="* محل تحصیل"
          required
          name="edueSity"
          style={{ display: edue ? "block" : "none" }}
        />
      </div>

      <input
        type="text"
        placeholder="* پست الکترونیک"
        onChange={(e) => handleValidation(e)}
        name="mail"
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
      </div>
      <button type="submit" onClick={isIntro}>
        ثبت نام
      </button>
    </form>
  );
};

export default Signup;
