import { useMemo, useState } from 'react';
import type {
  AuthorEvsType,
  EventLstData,
  EvsCategory,
} from './useEventsLstData';

const PAGE_SIZE = 3;

export type EvsFiltersState = {
  keyword: string;
  category: Array<EvsCategory>;
  author: Array<AuthorEvsType>;
  fromDate?: string;
  toDate?: string;
};

const defaultFilters: EvsFiltersState = {
  keyword: '',
  category: [],
  author: [],
  fromDate: undefined,
  toDate: undefined,
};

export const useEvsFilters = (data: Array<EventLstData>) => {
  const [filters, setFilters] = useState<EvsFiltersState>(defaultFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const updateFilters = (patch: Partial<EvsFiltersState>) => {
    setFilters((prev) => ({
      ...prev,
      ...patch,
    }));

    setCurrentPage(1);
  };

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
    if (filters.category.length > 0) {
      result = result.filter((item) =>
        filters.category.includes(item.categories),
      );
    }

    // author
    if (filters.author.length > 0) {
      result = result.filter((item) => filters.author.includes(item.authors));
    }

    // date filter
    if (filters.fromDate && filters.toDate) {
      result = result.filter((item) => {
        const itemDate = new Date(item.evDate).getTime();

        if (
          filters.fromDate &&
          itemDate < new Date(filters.fromDate).getTime()
        ) {
          return false;
        }

        if (filters.toDate && itemDate > new Date(filters.toDate).getTime()) {
          return false;
        }

        return true;
      });
    }

    // sort newest first
    result.sort(
      (a, b) => new Date(b.evDate).getTime() - new Date(a.evDate).getTime(),
    );

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
    updateFilters,

    currentPage,
    setCurrentPage,

    filteredData,
    paginatedData,

    totalItems: filteredData.length,

    resetFilters,
  };
};
