import anime from "animejs";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function DeckPage({ current }: { current?: boolean }) {
  const rectRef = useRef(null);
  const rectRefB = useRef(null);

  useEffect(() => {
    anime({
      targets: rectRef.current,
      strokeDashoffset: [anime.setDashoffset, 100],
      easing: "linear",
      duration: 5000,
      loop: true,
    });
    anime({
      targets: rectRefB.current,
      strokeDashoffset: [anime.setDashoffset, -100],
      easing: "linear",
      duration: 5000,
      loop: true,
    });
  }, []);

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Market Opportunity
      </p>
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Where do we stand in the <strong>280 Bn</strong> Creators Economy?
      </p>
      <div className="relative items-start justify-start font-bold flex mt-4">
        <div className="aspect-square rounded-full w-5/12 bg-indigo-800 flex items-center justify-start p-6 relative text-left leading-none">
          <div className="flex flex-col justify-start">
            <div className="max-w-1/2 font-narrow text-3xl leading-none">
              280 Bn
            </div>
            <div className="font-sans leading-tight mt-1 font-semibold text-sm">
              Creators Economy
              <br />
              TAM CAGR: 12%
              <br />
              (2021-2028)
            </div>
          </div>
          <div className="aspect-square rounded-full w-[70%] bg-emerald-400 -z-10 flex items-center justify-start p-6 absolute -right-[52%] top-1/2 transform -translate-y-1/2"></div>
          <div className="aspect-square rounded-full w-[70%] bg-emerald-400/80 flex items-center justify-start p-6 absolute -right-[52%] top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col justify-start relative left-[31%]">
              <div className="max-w-1/2 font-narrow text-3xl leading-none">
                50 million
              </div>
              <div className="font-sans leading-tight mt-1 font-semibold text-sm">
                Creative Professionals
                <br />
                Worldwide
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-full w-7/12 bg-indigo-500/80 flex items-center justify-start p-6 absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col justify-start">
              <div className="max-w-1/2 font-narrow text-3xl leading-none">
                37Bn
              </div>
              <div className="font-sans leading-tight mt-1 font-semibold text-sm">
                Collaboration &
                <br />
                productivity tools
                <br />
                used by creators.
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-8 right-10 h-2/5 rounded-tl-3xl w-7/12">
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute top-0.5 left-0 w-[1000px] h-[777px]"
              ref={rectRefB}
            >
              <rect
                id="line"
                x="0.5"
                y="0.5"
                fillOpacity="0"
                className="stroke-2 stroke-emerald-400"
                strokeDasharray="8 4"
                rx="25"
              />
            </svg>
          </div>
          <span className="absolute -bottom-1.5 -left-[5px] z-20 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
          </span>
        </div>
        <div className="flex flex-col justify-start items-end border-l border-slate-300 mt-auto relative right-20 text-left">
          <div className="text-slate-200 text-xs pt-20 top-16 relative right-10">
            SAM:
            <br />
            <span className="font-normal">
              Estimated market for collaboration
              <br /> and productivity tools in the <br />
              creative industry.
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start ml-auto text-left">
          <div className="ml-auto px-4 py-3 border-2 border-emerald-400 bg-slate-950 rounded-2xl flex flex-col relative z-10 w-full mb-4">
            <div className="font-narrow text-4xl">
              <span className="font-bold">$17.1 Bn</span>:{" "}
              <span className="text-2xl font-normal opacity-70">
                4.2+7.7+5.2 Bn
              </span>
            </div>
          </div>

          <div className="font-semibold text-indigo-400 text-sm leading-none font-narrow uppercase tracking-wide px-3">
            Showy{"'"}s Focus
          </div>
          <div className="border-b border-dashed border-indigo-400 w-full my-4"></div>
          <div className="font-sans leading-tight mt-1 font-normal text-sm px-3">
            Collaboration & productivity tools
            <br />
            used in professional content
            <br />
            production workflows.
          </div>
          <ul className="font-sans leading-tight mt-1 font-normal text-sm list-disc list-inside px-3">
            <li className="flex mt-1.5">
              <ArrowRight
                size={14}
                className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative top-0.5"
              />
              <span>
                Production Mgmt:{" "}
                <span className="text-emerald-300 font-bold">
                  4.2 Bn{" "}
                  <span className="font-normal opacity-50">• CAGR: 13.2%</span>
                </span>
              </span>
            </li>
            <li className="flex mt-1.5">
              <ArrowRight
                size={14}
                className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative top-0.5"
              />
              <span>
                DAMs & Storage:{" "}
                <span className="text-emerald-300 font-bold">
                  7.7 Bn{" "}
                  <span className="font-normal opacity-50">• CAGR: 18.7%</span>
                </span>
              </span>
            </li>
            <li className="flex mt-1.5">
              <ArrowRight
                size={14}
                className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative top-0.5"
              />
              <span>
                Collaboration:{" "}
                <span className="text-emerald-300 font-bold">
                  5.2 Bn{" "}
                  <span className="font-normal opacity-50">• CAGR: 14%</span>
                </span>
              </span>
            </li>
          </ul>
          <div className="text-slate-200 text-xs mt-10 relative right-10">
            <div className="absolute w-28 right-full top-0 border-t transform rotate-12 -translate-x-3"></div>
            In perspective:
            <br />
            <span className="font-normal">
              There are 50M+ of creative professionals
              <br />
              vs. the 20M+ professionals in software.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
