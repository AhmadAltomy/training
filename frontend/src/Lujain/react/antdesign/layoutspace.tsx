import React from 'react';
import './index.css';
import { Space } from 'antd';

const LayoutSpace: React.FC = () => (
  <div>
    <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </Space>

    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </Space>
  </div>
);

export default LayoutSpace;
