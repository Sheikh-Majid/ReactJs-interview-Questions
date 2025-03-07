import React, { useState } from 'react'

const InlineExpression = () => {
  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" },
  ];

  const [count, setCount] = useState("Hello! ReactJs...");
  const login = false;
  return (
    <div>
      {/* Use ternery operator and AND operator */}
      {count.length > 0 && login ? (
        <>
          <h3>You have {count} unread messages</h3>
        </>
      ) : (
        <>
          <h3>No new messages!</h3>
        </>
      )}
      {/* Use ternery operator and OR operator */}
      {count.length > 0 || login ? (
        <>
          <h3>You have {count} unread messages</h3>
        </>
      ) : (
        <>
          <h3>No new messages!</h3>
        </>
      )}
      {/* Use map function and understanding key attribute */}
      <div>
        {
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        ))
     }
      </div>
    </div>
  );
}

export default InlineExpression
