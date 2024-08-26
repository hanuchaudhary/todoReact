import React from "react";

const Input = ({ label, placeholder, onChange, value }) => {


  return (
    <div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
        >
          {label}
        </label>
        <input
        onChange={onChange}
        value={value}
          type="text"
          id="first_name"
          className="bg-zinc-50 font-semibold border mb-4 border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default Input;
