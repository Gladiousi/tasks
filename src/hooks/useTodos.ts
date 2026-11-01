import { useState, useMemo } from "react";
import { type Todo, type FilterStatus } from "../types/todo";
import { useLocalStorage } from "./useLocalStorage";
import { STORAGE_KEY } from "../types/constans";

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(STORAGE_KEY, []);
  const [filter, setFilter] = useState<FilterStatus>("all");

  const addTodo = (title: string): boolean => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return false;
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      isCompleted: false,
      createdAt: Date.now(),
    };

    setTodos((prev) => [newTodo, ...prev]);
    return true;
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.isCompleted);
      case "completed":
        return todos.filter((todo) => todo.isCompleted);
      case "all":
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeCount = useMemo(
    () => todos.filter((todo) => !todo.isCompleted).length,
    [todos],
  );

  return {
    todos: filteredTodos,
    totalCount: todos.length,
    activeCount,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}
