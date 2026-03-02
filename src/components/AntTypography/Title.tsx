import { Typography } from 'antd';
import type { TitleProps } from 'antd/es/typography/Title';
import { type CSSProperties, useImperativeHandle, useRef } from 'react';

export interface ITitleRef {
  focus: () => void;
}

export type ITitleComponentProps = TitleProps & {
  defaultFontSize?: string | number;
  ref?: React.RefObject<ITitleRef>;
};

const Title: React.FC<ITitleComponentProps> = ({
  ref,
  defaultFontSize,
  style,
  ...restProps
}) => {
  const internalRef = useRef<HTMLSpanElement>(null);

  const textStyles: CSSProperties = {
    fontSize: defaultFontSize,
    ...style,
  };

  // 暴露 ref 方法
  useImperativeHandle(ref, () => ({
    focus: () => {
      internalRef.current?.focus?.();
    },
  }));

  return (
    <Typography.Title ref={internalRef} style={textStyles} {...restProps} />
  );
};

export default Title;
