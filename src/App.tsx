import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import { Suspense } from 'react';

import { Message, NotifyProvider } from './components';
import FallbackLoading from './FallbackLoading';
import { queryClient } from './lib/react-query';
import AppRouter from './routes/AppRouter';
import { useNotifyStore } from './store';

function App() {
  const { shiftBEQ, shiftBSQ, basicErrorQue, basicSuccessQue } =
    useNotifyStore();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#474669',
          colorText: 'black',
        },
        // algorithm: theme.darkAlgorithm,
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
