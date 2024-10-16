import anime from "animejs";
import {
  Armchair,
  MessageCircleWarning,
  Presentation,
  Shapes,
  TestTube2,
} from "lucide-react";
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

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Our Journey so far...
      </p>
      <div className="grid grid-cols-2 gap-12 items-start justify-start">
        <div className="text-left mb-0 flex flex-col pt-4">
          <div className="text-[8.5rem] font-narrow font-light leading-[0.8] uppercase tracking-tighter relative right-2 pb-4">
            <span className="font-semibold">How we got here</span>
          </div>
          <div className="border-b border-dashed border-emerald-400 grow my-4"></div>
          <ol className="flex flex-col items-start justify-start text-xl space-y-2 mt-2">
            <li className="flex space-x-3 items-center">
              <TestTube2
                className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
                size={24}
                strokeWidth={1}
              />

              <span>Trials & Errors</span>
            </li>
            <li className="flex space-x-3 items-center">
              <Presentation
                className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
                size={24}
                strokeWidth={1}
              />
              <span>Engineering Sessions with industry leaders</span>
            </li>
            <li className="flex space-x-3 items-center">
              <Armchair
                className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
                size={24}
                strokeWidth={1}
              />
              <span>Field Research On and Off-Set</span>
            </li>
            <li className="flex space-x-3 items-center">
              <MessageCircleWarning
                className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
                size={24}
                strokeWidth={1}
              />
              <span>Feedback from Creators & Broadcasters</span>
            </li>
            <li className="flex space-x-3 items-center">
              <Shapes
                className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
                size={24}
                strokeWidth={1}
              />
              <span>Multiple Iterations</span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col">
          <img src="/glass.gif" alt="-" className="w-full" />
          {/* 
          <ol className="flex flex-col items-start justify-start">
            {traction.map((item, index) => (
              <li
                key={`traction-${index}`}
                className="text-sm text-slate-400 flex space-x-2 items-center"
              >
                {item.icon}
                <div>
                  <span className="text-white">{item.key}</span>
                  {item.summary}
                </div>
              </li>
            ))}
          </ol>
           */}
        </div>
      </div>
    </div>
  );
}
