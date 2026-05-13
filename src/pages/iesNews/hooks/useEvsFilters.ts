import { useMemo, useState } from 'react';
import type {
  AuthorEvsType,
  EventLstData,
  EvsCategory,
} from './useEventsLstData';

const PAGE_SIZE = 3;

export type EvsFiltersState = {
  keyword: string;
  category?: EvsCategory;
  author?: AuthorEvsType;
};

const defaultFilters: EvsFiltersState = {
  keyword: '',
};

export const useEvsFilters = (data: Array<EventLstData>) => {
  const [filters, setFilters] = useState<EvsFiltersState>(defaultFilters);

  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    let result = [...data];

    // keyword
    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase();

      result = result.filter(
        (item) =>
          item.eventTit.toLowerCase().includes(keyword) ||
          item.desc.toLowerCase().includes(keyword),
      );
    }

    // category
    if (filters.category) {
      result = result.filter((item) => item.categories === filters.category);
    }

    // author
    if (filters.author) {
      result = result.filter((item) => item.authors === filters.author);
    }

    return result;
  }, [data, filters]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;

    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, currentPage]);

  const resetFilters = () => {
    setFilters(defaultFilters);
    setCurrentPage(1);
  };

  return {
    filters,
    setFilters,

    currentPage,
    setCurrentPage,

    filteredData,
    paginatedData,

    totalItems: filteredData.length,

    resetFilters,
  };
};
