"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";

import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { LiaLinkedinIn } from "react-icons/lia";

export default function Page() {
  return (
    <div className="w-full">
      <HeroHighlight className="w-full">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.1,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl w-full px-4 md:text-4xl flex justify-center lg:text-4xl font-bold text-neutral-700 dark:text-white  leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <div className="sm:flex w-4/5 justify-evenly">
            <div className="flex flex-col justify-center items-center">
              <Highlight className="text-white w-max">
                Hi 👋🏻 I'm Rajpreet Singh
              </Highlight>
              Checkout my work , contact me if you like !
            </div>
            <img
              className=" rounded-full"
              src="https://pbs.twimg.com/profile_images/1632658338239619072/QJ5kBZKm_400x400.jpg"
            ></img>
          </div>
        </motion.h1>
        <div className="flex flex-wrap gap-5 mt-40 justify-center">
          <a href="https://github.com/rajxsv">
            <div className="flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <FiGithub />
                <span>Github</span>
              </HoverBorderGradient>
            </div>
          </a>
          <a href="https://github.com/rajxsv">
            <div className="flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <LiaLinkedinIn />
                <span>Linkedin</span>
              </HoverBorderGradient>
            </div>
          </a>
          <a href="https://github.com/rajxsv">
            <div className="flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <SiCodeforces />
                <span>Codeforces</span>
              </HoverBorderGradient>
            </div>
          </a>
          <a href="https://github.com/rajxsv">
            <div className="flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <SiLeetcode />
                <span>Leetcode</span>
              </HoverBorderGradient>
            </div>
          </a>
        </div>
      </HeroHighlight>
    </div>
  );
}
