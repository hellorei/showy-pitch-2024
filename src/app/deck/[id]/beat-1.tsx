"use client";

import { motion } from "framer-motion";

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

  return (
    <div className="flex-col">
      <div className="text-left mb-0">
        <p className="text-indigo-400 uppercase text-2xl tracking-widest pb-6">
          The Creative Industry
        </p>
        <div className="flex">
          <h1 className="font-sans text-[5.5rem] leading-[0.86em] mt-4 font-black">
            <span className="font-narrow text-[10rem] tracking-tight">
              <span className="text-[8rem] relative bottom-2 pr-3 font-light">
                $
              </span>
              280
              <span className="text-9xl font-black pl-4">Bn</span>
            </span>
            <br />
            <span className="font-light tracking-tight text-emerald-400 uppercase">
              growing
            </span>
          </h1>
          <div className="flex text-[17.5rem] font-narrow font-semibold pl-3 leading-[0.7] uppercase tracking-tight">
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
        </div>
      </div>
      <div className="flex text-base tracking-widest uppercase items-center pt-16">
        <div className="flex flex-col items-center text-slate-400">
          <div className="mb-4 pb-4 border-b border-dashed border-indigo-400">
            <strong className="tracking-wide text-white">More Content</strong>{" "}
            Demand
          </div>
          <div>
            <strong className="tracking-wide text-white">Less Budget</strong> to
            Produce
          </div>
        </div>
        <svg
          fill="currentColor"
          className="w-4 h-5 grow-0 shrink-0 mx-6 text-indigo-400"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 460.775 460.775"
          xmlSpace="preserve"
        >
          <path
            d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
          />
        </svg>
        <div className="flex flex-col items-center text-slate-400">
          <div className="mb-4 pb-4 border-b border-dashed border-indigo-400">
            <strong className="tracking-wide text-white">More Platforms</strong>{" "}
            to Cover
          </div>
          <div>
            <strong className="tracking-wide text-white">Less Time</strong> to
            Deliver
          </div>
        </div>
        <svg
          fill="currentColor"
          className="w-4 h-5 grow-0 shrink-0 mx-6 text-indigo-400"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 460.775 460.775"
          xmlSpace="preserve"
        >
          <path
            d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
          />
        </svg>
        <div className="flex flex-col items-center text-slate-400">
          <div className="mb-4 pb-4 border-b border-dashed border-indigo-400">
            <strong className="tracking-wide text-white">More Complex</strong>{" "}
            Workflows
          </div>
          <div>
            <strong className="tracking-wide text-white">No Process</strong> to
            Run Them
          </div>
        </div>
      </div>
    </div>
  );
}
