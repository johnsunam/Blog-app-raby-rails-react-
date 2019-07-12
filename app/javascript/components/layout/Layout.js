import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Button, Modal, Form, Input, Radio, Row, Col, Anchor } from 'antd';
import Register from '../Register';
import Login from '../Login';
const { Link } = Anchor;
const { Header, Content } = Layout;

class  AppLayout extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }
  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render () {
    return (
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <div>
          <Row>
            <Col span={12} style={{color: 'white'}}>Blogs</Col>
            <Col span={12} style={{color: 'white', textAlign: "right"}}><span onClick={this.showModal}>Sign In</span></Col>
          </Row>
          <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
        </div>
        
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>{this.props.children}</div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
    )
  }
}

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        signup: false,
      };
    }
    changeForm = () => {
      this.setState({signup: !this.state.signup});
    }
    render() {
      const { visible, onCancel, onCreate } = this.props;
     
      return (
        <Modal
          visible={visible}
          title={this.state.signup ? "Register" : "Login" }
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          {this.state.signup ? <Register {...this.props} changeForm={this.changeForm}/> : <Login changeForm={this.changeForm}/>}
        </Modal>
      );
    }
  },
);

export default AppLayout;