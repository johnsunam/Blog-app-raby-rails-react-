import { login } from '../api/User';

export const loginUser = (data) => (dispatch) => {
  console.log('actions')
  return login(data)
          .then(res => {
            console.log('login res', res);
          })
}