import { ConfigProvider } from 'antd';
import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { children, className = '' } = props || {};
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Modal: {
            paddingContentHorizontalLG: 0,
            paddingContentHorizontalSM: 0,
            paddingContentHorizontal: 0,
            paddingContentVertical: 0,
            paddingContentVerticalLG: 0,
            paddingContentVerticalSM: 0,
            paddingMD: 0,
          },
        },
      }}
    >
      <div className={`${className}`}>{children}</div>
    </ConfigProvider>
  );
};

export default PageContainer;
