import { Typography } from 'antd';
import type { TextProps } from 'antd/es/typography/Text';
import type { ReactNode } from 'react';

interface TxtProps extends TextProps {
  children: ReactNode;
}

const Txt = (props: TxtProps) => {
  const { children, ...restProps } = props || {};

  return <Typography.Text {...restProps}>{children}</Typography.Text>;
};

export default Txt;
export { Txt };
