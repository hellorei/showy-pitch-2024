import anime from "animejs";
import {
  ArrowRight,
  Check,
  Construction,
  DraftingCompass,
  FlaskConical,
  Lightbulb,
  Signpost,
  X,
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
          key: `First concept: "A TV Studio in your Browser". An cloud-based video production application we created for internal use.`,
          icon: (
            <Check
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
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
          key: "COVID-19: Increased demand for remote collaboration made people ask for Showy, we decided to build it as a cloud collaboration tool for live video production.",
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
          key: "Closed production trials & validation with key users.",
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

  const lessons = [
    "The industry needs more than exclusive enterprise tools that neglect small teams and individuals.",
    "Creatives need a platform to solve fragmentation and connect teams, creators, & decision-makers.",
    "Everyone struggle without standard processes or a centralized platform to manage productions.",
  ];

  const takeaways = [
    "Validation: Industry engagement proved the need & shaped our product",
    "Opportunity: Untapped a more scalable business model with a larger market.",
    "Pivot: Changed our UVP from B2B to a B2B/B2B2C democratized model.",
  ];

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Our Journey
      </p>
      <div className="flex flex-col items-start justify-start">
        <div className="text-left mb-0 flex flex-col pt-4">
          <div className="text-7xl font-narrow font-light leading-[0.8] uppercase tracking-tighter relative right-2 pb-4">
            <span className="font-semibold">Timeline</span>{" "}
            <span className="opacity-60">&</span> Challenges
          </div>
        </div>
        <div className="flex flex-col text-lg text-left relative items-center justify-center pt-4">
          <div className=" relative w-full grid grid-cols-5 gap-2">
            <div className="h-px border-b-2 border-dashed border-indigo-500/80 absolute top-5 left-0 right-20"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className="items-start justify-start text-left relative z-10"
              >
                <div className="flex items-center -space-x-4">
                  <div className="flex items-center justify-center p-1.5 rounded-full border-indigo-500 border-2 bg-slate-950 relative z-10">
                    {item.icon}
                  </div>
                  <div className="grow">
                    <div className="font-bold whitespace-nowrap pl-6 text-white bg-indigo-500 text-sm py-0.5 w-[6.25rem] text-left tracking-wide leading-snug font-narrow uppercase rounded-xl">
                      {item.period}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full mt-2">
                  <div className="font-normal text-emerald-300 text-lg leading-none font-narrow uppercase mb-4">
                    {item.title}
                  </div>
                  <ul className="space-y-2">
                    {item.keys.map((key, index) => (
                      <li
                        key={index}
                        className="text-[11px] leading-snug text-slate-400"
                      >
                        <div className="flex space-x-1">
                          {key.icon} {key.key}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className=" relative w-full grid grid-cols-10 gap-2 pt-4">
            <div className="col-span-6 relative rounded-xl px-1">
              <div className="absolute h-5 -top-5 left-0 w-full border border-dashed border-indigo-400 border-t-transparent rounded-b-lg"></div>
              <div className="my-3 text-xs font-bold">Lessons Learned</div>
              <ol className="space-y-1">
                {lessons.map((lesson, index) => (
                  <li
                    key={`lesson-${index}`}
                    className="text-xs text-slate-400 "
                  >
                    {String.fromCharCode(97 + index)}) {lesson}
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-span-4 relative rounded-xl px-1">
              <div className="absolute h-5 -top-5 left-0 w-full border border-dashed border-indigo-400 border-t-transparent rounded-b-lg"></div>
              <div className="my-3 text-xs font-bold">
                Key Takeaways & Pivot
              </div>
              <ol className="space-y-1 whitespace-nowrap">
                {takeaways.map((lesson, index) => (
                  <li
                    key={`lesson-${index}`}
                    className="text-xs text-slate-400 whitespace-nowrap"
                  >
                    {String.fromCharCode(97 + index)}) {lesson}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
