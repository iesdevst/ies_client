import Button from 'antd/es/button';
import 'antd/es/button/style';
import React, { Component, type ReactNode } from 'react';
import { Title } from '../AntTypography';
import logo from '@/assets/imgs/ies_logo_text.webp';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div
          className='px-10 pb-200 pt-4'
          style={{
            background: 'linear-gradient(0deg, #07070f, #242320)',
          }}
        >
          <div className='!flex justify-center items-center gap-x-2'>
            <img src={logo} alt='Logo' className='w-10 h-10' />
            <Title level={4} className='!m-0'>
              銀豐錯誤
            </Title>
          </div>
          <div className='!flex justify-center items-center gap-x-10 mt-10'>
            <Title level={4} className='!text-red-500 !m-0'>
              目前在有錯誤，處理中！
            </Title>

            <Button onClick={() => window.location.reload()} type='primary'>
              重開
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
