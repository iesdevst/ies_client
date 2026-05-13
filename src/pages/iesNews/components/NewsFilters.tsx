import { Button, Checkbox, Collapse, Flex, Input } from 'antd';
import type { NewsFiltersState } from '../hooks';
import { Title } from '@/components';

interface INewsFilters {
  filters: NewsFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<NewsFiltersState>>;
  resetFilters: () => void;
}

const NewsFilters: React.FC<INewsFilters> = (props) => {
  const { filters, setFilters, resetFilters } = props;

  const collapseItems = [
    {
      key: 'category',
      label: <Title level={5}>Danh mục</Title>,
      children: (
        <Checkbox.Group
          value={filters.category}
          onChange={(checkedValues) =>
            setFilters((prev) => ({
              ...prev,
              category: checkedValues as any,
            }))
          }
        >
          <Flex vertical gap={10}>
            <Checkbox value='career'>Hướng nghiệp</Checkbox>

            <Checkbox value='admissions'>Tuyển sinh</Checkbox>

            <Checkbox value='partnership'>Hợp tác</Checkbox>
          </Flex>
        </Checkbox.Group>
      ),
    },

    {
      key: 'author',
      label: <Title level={5}>Theo đơn vị đăng</Title>,
      children: (
        <Checkbox.Group
          value={filters.author}
          onChange={(checkedValues) =>
            setFilters((prev) => ({
              ...prev,
              author: checkedValues as any,
            }))
          }
        >
          <Flex vertical gap={10}>
            <Checkbox value='admiss'>Phòng tuyển sinh</Checkbox>

            <Checkbox value='admisstr'>Phòng hành chính</Checkbox>

            <Checkbox value='offTrain'>Phòng đào tạo</Checkbox>
            <Checkbox value='individual'>Cá nhân</Checkbox>
          </Flex>
        </Checkbox.Group>
      ),
    },

    {
      key: 'field',
      label: <Title level={5}>Lĩnh vực</Title>,
      children: (
        <Checkbox.Group
          value={filters.field}
          onChange={(checkedValues) =>
            setFilters((prev) => ({
              ...prev,
              field: checkedValues as any,
            }))
          }
        >
          <Flex vertical gap={10}>
            <Checkbox value='tech'>Công nghệ</Checkbox>

            <Checkbox value='office'>Văn phòng</Checkbox>
          </Flex>
        </Checkbox.Group>
      ),
    },
  ];

  return (
    <Flex vertical gap={20}>
      <Input
        placeholder='Tìm kiếm tin tức'
        value={filters.keyword}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            keyword: e.target.value,
          }))
        }
      />

      <Collapse
        ghost
        defaultActiveKey={['category', 'author', 'field']}
        items={collapseItems}
      />

      <Button onClick={resetFilters}>Reset filters</Button>
    </Flex>
  );
};

export default NewsFilters;
