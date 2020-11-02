import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import usersReducer from "./userReducer";

export default combineReducers({ ...productsReducer, ...usersReducer });
