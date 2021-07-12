import { createContext, useContext, useReducer } from 'react';
import { AUTH } from './userActions';
import userReducer from './userReducer';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserContextProvider = (props) => {
  const initialState = {
    email: '',
    name: '',
    password: '',
    transactions: [],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = (formData) => {
    dispatch({
      type: AUTH,
      formData,
    });
  };

  const signup = (formData) => {
    dispatch({
      type: AUTH,
      formData
    });
  };

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