import React from 'react';
import './index.css';
import {  Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const LayoutFirst: React.FC = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Header style={{ background: '#001529', color: '#fff', padding: '16px' }}>
      Header
    </Header>
    
    <Layout>
      <Content style={{ padding: '16px' }}>
        Content
      </Content>
    </Layout>
    <Footer style={{ textAlign: 'center', background: '#001529', color: '#fff', padding: '16px' }}>
      Footer
    </Footer>
  </Layout>
  );
};

export default LayoutFirst;