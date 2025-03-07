import React from 'react'

const Message = React.memo(({ Messagee }) => {
  console.log("Message component rendered!");
  return (
    <div>
      <h2>Ye Message: {Messagee}</h2>
    </div>
  );
});

export default Message
