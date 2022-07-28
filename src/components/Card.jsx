import React from "react";
import women from "../image/women.jpg";

const Card = () => {
  return (
    <>
      <div>
        <div>
          <img src={women} alt="" className="max-w-sm h-auto rounded-t-lg" />
        </div>
      </div>
    </>
  );
};

export default Card;
