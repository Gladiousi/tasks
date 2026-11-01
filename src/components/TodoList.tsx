import type { TodoListProps } from "../types/ui";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="py-10 text-center text-slate-400 text-sm">
        Список задач пуст
      </div>
    );
  }

  return (
    <ul className="flex flex-col">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
