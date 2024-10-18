import anime from "animejs";
import { Bot, FileInput, Film, Scroll } from "lucide-react";
import { useEffect, useRef } from "react";

export default function DeckPage({ current }: { current?: boolean }) {
  const rectRef = useRef(null);
  const rectRefB = useRef(null);
  console.log(current);

  useEffect(() => {
    anime({
      targets: rectRef.current,
      strokeDashoffset: [anime.setDashoffset, 100],
      easing: "linear",
      duration: 2000,
      loop: true,
    });
    anime({
      targets: rectRefB.current,
      strokeDashoffset: [anime.setDashoffset, -100],
      easing: "linear",
      duration: 2000,
      loop: true,
    });
  }, []);
  const keyPoints = [
    {
      leadingWord: "Rundowns",
      trailingPhrase:
        "Ever heard of them? They are the sequence of every story",
      // "Flexible content boards tailored for production",

      icon: (
        <Film
          className="text-emerald-300 shrink-0 grow-0 mb-2"
          size={48}
          strokeWidth={1}
        />
      ),
      summary: "Used from a daily social posts to blockbuster movies.",
    },
    {
      leadingWord: "Stories",
      trailingPhrase:
        "The ones in storyboards & brainstorms, not obnoxious SCRUM tasks",
      // "Expressive project blocks designed for creative processes",
      icon: (
        <Scroll
          className="text-emerald-300 shrink-0 grow-0 mb-2"
          size={48}
          strokeWidth={1}
        />
      ),
      summary: "Where ideas become actionable plans.",
    },
    {
      leadingWord: "Collaboration & AI",
      trailingPhrase: "AI-enabled production",
      icon: (
        <Bot
          className="text-emerald-300 shrink-0 grow-0 mb-2"
          size={48}
          strokeWidth={1}
        />
      ),
      summary: "Real-time collaboration coupled to each context.",
    },
    {
      leadingWord: "Assets Management",
      trailingPhrase: "You drop your files, we handle the rest",
      icon: (
        <FileInput
          className="text-emerald-300 shrink-0 grow-0 mb-2"
          size={48}
          strokeWidth={1}
        />
      ),
      summary: "Version control, processing, analysis & storage integration.",
      // summary: "With automated media analysis, proofing, and sharing.",
    },
    // {
    //   leadingWord: "Ideate",
    //   keys: [
    //     "Stories",
    //     "brainstorming",
    //     "preproduction",
    //     "creativity unleashed",
    //   ],
    //   icon: (
    //     <Atom
    //       className="text-emerald-300 shrink-0 grow-0"
    //       size={48}
    //       strokeWidth={1}
    //     />
    //   ),
    // },
    // {
    //   leadingWord: "Create",
    //   keys: [
    //     "Rundowns",
    //     "Templates",
    //     "Scripts",
    //     "Catered for all content formats: from influencer content to blockbusters",
    //   ],
    //   icon: (
    //     <Combine
    //       className="text-emerald-300 shrink-0 grow-0"
    //       size={48}
    //       strokeWidth={1}
    //     />
    //   ),
    // },
    // {
    //   leadingWord: "Collaborate",
    //   keys: [
    //     "Non-linear creative processes",
    //     "Real-time collaboration",
    //     "Version control",
    //     "Collaboration tools",
    //     "Unified projects",
    //     "smart asset management",
    //     "Automated media analysis, seamless proofing and sharing",
    //   ],
    //   icon: (
    //     <Activity
    //       className="text-emerald-300 shrink-0 grow-0"
    //       size={48}
    //       strokeWidth={1}
    //     />
    //   ),
    // },
    // {
    //   leadingWord: "Deliver",
    //   keys: [
    //     "AI-enabled production",
    //     "Automated media processing",
    //     "Secure content delivery pipelines",
    //   ],
    //   icon: (
    //     <HousePlug
    //       className="text-emerald-300 shrink-0 grow-0"
    //       size={48}
    //       strokeWidth={1}
    //     />
    //   ),
    // },
  ];
  // anime({
  //   targets: "#line",
  //   strokeDashoffset: 100,
  //   easing: "linear",
  //   duration: 2000,
  //   loop: true,
  // });

  // make anime work with react
  // https://animejs.com/documentation/#react

  return (
    <div>
      <div className="grid grid-cols-5 items-center justify-center">
        <div className="flex flex-col text-lg text-left relative left-44 col-span-3 items-center justify-center">
          <div className="grid grid-cols-2 relative gap-8 grid-rows-2 w-full aspect-square p-8">
            <div className="absolute inset-0 top-36 bottom-36">
              <svg width="100%" height="100%" ref={rectRef}>
                <rect
                  id="line"
                  x="0.5"
                  y="0.5"
                  fillOpacity="0"
                  className="stroke-2 stroke-cyan-700"
                  strokeDasharray="8 4"
                  rx="25"
                />
              </svg>
            </div>
            <div className="absolute inset-0 left-36 right-36">
              <svg width="100%" height="100%" ref={rectRefB}>
                <rect
                  id="line"
                  x="0.5"
                  y="0.5"
                  fillOpacity="0"
                  className="stroke-2 stroke-cyan-700"
                  strokeDasharray="8 4"
                  rx="25"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-600 text-xs font-semibold scale-75 uppercase tracking-widest">
                Workflow
              </div>
            </div>
            {keyPoints.map((keyPoint, index) => (
              <div
                key={index}
                className="p-4 flex flex-col items-center justify-center text-center border-2 bg-slate-950 hover:bg-slate-900 border-slate-500/40 hover:border-cyan-600 rounded-3xl relative z-10"
              >
                {keyPoint.icon}
                <div className="flex-none">
                  <div className="font-bold text-indigo-400 text-lg tracking-wide leading-snug font-narrow uppercase mb-1">
                    <span className="text-white">{keyPoint.leadingWord} </span>
                  </div>
                  {/*
                  <div className="text-base font-semibold leading-4 text-indigo-400 font-narrow uppercase mb-2">
                    {keyPoint.trailingPhrase}
                  </div>
                    */}
                  <div className="text-sm leading-4 text-slate-400">
                    {keyPoint.summary}
                  </div>
                  {/* 
                <ul className="text-sm opacity-80">
                  {keyPoint.keys.map((key, index) => (
                    <li key={index} className="text-sm">
                      {key}
                    </li>
                  ))}
                </ul>
                    */}
                </div>
              </div>
            ))}
          </div>
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
