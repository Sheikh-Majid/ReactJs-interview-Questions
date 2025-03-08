import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("Majid");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}`);
     
   }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Entered Name: {name}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ControlledForm;
