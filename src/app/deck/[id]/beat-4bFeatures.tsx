import anime from "animejs";
import clsx from "clsx";
import { FileInput, Film, Scroll, Webhook } from "lucide-react";
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
      leadingWord: "Expressive",
      title: "Stories",
      trailingPhrase: (
        <>
          Storyboards, Brainstorms & other Creative Jams.
          {/* The expressive ones in storyboards & brainstorms,
          <br />
          not the ones in tedious SCRUM maps. */}
        </>
      ),
      // "Expressive project blocks designed for creative processes",
      color: "text-indigo-400",
      bg: "bg-indigo-400",
      indicator: "top-[16.5%] left-[47%]",
      icon: (
        <Scroll
          className="text-indigo-400 shrink-0 grow-0 mb-2"
          size={40}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "Creative",
      title: "Rundowns",
      trailingPhrase: (
        <>
          Sequences from TikTok to Blockbusters.
          {/* Sequences for every story from */}
          {/* <br /> */}
          {/* social media to blockbusters. Ever heard of them? */}
        </>
        // "Flexible content boards tailored for production",
      ),

      color: "text-blue-400",
      bg: "bg-blue-400",
      indicator: "top-[30%] left-[30%]",
      icon: (
        <Film
          className="text-blue-400 shrink-0 grow-0 mb-2"
          size={40}
          strokeWidth={1}
        />
      ),
    },
    {
      leadingWord: "Simple",
      title: "DAM",
      trailingPhrase: (
        <>
          Drop & Synch, we handle the rest.
          {/* <br /> */}
          {/* (Versions, processing & integration) */}
        </>
      ),
      color: "text-teal-500",
      bg: "bg-teal-500",
      indicator: "top-[55.25%] left-[56%]",
      icon: (
        <FileInput
          className="text-teal-500 shrink-0 grow-0 mb-2"
          size={40}
          strokeWidth={1}
        />
      ),
      // title: "With automated media analysis, proofing, and sharing.",
    },
    {
      leadingWord: "Unified",
      title: "Platform.",
      trailingPhrase: (
        <>
          {/* With production assistance integrations
          <br /> */}
          That integrates with creative tools.
        </>
      ),
      color: "text-emerald-500",
      bg: "bg-emerald-500",
      indicator: "top-[12%] left-[69%]",
      icon: (
        <Webhook
          className="text-emerald-500 shrink-0 grow-0 mb-2"
          size={40}
          strokeWidth={1}
        />
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-start justify-center relative">
        <div className="text-left mb-0 flex pt-0">
          <img
            src="/screen-001.jpg"
            alt="screen"
            className="w-4/5 mx-auto rounded-lg"
          />
          {/* <div className="pl-4">
            <p className="text-indigo-400 uppercase text-2xl tracking-wide font-medium pb-2 mr-auto text-left relative right-1">
              a platform to produce
            </p>
          </div> */}
        </div>
        <ul className="grid grid-cols-4 w-full text-lg text-left items-start justify-start pt-6">
          {keyPoints.map((keyPoint, index) => (
            <li key={index} className="flex-none">
              {keyPoint.icon}
              <div
                className={clsx(
                  "font-semibold text-lg tracking-tight font-sans",
                  keyPoint.color
                )}
              >
                <span className="text-white">
                  <span className="text-slate-400">
                    {String.fromCharCode(97 + index)}.
                  </span>{" "}
                  <span className={keyPoint.color}>
                    {keyPoint.leadingWord}{" "}
                  </span>
                  <span className="font-sans font-normal ">
                    {keyPoint.title}
                  </span>
                </span>
              </div>
              <div className="text-sm leading-4 text-slate-400">
                {keyPoint.trailingPhrase}
              </div>
            </li>
          ))}
        </ul>
        {keyPoints.map((keyPoint, index) => (
          <div
            key={`indicator-${index}`}
            className={clsx("absolute flex h-4 w-4", keyPoint.indicator)}
          >
            <div
              className={clsx(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                keyPoint.bg
              )}
            ></div>
            <div
              className={clsx(
                "relative inline-flex rounded-full h-4 w-4 items-center justify-center text-black",
                keyPoint.bg
              )}
            >
              <span className="font-bold text-xs">
                {String.fromCharCode(97 + index)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
