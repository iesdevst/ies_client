import { Pagination } from 'antd';
import EvsFilters from './components/EvsFilters';
import EvsLst from './components/EvsLst';
import { useEventLstData } from './hooks';
import { useEvsFilters } from './hooks/useEvsFilters';
import IesLayoutNE from '@/layouts/IesLayoutNE';

const EvsPage = () => {
  const { data } = useEventLstData();

  const {
    filters,
    updateFilters,
    paginatedData,
    currentPage,
    setCurrentPage,
    totalItems,
    resetFilters,
  } = useEvsFilters(data);

  return (
    <IesLayoutNE
      filters={
        <EvsFilters
          filters={filters}
          updateFilters={updateFilters}
          resetFilters={resetFilters}
        />
      }
      content={<EvsLst evLstData={paginatedData} totalItem={totalItems} />}
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

export default EvsPage;
