import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Button, Modal, Form, Input, Radio, Row, Col, Anchor } from 'antd';
import { connect } from 'react-redux';
import Register from '../Register';
import Login from '../Login';
import { loggedInUser, logoutUser } from '../../actions/user';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

class  AppLayout extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      loggedIn: false,
    }
  }
  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    console.log('handle cancel triggred')
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
  }

  componentDidMount() {
    console.log(this.props)
    const user = localStorage.getItem('user');
    if(user)
    this.props.dispatch(loggedInUser(user));
  }

  logout = () => {
    this.props.dispatch(logoutUser());
  }

  render () {
    return (
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <div>
          <Row>
            <Col span={12} style={{color: 'white'}}><Link to="/">Blogs</Link></Col>
            <Col span={12} style={{color: 'white', textAlign: "right"}}>
            {this.props.currentUser.loggedIn ? <span style={{margin: 20}}><Link to="/create_blog">Create Blog</Link></span>:''}
            {this.props.currentUser.loggedIn ? <span onClick={this.logout}>Logout</span> : <span onClick={this.showModal}>Sign In</span>}
            </Col>
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
        <div style={{ background: '#fff', padding: 24, minHeight: 600 }} className="main">{this.props.children}</div>
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

    modalToggle = () => {
      console.log('hhhhhhhhhhhhhh')
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
          {this.state.signup ? <Register {...this.props} changeForm={this.changeForm}/> : <Login onCancel={onCancel} changeForm={this.changeForm}/>}
        </Modal>
      );
    }
  },
);

const mapStateToProps = store => ({
  currentUser: store.currentReducer
})

export default connect(mapStateToProps)(AppLayout);