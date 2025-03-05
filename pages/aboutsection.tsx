import React, { useRef, useEffect } from "react";

const aboutsection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row justify-center items-center bg-black text-white
        min-h-screen sm:h-auto overflow-hidden px-6 sm:px-12"
      ref={ref}
    >
      <p>about </p>
      <div className="relative w-full z-10 flex flex-col lg:flex-row items-center"></div>
    </section>
  );
};

export default aboutsection;
