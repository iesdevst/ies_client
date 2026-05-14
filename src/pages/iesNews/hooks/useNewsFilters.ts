import { useMemo, useState } from 'react';
import type {
  AuthorNewsType,
  FieldType,
  NewsCategory,
  NewsLstData,
} from './useNewsLstData';

const PAGE_SIZE = 3;

export type NewsFiltersState = {
  keyword: string;
  category: Array<NewsCategory>;
  author: Array<AuthorNewsType>;
  field: Array<FieldType>;
  fromDate?: string;
  toDate?: string;
};

const defaultFilters: NewsFiltersState = {
  keyword: '',
  category: [],
  author: [],
  field: [],
  fromDate: undefined,
  toDate: undefined,
};

export const useNewsFilters = (data: Array<NewsLstData>) => {
  const [filters, setFilters] = useState<NewsFiltersState>(defaultFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const updateFilters = (patch: Partial<NewsFiltersState>) => {
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
          item.newsTit.toLowerCase().includes(keyword) ||
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

    // field
    if (filters.field.length > 0) {
      result = result.filter(
        (item) =>
          item.fields !== undefined && filters.field.includes(item.fields),
      );
    }

    // date filter
    if (filters.fromDate && filters.toDate) {
      result = result.filter((item) => {
        const itemDate = new Date(item.newsDate).getTime();

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
      (a, b) => new Date(b.newsDate).getTime() - new Date(a.newsDate).getTime(),
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
