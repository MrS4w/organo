import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const [valor, setValor] = useState("");

  const handleChange = (event) => {
    props.handleChange(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={handleChange}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
