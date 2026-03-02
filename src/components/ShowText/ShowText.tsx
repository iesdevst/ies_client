import React, { useEffect, useRef, useState } from 'react';

interface IShowTextProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  label: string;
}

const ShowText: React.FunctionComponent<IShowTextProps> = (props) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const { label, ...divProps } = props || {};
  const [text, setText] = useState('');
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    const spanCurrent = spanRef.current;
    if (!label || isFinish || !spanCurrent) return () => {};
    const pusher = setInterval(() => {
      // 推送文字
      setText((pre) => {
        if (pre.length === label.length) {
          clearInterval(pusher);
          // 延後關閉
          setTimeout(() => {
            setIsFinish(true);
          }, 1000);
          return pre;
        }
        return label.slice(0, pre.length + 1);
      });
      // 固定高度
      if (!spanCurrent.style.maxHeight && spanCurrent.clientHeight) {
        spanCurrent.style.maxHeight = `${spanCurrent.clientHeight}px`;
      }
    }, 200);
    return () => {
      clearInterval(pusher);
    };
  }, [isFinish, label, text]);

  return (
    <span
      {...{
        ref: spanRef,
        ...divProps,
        style: {
          opacity: isFinish ? 0.5 : 1,
          maxWidth: isFinish ? 0 : 500,
          overflow: 'hidden',
          transition: 'all 0.7s, maxHeight 0.2s',
          paddingInline: isFinish ? 0 : 5,
          position: 'relative',
          ...divProps.style,
        },
      }}
    >
      {text}
    </span>
  );
};

export default ShowText;
