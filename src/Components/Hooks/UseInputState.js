import { useState } from "react";

const UseInputState = (defauValue = null) => {
  const [value, setValue] = useState(defauValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  // const handaleChange = e => {
  //     setValue(e.target.value);
  // }
  // return [value, handaleChange];
  return {
    value,
    onChange,
  };
};

export default UseInputState;
