
const initialstate = {
  isLoading: false,
  articles: []
}
const ArticlesReducer = (state = initialstate, action) => {
  let newSate = {...state};
  switch (action.type) {
    case 'ARTICLES_FETCH_IN_PROGRESS':
        newSate.isLoading = true;
      return newSate;
    case 'ARTICLES_FETCH_SUCCESS':
        newSate.articles = action.payload;
        newSate.isLoading = false;
    default:
      return newSate;
  }
}

export default ArticlesReducer;