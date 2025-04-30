import React from 'react'

const SwitchStatement = ({role}) => {
  switch (role) {
    case 'admin':
      return <h1>Welcome Admin</h1>
    case 'user' || 'User':
      return <h1>Welcome User</h1>
    case 'guest':
      return <h1>Welcome Guest</h1>
    case 'majid':
      return <h1>Welcome Super Majid</h1>;
    default:
      return <h1>Role not recognized</h1>
  }
}

export default SwitchStatement
