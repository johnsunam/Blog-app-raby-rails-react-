import React, { Component } from 'react';
import { Button, Modal, Form, Input, notification } from 'antd';
import { register } from '../api/User';

class Register extends Component {
  constructor (props) {
    super(props);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { username, email, password } = values;
        register({username, email, password})
        .then(res => {
          notification['success']({
            message: 'User created successfully ',
            description: 'Please login!'
          });
          form.resetFields();
          this.props.changeForm();
        }).catch(err => {
          const error = err.response;
          const { username, email } = error.data;
          notification['error']({
            message: 'Error Message',
            description: username ? `Username ${username[0]}` : `Email ${email[0]}`,
          });
        });
      }
    });
  }
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
    return (<Form {...formItemLayout} onSubmit={this.handleSubmit}>
      <Form.Item label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
          />,
        )}
      </Form.Item>
      <Form.Item label="E-mail">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input />)}
      </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
</Form>)
  }
}
const WrappedNormalRegisterForm = Form.create({ name: 'register' })(Register);

export default WrappedNormalRegisterForm;