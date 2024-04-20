"use client";
import React from "react";

import { HoverEffect } from "../components/ui/card-hover-effect";

import { WavyBackground } from "../components/ui/wavy-background";

const projects = [
  {
    title: "DSA HUB",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Fuzzy Search Implementation",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Collaberative White Board using Web Sockets",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    title: "Client Server Architecture Using Socket Programming",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Rozgaar Bhaarat",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "E-Library",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
];

export default function page() {
  return (
    <>
      <header>
        <WavyBackground className="max-w-4xl mt-20 mx-auto pb-40">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Projects
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Projects that Make you understand the Software World
          </p>
        </WavyBackground>
      </header>
      <main>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </main>
    </>
  );
}
