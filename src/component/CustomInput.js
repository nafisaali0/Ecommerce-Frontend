import React from "react";

const CustomInput = (props) => {
  const { type, name, classname, placeholder } = props;
  return (
    <div>
      <input
        name={name}
        type={type}
        className={`form-control ${classname}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
