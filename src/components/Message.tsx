import message from 'antd/es/message';
import { type FC, useEffect } from 'react';
import { MESSAGE_EVENT_NAME } from '../utils';
import { type ICustomerMessageProps } from '@/utils/message';

const Message: FC = () => {
  const [api, contextHolder] = message.useMessage();

  useEffect(() => {
    const bindEvent = (event: Event) => {
      const e = event as CustomEvent<ICustomerMessageProps>;
      const { type, content, duration, onClose } = e.detail;
      api[type](content, duration, onClose);
    };

    window.addEventListener(MESSAGE_EVENT_NAME, bindEvent);

    return () => {
      window.removeEventListener(MESSAGE_EVENT_NAME, bindEvent);
    };
  }, [api]);

  return <>{contextHolder}</>;
};

export default Message;
