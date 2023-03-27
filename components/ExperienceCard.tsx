import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-23 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.licdn.com/dms/image/D4E03AQEDSZwawOXoPg/profile-displayphoto-shrink_800_800/0/1665436043005?e=1685577600&v=beta&t=yUg_yv__l1GLZ1oxBva2cT_PS1d-nNocD4Sd9HBbeJw"
        alt="Experience"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Web Developer</h4>
        <p className="font-bold text-2xl mt-1">Ennismore</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" />
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started word... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary points
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
