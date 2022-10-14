import { useContext } from "react";
import type React from "react";
import { AppState } from "../app.tsx";
import type { AppStateType } from "../state.ts";

export default function AddTodo() {
  const { newtodo, addTodo} = useContext<AppStateType>(AppState);
  return (
    <form onSubmit={addTodo}>
      <label htmlFor="todo">
        Add todo:
        <input
          id="todo"
          name="todo"
          value={newtodo.value}
          onChange={(
            e: React.ChangeEvent,
            // @ts-ignore TodoSignal type assumed
          ) => (newtodo.value = e.target.value ?? "")}
        />
        <input type="submit" value="Add" />
      </label>
    </form>
  );
}
