import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import CloseBtn from "./CloseBtn";

const Card = ({ title, description, isCompleted, idkey, onClickRemove }) => {
  const { toggleTodo } = useContext(TodoContext);

  return (
    <div
      key={idkey}
      className="bg-zinc-800 overflow-hidden mb-5 hover:scale-110 transition-transform shadow-black shadow-sm text-white w-56 relative rounded-3xl py-4 px-5"
    >
      <CloseBtn onClickRemove={onClickRemove}/>
      <h1 className="text-xl font-semibold capitalize">{title}</h1>
      <h1 className="pt-4 h-44 capitalize">{description}</h1>
      {isCompleted ? (
        <div
          onClick={() => toggleTodo(idkey)}
          className="iscompleted cursor-pointer text-center font-semibold bg-green-500 hover:bg-green-600 absolute bottom-0 w-full left-0 py-2"
        >
          Completed
        </div>
      ) : (
        <div
          onClick={() => toggleTodo(idkey)}
          className="iscompleted cursor-pointer text-center font-semibold bg-red-500 hover:bg-red-600 absolute bottom-0 w-full left-0 py-2"
        >
          Incomplete
        </div>
      )}
    </div>
  );
};

export default Card;
