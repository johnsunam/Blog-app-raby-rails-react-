import { fetchArticles, fetchArticleById } from '../api/Articles';

export const getArticles = () => (dispatch) => {
  dispatch({
    'type': 'ARTICLES_FETCH_IN_PROGRESS',
  });
  return fetchArticles()
          .then(res => {
            console.log(res.data);
            dispatch({
              'type': 'ARTICLES_FETCH_SUCCESS',
              payload: res.data,
            });
          })
          .catch(err => console.log('err', err));
}

export const getArticleById = (id) => dispatch => {
  dispatch({
    type: 'ARTICLE_FETCH_PROGRESS'
  });
  return fetchArticleById(id)
            .then(res => {
              dispatch({
                type: 'ARTICLE_FETCH_SUCCESS'
              });
            })
            .catch(err => console.log('err', err));
}