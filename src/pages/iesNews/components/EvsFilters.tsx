import { DownOutlined, ReloadOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Checkbox, Collapse, DatePicker, Flex, Input } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import type { EvsFiltersState } from '../hooks/useEvsFilters';
import styles from '../styles/filter.module.scss';
import { Title } from '@/components';
import { authorEvsOpts, categoryEvsOpts } from '@/utils';

const { RangePicker } = DatePicker;

type EvsCollfilter = 'date' | 'category' | 'author';

interface IEvsFilters {
  filters: EvsFiltersState;
  updateFilters: (patch: Partial<EvsFiltersState>) => void;
  resetFilters: () => void;
}

const EvsFilters: React.FC<IEvsFilters> = (props) => {
  const { filters, updateFilters, resetFilters } = props;
  const [activeKeys, setActiveKeys] = useState<Array<EvsCollfilter>>([]);

  const isCollAct = (key: EvsCollfilter) => activeKeys.includes(key);
  const collLabel = (key: EvsCollfilter, tit: string) => (
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
      label: collLabel('date', 'Theo ngày phát hành'),
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
      label: collLabel('category', 'Theo loại sự kiện'),
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
            {categoryEvsOpts.map((item) => (
              <Checkbox key={item.value} value={item.value}>
                {item.label}
              </Checkbox>
            ))}
          </Flex>
        </Checkbox.Group>
      ),
    },

    {
      key: 'author',
      label: collLabel('author', 'Theo đơn vị phát hành'),
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
            {authorEvsOpts.map((item) => (
              <Checkbox key={item.value} value={item.value}>
                {item.label}
              </Checkbox>
            ))}
          </Flex>
        </Checkbox.Group>
      ),
    },
  ];

  return (
    <Flex vertical gap={10} className='!mr-10'>
      <Title className='!text-6xl'>Khám phá tất cả Sự Kiện IES</Title>
      <Button
        type='link'
        onClick={resetFilters}
        className='!p-0 !text-start !flex !justify-start'
      >
        <Title level={4} color='black' className='!m-0 !mb-1'>
          Reset filters
        </Title>
        <ReloadOutlined className='!text-blue-500 !text-xl -scale-x-100' />
      </Button>
      <Input
        placeholder='Tìm kiếm tin tức'
        value={filters.keyword}
        onChange={(e) =>
          updateFilters({
            keyword: e.target.value,
          })
        }
      />

      <div className='!border-b !border-[#cfd2d8]'>
        <Collapse
          ghost
          expandIconPosition='end'
          activeKey={activeKeys}
          onChange={(keys) =>
            setActiveKeys(
              Array.isArray(keys) ? (keys as Array<EvsCollfilter>) : [],
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

export default EvsFilters;
