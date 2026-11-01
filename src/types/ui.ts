import type { FilterStatus, Todo } from "./todo";

export interface TodoFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  activeCount: number;
}

export interface TodoInputProps {
  onAdd: (title: string) => boolean;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}