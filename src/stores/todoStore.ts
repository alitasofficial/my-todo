import type { Todo } from "@prisma/client";
import { create } from "zustand";

export const todoStore = create<{
  todos: Todo[];
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, title: string) => void;
  toggleTodo: (id: number) => void;
}>((set) => ({
  todos: [],
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  updateTodo: (id, title) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo,
      ),
    }));
  },
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  },
}));
