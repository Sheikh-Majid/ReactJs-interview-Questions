
import { useEffect, useState } from 'react'
import './App.css'
import Increements from './components/Increements';
import Message from './components/Message';
import { Demo } from './components/Demo';
import Appp from './components/Appp';
import InlineExpression from './components/InlineExpression';
import ControlledForm from './components/ControlledComop';

function App() {
 
  // useEffect(() => {
  //   console.log('Hello ReactJs...')

  //   return () => {
  //     console.log('Goodbye ReactJs...')
  //   }
  // }, [])
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval); // ✅ Cleanup: Jab component remove ho tab interval clear kar do
  //     console.log("Component Unmounted, Timer Stopped!");
  //   };
  // }, []);
const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("Component Mounted!");
    console.log("Component Updated!");

    // return () => {
    //   console.log("Component Unmounted!");
    // };

  }, [count])
  
  
  const handleclick = () => {
    setCount(count + 1);
  }
  
   const text ="Mai bar bar render nhi hunga"

  return (
    <>
      <h1>Hello ReactJs...</h1>
      {/* <h2>Count: {count}</h2> */}
      {/* <Increements number={count} />
      <button onClick={handleclick}>Increment</button>
      <Message Messagee={text} /> */}
      {/* <Demo/> */}
      {/* <Appp/> */}
      {/* <InlineExpression/> */}
      <ControlledForm/>

    </>
  )
}

export default App
