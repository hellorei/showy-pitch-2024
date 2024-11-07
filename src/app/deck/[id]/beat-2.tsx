"use client";

import AnimatedNumber from "@/components/AnimatedNumber";
import { HeartOff, ImageOff, RouteOff, WebhookOff } from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  const keyPainPoints = [
    {
      leadingWord: "Fragmented",
      title: "Collaboration",
      summary: "83% of creators affected by poor collaboration tools.",
      icon: (
        <HeartOff
          className="text-orange-400 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "Hindered",
      title: "Creativity",
      summary: "60% of creators spend more time on admin tasks.",
      icon: (
        <RouteOff
          className="text-orange-400 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "Wasted",
      title: "Time",
      summary: "20+ hours/month wasted searching for digital assets",
      icon: (
        <ImageOff
          className="text-orange-400 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
    // {
    //   leadingWord: "Slow",
    //   title: "Adoption of AI & Automations",
    //   summary: "65% of creators feel insecure to effectively use AI",
    //   icon: (
    //     <Snail
    //       className="text-orange-400 shrink-0 grow-0"
    //       size={48}
    //       strokeWidth={1}
    //     />
    //   ),
    // },
    {
      leadingWord: "Bottleneck",
      title: (
        <>
          Production{" "}
          {/* 
          <span className="opacity-50 text-sm tracking-normal">
            (Planning, Design, Editing, Audio...)
          </span>
            */}
        </>
      ),
      summary: "47% missing deadlines due to inefficiencies",
      icon: (
        <WebhookOff
          className="text-orange-400 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
  ];

  return (
    <div>
      <p className="text-orange-400 uppercase text-2xl tracking-wide mr-auto text-left">
        Pains & Facts
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
        <div className="flex flex-col text-lg text-left items-start justify-start pl-12">
          <ul className="divide-y divide-orange-400/40">
            {keyPainPoints.map((keyPoint, index) => (
              <li key={index} className="py-8 flex space-x-4">
                {keyPoint.icon}
                <div className="flex-none">
                  <div className="font-semibold text-orange-400 text-xl tracking-tight font-sans mb-1">
                    <span className="text-white">
                      {/* <span className="text-slate-400">{index + 1}.</span>{" "} */}
                      <span className="text-orange-400">
                        {keyPoint.leadingWord}{" "}
                      </span>
                      <span className="font-sans font-normal ml-1">
                        {keyPoint.title}
                      </span>
                    </span>
                  </div>
                  <div className="text-[1rem] leading-4 text-slate-400">
                    {keyPoint.summary}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
