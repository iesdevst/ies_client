import { Pagination } from 'antd';
import NewsFilters from './components/NewsFilters';
import NewsLst from './components/NewsLst';
import { useNewsFilters, useNewsLstData } from './hooks';
import IesLayoutNE from '@/layouts/IesLayoutNE';

const NewsPage = () => {
  const { data } = useNewsLstData();

  const {
    filters,
    setFilters,
    paginatedData,
    currentPage,
    setCurrentPage,
    totalItems,
    resetFilters,
  } = useNewsFilters(data);
  return (
    <IesLayoutNE
      filters={
        <NewsFilters
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
        />
      }
      content={<NewsLst newsLstdata={paginatedData} />}
      pagination={
        <Pagination
          current={currentPage}
          total={totalItems}
          pageSize={3}
          onChange={setCurrentPage}
        />
      }
    />
  );
};

export default NewsPage;
