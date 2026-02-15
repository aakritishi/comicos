import React from "react";

const Label = ({ name }) => {
  return (
    <div>
      <label className="block text-gray-700 font-bold mb-2">{name}</label>
    </div>
  );
};

export default Label;
