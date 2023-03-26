import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="blue" />
      </h1>
    </div>
  );
}

export default Hero;
