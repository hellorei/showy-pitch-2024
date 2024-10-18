import clsx from "clsx";
import {
  Building2,
  ChevronRight,
  ChevronsRight,
  ChevronsUp,
  Cpu,
  Globe,
  Heart,
  RadioTower,
  Server,
  User,
  UserCog,
  Users,
} from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  const market = [
    {
      variable: "Accelerator",
      highlighted: true,
      target: "Up to 10% Equity",
      deal: "KISS / SAFE",
      goal: "",
      icon: (
        <ChevronRight
          className="stroke-emerald-300 shrink-0 grow-0 relative top-px ml-auto left-2"
          size={40}
          strokeWidth={2}
        />
      ),
      variableSub: (
        <>
          <div className="grid grid-cols-2">
            <span className="text-right">Pre-seed:</span>
            <span className="font-semibold pl-2">100K</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-right">Seed:</span>{" "}
            <span className="font-semibold pl-2">500K - 1M</span>
          </div>
        </>
      ),
      problems: [
        {
          key: "Go-To-Market",
          summary:
            "Aggressive content marketing, influencer partnerships, community building, SEM/SEO.",
          icon: (
            <User
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Engage Key Partners",
          icon: (
            <UserCog
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Growth Hack: 100K Users",
          icon: (
            <Users
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Lock-in Seed Round",
          icon: (
            <Building2
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
      ],
    },
    {
      variable: "Seed",
      target: "2M+",
      deal: "Priced Round",
      icon: (
        <ChevronsRight
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px ml-auto"
          size={40}
          strokeWidth={2}
        />
      ),
      variableSub: (
        <>
          <div className="grid grid-cols-2">
            <span className="text-right">Pre-seed:</span>
            <span className="font-semibold pl-2">~$25</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-right">Seed:</span>{" "}
            <span className="font-semibold pl-2">~$28</span>
          </div>
        </>
      ),
      problems: [
        {
          key: "Build Team",
          icon: (
            <Server
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Influencer Partenerships",
          icon: (
            <RadioTower
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Positioning: 600K+ Users",
          icon: (
            <Cpu
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
      ],
    },
    ,
    {
      variable: "Series A",
      target: "15+",
      deal: "Priced Round",
      icon: (
        <ChevronsUp
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px ml-auto"
          size={40}
          strokeWidth={2}
        />
      ),
      variableSub: (
        <>
          <div className="grid grid-cols-2">
            <span className="text-right">Pre-seed:</span>
            <span className="font-semibold pl-2">~1.2M ARR</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-right">Seed:</span>{" "}
            <span className="font-semibold pl-2">~8.8M ARR</span>
          </div>
        </>
      ),
      case: (
        <>
          <span>Business Model</span>
        </>
      ),
      problems: [
        {
          key: "Extend Revenue Streams",
          summary: (
            <span className="opacity-70">
              SDK & ecosystem for third-party extensions.
            </span>
          ),
          icon: (
            <Building2
              className="stroke-indigo-400 opacity-80 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Brand Partnerships",
          summary: <span className="opacity-70">Telemetry & Analytics.</span>,
          icon: (
            <Heart
              className="stroke-indigo-400 opacity-80 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Expand: EMEA & APAC",
          summary: <span className="opacity-70">Telemetry & Analytics.</span>,
          icon: (
            <Globe
              className="stroke-indigo-400 opacity-80 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Financing
      </p>
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Investment Roadmap
      </p>
      <div className="grid grid-cols-3 gap-6 items-start justify-start pb-4">
        {market.map((item, index) => (
          <div
            key={`market-${index}`}
            className={clsx("text-left mb-0 flex flex-col pt-4")}
          >
            <div className="flex-col relative pb-4">
              <div className="flex flex-col">
                <div className="flex items-center justify-start space-x-2">
                  <div className="font-semibold text-5xl font-narrow uppercase tracking-tight text-white flex items-end leading-[0.9]">
                    {item?.variable}
                  </div>
                  <div className="grow">{item?.icon}</div>
                </div>
                <div className="flex items-center justify-start space-x-2 pt-1">
                  <div className="font-normal text-3xl font-narrow uppercase tracking-tight text-white flex items-end leading-[0.9]">
                    {item?.target}{" "}
                    <span className="opacity-50 pl-2">{item?.deal}</span>
                  </div>
                </div>
                {/*
                {item?.variableSub && (
                  <div
                    className={clsx(
                      "text-[11px] font-normal tracking-wide flex flex-col items-center relative top-2 opacity-70 leading-none"
                    )}
                  >
                    {item.variableSub}
                  </div>
                )}
                 */}
              </div>
            </div>
            <div
              className={clsx(
                "border-b border-dashed grow my-2",
                !item?.highlighted ? "border-indigo-400" : "border-emerald-300"
              )}
            ></div>
            <div className="flex flex-col relative">
              {/* <div className="text-lg leading-[1.1] my-4 text-slate-200 text-center flex items-center justify-center border rounded-xl border-slate-700 h-20">
                <span>{item?.case}</span>
              </div> */}
              <ol className={clsx("flex flex-col items-left mt-4 space-y-2")}>
                {item?.problems?.map((subitem, subindex) => (
                  <li
                    key={`traction-${index}-${subindex}`}
                    className={clsx(
                      "text-lg leading-[1.1] text-slate-200 text-center flex items-center justify-start border rounded-xl border-slate-700 space-x-3",
                      "px-5 py-[0.675rem]"
                    )}
                  >
                    {subitem.icon}
                    <span>{subitem.key}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
