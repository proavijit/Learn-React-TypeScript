import { useState } from "react";

type UserProps = {
  name: string,
  email: string
}



const User = () => {
  const [user, setuser] = useState<UserProps>({} as UserProps)
  const handleLogIn = () => {
    setuser({
      name: 'Adam Smith',
      email: 'smith@testmail.com'
    })
  }
  const handleLogOut = () => { setuser(null) }
  return (
    <div>
      <div>name: {user?.name}</div>
      <div>email: {user?.email}</div>
      <button onClick={handleLogIn}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default User;