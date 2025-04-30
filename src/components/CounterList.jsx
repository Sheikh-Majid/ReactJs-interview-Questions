import { useState } from "react";

export default function CounterList() {
  const [counters, setCounters] = useState(["A", "B", "C"]);

  const addCounter = () => {
    // Add new counter at beginning
    setCounters([`New ${counters.length}`, ...counters]);
  };

  const isLogin = true;
  const isAdmin = false;

  return (
    <div>
      <button onClick={addCounter}>Add Counter</button>
      <ul>
        {counters.map((counter, index) => (
          <Counter key={index} label={counter} />
        ))}
      </ul>

      <div>
        <h1>Conditional Rendering</h1>
        {
          isLogin && (<p>You are already logged in</p>)
        }
      </div>
    </div>
  );
}

function Counter({ label }) {
  const [count, setCount] = useState(0);

  return (
    <li>
      {label}:<button onClick={() => setCount(c + 1)}>+</button>
      {count}
    </li>
  );
}
