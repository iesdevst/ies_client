import TitleAntd from 'antd/es/typography/Title';
import type { TitleProps } from 'antd/es/typography/Title';
import 'antd/es/typography/style';
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
  const internalRef = useRef<HTMLHeadingElement>(null);

  const textStyles: CSSProperties = {
    fontSize: defaultFontSize,
    ...style,
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      internalRef.current?.focus?.();
    },
  }));

  return <TitleAntd ref={internalRef} style={textStyles} {...restProps} />;
};

export default Title;
