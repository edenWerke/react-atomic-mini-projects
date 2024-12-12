// import React from 'react'

const Button = (onClick, children, className) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
