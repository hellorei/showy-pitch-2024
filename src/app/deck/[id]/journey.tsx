import anime from "animejs";
import {
  ArrowRight,
  BicepsFlexed,
  Check,
  CircleSlash2,
  Construction,
  Crosshair,
  Dot,
  DraftingCompass,
  FlaskConical,
  Heart,
  Lightbulb,
  Signpost,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function DeckPage() {
  const rectRef = useRef(null);
  const rectRefB = useRef(null);

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
  const timeline = [
    {
      period: "2016",
      title: (
        <>
          <span className="text-white font-semibold">Idea</span>: First Concept
          &
          <br />
          Market Exploration
        </>
      ),
      icon: (
        <Lightbulb
          className="text-emerald-300 shrink-0 grow-0"
          size={24}
          strokeWidth={2}
        />
      ),
      keys: [
        {
          key: "200+ demos at NAB.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Interest & feedback from enterprise clients.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
    {
      period: "2020",
      title: (
        <>
          <span className="text-white font-semibold">Kick-start</span>:
          Prototype
          <br />& Product Development
        </>
      ),
      icon: (
        <DraftingCompass
          className="text-emerald-300 shrink-0 grow-0"
          size={24}
          strokeWidth={2}
        />
      ),
      keys: [
        {
          key: "COVID-19: Increased demand for remote collaboration.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Leveraged connections to design our business model & technical solutions field experts.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Prototyping and POCs.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
    {
      period: "2021-2022",
      title: (
        <>
          <span className="text-white font-semibold">Validation</span>: Insights
          &
          <br />
          Market Engagement
        </>
      ),
      icon: (
        <FlaskConical
          className="text-emerald-300 shrink-0 grow-0"
          size={24}
          strokeWidth={2}
        />
      ),
      keys: [
        {
          key: "Iterative engineering sessions with industry partners & key enterprise customers.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Adoption interest from 5 companies and 2 system integrator partnerships.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Infrastructure cost issues.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
    {
      period: "2022-2023",
      title: (
        <>
          <span className="text-white font-semibold">Pivot</span>: Market Fit &
          <br />
          Business Model
        </>
      ),
      icon: (
        <Signpost
          className="text-emerald-300 shrink-0 grow-0"
          size={24}
          strokeWidth={2}
        />
      ),
      keys: [
        {
          key: "Shifted focus to collaboration needs from industry feedback.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Designed a new workflow to address fragmentation.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Lost contact with key members to Ukraine conflict.",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Got hit by two industry strikes (Writers & Actors).",
          icon: (
            <X
              className="stroke-red-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
    {
      period: "2024",
      title: (
        <>
          <span className="text-white font-semibold">Build</span>: MVP &
          <br />
          Key Resources
        </>
      ),
      icon: (
        <Construction
          className="text-emerald-300 shrink-0 grow-0"
          size={24}
          strokeWidth={2}
        />
      ),
      keys: [
        {
          key: "Ready to engage with key customers, operational partners, and rebuild our team.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "MVP Roadmap: Backend Ready. Production launch planned for December 2024.",
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Engage accelerator and lock pre-seed round.",
          icon: (
            <div className="relative inline-block">
              <ArrowRight
                className="stroke-indigo-400/30 absolute pb-0.5 shrink-0 grow-0 mr-1 top-px"
                size={14}
              />
              <ArrowRight
                className="stroke-indigo-400 animate-pulse pb-0.5 shrink-0 grow-0 mr-1 relative top-px"
                size={14}
              />
            </div>
          ),
        },
        {
          key: "Onboard key partners and employees.",
          icon: (
            <div className="relative inline-block">
              <ArrowRight
                className="stroke-indigo-400/30 absolute pb-0.5 shrink-0 grow-0 mr-1 top-px"
                size={14}
              />
              <ArrowRight
                className="stroke-indigo-400 animate-pulse pb-0.5 shrink-0 grow-0 mr-1 relative top-px"
                size={14}
              />
            </div>
          ),
        },
        {
          key: "Prepare for Seed Round.",
          icon: (
            <div className="relative inline-block">
              <ArrowRight
                className="stroke-indigo-400/30 absolute pb-0.5 shrink-0 grow-0 mr-1 top-px"
                size={14}
              />
              <ArrowRight
                className="stroke-indigo-400 animate-pulse pb-0.5 shrink-0 grow-0 mr-1 relative top-px"
                size={14}
              />
            </div>
          ),
        },
      ],
    },
  ];

  const traction = [
    {
      icon: (
        <Dot
          className="stroke-emerald-400 shrink-0 grow-0 relative top-px"
          size={14}
        />
      ),
      key: "200+ demos at NAB",
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
      summary: " ready for December 2024",
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
            <img src="/glass.gif" className="h-full right-0 top-0 absolute" />
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
