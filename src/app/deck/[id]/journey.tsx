import anime from "animejs";
import {
  BicepsFlexed,
  CircleSlash2,
  Crosshair,
  Dot,
  Heart,
  Workflow,
  Zap,
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
  const traction = [
    {
      icon: (
        <Dot
          className="stroke-emerald-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      key: "Build our first concept and did 200+ demos at NAB",
      summary: ", garnering enterprise interest",
    },
    {
      key: "Direct feedback",
      icon: (
        <Dot
          className="stroke-emerald-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: " on weekly engineering sessions with key partners",
    },
    {
      key: "5 enterprise",
      icon: (
        <Dot
          className="stroke-emerald-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: " companies showed adoption interest",
    },
    {
      key: "2 system integrator",
      icon: (
        <Dot
          className="stroke-emerald-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: " partnership opportunities",
    },
    {
      key: "Informed Pivot",
      icon: (
        <Dot
          className="stroke-emerald-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: " based on direct industry feedback",
    },
    {
      key: "MVP launch",
      icon: (
        <Dot
          className="stroke-emerald-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: " ready for Q2 2025",
    },
  ];

  const lessons = [
    {
      key: "Gap. ",
      icon: (
        <CircleSlash2
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: "The industry needs more than just another tool",
    },
    {
      key: "Need. ",
      icon: (
        <Workflow
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: "Creators require reimagined, integrated workflows",
    },
    {
      key: "Pains. ",
      icon: (
        <Zap
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: "Complexity of automation, collaboration, and AI adoption",
    },
    {
      key: "Purple hairs. ",
      icon: (
        <Zap
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: "NOT EXCLUSIVE FOR ESPN...",
    },
    {
      key: "Growing but Collapsing. ",
      icon: (
        <Zap
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: "NOT EXCLUSIVE FOR ESPN...",
    },
  ];

  const validation = [
    {
      key: "Confirmed demand",
      icon: (
        <Crosshair
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: " for unified content creation platform",
    },
    {
      key: "Adapted UVP",
      icon: (
        <Heart
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: " to a broader opportunity & better business model",
    },
    {
      key: "Devloped",
      icon: (
        <BicepsFlexed
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      summary: " resilience & adaptability to market needs",
    },
  ];

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Our Journey so far...
      </p>
      <div className="grid grid-cols-2 gap-12 items-start justify-start">
        <div className="text-left mb-0 flex flex-col pt-4">
          <div className="text-[7.5rem] font-narrow font-light leading-[0.8] uppercase tracking-tighter relative right-2 pb-4">
            <span className="font-semibold">Traction</span>
          </div>
          <div className="border-b border-dashed border-emerald-400 grow my-2"></div>
          <div className="text-2xl leading-tight font-medium my-6">
            Showy is the product of trial and error
            <br />
            through continuous collaboration
            <br />
            with industry leaders.
          </div>
          <div className="border-b border-dashed border-emerald-400 grow my-2"></div>
          <ol className="flex flex-col items-left my-4 space-y-2">
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
        </div>
        <div className="text-left mb-0 flex flex-col pt-4">
          <div className="text-[7.5rem] font-narrow font-light leading-[0.8] uppercase tracking-tighter relative right-2 pb-4">
            <span className="font-semibold">Insights</span>
            <img
              src="/glass.gif"
              className="h-full right-0 top-0 absolute"
              alt="Icon"
            />
          </div>
          <div className="border-b border-dashed border-indigo-400 grow my-2"></div>
          <div className="font-semibold text-indigo-400 text-lg leading-none font-narrow uppercase mt-4">
            Lessons Learned
          </div>
          <ol className="flex flex-col items-left my-4 space-y-2">
            {lessons.map((item, index) => (
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
          <div className="border-b border-dashed border-indigo-400 grow my-2"></div>
          <div className="font-semibold text-indigo-400 text-lg leading-none font-narrow uppercase mt-4">
            Market Validation
          </div>
          <ol className="flex flex-col items-left my-4 space-y-2">
            {validation.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
}
