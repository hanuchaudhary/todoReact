import React, { useContext } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { TodoContext } from "../context/TodoContext";

const Foreground = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <div className="z-20 relative ">
      <Nav />
      <div className="grid lg:grid-cols-5 mx-10">
        {todos.map((e , idx) => (
          <Card
            onClickRemove={() => removeTodo(e.id)}
            idkey={e.id}
            key={e.id}
            title={e.title}
            description={e.description}
            isCompleted={e.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
