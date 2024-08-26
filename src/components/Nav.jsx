import React, { useContext, useState } from "react";
import Input from "./Input";
import Btn from "./Btn";
import { TodoContext } from "../context/TodoContext";

const Nav = () => {
  const [inputView, setInputView] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOnClick = () => {
    setInputView((prevState) => !prevState);
  };

  const { addTodo } = useContext(TodoContext);

  const handleTodo = () => {
    addTodo(title, description);
    setTitle("");
    setDescription("");
    setInputView(false);
  };


  return (
    <div className=" z-30 relative w-full text-white px-7 sm:px-3 md:px-10 lg:px-28 py-10">
      <Btn title={"Add Todo"} onClick={handleOnClick} />
      <div className="heading absolute top-0 left-1/2 p-5 text-zinc-600 text-balance">
        todo.app
      </div>
      {inputView && (
        <div className="addtodo mt-5 w-full">
          <Input
            label={"Title"}
            placeholder={"todo title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label={"Description"}
            placeholder={"todo description"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Btn title={"Create Todo"} onClick={handleTodo} />
        </div>
      )}
    </div>
  );
};

export default Nav;
