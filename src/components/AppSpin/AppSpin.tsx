import { Spin, type SpinProps } from 'antd';
import type { FC } from 'react';

interface IAppSpinProps extends SpinProps {
  children?: React.ReactNode;
}
export const AppSpin: FC<IAppSpinProps> = (props) => {
  const { ...spinProps } = props;
  return <Spin {...spinProps} />;
};
