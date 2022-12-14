import { useContext } from "react";
import { AppState } from "../app.tsx";

export default function TodoList() {
  const { todos, removeTodo } = useContext(AppState);
  return (
    <div className="todos">
      {todos.value.map((item, i) => {
        return (
          <div className="list-item" key={item}>
            <div className="item-todo">
              {item}
            </div>
            <button className="x-button" onClick={() => removeTodo(i)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
