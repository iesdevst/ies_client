import type { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { children, className = '' } = props || {};
  return <section className={`${className}`}>{children}</section>;
};

export default PageContainer;
