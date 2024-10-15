"use client";

import AnimatedNumber from "@/components/AnimatedNumber";

export default function DeckPage({ current }: { current?: boolean }) {
  const keyPoints = [
    {
      leadingWord: "Poor",
      title: "Digital Asset Management",
      summary:
        "DAMs fail to centralize workflows, forcing teams to use multiple platforms for video, audio, and design assets.",
    },
    {
      leadingWord: "Inconvenient",
      title: "Storage & Sharing",
      summary:
        "Current methods create bottlenecks, lacking version control and easy access, resulting in wasted time and security issues.",
    },
    {
      leadingWord: "Disjointed",
      title: "Project Management",
      summary:
        "Generic project tools don't account for non-linear creative processes, causing teams to adapt their workflow to the tool, hindering creativity instead of supporting it.",
    },
    {
      leadingWord: "Neglected",
      title: "Creative Tools",
      summary:
        "Most creators resort to random tools like PowerPoints, Trello, Spreadsheets, and even Pinterest, for critical elements like storyboards and scripts, fragmenting collaboration.",
    },
  ];

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider pb-6 mr-auto text-left">
        Cause & Effect
      </p>
      <div className="grid grid-cols-2">
        <div className="text-left mb-0 flex flex-col pt-4 pr-12">
          <div className="flex font-narrow space-x-4 pt-4">
            <div className="font-semibold text-[11.5rem] tracking-tight text-emerald-400 flex items-end leading-[0.9] relative -top-6">
              <AnimatedNumber value={current ? 30 : 1} />{" "}
            </div>
            <div className="font-sans text-[3.25rem] leading-[0.86em] font-light uppercase">
              average tools per creator
            </div>
          </div>
          <div className="flex space-x-2 items-center mb-2">
            <div className="border-b border-dashed border-indigo-400 grow"></div>
          </div>
          <div className="flex font-narrow space-x-4 pt-4">
            <div className="font-semibold text-[11.5rem] tracking-tight text-emerald-400 flex items-end leading-[0.9] relative -top-6">
              <AnimatedNumber value={current ? 15 : 3} />{" "}
              <span className="text-8xl font-semibold tracking-normal ml-0">
                %
              </span>
            </div>
            <div className="font-sans text-[3.25rem] leading-[0.86em] font-light uppercase">
              Annual revenue loss
            </div>
          </div>
          <div className="flex space-x-2 items-center mb-2">
            <div className="uppercase tracking-wide text-xs text-indigo-200">
              Due to inefficient workflows
            </div>
            <div className="border-b border-dashed border-indigo-400 grow"></div>
          </div>
          <div className="text-sm text-slate-300 italic mt-auto tracking-tight pt-8">
            * Sources: Salesforce, 2022; Sirkin Research, 2021
          </div>
        </div>
        <div className="flex flex-col text-lg text-left items-start justify-start pl-12">
          <ul className="divide-y divide-indigo-400/40">
            {keyPoints.map((keyPoint, index) => (
              <li key={index} className="py-4">
                <div className="font-bold text-indigo-400 tracking-wide font-narrow uppercase mb-1">
                  <span className="text-white">{keyPoint.leadingWord} </span>
                  {keyPoint.title}
                </div>
                <div className="text-[0.8rem] leading-4 tracking-wide text-slate-300">
                  {keyPoint.summary}
                </div>
                {/* 
              <div className="text-sm ml-2 opacity-40 font-normal">
                {keyPoint.summary}
              </div>
                */}
                {/* <div className="text-sm">
                <strong className="font-bold">{keyPoint.stat}</strong>
              </div> */}
                {/* 
              <ul className="text-sm ml-1 list-disc list-inside opacity-80">
                {keyPoint.keys.map((key, index) => (
                  <li key={index} className="text-sm">
                    {key}
                  </li>
                ))}
              </ul>
               */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
