import { createContext } from "react";
import AddTodo from "./components/AddTodo.tsx";
import TodoList from "./components/TodoList.tsx";
import state, { type AppStateType } from "./state.ts";

export const AppState = createContext<AppStateType>({} as AppStateType);

export default function App() {
  console.log("Hello world!");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <main>
          <AppState.Provider value={state}>
            <div className="App">
              <h1>Todos</h1>
              <TodoList />
              <AddTodo />
            </div>
          </AppState.Provider>
        </main>
      </body>
    </html>
  );
}
