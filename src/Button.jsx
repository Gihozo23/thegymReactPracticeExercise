import React from "react";

function Button(props) {
  return (
    <div className="ml-10">
      <button className="rounded-full w-48 h-12 border-2 text-white font-semibold hover:text-[#6372ff] hover:bg-white">
        {props.message}
      </button>
    </div>
  );
}

export default Button;
