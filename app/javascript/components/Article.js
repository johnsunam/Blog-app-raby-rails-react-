import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import capitalize from 'capitalize';
import { Icon } from 'antd';
import { getArticle, likeArticle } from '../actions/article';
import Comments from './Comment';
class Article extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { match: {params: { id }}, articles} = this.props;
    this.props.dispatch(getArticle(id));

  }
  likeArticle = () => {
    const { user, article } = this.props;
    if (!article.liked_user.includes(user.id))
      this.props.dispatch(likeArticle(this.props.article.id));
  }
  render () {
    const { article, user } = this.props;
    return (<div>
              <h1>{ article.title && capitalize.words(article.title)}</h1>
              <span style={{fontSize: 'small'}}>{moment(article.created_at).format('MMMM Do YYYY')}</span>
              <hr />
              <p>{article.description}</p>
              {user.id && user.id !== article.user_id ? 
                <span><Icon style={article.id && article.liked_user.includes(user.id) ? {color: 'blue'}: {}} type="like" onClick={this.likeArticle} />{article.like ? article.like:''}</span> : ''}
              {article.id ? <Comments articleId={article.id}/> : ''}
    </div>)
  }
}
const mapStateToProps = store => ({
  articles: store.articlesReducer,
  article: store.articleReducer.article,
  user: store.currentReducer.data,
});
export default connect(mapStateToProps)(Article);