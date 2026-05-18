import RightOutlined from '@ant-design/icons/RightOutlined';
import Button from 'antd/es/button';
import type { ButtonProps } from 'antd/es/button';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type CSSProperties,
  type HtmlHTMLAttributes,
} from 'react';
import styles from './dropdownAlpha.module.scss';

type DropdownAlphaRef = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface IDropdownAlphaProps extends HtmlHTMLAttributes<HTMLSpanElement> {
  buttonProps?: ButtonProps;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onOpenChange?: (isOpen: boolean) => void;
  items: Array<{
    item: React.ReactNode;
    key: React.Key;
    children?: IDropdownAlphaProps['items'];
  }>;
  itemHeight?: string | number;
  noUnderLink?: boolean;
  gap?: CSSProperties['gap'];
  rightOffset?: number | string; // Only work on up or down
  topOffset?: number | string; // Only work on left or right
  pannelMaxHeight?: number | string;
  isTestKeepOpen?: boolean;
  withoutIcon?: boolean;
  dontStickDown?: boolean | 'up' | 'down' | 'left' | 'right';
  onGetRect?: (rect: DOMRect) => void;
}

const DropdownAlpha = forwardRef<DropdownAlphaRef, IDropdownAlphaProps>(
  (props, ref) => {
    const layoutRef = useRef<HTMLSpanElement>(null);
    // DOM
    // prettier-ignore
    const { withoutIcon, isTestKeepOpen, pannelMaxHeight, buttonProps, children, icon = <RightOutlined />, items, onOpenChange, itemHeight, ...otherProps } = props || {};
    const {
      onGetRect,
      noUnderLink,
      gap = 8,
      topOffset,
      rightOffset,
      dontStickDown,
      ...spanProps
    } = otherProps || {};
    const [isOpen, setIsOpen] = useState(!!isTestKeepOpen);
    const [isScrollable, setIsScrollable] = useState(false);
    const [direction, setDirection] = useState<
      'up' | 'down' | 'left' | 'right'
    >('down');

    // === init === //
    // On open change
    useEffect(() => {
      if (isOpen) setTimeout(() => setIsScrollable(true), 450);
      else setIsScrollable(false);
      if (onOpenChange) onOpenChange(isOpen);
    }, [isOpen, onOpenChange]);

    // Get client rect
    useEffect(() => {
      const layoutCurrent = layoutRef.current;
      if (!layoutCurrent || !dontStickDown) return;

      if (dontStickDown !== true && typeof dontStickDown === 'string') {
        setDirection(dontStickDown);
        return;
      }

      const rect = layoutCurrent.getBoundingClientRect();
      const { top, bottom, left } = rect;
      if (onGetRect) onGetRect(rect);

      const { innerHeight, innerWidth } = window;
      const spaceBelow = innerHeight - bottom;
      const spaceAbove = top;
      const threshold = 250;

      if (spaceBelow < threshold && spaceAbove > spaceBelow) {
        setDirection('up');
      } else if (spaceBelow < threshold && spaceAbove < threshold) {
        const innerLeft = innerWidth - left;
        if (innerLeft < 100) setDirection('right');
        else setDirection('left');
      } else {
        setDirection('down');
      }
    }, [dontStickDown, items, onGetRect]);

    // Exporse states
    useImperativeHandle(ref, () => {
      return {
        setIsOpen,
      };
    }, []);

    return (
      <span
        {...spanProps}
        ref={layoutRef}
        className='relative'
        style={{ lineHeight: 1 }}
      >
        <Button {...buttonProps} onClick={() => setIsOpen((pre) => !pre)}>
          {!withoutIcon && (
            <span
              className={`text-md transition-all duration-300
            ${isOpen ? 'rotate-[-270deg]' : 'rotate-0'}
          `}
            >
              {icon}
            </span>
          )}
          {children}
        </Button>

        {/* mask */}
        <button
          className={`fixed top-0 left-0 h-full w-full z-30
          ${isOpen ? 'visible' : 'hidden'}
        `}
          onClick={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 180);
          }}
        />

        {/* Drawer */}
        {/* Down */}
        {direction === 'down' && (
          <main
            className={`
            ${styles['drawer-base']}
            ${isOpen ? styles.open : ''}
            ${styles.down}
          `}
            style={{
              right: rightOffset ?? 0,
              maxHeight: isOpen ? pannelMaxHeight || 400 : 0,
              overflowY: isScrollable ? 'auto' : 'hidden',
            }}
          >
            <div className='flex flex-col' style={{ gap: gap || 8 }}>
              {items.map((itemInfo) => {
                const { item, key } = itemInfo;

                return (
                  <div
                    onClick={(e) => e.preventDefault()}
                    key={key}
                    className={`flex w-full
                ${!noUnderLink ? 'border-b' : ''}
              `}
                    style={{
                      height: itemHeight,
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </main>
        )}

        {/* Up */}
        {direction === 'up' && (
          <main
            className={`
            ${styles['drawer-base']}
            ${isOpen ? styles.open : ''}
            ${styles.up}
          `}
            style={{
              right: rightOffset ?? 0,
              maxHeight: isOpen ? pannelMaxHeight || 400 : 0,
              overflowY: isScrollable ? 'auto' : 'hidden',
            }}
          >
            <div className='flex flex-col' style={{ gap: gap || 8 }}>
              {items.map((itemInfo) => {
                const { item, key } = itemInfo;

                return (
                  <div
                    onClick={(e) => e.preventDefault()}
                    key={key}
                    className={`flex w-full
                ${!noUnderLink ? 'border-b' : ''}
              `}
                    style={{
                      height: itemHeight,
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </main>
        )}

        {/* Left */}
        {direction === 'left' && (
          <main
            className={`
            ${styles['drawer-base']}
            ${isOpen ? styles.open : ''}
            ${styles.left}
          `}
            style={{
              top: topOffset ?? -8,
              maxWidth: isOpen ? pannelMaxHeight || 400 : 0,
              overflowX: isScrollable ? 'auto' : 'hidden',
            }}
          >
            <div className='flex' style={{ gap: gap || 8 }}>
              {items.map((itemInfo) => {
                const { item, key } = itemInfo;

                return (
                  <div
                    onClick={(e) => e.preventDefault()}
                    key={key}
                    className={`flex w-full
                ${!noUnderLink ? 'border-b' : ''}
              `}
                    style={{
                      height: itemHeight,
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </main>
        )}

        {/* Right */}
        {direction === 'right' && (
          <main
            className={`
            ${styles['drawer-base']}
            ${isOpen ? styles.open : ''}
            ${styles.right}
          `}
            style={{
              top: topOffset ?? -8,
              maxWidth: isOpen ? pannelMaxHeight || 400 : 0,
              overflowX: isScrollable ? 'auto' : 'hidden',
            }}
          >
            <div className='flex' style={{ gap: gap || 8 }}>
              {items.map((itemInfo) => {
                const { item, key } = itemInfo;

                return (
                  <div
                    onClick={(e) => e.preventDefault()}
                    key={key}
                    className={`flex w-full
                ${!noUnderLink ? 'border-b' : ''}
              `}
                    style={{
                      height: itemHeight,
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </main>
        )}
      </span>
    );
  },
);

export default DropdownAlpha;
export type { DropdownAlphaRef, IDropdownAlphaProps };
