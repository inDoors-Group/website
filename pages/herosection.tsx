import React, { useRef, useEffect } from "react";

const herosection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row justify-center items-center bg-white text-black
        min-h-screen sm:h-auto overflow-hidden px-6 sm:px-12"
      ref={ref}
    >
      <p>hero</p>
      <div className="relative w-full z-10 flex flex-col lg:flex-row items-center"></div>
    </section>
  );
};

export default herosection;
