import clsx from "clsx";
import {
  BrainCircuit,
  Building2,
  Cpu,
  CreditCard,
  Package,
  RadioTower,
  RefreshCcwDot,
  Server,
  ServerCrash,
  Store,
  User,
  UserCog,
  Users,
} from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  const market = [
    {
      variable: "Subscriptions",
      icon: (
        <RefreshCcwDot
          className="stroke-emerald-300 shrink-0 grow-0 relative top-px"
          size={40}
          strokeWidth={1}
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
      case: (
        <>
          Go-To-Market & User
          <br />
          Acquisition Strategy
        </>
      ),
      problems: [
        {
          key: (
            <>
              Hobby <span className="opacity-80 text-sm relative">(Free)</span>
            </>
          ),
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
          key: (
            <>
              Pro{" "}
              <span className="opacity-80 text-sm relative">
                (Individual Professionals)
              </span>
            </>
          ),
          summary: "from direct industry connections & partners.",
          icon: (
            <UserCog
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Teams",
          summary: "Invitations, sharing, & collaboration organic growth.",
          icon: (
            <Users
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Enterprise",
          summary: "Software Integrations & Industry Partners.",
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
      variable: "Pay-as-You-Go",
      icon: (
        <CreditCard
          className="stroke-emerald-300 shrink-0 grow-0 relative top-px"
          size={40}
          strokeWidth={1}
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
      case: (
        <>
          <span>Revenue Streams</span>
        </>
      ),
      problems: [
        {
          key: "Extended Storage",
          summary: "Free, Pro, & Teams.",
          icon: (
            <Server
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Extended Distribution",
          summary: "Plan & Services.",
          icon: (
            <RadioTower
              className="stroke-emerald-300 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Content Intelligence API",
          summary: "for additional Storage, Bandwidth, AI Analysis.",
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
      variable: "Marketplace",
      icon: (
        <Store
          className="stroke-indigo-400 shrink-0 grow-0 relative top-px"
          size={40}
          strokeWidth={1}
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
      highlighted: true,
      case: (
        <>
          <span>Business Model</span>
        </>
      ),
      problems: [
        {
          key: "Apps",
          summary: (
            <span className="opacity-70">
              SDK & ecosystem for third-party extensions.
            </span>
          ),
          icon: (
            <Package
              className="stroke-slate-400 opacity-80 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Pipelines",
          summary: <span className="opacity-70">Telemetry & Analytics.</span>,
          icon: (
            <ServerCrash
              className="stroke-slate-400 opacity-80 shrink-0 grow-0 mr-1 relative top-0.5"
              size={24}
              strokeWidth={1}
            />
          ),
        },
        {
          key: "Models",
          summary: <span className="opacity-70">Telemetry & Analytics.</span>,
          icon: (
            <BrainCircuit
              className="stroke-slate-400 opacity-80 shrink-0 grow-0 mr-1 relative top-0.5"
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
        Business Model
      </p>
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Simple • Scalable • Extensible
      </p>
      <div className="grid grid-cols-3 gap-6 items-start justify-start pb-4">
        {market.map((item, index) => (
          <div
            key={`market-${index}`}
            className={clsx(
              "text-left mb-0 flex flex-col pt-4",
              item?.highlighted && "relative left-4"
            )}
          >
            <div className="flex-col relative pb-4">
              <div className="flex flex-col">
                <div className="flex items-center justify-start space-x-2">
                  {item?.icon}
                  <div className="font-semibold text-5xl font-narrow uppercase tracking-tight text-white flex items-end leading-[0.9]">
                    {item?.variable}
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
                item?.highlighted ? "border-indigo-400" : "border-emerald-300"
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
                      index === 0 ? "px-5 py-[0.675rem]" : "p-5"
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
