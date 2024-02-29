import type { Todo } from "@prisma/client";
import { create } from "zustand";

export const todoStore = create<{
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, title: string) => void;
  toggleTodo: (id: number) => void;
}>((set) => ({
  todos: [],
  addTodo: (title) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          title,
          completed: false,
        },
      ],
    }));
  },
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
