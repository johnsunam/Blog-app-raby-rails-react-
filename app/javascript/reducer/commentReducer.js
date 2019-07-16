const initialState = {
  isLoading: false,
  comments: []
}

const commentsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'FETCH_COMMENTS_PROGRESS':
      newState.isLoading = true;
      return newState;
    case 'FETCH_COMMENTS_SUCCESS': 
      newState.isLoading = false;
      newState.comments = action.payload;
      return newState;
    default:
      return newState;
  }
}

export default commentsReducer;