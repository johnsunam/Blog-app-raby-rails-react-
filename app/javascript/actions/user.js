import { login, logout } from '../api/User';

export const loginUser = (data) => (dispatch) => {
  return login(data)
          .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data.data))
            dispatch({
              type: 'LOGIN_USER',
              payload: res.data
            });
          })
          .error(err => {
            console.log('login error', err)
          })
}

export const loggedInUser = data => dispatch => {
  return dispatch({
    type: 'LOGIN_USER',
    payload: JSON.parse(data),
  });
}

export const logoutUser = () => dispatch => {
  return logout()
          .then(res => {
            localStorage.clear("user");
            dispatch({
              type: 'LOGOUT',
            });
          });
}

