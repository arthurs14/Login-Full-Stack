import { LOGIN, SIGNUP, LOGOUT } from './userActions'; 

const userReducer = (state, action) => {
  switch(action.type) {
    case LOGIN:
      return {};
    case SIGNUP:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;