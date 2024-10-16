import anime from "animejs";
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
      trailingPhrase: (
        <>
          Storyboards, Brainstorms & other Creative Jams.
          {/* The expressive ones in storyboards & brainstorms,
          <br />
          not the ones in tedious SCRUM maps. */}
        </>
      ),
      // "Expressive project blocks designed for creative processes",
      icon: (
        <Scroll
          className="text-emerald-300 shrink-0 grow-0 mb-2"
          size={48}
          strokeWidth={1}
        />
      ),
      title: "Stories",
    },
    {
      leadingWord: "Creative",
      trailingPhrase: (
        <>
          Sequences from TikTok to Blockbusters.
          {/* Sequences for every story from */}
          {/* <br /> */}
          {/* social media to blockbusters. Ever heard of them? */}
        </>
        // "Flexible content boards tailored for production",
      ),

      icon: (
        <Film
          className="text-emerald-300 shrink-0 grow-0 mb-2"
          size={48}
          strokeWidth={1}
        />
      ),
      title: "Rundowns",
    },
    {
      leadingWord: "Simple",
      trailingPhrase: (
        <>
          Drop & Synch, we handle the rest.
          {/* <br /> */}
          {/* (Versions, processing & integration) */}
        </>
      ),
      icon: (
        <FileInput
          className="text-emerald-300 shrink-0 grow-0 mb-2"
          size={48}
          strokeWidth={1}
        />
      ),
      title: "DAM",
      // title: "With automated media analysis, proofing, and sharing.",
    },
    {
      leadingWord: "Unified",
      trailingPhrase: (
        <>
          {/* With production assistance integrations
          <br /> */}
          That integrates with creative tools.
        </>
      ),
      icon: (
        <Webhook
          className="text-emerald-300 shrink-0 grow-0 mb-2"
          size={48}
          strokeWidth={1}
        />
      ),
      title: "Platform.",
    },
  ];

  return (
    <div>
      {/* 
      <div className="flex text-[10rem] font-narrow font-semibold leading-[0.8] uppercase tracking-tighter relative right-1 mb-2 pt-4">
        <svg
          width="145"
          height="26"
          viewBox="0 0 145 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M66.2004 0C58.0319 0 52.783 4.52579 51.6676 12.5279C50.5523 20.7268 54.5545 25.351 62.9526 25.351C71.0883 25.351 76.3372 20.7596 77.4526 12.5279C78.5679 4.49299 74.5329 0 66.2004 0ZM69.5793 12.4951C69.0216 16.2666 66.758 18.3983 63.3791 18.3983C60.361 18.3983 58.9832 16.2666 59.5081 12.4951C60.0658 8.85481 62.1981 6.82148 65.413 6.82148C68.5623 6.82148 70.0386 8.85481 69.5793 12.4951ZM42.6779 0.392578L41.5298 8.85384H34.8703L36.0513 0.392578H27.5875L24.1758 24.9565H32.6067L33.7877 16.5608H40.4472L39.2662 24.9565H47.7299L51.1417 0.392578H42.6779ZM102.748 12.6269L106.848 0.394124L115.968 0.361328L107.308 24.9252H96.3508L95.7931 16.9559C95.7275 15.808 95.6619 14.4634 95.6291 12.922C95.5596 13.1478 95.4912 13.3708 95.4239 13.5904L95.4239 13.5905L95.4238 13.5906C94.9825 15.0299 94.5841 16.3295 94.1856 17.3822L91.5284 24.9252H81.3588L78.7344 0.361328H87.6246L88.2151 13.086C88.2479 13.8731 88.2479 14.4634 88.2479 15.4145C88.3555 14.9842 88.4631 14.597 88.5775 14.1856C88.7072 13.7191 88.8455 13.2214 89.0024 12.5941L92.6766 0.361328H101.764L101.928 13.086V15.4801C102.19 14.4634 102.453 13.5124 102.748 12.6269ZM16.6323 9.83917C15.6481 9.51121 14.828 9.24885 14.1719 9.05207C12.5972 8.56014 12.0395 8.36337 12.0395 8.0682C12.0395 7.77305 12.466 6.82197 13.1221 6.82197H22.8652L24.0462 0.197266H12.5316C7.08593 0.197266 3.44455 3.60801 3.44455 8.72412C3.44455 13.0859 5.97055 14.7913 10.0712 16.1359L11.6131 16.6279C13.6142 17.251 14.4999 17.5461 14.4999 17.8741C14.4671 18.4644 13.975 18.9235 13.3845 18.8907H13.3517C12.9253 18.8907 12.3676 18.8907 11.7115 18.9235C10.7929 18.9563 9.67754 18.9563 8.39814 18.9563C6.56105 18.9563 4.88798 18.8907 3.28052 18.7924L2.82125 18.7596L0 25.2203H13.7782C16.5666 25.2203 18.8958 24.4988 20.5361 23.1542C22.2419 21.744 23.1277 19.6778 23.1277 17.1526C23.1605 12.4956 20.208 11.0854 16.6323 9.83917ZM131.517 8.95222L136.536 0.458169L145 0.425374C145 0.425374 140.375 9.8377 136.077 15.7409C131.78 21.6441 126.793 24.9565 119.97 24.9565C113.146 24.9565 110.391 24.9237 110.391 24.9237L126.072 15.3474L126.465 14.8882L117.936 0.392578H126.826L131.517 8.95222Z"
            fill="white"
          />
        </svg>

        <span className="sr-only">Showy</span>
      </div>
       */}
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left relative right-1">
        a platform to produce
      </p>
      <div className="grid grid-cols-2 items-start justify-center">
        <div className="text-left mb-0 flex flex-col pt-0">
          <div className="text-[10.5rem] font-narrow font-semibold leading-[0.8] uppercase tracking-tighter relative right-2 pb-4">
            Better
            <br />
            Content
            <br />
            Faster
          </div>
        </div>
        <div className="flex flex-col text-lg text-left items-start justify-start pl-24 relative bottom-6">
          <ul className="divide-y divide-emerald-400/40">
            {keyPoints.map((keyPoint, index) => (
              <li key={index} className="py-6 flex space-x-4">
                {keyPoint.icon}
                <div className="flex-none">
                  <div className="font-semibold text-emerald-400 text-xl tracking-tight font-sans mb-1">
                    <span className="text-white">
                      {/* <span className="text-slate-400">{index + 1}.</span>{" "} */}
                      <span className="text-emerald-400">
                        {keyPoint.leadingWord}{" "}
                      </span>
                      <span className="font-sans font-normal ">
                        {keyPoint.title}
                      </span>
                    </span>
                  </div>
                  <div className="text-[1rem] leading-5 text-slate-400">
                    {keyPoint.trailingPhrase}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* 
        <div className="flex flex-col text-lg text-left relative left-12 col-span-3 items-center justify-center">
          <div className="grid grid-cols-2 relative gap-8 grid-rows-2 w-full aspect-square p-8">
            {keyPoints.map((keyPoint, index) => (
              <div
                key={index}
                className="p-4 flex flex-col items-center justify-center text-center border-2 bg-slate-950 border-slate-500/40 rounded-3xl relative z-10"
              >
                {keyPoint.icon}
                <div className="flex-none">
                  <div className="font-bold text-indigo-400 text-lg tracking-wide leading-snug font-narrow uppercase mb-1">
                    <span className="text-white">{keyPoint.leadingWord} </span>
                  </div>
                  <div className="text-base font-semibold leading-4 text-indigo-400 font-narrow uppercase mb-2">
                    {keyPoint.trailingPhrase}
                  </div>
                  <div className="text-sm leading-4 text-slate-400">
                    {keyPoint.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
         */}
      </div>
    </div>
  );
}
