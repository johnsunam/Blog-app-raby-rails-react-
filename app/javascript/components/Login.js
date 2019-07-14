import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { loginUser } from '../actions/user';

class Login extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = e => {
    e.preventDefault();
    const self = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        self.props.onCancel();
        console.log('Received values of form: ', values);
        self.props.dispatch(loginUser(values));
      }
    });
  };

  render () {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (<Form onSubmit={this.handleSubmit} className="login-form">
    <Form.Item>
      {getFieldDecorator('email', {
        rules: [
          {
              type: 'email',
              message: 'The input is not valid E-mail!',
          },
          { 
            required: true, 
            message: 'Please input your username!' 
          }
          ],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your Password!' }],
      })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {/* {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(<Checkbox>Remember me</Checkbox>)}
      <a className="login-form-forgot" href="">
        Forgot password
      </a> */}
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      Or <span onClick={this.props.changeForm}>register now!</span>
    </Form.Item>
  </Form>)
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect()(WrappedNormalLoginForm);