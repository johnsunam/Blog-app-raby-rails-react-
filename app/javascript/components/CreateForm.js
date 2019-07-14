import React, { Component } from 'react';
import { Form, Input, Button, TimePicker, Select, Cascader, InputNumber } from 'antd';
import { BrowserRouter as Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createUserArticle } from '../actions/article';
const FormItem = Form.Item;
const { TextArea } = Input;

class CreateFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: true,
      title: '',
      description: '',
      articleId: null,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const article = { title: this.state.title, description: this.state.description, user_id: user.id };
    const resArticle = await this.props.dispatch(createUserArticle(article));
    this.setState({ articleId: resArticle.id});
    this.props.history.push(`/articles/${resArticle.id}`);

  }

  titleChange = e => {
    this.setState({title: e.target.value});
  }

  descriptionChange = e => {
    this.setState({description: e.target.value});
  }

  render () {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const submit = this.state.title.length > 3 && this.state.description.length > 10;

    return <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <FormItem label="Blog Title" help="Characters must be 3 to 100">
          <Input placeholder="Blog Title..." required onChange={this.titleChange}/>
        </FormItem>
        <FormItem label="Blog Description" help="Characters must be greater than 50">
          <TextArea placeholder="Blog description..." rows={10} required onChange={this.descriptionChange}/>
        </FormItem>
        <FormItem wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit" disabled={!submit}>
            Submit
          </Button>
        </FormItem>
      </Form>
  }
}

export default connect()(CreateFrom);