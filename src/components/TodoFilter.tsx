import type { TodoFilterProps } from "../types/ui";
import { FILTERS } from "../types/constans";

export const TodoFilter = ({
  currentFilter,
  onFilterChange,
  activeCount,
}: TodoFilterProps) => {
  return (
    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs sm:text-sm">
      <span className="text-slate-500">
        Осталось:{" "}
        <strong className="text-slate-700 font-semibold">{activeCount}</strong>
      </span>
      <div className="flex gap-1 bg-slate-100/80 p-1 rounded-lg">
        {FILTERS.map(({ key, label }) => {
          const isActive = currentFilter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onFilterChange(key)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
