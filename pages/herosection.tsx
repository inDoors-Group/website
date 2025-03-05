import React from "react";

const herosection = () => {
  return <div className="flex items-center justify-center h-screen w-full">
  <div className="flex items-center justify-between w-full max-w-4xl px-8">
    <div className="text-center">
      <h1>Hello, I am centered!</h1>
    </div>
    <img src="globe.svg" alt="Image" className="ml-4" />
  </div>
</div>;
};

export default herosection;
