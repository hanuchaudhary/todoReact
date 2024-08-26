import React from "react";

const CloseBtn = ({ onClickRemove }) => {
  return (
    <div>
      <button
        onClick={onClickRemove}
        type="button"
        className="bg-white absolute top-3 right-3 rounded-full p-1 inline-flex items-center justify-center text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500"
      >
        <span className="sr-only">Close menu</span>
        <svg
          className="md:h-4 md:w-4 h-3 w-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CloseBtn;
