"use client";

import TypeWriter from "typewriter-effect";

const TypeWriterTexts = ({ strings }: { strings: string }) => {
  return (
    <h2 className="text-2xl text-black dark:text-white">
      <TypeWriter
        options={{
          strings,
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 25,
        }}
      />
    </h2>
  );
};

export default TypeWriterTexts;
