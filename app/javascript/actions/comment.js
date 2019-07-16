import { saveArticleComment, fetchComments } from '../api/Comment';

export const getArticleComments = (articleId) => dispatch => {
  dispatch({
    type: 'FETCH_COMMENTS_PROGRESS',
  })
  return fetchComments(articleId)
          .then(res => {
            dispatch({
              type: 'FETCH_COMMENTS_SUCCESS',
              payload: res.data,
            });
            return true;
          })
          .catch(err => console.log('comments error', err))
}

export const saveComment = data => (dispatch, getState) => {
  data.article_id = getState().articleReducer.article.id;
  data.user_id = getState().currentReducer.data.id;
  return saveArticleComment(data)
          .then(res => {
            console.log(res);
            let comments = [ ...getState().commentsReducer.comments ];
            comments.push(res.data)
            dispatch({
              type: 'FETCH_COMMENTS_SUCCESS',
              payload: comments,
            });
            return true;
          })
          .catch(err => console.log(err));
}