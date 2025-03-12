import { useState } from "react";

const Loggedin = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const handleLogin = () => {
    setisLoggedIn(true)
  }

  const handleLogOut = () => {
    setisLoggedIn(false)
  }
  return (
    <div>
      <button onClick={handleLogin}>LoggedIn</button>
      <button onClick={handleLogOut}>LoggedOut</button>
      <div>User {isLoggedIn ? 'Login' : 'LogOut'}</div>
    </div>
  );
};

export default Loggedin;