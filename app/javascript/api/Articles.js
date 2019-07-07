import axios from 'axios';

export const fetchArticles = () => {
  return axios.get('/api/articles');
}

export const fetchArticleById = (id) => {
  return axios.get(`api/articles/${id}`);
}