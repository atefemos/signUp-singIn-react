import React from "react";

const UserInformation = ({ fName, ...props }) => {
  return (
    <div className="container">
      <p>{fName} عزیز ثبت نام شما با موفقیت انجام شد.</p>
    </div>
  );
};

export default UserInformation;
