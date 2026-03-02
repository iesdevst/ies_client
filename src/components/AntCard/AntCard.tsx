import { Card, type CardProps } from 'antd';
import React from 'react';

interface AntCardProps extends CardProps {
  children: React.ReactNode;
}

const AntCard: React.FC<AntCardProps> = ({ children, ...props }) => {
  return (
    <Card
      {...props}
      style={{
        ...props.style, // 允許覆蓋樣式
      }}
    >
      {children}
    </Card>
  );
};

export default AntCard;
