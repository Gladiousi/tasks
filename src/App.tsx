import { useTodos } from "./hooks/useTodos";
import { TodoInput } from "./components/TodoInput";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";

export function App() {
  const {
    todos,
    totalCount,
    activeCount,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
  } = useTodos();

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start pt-16 sm:pt-24 pb-12 px-2 lg:px-0">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Список задач
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          ZalogHub Junior Frontend Assignment
        </p>
      </header>

      <section className="bg-white rounded-2xl w-full max-w-lg p-4 lg:p-6 shadow-sm border border-slate-200/60 transition-all duration-200">
        <TodoInput onAdd={addTodo} />

        {totalCount > 0 && (
          <TodoFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
          />
        )}

        <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
      </section>
    </main>
  );
}

export default App;
