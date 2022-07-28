import React from "react";
import Twitter from "../image/Twitter Icon.png";
import Facebook from "../image/Facebook Icon.png";
import Instagram from "../image/Instagram Icon.png";
import GitHub from "../image/GitHub Icon.png";

console.log(Instagram);

const FooterCard = () => {
  return (
    <div className="mt-6 py-5 bg-scrFooter rounded-b-lg">
      <div className="flex justify-center items-center space-x-5">
        <a href="#" className="">
          <img src={Twitter} alt="twitter" className="h-7 w-7" />
        </a>
        <a href="#">
          <img src={Facebook} alt="facebook" className="h-7 w-7" />
        </a>
        <a href="#">
          <img src={Instagram} alt="instagram" className="h-7 w-7" />
        </a>
        <a href="#">
          <img src={GitHub} alt="github" className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
};

export default FooterCard;
