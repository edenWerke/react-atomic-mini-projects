// import React from 'react'

const InputField = (value, placeholder, onChange) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border p-2 rounded-md w-full"
      />
    </div>
  );
};

export default InputField;
