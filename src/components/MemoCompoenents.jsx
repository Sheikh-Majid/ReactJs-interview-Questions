import React, { memo } from 'react'

const MemoCompoenents = ({ name }) => {
  console.log("MemoCompoenents Rendered" , name);
  return (
    <div>
      
      <h1>Name: {name}</h1>
      {/* <h1>Age: {age}</h1> */}
    </div>
  )
}

export default memo(MemoCompoenents) // MemoCompoenents
