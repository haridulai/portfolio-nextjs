import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="blue" />
      </h1>
    </div>
  );
}

export default Hero;
