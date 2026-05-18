import Pagination from 'antd/es/pagination';
import { lazy, useEffect, useRef } from 'react';
import { useEventLstData } from './hooks';
import { useEvsFilters } from './hooks/useEvsFilters';
import { useDevice } from '@/hooks';
import IesLayoutNE from '@/layouts/IesLayoutNE';

const EvsFilters = lazy(() => import('@/pages/iesNews/components/EvsFilters'));
const EvsLst = lazy(() => import('@/pages/iesNews/components/EvsLst'));

const EvsPage = () => {
  const { data } = useEventLstData();
  const { device } = useDevice();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const {
    filters,
    updateFilters,
    paginatedData,
    currentPage,
    setCurrentPage,
    totalItems,
    resetFilters,
  } = useEvsFilters(data);

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
          <EvsFilters
            device={device}
            filters={filters}
            updateFilters={updateFilters}
            resetFilters={resetFilters}
            evsSreachDt={data}
          />
        }
        content={
          <EvsLst
            device={device}
            evLstData={paginatedData}
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

export default EvsPage;
