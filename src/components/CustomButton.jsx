import React from 'react'

const CustomButton = (props) => {
  return (
    <div>
      <button {...props}>Click Me , {props.customValue}</button>
    </div>
  );
};

export default CustomButton
