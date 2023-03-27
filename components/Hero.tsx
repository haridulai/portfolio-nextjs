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
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/D4E03AQEDSZwawOXoPg/profile-displayphoto-shrink_800_800/0/1665436043005?e=1685577600&v=beta&t=yUg_yv__l1GLZ1oxBva2cT_PS1d-nNocD4Sd9HBbeJw"
        alt="Harinder Dulai"
      />
      <div>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="blue" />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
