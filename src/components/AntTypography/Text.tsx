import TextAntd from 'antd/es/typography/Text';
import 'antd/es/typography/style';
import type { TextProps } from 'antd/es/typography/Text';
import { type CSSProperties, useImperativeHandle, useRef } from 'react';

export interface TextRef {
  focus: () => void;
}

export interface TextComponentProps extends TextProps {
  defaultFontSize?: string | number;
  editable?: boolean | object;
  ref?: React.RefObject<TextRef>;
}
const Text: React.FC<TextComponentProps> = ({
  ref,
  defaultFontSize,
  style,
  editable,
  color,
  ...restProps
}) => {
  const internalRef = useRef<HTMLSpanElement>(null);

  const textStyles: CSSProperties = {
    fontSize: defaultFontSize,
    color: color ?? 'black',
    ...style,
  };

  const editableConfig =
    editable === true || typeof editable === 'object'
      ? {
          tooltip: '點擊編輯',
          ...(typeof editable === 'object' ? editable : {}),
        }
      : undefined;

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (internalRef.current && editable) {
        internalRef.current.focus?.();
      }
    },
  }));

  return (
    <TextAntd
      ref={internalRef}
      style={textStyles}
      editable={editableConfig}
      {...restProps}
    />
  );
};

export default Text;
