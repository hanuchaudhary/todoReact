import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import CloseBtn from "./CloseBtn";

const Card = ({ title, description, isCompleted, idkey, onClickRemove }) => {
  const { toggleTodo } = useContext(TodoContext);

  return (
    <div
      key={idkey}
      className="bg-zinc-800 overflow-hidden mb-5 hover:scale-110 transition-transform shadow-xl border border-zinc-900 w-44 sm:w-44 md:w-56 text-white lg:w-56 relative rounded-3xl py-4 px-5 bg-opacity-75"
    >
      <CloseBtn onClickRemove={onClickRemove}/>
      <h1 className="md:text-xl text-sm font-semibold capitalize">{title}</h1>
      <h1 className="pt-4 md:h-44 h-40 text-sm  ">{description}</h1>
      {isCompleted ? (
        <div
          onClick={() => toggleTodo(idkey)}
          className="iscompleted cursor-pointer text-center font-semibold bg-emerald-800 hover:bg-emerald-950 transition-colors absolute bottom-0 w-full left-0 py-2"
        >
          Completed
        </div>
      ) : (
        <div
          onClick={() => toggleTodo(idkey)}
          className="iscompleted cursor-pointer text-center font-semibold bg-rose-800 hover:bg-rose-950 transition-colors absolute bottom-0 w-full left-0 py-2"
        >
          Incomplete
        </div>
      )}
    </div>
  );
};

export default Card;
