import { AUTH, LOGOUT } from './userActions'; 

const userReducer = (state, action) => {
  switch(action.type) {
    case AUTH:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;