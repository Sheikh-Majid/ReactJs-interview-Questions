
import { useEffect, useState } from 'react'
import './App.css'
import Increements from './components/Increements';
import Message from './components/Message';
import { Demo } from './components/Demo';
import Appp from './components/Appp';
import InlineExpression from './components/InlineExpression';
import ControlledForm from './components/ControlledComop';
import CounterList from './components/CounterList';
import SwitchStatement from './components/SwitchStatement';
import CustomButton from './components/CustomButton';
import MemoCompoenents from './components/MemoCompoenents';

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

  
  const [Role, setrole] = useState('admin');
  const[name, setName] = useState('');
  const [age, setAge] = useState();

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
      {/* <ControlledForm/> */}
      {/* <CounterList/> */}
      {/* <input
        type="text"
        value={Role}
        onChange={(e) => setrole(e.target.value)}
      /> */}
      {/* <SwitchStatement role={Role} /> */}
      {/* <CustomButton
        onClick={() => alert("Clicked!")}
        customValue="123"
        anotherProp="test"
      /> */}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name'
          style={{ marginTop: '10px' , padding: '10px' , borderRadius: '5px' , border: '1px solid black'}}
      />
      <br />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder='Enter your age'
         style={{ marginTop: '10px' , padding: '10px' , borderRadius: '5px' , border: '1px solid black'}}
      />
      <br />
      
      <h1 style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid black' }}>Age: {age}</h1>
      <MemoCompoenents name={"Shaikh"}  />
    </>
  );
}

export default App
