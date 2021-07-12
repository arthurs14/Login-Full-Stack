import { createContext, useContext, useReducer } from 'react';
import { AUTH } from './userActions';
import userReducer from './userReducer';
import * as api from '../api';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserContextProvider = (props) => {
  const initialState = {
    authData: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = async (formData, history) => {
    try {
      // login the user via backend
      const { data } = await api.signIn(formData)
      
      // update state
      dispatch({ type: AUTH, data });

      history.push('/home');
    } catch(e) {
      console.log(e);
    }
  };

  const signup = async (formData, history) => {
    try {
      // sign up and login via backend
      const { data } = await api.signUp(formData);

      // update state
      dispatch({ type: AUTH, data });

      history.push('/home');
    } catch (e) {
      console.log(e);
    }  
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