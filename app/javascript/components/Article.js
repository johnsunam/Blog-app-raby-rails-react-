import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import capitalize from 'capitalize';
import { Icon } from 'antd';
import { getArticle, likeArticle } from '../actions/article'
class Article extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { match: {params: { id }}, articles} = this.props;
    this.props.dispatch(getArticle(id));

  }
  likeArticle = () => {
    this.props.dispatch(likeArticle(this.props.article.id));
  }
  render () {
    return (<div>
              <h1>{ this.props.article.title && capitalize.words(this.props.article.title)}</h1>
              <span style={{fontSize: 'small'}}>{moment(this.props.article.created_at).format('MMMM Do YYYY')}</span>
              <hr />
              <p>{this.props.article.description}</p>
              {this.props.user.id !== this.props.article.user_id ? <span><Icon type="like" onClick={this.likeArticle} />{this.props.article.like ? this.props.article.like:''}</span> : ''}
    </div>)
  }
}
const mapStateToProps = store => ({
  articles: store.articlesReducer,
  article: store.articleReducer.article,
  user: store.currentReducer.data,
});
export default connect(mapStateToProps)(Article);