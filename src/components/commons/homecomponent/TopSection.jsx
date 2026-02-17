import React from "react";
import image from "../../../assets/topsecimage.png";
import Button from "../../ui/Button";

const TopSection = () => {
  return (
    <div className="grid grid-cols-1 md:flex md:justify-center w-[94%] md:w-[70%] mx-auto gap-3 items-center p-12">
      <img src={image} className="h-[346px] w-[197px]" />
      <div>
        <h1 className="font-medium text-[48px]">Ultimate Anime Gear</h1>
        <h2 className="font-extrabold text-[32px] text-[#07070A]">
          Bring Your Fandom to Life!
        </h2>
        <h3 className="font-light text-[16px] mb-3">
          Action figures, streetwear & manga -all in one place
        </h3>
        <div className="flex justify-center items-center mt-5">
          <Button>Shop now</Button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
