import React from "react";

const TextareaResize = () => {
  return (
    <div className="p-5">
      <textarea className="w-full max-w-[400px] p-5 rounded-lg border border-gray-500 resize-none" placeholder="please enter content"></textarea>
    </div>
  );
};

export default TextareaResize;
