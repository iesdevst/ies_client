import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, theme } from 'antd';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { Suspense, useEffect } from 'react';

import FallbackLoading from './FallbackLoading';
import AppRouter from './routes/AppRouter';
import { Message, NotifyProvider } from '@/components';
import { queryClient } from '@/lib';
import { useNotifyStore, useUserStore } from '@/store';

function App() {
  const { shiftBEQ, shiftBSQ, basicErrorQue, basicSuccessQue } =
    useNotifyStore();
  const isDark = useUserStore((state) => state.isDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#474669',
          colorText: isDark ? 'white' : 'black',
        },
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        components: {
          Layout: { headerBg: 'transparent' },
          Button: {
            colorBgContainer: '#B5B5B5',
            colorText: 'white',
          },
          Tabs: { horizontalMargin: '0px' },
          Descriptions: { itemPaddingBottom: 4 },
        },
      }}
    >
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<FallbackLoading />}>
            <AppRouter />
          </Suspense>
          {/* <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition='bottom-left'
          /> */}
        </QueryClientProvider>

        <NotifyProvider
          basicQue={basicErrorQue}
          type='error'
          shiftBsicQue={shiftBEQ}
        />
        <NotifyProvider
          basicQue={basicSuccessQue}
          type='success'
          shiftBsicQue={shiftBSQ}
        />
      </ErrorBoundary>
      <Message />
    </ConfigProvider>
  );
}

export default App;
