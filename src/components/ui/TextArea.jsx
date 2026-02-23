import React from "react";

const TextArea = ({ name, rows, columns, placeholder }) => {
  return (
    <div>
      <textarea
        name={name}
        rows={rows}
        cols={columns}
        placeholder={placeholder}
        className="rounded border border-gray-600 px-4 py-2 w-full"
      ></textarea>
    </div>
  );
};

export default TextArea;
