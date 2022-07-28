import React from "react";
import Card from "./Card";
import InfoHeaderCard from "./InfoHeaderCard";
import ButtonCard from "./ButtonCard";
import InfoCard from "./InfoCard";
import FooterCard from "./FooterCard";

const BodyCard = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-md rounded-lg shadow-lg mt-14 bg-scrDrakBlue ">
        <Card></Card>
        <InfoHeaderCard></InfoHeaderCard>
        <ButtonCard></ButtonCard>
        <InfoCard></InfoCard>
        <FooterCard></FooterCard>
      </div>
    </div>
  );
};

export default BodyCard;
