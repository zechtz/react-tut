import React from "react";
import "./style.css";

type TextFieldProps = {
  label: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  handleChange,
  ...otherProps
}) => {
  return (
    <div>
      <label className="text-2xl uppercase" htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        className="my-2 p-2 border border-gray-400 rounded-lg active:border-red-800 "
        onChange={handleChange}
        type="text"
        id={name}
        name={name}
        {...otherProps}
      />
    </div>
  );
};

export default TextField;
