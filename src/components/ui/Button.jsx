import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type="type"
      className="bg-[#07070A] hover:bg-[#020202] text-white font-normal hover:font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
