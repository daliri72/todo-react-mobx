import { createContext, useContext } from "react";
import { TodoList } from "../stores/todo-list";

export const StoreContext = createContext<TodoList>({} as TodoList);
export const StoreProvider = StoreContext.Provider;

export const useStore = (): TodoList => useContext(StoreContext);
