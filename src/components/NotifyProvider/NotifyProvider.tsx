import CheckOutlined from '@ant-design/icons/CheckOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import { type MessageArgsProps } from 'antd';
import useMessage from 'antd/es/message/useMessage';
import React, { useEffect, useRef } from 'react';
import { CiSquareInfo } from 'react-icons/ci';
import { Text, Title } from '../AntTypography';

type NotifyBaseOptions = {
  title: string;
  des: string | undefined;
  useT?: boolean;
};

interface INotifyProviderProps {
  basicQue: Array<NotifyBaseOptions>;
  shiftBsicQue: (count?: number) => void;
  keepTime?: number;
  type: MessageArgsProps['type'];
}
const NotifyProvider: React.FunctionComponent<INotifyProviderProps> = (
  props,
) => {
  const { basicQue, shiftBsicQue, keepTime = 5 * 1000, type } = props || {};
  const [api, context] = useMessage();

  // 設定 error 的 que;
  const isSendingError = useRef(false);
  useEffect(() => {
    // 發送並阻擋
    if (basicQue.length < 1 || isSendingError.current) return;
    isSendingError.current = true;

    //
    const currentSnd = basicQue[0];
    if (type === 'error') {
      api.error({
        duration: keepTime / 1000,
        icon: <span />,
        content: (
          <div style={{ textAlign: 'left' }}>
            <Title className='tight' level={3}>
              <CloseOutlined style={{ color: 'red', marginRight: 5 }} />
              {currentSnd?.title}
            </Title>
            <hr />
            <Text>{currentSnd?.des}</Text>
          </div>
        ),
      });
    } else if (type === 'success') {
      api.success({
        duration: keepTime / 1000,
        icon: <span />,
        content: (
          <div style={{ textAlign: 'left' }}>
            <Title className='tight' level={3}>
              <CheckOutlined style={{ color: 'green', marginRight: 5 }} />
              {currentSnd?.title}
            </Title>
            <hr />
            <Text>{currentSnd?.des}</Text>
          </div>
        ),
      });
    } else {
      api.info({
        duration: keepTime / 1000,
        icon: <span />,
        content: (
          <div style={{ textAlign: 'left' }}>
            <Title className='tight' level={3}>
              <CiSquareInfo style={{ color: 'orange', marginRight: 5 }} />
              {currentSnd?.title}
            </Title>
            <hr />
            <Text>{currentSnd?.des}</Text>
          </div>
        ),
      });
    }

    // 特定時間後 取消阻擋 更新successQue
    setTimeout(() => {
      isSendingError.current = false;
      shiftBsicQue(1);
    }, keepTime);
  }, [api, basicQue, keepTime, shiftBsicQue, type]);

  return <div>{context}</div>;
};

export default NotifyProvider;
export type { INotifyProviderProps, NotifyBaseOptions };
