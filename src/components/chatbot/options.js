// Options.js
import React from "react";



const Options = ({ options, actionProvider }) => {
  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          key={option.id}
          className="option-button"
          onClick={() => actionProvider.handleOptionClick(option.text)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
