import type { FilterStatus } from "./todo";

export const STORAGE_KEY = "zaloghub_todos_v1";

export const FILTERS: { key: FilterStatus; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "active", label: "Активные" },
  { key: "completed", label: "Выполненные" },
];
