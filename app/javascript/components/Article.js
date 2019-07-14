import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticle } from '../actions/article'
import moment from 'moment';
class Article extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { match: {params: { id }}, articles} = this.props;
    this.props.dispatch(getArticle(id));
  }
  render () {
    return (<div>
              <h1>{this.props.article.title}</h1>
              <span style={{fontSize: 'small'}}>{moment(this.props.article.created_at).format('MMMM Do YYYY')}</span>
              <hr />
              <p>{this.props.article.description}</p>
    </div>)
  }
}
const mapStateToProps = store => ({
  articles: store.articlesReducer,
  article: store.articleReducer.article,
});
export default connect(mapStateToProps)(Article);