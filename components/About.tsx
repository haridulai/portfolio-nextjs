import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7hl px-10 justify-evenly mx-auto items-center h-screen">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://media.licdn.com/dms/image/D4E03AQEDSZwawOXoPg/profile-displayphoto-shrink_800_800/0/1665436043005?e=1685577600&v=beta&t=yUg_yv__l1GLZ1oxBva2cT_PS1d-nNocD4Sd9HBbeJw"
        alt="Harinder Dulai"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          I am a software engineer with an enthusiasm and focus on Frontend
          Engineering.I have been actively developing codebases with the latest
          available technologies for almost eight years. I always try to learn
          and contribute to front and back-end projects within my workplace. I
          believe in the power of a diverse and unified team, and I pride myself
          in my approach of solving problems creatively. Let's build together!
        </p>
      </div>
    </div>
  );
}

export default About;
