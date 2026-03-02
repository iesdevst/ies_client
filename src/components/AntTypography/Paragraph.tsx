import { Typography } from 'antd';
import type { ParagraphProps } from 'antd/es/typography/Paragraph';
import { type CSSProperties, useImperativeHandle, useRef } from 'react';

export interface AntTypographyRef {
  focus: () => void;
}

export type AntParagraphProps = ParagraphProps & {
  defaultFontSize?: string | number;
  ref?: React.RefObject<AntTypographyRef>;
};

const Paragraph: React.FC<AntParagraphProps> = ({
  defaultFontSize,
  ref,
  style,
  ...restProps
}) => {
  const internalRef = useRef<HTMLSpanElement>(null);

  const textStyles: CSSProperties = {
    fontSize: defaultFontSize,
    ...style,
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      internalRef.current?.focus?.();
    },
  }));

  return (
    <Typography.Paragraph
      ref={internalRef}
      style={textStyles}
      {...(restProps as ParagraphProps)}
    />
  );
};

export default Paragraph;
