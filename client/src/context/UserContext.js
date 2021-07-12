import { createContext, useReducer } from 'react';
import userReducer from './userReducer';

const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialState = {
    id: '',
    email: '',
    name: '',
    password: '',
    transactions: [],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = () => {};

  const signup = () => {};

  const logout = () => {};
  
  const value = {
    user: state,
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