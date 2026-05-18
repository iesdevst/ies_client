import Pagination from 'antd/es/pagination';
import { lazy, useEffect, useRef } from 'react';
import { useNewsFilters, useNewsLstData } from './hooks';
import { useDevice } from '@/hooks';
import IesLayoutNE from '@/layouts/IesLayoutNE';

const NewsFilters = lazy(
  () => import('@/pages/iesNews/components/NewsFilters'),
);
const NewsLst = lazy(() => import('@/pages/iesNews/components/NewsLst'));

const NewsPage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { data } = useNewsLstData();
  const { device } = useDevice();
  const {
    filters,
    updateFilters,
    paginatedData,
    currentPage,
    setCurrentPage,
    totalItems,
    resetFilters,
  } = useNewsFilters(data);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [currentPage, updateFilters, resetFilters]);

  return (
    <section ref={sectionRef}>
      <IesLayoutNE
        filters={
          <NewsFilters
            device={device}
            filters={filters}
            updateFilters={updateFilters}
            resetFilters={resetFilters}
            newsSreachDt={data}
          />
        }
        content={
          <NewsLst
            device={device}
            newsLstdata={paginatedData}
            totalItem={totalItems}
          />
        }
        pagination={
          <Pagination
            current={currentPage}
            total={totalItems}
            pageSize={3}
            onChange={setCurrentPage}
          />
        }
      />
    </section>
  );
};

export default NewsPage;
