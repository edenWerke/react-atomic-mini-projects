/* eslint-disable react/prop-types */
// import React from 'react'

// import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
