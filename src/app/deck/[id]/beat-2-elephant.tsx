"use client";

import AnimatedNumber from "@/components/AnimatedNumber";

export default function DeckPage({ current }: { current?: boolean }) {
  return (
    <>
      <div className="absolute -inset-10 -top-5 transform translate-x-[38%] rounded-l-full overflow-hidden">
        <img
          src="/graph-problem-elephant.svg"
          alt="-"
          className="w-full bg-stone-600/70 rounded-3xl relative right-16"
        />
        <div className="absolute inset-0 right-20 bg-gradient-to-r from-black via-black/0 to-black/0"></div>
      </div>
      <div className="relative z-10">
        <p className="text-orange-400 uppercase text-2xl tracking-wide mr-auto text-left">
          Complex workflows bottleneck production
        </p>
        <div className="grid grid-cols-2">
          <div className="text-left mb-0 flex flex-col pr-8 pt-4">
            <div className="flex font-narrow items-end space-x-4 pb-6">
              <div className="font-semibold justify-start text-[11.5rem] tracking-tight text-orange-400 flex items-end leading-[0.9] relative">
                <AnimatedNumber value={current ? 19 : 1} />{" "}
                <span className="text-7xl font-semibold tracking-normal ml-0">
                  Avg.
                </span>
              </div>
              <div className="font-sans text-3xl leading-tighter tracking-tight font-semibold uppercase pl-2">
                tools to manage a production
              </div>
            </div>
            <div className="flex space-x-2 items-center mb-2">
              <div className="uppercase tracking-wide text-xs text-orange-50 font-semibold">
                Used by creative teams
              </div>
              <div className="border-b border-dashed border-orange-400 grow"></div>
            </div>
            <div className="flex font-narrow items-end space-x-4 pb-6">
              <div className="font-semibold justify-start text-[11.5rem] tracking-tight text-orange-400 flex items-end leading-[0.9] relative">
                <AnimatedNumber value={current ? 40 : 3} />{" "}
                <span className="text-8xl font-semibold tracking-normal ml-0">
                  %
                </span>
              </div>
              <div className="font-sans text-3xl leading-tighter tracking-tight font-semibold uppercase">
                Lost <span className="tacking-tightest">Productivity</span>
              </div>
            </div>
            <div className="flex space-x-2 items-center mb-2">
              <div className="uppercase tracking-wide text-xs text-orange-50 font-semibold">
                Due to task switching & context shifting
              </div>
              <div className="border-b border-dashed border-orange-400 grow"></div>
            </div>
            {/* 
          <div className="text-sm text-slate-300 italic mt-auto tracking-tight pt-8">
            * Sources: AirTable, 2023; Asana Anatomy of Work GLobal Index, 2021
          </div>
            */}
          </div>
          <div className="flex flex-col text-lg text-left items-start justify-start pl-12"></div>
        </div>
      </div>
    </>
  );
}
