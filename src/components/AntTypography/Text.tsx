import { Typography } from 'antd';
import { type TextProps } from 'antd/es/typography/Text';
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

  // 統一樣式，僅處理字體大小
  const textStyles: CSSProperties = {
    fontSize: defaultFontSize,
    color: color ? color : 'black',
    ...style,
  };

  // 處理 editable 配置
  const editableConfig =
    editable === true || typeof editable === 'object'
      ? {
          tooltip: '點擊編輯',
          ...(typeof editable === 'object' ? editable : {}),
        }
      : undefined;

  // 暴露 ref 方法
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (internalRef.current && editable) {
        internalRef.current.focus?.();
      }
    },
  }));

  return (
    <Typography.Text
      ref={internalRef}
      style={textStyles}
      editable={editableConfig}
      {...restProps}
    />
  );
};

export default Text;
