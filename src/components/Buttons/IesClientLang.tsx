import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useMemo, useRef } from 'react';
import Flag from 'react-flagkit';
import { useTranslation } from 'react-i18next';
import { Title } from '../AntTypography';
import type {
  DropdownAlphaRef,
  IDropdownAlphaProps,
} from '../AppDropdown/DropdownAlpha';
import DropdownAlpha from '../AppDropdown/DropdownAlpha';
import { useUserStore } from '@/store';
import { IesClientLangEnum } from '@/utils';

type AllLocaleDefinition = Record<
  IesClientLangEnum,
  { locale: IesClientLangEnum; label: React.ReactNode; flagCode: string }
>;

type IIesLangProps = Omit<IDropdownAlphaProps, 'items'> & {
  colorT?: string;
};

const IesClientLang: React.FunctionComponent<IIesLangProps> = (props) => {
  const { colorT, ...dropdownProps } = props || {};
  const dropRef = useRef<DropdownAlphaRef>(null);
  const { i18n } = useTranslation('iesClientLang');
  const { language, changeLanguage } = i18n;

  const allLocaleDefinition: AllLocaleDefinition = useMemo(() => {
    return {
      'en-US': {
        locale: IesClientLangEnum.En_US,
        label: 'English',
        flagCode: 'US',
      },

      'vi-VN': {
        locale: IesClientLangEnum.Vi_VN,
        label: 'Tiếng Việt',
        flagCode: 'VN',
      },
    };
  }, []);

  const safeLanguage = (
    Object.keys(allLocaleDefinition) as IesClientLangEnum[]
  ).includes(language as IesClientLangEnum)
    ? (language as IesClientLangEnum)
    : IesClientLangEnum.En_US;

  const allLocaleItem = useMemo(() => {
    return Object.values(allLocaleDefinition).map(({ label, locale }) => {
      const isActive = safeLanguage === locale;

      return {
        item: (
          <Button
            className='!w-full !flex !items-center !gap-2'
            type={isActive ? 'primary' : 'link'}
            onClick={async () => {
              await changeLanguage(locale);
              useUserStore.getState().setLocale(locale);
              dropRef.current?.setIsOpen(false);
            }}
          >
            <Title level={5} className='!m-0 !leading-none !text-white'>
              {label}
            </Title>
          </Button>
        ),
        key: locale,
        locale,
      };
    });
  }, [allLocaleDefinition, changeLanguage, safeLanguage]);

  const currentLanguage = allLocaleDefinition[safeLanguage];

  return (
    <DropdownAlpha
      buttonProps={{ type: 'text', style: { paddingInline: 8 } }}
      ref={dropRef}
      withoutIcon
      items={allLocaleItem}
      noUnderLink
      gap={8}
      itemHeight='fit-content'
      pannelMaxHeight={400}
      {...dropdownProps}
    >
      <div className='!flex !items-center'>
        <Flag country={currentLanguage.flagCode} size={24} className='mr-2' />
        <Title level={5} className={`!m-0 ${colorT ? colorT : '!text-black'}`}>
          {currentLanguage.label}
        </Title>
        <DownOutlined
          className={`!ml-1 !mt-1 ${colorT ? colorT : '!text-black'}`}
        />
      </div>
    </DropdownAlpha>
  );
};

export default IesClientLang;
