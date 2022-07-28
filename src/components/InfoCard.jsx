import React from "react";

const InfoCard = () => {
  return (
    <div className="container w-80 mt-8 mx-auto pb-6">
      <div className="flex-col w-68 text-xs">
        <h2 className="text-white font-bold text-base ">About</h2>
        <p className="text-scrText mt-2 ">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn
        </p>

        <h2 className="text-white font-bold text-base mt-7">Interests</h2>
        <p className="text-scrText mt-2 ">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepeneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
