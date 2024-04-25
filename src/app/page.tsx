"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";

import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { LiaLinkedinIn } from "react-icons/lia";

import { StickyScroll } from "./components/ui/sticky-scroll-reveal";
import Image from "next/image";

import { Boxes } from "./components/ui/background-boxes";
import { cn } from "./utils/cn";

const content = [
  {
    title: "Languages/Coursework",
    description:
      "I am proficient in C/C++, Javascript, Java and Python. I have scored S grades in subjects like Database Management Systems, Operating Systems in my college curriculm.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="https://cdn.sanity.io/images/599r6htc/localized/2d98f37b14bfabde217cd89b38dd0b3481c5ef7f-1108x1108.png?w=514&h=514&q=75&fit=max&auto=format"
            className=""
          ></img>
        </div>
      </div>
    ),
  },
  {
    title: "Development Weapons",
    description:
      "I am well versed with making web applications using ReactJS , NextJS, Tailwind CSS, Express JS, Node JS, Mongoose , MongoDB with Custom Built Authentication using Token and Cookies, Caching using Redis. Robust Backend Architecture along with API and Web Sockets.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://www.applify.com.sg/blog/wp-content/uploads/2023/09/Different-Approaches-to-Website-Development-Costs.png"
          className="h-full w-full"
        ></img>
      </div>
    ),
  },
  {
    title: "Data Structures and Algorithms & Competitive Programming",
    description:
      "I am a problem-solving maestro, tackling intricate challenges on platforms like Leetcode, Codeforces, and Geeks for Geeks. With a Leetcode rating surpassing 1650+ and over 550 questions conquered, I rank amongst the top 16% coders. Additionally, I've earned Pupil status on Codeforces (1300+) and achieved a coding score of 711 on Geeks for Geeks.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Photu
      </div>
    ),
  },
  {
    title: "Achievements",
    description:
      "Published articles on Geeks for Geeks with nearly 10,000 monthly reads. Victorious in Hackmol 3.0 Hackathon. Achieved an All India Rank of 2895 in Google Codejam Farewell Round A. Core team member of Literary and Debating Club NIT Jalandhar.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Page() {
  return (
    <div className="w-full h-screen">
      <HeroHighlight className="w-full mt-32">
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
              I am a Tech Stack Independent Software Engineer . Checkout my work
              , contact me if you like !
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
            <div className="flex justify-center text-center mb-20">
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
        <p className="text-gray-500 text-xl text-center">Scroll </p>
        <p className="text-gray-500 text-center">\/</p>
      </HeroHighlight>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Skills
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          "The only way to do great work is to love what you do. If you haven't
          found it yet, keep looking. Don't settle." - Steve Jobs
        </p>
      </div>
      <div className="rounded-2xl">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
