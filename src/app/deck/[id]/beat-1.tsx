"use client";

import { motion } from "framer-motion";
import { Banknote, RouteOff, Timer } from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  // Framer Motion Variants for Bounce Effect
  const bounceVariants = {
    initial: { rotate: 0 }, // Start at 0 degrees
    animate: {
      rotate: [0, -12, 4, -9, -6], // Bounce animation, ending at -12 degrees
      transition: {
        duration: 0.55, // Adjust duration for fluidity
        ease: [0.42, 0, 0.58, 1], // Ease for smooth effect
        delay: 1.2, // Delay before the animation starts
      },
    },
    reset: { rotate: 0, transition: { duration: 0.5 } }, // Reset smoothly to 0 degrees
  };

  const keyPoints = [
    {
      leadingWord: "More Content",
      title: "Less Time",
      summary: "20+ hours/month wasted searching for digital assets",
      icon: (
        <Timer
          className="text-indigo-400 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "More Platforms",
      title: "Less Budget",
      summary: "20+ hours/month wasted searching for digital assets",
      icon: (
        <Banknote
          className="text-indigo-400 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "More Complex",
      title: "No Process",
      summary: "20+ hours/month wasted searching for digital assets",
      icon: (
        <RouteOff
          className="text-indigo-400 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-start pt-6">
      <p className="text-indigo-400 uppercase text-2xl tracking-wide pb-6 mr-auto">
        The Creators Economy is a
      </p>
      <div className="text-left mb-0 tracking-tight">
        <div className="grid grid-cols-2 gap-12 items-start justify-start">
          <div className="flex flex-col">
            <div className="flex text-[17.5rem] font-narrow font-semibold pl-3 leading-[0.7] uppercase tracking-tight relative right-6">
              M
              <div>
                {current ? (
                  <motion.span
                    id="e"
                    initial="initial"
                    animate="animate"
                    variants={bounceVariants}
                    style={{ display: "inline-block" }}
                  >
                    E
                  </motion.span>
                ) : (
                  <motion.span
                    id="e"
                    initial="initial"
                    animate="reset"
                    variants={bounceVariants}
                    style={{ display: "inline-block" }}
                  >
                    E
                  </motion.span>
                )}
              </div>
              ss
              {/* <div className="transform rotate-45">s</div> */}
            </div>
            <div className="flex text-[6rem] transform scale-105 font-narrow font-semibold leading-[0.8] uppercase tracking-tighter mt-6 relative left-2">
              <span>
                But The Sh
                <span className="relative w-10 inline-block">
                  <span className="relative top-5 left-1">*</span>
                </span>
                w Must Go On!
              </span>
            </div>
          </div>
          <div className="flex flex-col text-lg text-left items-start justify-start relative pl-12">
            <ul className="divide-y divide-indigo-400/40 pt-3 w-full">
              {keyPoints.map((keyPoint, index) => (
                <li key={index} className="py-8 flex space-x-4">
                  {keyPoint.icon}
                  <div className="flex-none">
                    <div className="font-semibold text-indigo-400 text-xl tracking-tight font-sans mb-1">
                      <div className="text-slate-300 flex flex-col leading-tight">
                        {/* <div className="text-slate-400">{index + 1}.</div>{" "} */}
                        <div className="text-indigo-400 mr-3">
                          {keyPoint.leadingWord}{" "}
                        </div>
                        <div className="font-sans font-normal">
                          {keyPoint.title}
                        </div>
                      </div>
                    </div>
                    {/*
                    <div className="text-[1rem] leading-4 text-slate-400">
                      {keyPoint.summary}
                    </div>
                      */}
                  </div>
                </li>
              ))}
            </ul>
            <img
              src="/Mobflame_Emitter.gif"
              alt="Flame Icon"
              className="absolute -bottom-16 right-0 w-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
