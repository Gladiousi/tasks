import React, { useState } from "react";
import type { TodoInputProps } from "../types/ui";

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (onAdd(title)) {
      setTitle("");
    }
  };

  const isInvalid = !title.trim();

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Что нужно сделать?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-all placeholder:text-slate-400"
        aria-label="Новая задача"
      />
      <button
        type="submit"
        disabled={isInvalid}
        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600 text-white text-sm font-medium rounded-xl transition-all shadow-sm active:scale-95 disabled:active:scale-100 cursor-pointer disabled:cursor-not-allowed"
      >
        +<span>Добавить</span>
      </button>
    </form>
  );
};
