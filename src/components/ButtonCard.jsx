import React from "react";
import Mail from "../image/Mail.png";
import LinkedIn from "../image/output.png";

const ButtonCard = () => {
  return (
    <div className="mt-4 flex justify-center space-x-3 ">
      <button className=" px-10 py-2 bg-white text-scrTextButton text-base rounded-lg flex items-center space-x-3 justify-center ">
        <img src={Mail} alt="" />
        <p>Email</p>
      </button>
      <button className=" px-8 py-2 bg-scrLigthBlueButton text-white text-base rounded-lg flex items-center space-x-3 justify-center ">
        <img src={LinkedIn} alt="" className="text-white h-7 " />
        <p>LinkedIn</p>
      </button>
    </div>
  );
};

export default ButtonCard;
