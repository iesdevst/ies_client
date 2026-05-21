import React, { memo } from 'react';
import type { SimpleLayoutProps } from '../types';

const Simple: React.FC<SimpleLayoutProps> = (props) => {
  const { divider, className, children } = props;

  return (
    <div className={`${className} mx-auto w-full`}>
      {children}

      {divider && <div className='my-4 border-t border-gray-200' />}
    </div>
  );
};

export default memo(Simple);
