import React from "react";
import SaveButton from "./SaveButton";

const Header = ({ submitHandler, resetHandler }) => {
  return (
    <div className="flex items-center justify-between my-5">
      <h1 className="font-bold text-3xl">Demo Editor BY Pradum Bhardwaj</h1>
      <div className="controlsButtons">
        <SaveButton onSave={submitHandler} />
      </div>
    </div>
  );
};

export default Header;
