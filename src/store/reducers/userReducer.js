import { GET_USER } from "../actionTypes";

const initialState = {
  me: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        me: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
