import React from "react";
import Foreground from "./Foreground";

const Background = () => {
  return (
    <div className="h-screen w-full fixed z-10 bg-zinc-900  ">
      <div className="flex h-full items-center justify-center">
        <h1 className="text-9xl font-semibold pointer-events-none text-zinc-700">todo.</h1>
      </div>
    </div>
  );
};

export default Background;
