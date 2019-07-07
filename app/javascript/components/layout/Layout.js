import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

const AppLayout = (props) => {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <span style={{color: 'white'}}>Blogs</span>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>{props.children}</div>
    </Content>
    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
  )
}

export default AppLayout;