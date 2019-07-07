const initialState = {
  isLoading: false,
  article: {},
}

const articleReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case 'ARTICLE_FETCH_PROGRESS':
      newState.isLoading = true;
      return newState;
    case 'ARTICLE_FETCH_SUCCESS':
      newState.isLoading = false;
      newState.article = action.payload;
      return newState;
    default:
      return newState;
  }
}

export default  articleReducer;