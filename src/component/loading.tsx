import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;

const Loading: React.FC = () => {
  return (
    <Spin indicator={antIcon} style={{ margin: 24 }} tip="模型加载中..." />
  );
};

export default Loading;
