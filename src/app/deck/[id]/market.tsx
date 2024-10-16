import AnimatedNumber from "@/components/AnimatedNumber";
import anime from "animejs";
import { Plus, Triangle } from "lucide-react";
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

  const som = [
    {
      size: 4.2,
      growth: 13.2,
      title: "Content Production Mgmt.",
    },
    {
      size: 7.7,
      growth: 18.7,
      title: "Digital Assets Mgmt",
    },
    {
      size: 5.2,
      growth: 14,
      title: "Collaboration Tools",
    },
  ];

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Market Opportunity
      </p>
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Where do we stand in the Creators Economy?
      </p>
      <div className="relative justify-start font-bold flex items-center -my-20">
        <div className="flex flex-col justify-start items-start ml-auto text-left w-5/12">
          <div className="flex space-x-4 pt-16">
            <div className="font-bold justify-start text-[9rem] tracking-[-0.1em] text-emerald-400 flex items-end leading-[0.9] relative">
              <AnimatedNumber
                value={current ? som[0].size + som[1].size + som[2].size : 1}
              />{" "}
              <span className="text-5xl font-semibold tracking-tight ml-0 mb-1.5">
                Bn
              </span>
            </div>
            <div className="font-normal opacity-70 justify-start text-7xl tracking-tighter text-indigo-400 flex items-end leading-[0.9] relative mb-0.5">
              <AnimatedNumber value={current ? 15.9 : 1} />
              <span className="text-5xl">%</span>
              <span className="text-lg tracking-normal font-semibold ml-3 flex flex-col items-start leading-tight">
                <span>Weighted</span>
                <span>CAGR</span>
              </span>
            </div>
          </div>

          {/* 
          <div className="font-semibold text-indigo-400 text-sm leading-none font-narrow uppercase tracking-wide px-3">
            Showy{"'"}s Focus {current ? "current" : "not current"}
          </div>
            */}
          <div className="border-b border-dashed border-emerald-400 w-[180%] mb-4 mt-7"></div>
          {/* 
          <div className="font-sans leading-tight mt-1 font-normal text-sm px-3">
            Collaboration & productivity tools
            <br />
            used in professional content
            <br />
            production workflows.
          </div>
            */}
          <ul className="font-sans leading-tight mt-1 font-normal text-sm px-3 space-y-2">
            {som.map((item, index) => (
              <li key={`som-${index}`} className="flex items-center">
                <Plus
                  size={48}
                  strokeWidth={1}
                  className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative top-0.5"
                />
                <div className="text-emerald-400 font-bold w-24 pt-2">
                  <div className="text-3xl">{item.size} Bn</div>
                  <span className="font-normal opacity-80 text-indigo-400">
                    CAGR: {item.growth}%
                  </span>
                </div>
                <span className="flex flex-col items-start ml-4">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
          {/* 
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
           */}
        </div>
        {/* <div className="absolute top-8 right-10 h-2/5 rounded-tl-3xl w-5/12 border">
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute top-0.5 right-0 w-[1000px] h-[777px]"
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
        </div> */}
        <div className="aspect-square rounded-full w-7/12 bg-indigo-800 flex items-center justify-end p-6 relative text-left leading-none left-20">
          <div className="flex flex-col justify-end relative right-20">
            <div className="font-sans leading-tight mt-1 font-semibold text-sm">
              Creators Economy
            </div>
            <div className="max-w-1/2 font-narrow tracking-tight text-3xl leading-none">
              250 Bn <span className="font-normal">/ 560 Bn</span>
            </div>
            <div className="max-w-1/2 font-narrow font-light text-xl leading-none">
              (2023 / 2030)
            </div>
            <div className="font-sans leading-tight mt-1 font-semibold text-sm flex space-x-2">
              <span>CAGR: 12.2%</span>
              <Triangle
                className="fill-emerald-400 stroke-none shrink-0 grow-0 mr-2 relative top-0.5"
                size={12}
              />
            </div>
          </div>
          {/* <div className="aspect-square rounded-full w-[70%] bg-emerald-400 -z-10 flex items-center justify-end p-6 absolute -right-[52%] top-1/2 transform -translate-y-1/2"></div> */}
          {/* 
          <div className="aspect-square rounded-full w-[44%] border-emerald-400/80 border-2 flex items-center justify-end p-6 absolute -left-[25%] top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col justify-end relative left-[31%]">
              <div className="max-w-1/2 font-narrow text-3xl leading-none">
                50M{" "}
                <span className="text-base font-semibold">Professionals</span>
              </div>
              <div className="font-sans leading-tight mt-1 font-semibold text-sm">
                In content creation
                <br />
                worldwide
                <br />
                <br />
              </div>
            </div>
          </div>
           */}
          <div className="aspect-square rounded-full w-[47%] bg-indigo-500/80 flex items-center justify-end p-6 absolute left-0 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col justify-end">
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
          <div className="aspect-square rounded-full w-24 h-24  flex items-center justify-end absolute left-0">
            <div className="absolute inset-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
              <span className="absolute -inset-5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="flex flex-col justify-end mx-auto relative z-10">
              <div className="font-narrow text-3xl leading-none">17Bn</div>
              <div className="font-sans leading-tight mt-1 font-semibold text-sm">
                SOM
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="flex flex-col justify-start border items-end border-l border-slate-300 mt-auto relative right-20 text-left">
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
         */}
      </div>
    </div>
  );
}
