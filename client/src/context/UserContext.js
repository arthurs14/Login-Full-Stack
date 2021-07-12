import { useState, createContext } from 'react';

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState();

  const login = () => {};

  const signup = () => {};

  const logout = () => {};
  
  const value = {
    user,
    login,
    signup,
    logout,
  };

  return (
    <UserContext.Provider value={value}>
      { props.children }
    </UserContext.Provider>
  ); 
};

export default UserContextProvider;