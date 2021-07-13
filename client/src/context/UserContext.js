import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { AUTH, LOGOUT } from './userActions';
import userReducer from './userReducer';
import * as api from '../api';
import decode from 'jwt-decode';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserContextProvider = (props) => {
  const initialState = {
    authData: null,
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [state, dispatch] = useReducer(userReducer, initialState);

  console.log(user);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [user?.token]);

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

  const logout = (history) => {
    try {
      dispatch({ type: LOGOUT })
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  
  const value = {
    user: state,
    login,
    signup,
    logout,
  };

  //console.log(user);

  return (
    <UserContext.Provider value={value}>
      { props.children }
    </UserContext.Provider>
  ); 
};

export default UserContextProvider;