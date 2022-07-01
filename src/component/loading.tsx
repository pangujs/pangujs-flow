import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;

const Loading: React.FC = () => {
  return (
    <Spin
      indicator={antIcon}
      style={{ position: 'absolute', left: '50%', top: '50%' }}
      tip="模型加载中..."
    />
  );
};

export default Loading;
