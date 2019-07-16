import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment, Form, Input, Button, Row, Col, Avatar} from 'antd';
import { getArticleComments, saveComment } from '../actions/comment';
import { cpus } from 'os';
const { TextArea } = Input;

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  onChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  onSubmit = async () => {
    const data = { comment: this.state.value };
    const res = await this.props.dispatch(saveComment(data));
    if(res) {
      this.setState({ value: '' });
    }
  }

  componentDidMount() {
    this.props.dispatch(getArticleComments(this.props.articleId))
  }

  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map(comment => <ExampleComment data={comment}/>)}

        <Row>
          <Col span={18}>
            <Comment 
              content={
                <div>
                  <Form.Item>
                    <TextArea rows={4} onChange={this.onChange} value={this.state.value} />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit"  onClick={this.onSubmit} type="primary" disabled={!(this.state.value.length > 3)}>
                      Comment
                    </Button>
                  </Form.Item>
                </div>
              }
            />
          </Col>
        </Row>
        
      </div>
    )
  } 
}

const ExampleComment = ({data}) => (
  <Comment
    // actions={[<span>Reply to</span>]}
    author={<a>{data.user.username}</a>}
    avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
    content={
      <p>
        {data.comment.comment}
      </p>
    }
  />
);

const mapStateToProps = store => ({
  comments: store.commentsReducer.comments
})

export default connect(mapStateToProps)(Comments);