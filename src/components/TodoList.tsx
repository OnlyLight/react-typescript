import React, { useState } from "react";

type typeElement = React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface ITodo {
  text: string;
  finish: boolean;
}

export const TodoList: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: typeElement): void => {
    e.preventDefault();
    setValue("");
    addNewTodo(value);
  };

  const addNewTodo = (text: string): void => {
    if (text.trim().length > 1) {
      const newTodo: ITodo[] = [...todos, { text: text, finish: false }];
      setTodos(newTodo);
    }
  };

  const completeTodo = (index: number): void => {
    // const newTodo: ITodo[] = todos;
    // newTodo[index].finish = !newTodo[index].finish;
    setTodos([
      ...todos.slice(0, index),
      { text: todos[index].text, finish: !todos[index].finish },
      ...todos.slice(index + 1, todos.length)
    ]);
  };

  const deleteTodo = (index: number): void => {
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length)
    ]);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        required
      />
      <button onClick={e => handleSubmit(e)}>Click to add !!</button>
      <button
        onClick={e => {
          setTodos([]);
          setValue("");
        }}
      >
        Click to Clear !!
      </button>
      {todos.map((item: ITodo, index: number) => (
        <div className="section-list" key={index}>
          <div style={{ textDecoration: item.finish ? "line-through" : "" }}>
            {item.text}
          </div>
          <button onClick={() => completeTodo(index)}>
            {item.finish ? "UnFinish" : "Finish"}
          </button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </>
  );
};
