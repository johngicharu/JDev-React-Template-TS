import { SET_CURRENT_USER } from "../actionTypes";
import { LOGIN_QUERY } from "../graphql/userQueries";
import client from "../apolloClient";
import jwt from "jwt-decode";

export const login = (email: string, password: string) => (dispatch: any) => {
  return client
    .query({
      query: LOGIN_QUERY,
      variables: {
        email,
        password,
      },
    })
    .then((res) => {
      localStorage.setItem("access_token", JSON.stringify(res.data.login));

      const user = jwt(res.data.login);

      return dispatch({ type: SET_CURRENT_USER, payload: user });
    })
    .catch((err) => console.log(err));
};
