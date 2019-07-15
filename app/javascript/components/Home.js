import React, { Component } from 'react';
import { getArticles,  } from '../actions/article';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'antd';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import capitalize from 'capitalize';
class Home extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.dispatch(getArticles());
  }
  render () {
    return (this.props.isLoading ? <Loader 
                                      type="Puff"
                                      color="#00BFFF"
                                      height="100"	
                                      width="100"
                                    /> : <div style={{ background: '#ECECEC', padding: '30px' }}>
                                      <Row gutter={16}>
                                        {this.props.articles.map(article => <Col key={article.id} span={8} style={{marginTop: 15, minHeight: 50}}>
                                          <Card title={capitalize.words(article.title)} bordered={false}>
                                            {article.description.substring(0, 100)} ...
                                            <p>
                                              <Link to={`articles/${article.id}/`}>detail...</Link>
                                            </p>
                                          </Card>
                                        </Col>)}
                                      </Row>
                                    </div>)
  }
}
const mapStateToProps = (store) => ({
  isLoading: store.articlesReducer.isLoading,
  articles: store.articlesReducer.articles,
}) 
export default connect(mapStateToProps)(Home);