import type { JointContent } from 'antd/es/message/interface';

export const MESSAGE_EVENT_NAME = 'app-message';
export enum MESSAGE_TYPES {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
  LOADING = 'loading',
}

export interface ICustomerMessageProps {
  type: MESSAGE_TYPES;
  content: JointContent;
  duration?: number | VoidFunction;
  onClose?: VoidFunction;
}
const dispatch = (props: ICustomerMessageProps) => {
  window.dispatchEvent(
    new CustomEvent<ICustomerMessageProps>(MESSAGE_EVENT_NAME, {
      detail: {
        ...props,
      },
    }),
  );
};

export const message = {
  success(
    content: JointContent,
    duration?: number | VoidFunction,
    onClose?: VoidFunction,
  ) {
    dispatch({ type: MESSAGE_TYPES.SUCCESS, content, duration, onClose });
  },
  error(
    content: JointContent,
    duration?: number | VoidFunction,
    onClose?: VoidFunction,
  ) {
    dispatch({ type: MESSAGE_TYPES.ERROR, content, duration, onClose });
  },
  info(
    content: JointContent,
    duration?: number | VoidFunction,
    onClose?: VoidFunction,
  ) {
    dispatch({ type: MESSAGE_TYPES.INFO, content, duration, onClose });
  },
  warning(
    content: JointContent,
    duration?: number | VoidFunction,
    onClose?: VoidFunction,
  ) {
    dispatch({ type: MESSAGE_TYPES.WARNING, content, duration, onClose });
  },
  loading(
    content: JointContent,
    duration?: number | VoidFunction,
    onClose?: VoidFunction,
  ) {
    dispatch({ type: MESSAGE_TYPES.LOADING, content, duration, onClose });
  },
};
