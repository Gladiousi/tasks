export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: number;
}

export type FilterStatus = "all" | "active" | "completed";
