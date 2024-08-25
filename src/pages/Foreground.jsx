import React, { useContext } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { TodoContext } from "../context/TodoContext";

const Foreground = () => {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <>
      <Nav />
      <div className="flex justify-center">
        <div className="z-20 relative">
          <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {todos.map((e, idx) => (
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
      </div>
    </>
  );
};

export default Foreground;
