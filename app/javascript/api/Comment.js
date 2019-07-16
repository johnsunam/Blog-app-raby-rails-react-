import axios from 'axios';

export const saveArticleComment = (data) => {
  return axios.post(`/api/comments`, data);
}

export const fetchComments = (id) => {
  return axios.get(`/api/comments/${id}`);
}
