// understanding the usestate in react

import React, { useState } from 'react'

export const Demo = () => {

  const [count, setCount] = useState(0)
  // const count = count + 1;
  console.log(count)
  //  setCount(100);
  console.log(count)
  return (
    <>
      <div>Demo</div>
      <button >Click Me: {count}</button>
    </>
  );
}
