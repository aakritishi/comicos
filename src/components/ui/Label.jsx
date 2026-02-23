import React from "react";

const Label = ({ children }) => {
  return (
    <div>
      <label className="block text-[#07070A] font-bold mb-2 mt-3">{children}</label>
    </div>
  );
};

export default Label;
