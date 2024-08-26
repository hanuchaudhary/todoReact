import React from "react";

const Btn = ({ onClick, title}) => {
  return (
    <div>
      <button
      onClick={onClick}
        type="button"
        className={"text-black bg-gradient-to-b transition-colors from-white to-zinc-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:focus:ring-zinc-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 capitalize"}
      >
        {title}
      </button>
    </div>
  );
};

export default Btn;
