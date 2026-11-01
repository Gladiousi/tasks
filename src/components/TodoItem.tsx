import { Trash2, Check } from "lucide-react";
import type { TodoItemProps } from "../types/ui";

export const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  return (
    <li className="group flex items-center justify-between p-3.5 mb-2 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 transition-all shadow-sm">
      <label className="flex items-center gap-3 flex-1 cursor-pointer select-none">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => onToggle(todo.id)}
            className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition-all cursor-pointer"
          />
          <Check
            size={14}
            className="absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity stroke-3"
          />
        </div>
        <span
          className={`text-sm break-all transition-all ${
            todo.isCompleted
              ? "line-through text-slate-400"
              : "text-slate-700 font-normal"
          }`}
        >
          {todo.title}
        </span>
      </label>

      <button
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label={`Удалить задачу ${todo.title}`}
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer ml-2"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
};
