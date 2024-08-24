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

  const {addTodo} = useContext(TodoContext)

  const handleTodo = () =>{
      addTodo(title,description);
      setTitle("");
      setDescription("");
      setInputView(false)
  }

  return (
    <div className=" relative text-white p-10">
      <Btn onClick={handleOnClick} />
      <div className="heading absolute top-0 left-1/2 p-5 text-zinc-600 text-balance">todo.app</div>
      {inputView && (
        <div className="addtodo  mt-5 w-[80%]">
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
          <Btn onClick={handleTodo} />
        </div>
      )}
    </div>
  );
};

export default Nav;
