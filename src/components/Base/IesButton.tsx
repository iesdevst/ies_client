import Button from 'antd/es/button';
import type { ButtonProps } from 'antd/es/button';
import { memo } from 'react';

export const IesButton = memo((props: ButtonProps) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
});
