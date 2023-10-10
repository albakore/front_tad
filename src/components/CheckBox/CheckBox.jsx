import React from "react";
import { useState } from "react";

export default function CheckBox() {
    const [check, setCheck] = useState('')
    const handleClick = () =>{
        check == '' ? setCheck('true') : setCheck('')
    }

    console.log(check)
  return (
    <div className="custom-control custom-checkbox">
      <input
        onChange={handleClick}
        className="custom-control-input"
        type="checkbox"
        id="skills-copywrite-input"
        name="skills"
        value="copywrite"
        checked={check}
      />
      <label className="custom-control-label" for="skills-copywrite-input">
        Redacción
      </label>
    </div>
  );
}
