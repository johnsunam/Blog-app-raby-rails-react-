const initailState = {
  isLoading: false,
  data: {},
}

const currentReducer = (state = initailState, action) => {
  let newState = {...state};
  switch (action.type) {
    case 'LOGIN_USER':
      newState.data = action.payload;
      return newState;
    default:
      return newState;
  }
}

export default currentReducer;