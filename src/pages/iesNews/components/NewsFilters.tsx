import { DownOutlined, ReloadOutlined, RightOutlined } from '@ant-design/icons';
import {
  AutoComplete,
  Button,
  Checkbox,
  Collapse,
  DatePicker,
  Flex,
  Input,
} from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { NewsFiltersState, NewsLstData } from '../hooks';
import styles from '../styles/filter.module.scss';
import { Title } from '@/components';
import type { DeviceType } from '@/hooks';
import { authorNewsOpts, categoryNewsOpts, fieldNewsOpts } from '@/utils';

const { RangePicker } = DatePicker;

interface INewsFilters {
  device: DeviceType;
  filters: NewsFiltersState;
  updateFilters: (patch: Partial<NewsFiltersState>) => void;
  resetFilters: () => void;
  newsSreachDt: Array<NewsLstData>;
}

type NewsCollfilter = 'date' | 'category' | 'author' | 'field';

const NewsFilters: React.FC<INewsFilters> = (props) => {
  const { device, filters, updateFilters, resetFilters, newsSreachDt } = props;
  const { t } = useTranslation('newsFilters');
  const { t: optionsT } = useTranslation('options');
  const [activeKeys, setActiveKeys] = useState<Array<NewsCollfilter>>([]);
  const [searchValue, setSearchValue] = useState('');
  const [newsOpts, setNewsOpts] = useState<Array<{ value: string }>>([]);
  const isCollAct = (key: NewsCollfilter) => activeKeys.includes(key);
  const collLabel = (key: NewsCollfilter, tit: string) => (
    <Title
      level={5}
      style={{
        color: isCollAct(key) ? '#1677ff' : undefined,
        transition: '0.2s',
      }}
    >
      {tit}
    </Title>
  );

  const collapseItems = [
    {
      key: 'date',
      label: collLabel('date', t('date')),
      children: (
        <RangePicker
          value={
            filters.fromDate && filters.toDate
              ? [dayjs(filters.fromDate), dayjs(filters.toDate)]
              : null
          }
          onChange={(dates) => {
            if (!dates) {
              updateFilters({
                fromDate: undefined,
                toDate: undefined,
              });
              return;
            }

            updateFilters({
              fromDate: dates[0]?.toISOString(),
              toDate: dates[1]?.toISOString(),
            });
          }}
          className='!w-full'
        />
      ),
    },
    {
      key: 'category',
      label: collLabel('category', t('category')),
      children: (
        <Checkbox.Group
          value={filters.category}
          onChange={(checkedValues) =>
            updateFilters({
              category: checkedValues as any,
            })
          }
        >
          <Flex vertical gap={10}>
            {categoryNewsOpts.map((item) => (
              <Checkbox key={item.value} value={item.value}>
                {optionsT(item.label)}
              </Checkbox>
            ))}
          </Flex>
        </Checkbox.Group>
      ),
    },

    {
      key: 'author',
      label: collLabel('author', t('author')),
      children: (
        <Checkbox.Group
          value={filters.author}
          onChange={(checkedValues) =>
            updateFilters({
              author: checkedValues as any,
            })
          }
        >
          <Flex vertical gap={10}>
            {authorNewsOpts.map((item) => (
              <Checkbox key={item.value} value={item.value}>
                {optionsT(item.label)}
              </Checkbox>
            ))}
          </Flex>
        </Checkbox.Group>
      ),
    },

    {
      key: 'field',
      label: collLabel('field', t('field')),
      children: (
        <Checkbox.Group
          value={filters.field}
          onChange={(checkedValues) =>
            updateFilters({
              field: checkedValues as any,
            })
          }
        >
          <Flex vertical gap={10}>
            {fieldNewsOpts.map((item) => (
              <Checkbox key={item.value} value={item.value}>
                {optionsT(item.label)}
              </Checkbox>
            ))}
          </Flex>
        </Checkbox.Group>
      ),
    },
  ];

  const handleRs = () => {
    setSearchValue('');
    setNewsOpts([]);
    resetFilters();
  };

  const titLvMap = {
    mobile: '!text-3xl',
    tablet: '!text-3xl',
    tabletPro: '!text-4xl',
    desktop: '!text-6xl',
  };

  return (
    <Flex vertical gap={10} className=''>
      <Title className={`${titLvMap[device]}`}>{t('seeAllnews')}</Title>
      <Button
        type='link'
        onClick={handleRs}
        className='!p-0 !text-start !flex !justify-start'
      >
        <Title level={4} color='black' className='!m-0 !mb-1'>
          {t('reset')}
        </Title>
        <ReloadOutlined className='!text-blue-500 !text-xl -scale-x-100' />
      </Button>
      <AutoComplete
        className='!w-full'
        options={newsOpts}
        value={searchValue}
        onSearch={(value) => {
          setSearchValue(value);

          if (!value.trim()) {
            setNewsOpts([]);
            return;
          }

          const filtered = newsSreachDt
            .filter(
              (item) =>
                item.newsTit.toLowerCase().includes(value.toLowerCase()) ||
                item.desc.toLowerCase().includes(value.toLowerCase()),
            )
            .map((item) => ({
              value: item.newsTit,
            }));

          const unique = Array.from(
            new Map(filtered.map((item) => [item.value, item])).values(),
          );

          setNewsOpts(unique.slice(0, 5));
        }}
        onSelect={(value) => {
          updateFilters({
            keyword: value,
          });
          setSearchValue(value);
        }}
      >
        <Input.Search
          placeholder={t('searchNews')}
          allowClear
          onSearch={(value) => {
            updateFilters({
              keyword: value,
            });
          }}
          onChange={(e) => {
            const value = e.target.value;

            setSearchValue(value);

            if (!value) {
              updateFilters({
                keyword: '',
              });

              setNewsOpts([]);
            }
          }}
          className={styles.inputSre}
        />
      </AutoComplete>

      <div className='!border-b !border-[#cfd2d8]'>
        <Collapse
          ghost
          expandIconPosition='end'
          activeKey={activeKeys}
          onChange={(keys) =>
            setActiveKeys(
              Array.isArray(keys) ? (keys as Array<NewsCollfilter>) : [],
            )
          }
          items={collapseItems}
          className={`${styles.filterCol}`}
          expandIcon={({ isActive }) =>
            isActive ? (
              <DownOutlined className='!text-lg !text-[#1677ff]' />
            ) : (
              <RightOutlined className='!text-lg' />
            )
          }
        />
      </div>
    </Flex>
  );
};

export default NewsFilters;
