import axios from 'axios';

export const fetchArticles = () => {
  return axios.get('/api/articles');
}

export const fetchArticleById = (id) => {
  return axios.get(`api/articles/${id}`);
}

export const createArticle = data => {
  return axios.post(`api/articles`, data);
}

export const fetchArticle = id => {
  return axios.get(`/api/articles/${id}`);
}

export const fetchLike = (id, user) => {
  return axios.get(`/api/like/${id}/${user}`);
}