import React from "react";

function Button({ name }) {
  return (
    <button className="p-1 rounded bg-cyan-800 text-white px-4 hover:bg-cyan-700 ">
      {name}{" "}
    </button>
  );
}

export default Button;
