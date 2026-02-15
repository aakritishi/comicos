import React from "react";

const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default Input;
