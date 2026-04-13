import { Button, type ButtonProps } from 'antd';
import { memo } from 'react';

export const IesButton = memo((props: ButtonProps) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
});
