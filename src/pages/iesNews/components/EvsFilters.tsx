import { Button, Flex, Input, Select } from 'antd';
import type { EvsFiltersState } from '../hooks/useEvsFilters';

interface IEvsFilters {
  filters: EvsFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<EvsFiltersState>>;
  resetFilters: () => void;
}

const EvsFilters: React.FC<IEvsFilters> = (props) => {
  const { filters, setFilters, resetFilters } = props;
  return (
    <Flex vertical gap={16}>
      <Input
        placeholder='Tìm kiếm sự kiện'
        value={filters.keyword}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            keyword: e.target.value,
          }))
        }
      />

      <Select
        placeholder='Danh mục'
        allowClear
        value={filters.category}
        onChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            category: value,
          }))
        }
        options={[
          {
            label: 'Hướng nghiệp',
            value: 'career',
          },
          {
            label: 'Tuyển sinh',
            value: 'admissions',
          },
          {
            label: 'Hợp tác đào tạo',
            value: 'partnership',
          },
          {
            label: 'Workshop',
            value: 'workshop',
          },
        ]}
      />

      <Select
        placeholder='Theo đơn vị đăng'
        allowClear
        value={filters.author}
        onChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            author: value,
          }))
        }
        options={[
          {
            label: 'Phòng tuyển sinh',
            value: 'admiss',
          },
          {
            label: 'Phòng hành chính',
            value: 'admisstr',
          },
          {
            label: 'Phòng đào tạo',
            value: 'individual',
          },
          {
            label: 'Cá nhân',
            value: 'individual',
          },
        ]}
      />

      <Button onClick={resetFilters}>Reset filters</Button>
    </Flex>
  );
};

export default EvsFilters;
