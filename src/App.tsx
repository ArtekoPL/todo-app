import { useState, useEffect } from "react";
import "./App.css";

// Typ definiujący jedno zadanie TODO
type Todo = {
  id: number; // unikalne ID
  text: string; // treść zadania
  done: boolean; // status: zrobione czy nie
};

function App() {
  // Lista zadań, wczytywana z localStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  // Wpisywane nowe zadanie
  const [input, setInput] = useState("");

  // Filtrowanie listy: wszystkie / aktywne / zrobione
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");

  // Edytowane zadanie
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // Zapisujemy zmiany do localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Dodaje nowe zadanie do listy
  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo: Todo = { id: Date.now(), text: input, done: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Usuwa zadanie o danym ID
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Zmienia status "zrobione" zadania
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Uruchamia edycję danego zadania
  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Zapisuje zmiany po edycji zadania
  const saveEdit = (id: number) => {
    if (editText.trim() === "") return;
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditingId(null);
  };

  // Filtrowanie zadań do wyświetlenia
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });

  return (
    <div className="app-container">
      <h1>📝 Lista TODO</h1>

      {/* Pole do dodawania nowych zadań */}
      <div className="todo-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nowe zadanie..."
        />
        <button onClick={addTodo}>Dodaj</button>
      </div>

      {/* Przycisk filtrowania */}
      <div className="filter-bar">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active-filter" : ""}
        >
          Wszystkie
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? "active-filter" : ""}
        >
          Aktywne
        </button>
        <button
          onClick={() => setFilter("done")}
          className={filter === "done" ? "active-filter" : ""}
        >
          Zrobione
        </button>
      </div>

      {/* Licznik */}
      <div className="counter">
        {todos.filter((t) => !t.done).length} otwartych / {todos.length} łącznie
      </div>

      {/* Lista zadań */}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
                />
                <button onClick={() => saveEdit(todo.id)}>💾</button>
              </>
            ) : (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.text}</span>
                </label>
                <div className="actions">
                  <button onClick={() => startEdit(todo)}>✏️</button>
                  <button onClick={() => removeTodo(todo.id)}>🗑️</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
