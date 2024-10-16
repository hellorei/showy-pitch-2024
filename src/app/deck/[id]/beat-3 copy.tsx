import clsx from "clsx";
import {
  Activity,
  Atom,
  Brain,
  ChevronRight,
  Combine,
  HousePlug,
} from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  const keyPoints = [
    {
      leadingWord: "A Production Control Hub",
      trailingPhrase: "That increases productivity & sparks creativity",
      icon: (
        <Atom
          className="text-emerald-300 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "With Frictionless Assets Management",
      trailingPhrase: "That handle obstacles at the backstage",
      icon: (
        <Combine
          className="text-emerald-300 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "And Real-time collaboration",
      trailingPhrase: "For non-linear creative processes",
      icon: (
        <Activity
          className="text-emerald-300 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "Backed by AI-powered tools ",
      trailingPhrase: "To increase the pace of content production",
      icon: (
        <Brain
          className="text-emerald-300 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "In a Unified platform ",
      trailingPhrase: "That lives in harmony with the existing tooling chaos",
      icon: (
        <HousePlug
          className="text-emerald-300 shrink-0 grow-0"
          size={48}
          strokeWidth={1}
        />
      ),
    },
  ];
  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-6 mr-auto text-left">
        What if creators didn{"'"}t have to
        <br />
        struggle with all of this complexity?
      </p>
      <div className="grid grid-cols-2">
        <div className="text-left mb-0 flex flex-col pt-0">
          <p className="text-slate-400 text-4xl tracking-tight font-normal pb-1 mr-auto text-left">
            And could just...
          </p>
          <div className="text-[8.75rem] font-narrow font-semibold leading-[0.8] uppercase tracking-tighter relative right-2 pb-4">
            Focus on
            <br />
            creating
          </div>
          <div className="flex space-x-2 items-center my-2">
            <p className="text-emerald-400 text-4xl tracking-tight font-normal pb-1 ">
              Together on
            </p>
            {/* <div className="border-b border-dashed border-emerald-400 grow"></div> */}
            <div className="uppercase tracking-wide text-xs text-emerald-400 flex">
              {
                // make an array of 20 chevrons
                Array.from({ length: 12 }, (_, i) => i + 1).map((i) => (
                  <ChevronRight
                    key={`chevron-${i}`}
                    className={clsx(
                      "text-emerald-300 shrink-0 grow-0",
                      `delay-[${i * 0.1}s]`
                    )}
                    size={20}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col text-lg text-left items-start justify-start pl-12">
          <ul className="divide-y divide-indigo-400/40">
            {keyPoints.map((keyPoint, index) => (
              <li key={index} className="py-4 flex space-x-4">
                {keyPoint.icon}
                <div className="flex-none">
                  <div className="font-bold text-indigo-400 text-xl tracking-wide font-narrow uppercase mb-1">
                    <span className="text-white">{keyPoint.leadingWord} </span>
                  </div>
                  <div className="text-[1rem] leading-4 text-slate-300">
                    {keyPoint.trailingPhrase}
                  </div>
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
    //   <div className="flex-col">
    //     <div className="text-left mb-0">
    //       <p className="text-indigo-400 uppercase text-2xl tracking-widest pb-6">
    //       </p>
    //       <div className="grid grid-cols-5 gap-4">
    //         {keyPoints.map((keyPoint, index) => (
    //           <div key={index} className="text-left mb-0 flex flex-col">
    //             <div className="flex font-narrow">
    //               <div className="text-xl text-slate-300">
    //                 <strong className="text-white">{keyPoint.leadingWord}</strong>
    //                 <span>{keyPoint.trailingPhrase}</span>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
  );
}
