import type { FilterStatus } from "./todo";

export interface TodoFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  activeCount: number;
}

export interface TodoInputProps {
  onAdd: (title: string) => boolean;
}