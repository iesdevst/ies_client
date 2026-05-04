import { Divider } from 'antd';
import React, { memo } from 'react';
import type { SimpleLayoutProps } from '../types';

const Simple: React.FC<SimpleLayoutProps> = (props) => {
  const { divider, className, children } = props;
  return (
    <div className={`${className}  mx-auto `}>
      {children}
      {divider && (
        <div>
          <Divider />
        </div>
      )}
    </div>
  );
};

export default memo(Simple);
