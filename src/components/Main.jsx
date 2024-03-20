import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="Main flex w-screen h-screen justify-center">
      <div className="flex flex-col gap-1 place-self-center">
        <h1 className="">Välj vad du vill öva på</h1>
        <Link className="bg-blue-500 p-2 rounded text-center" to={"/array"}>
          <button>Array-Metoder</button>
        </Link>
        <Link className="bg-blue-500 p-2 rounded text-center" to={"/object"}>
          <button>Object-Metoder</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
