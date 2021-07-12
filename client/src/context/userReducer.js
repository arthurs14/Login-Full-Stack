import { AUTH, LOGOUT } from './userActions'; 

const userReducer = (state, action) => {
  switch(action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      return { ...state, authData: action?.data };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;