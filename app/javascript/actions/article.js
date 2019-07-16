import { fetchArticles, fetchArticleById, createArticle, fetchArticle, fetchLike } from '../api/Articles';

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

export const createUserArticle = data => dispatch => {
  return createArticle(data)
          .then(res => res.data.article)
          .catch(err => console.log('err', err));
}

export const getArticle = id => dispatch => {
  dispatch({
    type: 'ARTICLE_FETCH_PROGRESS'
  });
  return fetchArticle(id)
          .then(res => {
            dispatch({
              type: 'ARTICLE_FETCH_SUCCESS',
              payload: res.data,
            })
          })
          .catch(err => console.log('err', err))
}

export const likeArticle = id => (dispatch, getState) => {
  return fetchLike(id, getState().currentReducer.data.id)
          .then(res => {
            const articleState = { ...getState().articleReducer };
            articleState.article.like = res.data.likes;
            articleState.article.liked_user = res.data.liked_user;
            dispatch({
              type: 'ARTICLE_FETCH_SUCCESS',
              payload: articleState.article,
            })
          })
          .catch(err => console.log('err', err));
}