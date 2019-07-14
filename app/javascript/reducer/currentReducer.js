const initailState = {
  isLoading: false,
  data: {},
  loggedIn: false,
}

const currentUserReducer = (state = initailState, action) => {
  let newState = {...state};
  switch (action.type) {
    case 'LOGIN_USER':
      newState.data = action.payload;
      newState.loggedIn = true;
      return newState;
    case 'LOGOUT': 
      newState.data = {};
      newState.loggedIn = false;
      return newState;
    default:
      return newState;
  }
}

export default currentUserReducer;