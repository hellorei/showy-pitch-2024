import clsx from "clsx";
import {
  Building2,
  CreditCard,
  Equal,
  Expand,
  FileChartColumn,
  Handshake,
  HeartHandshake,
  Leaf,
  Lock,
  Megaphone,
  Minus,
  Package,
  RefreshCw,
  Target,
  UserCheck,
  Users,
  Waypoints,
  X,
} from "lucide-react";

export default function DeckPage() {
  const market = [
    {
      variable: "Users",
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
          key: "Growth Hack",
          summary:
            "Aggressive content marketing, influencer partnerships, community building, SEM/SEO.",
          icon: (
            <Leaf
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Early adopters",
          summary: "from direct industry connections & partners.",
          icon: (
            <HeartHandshake
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Network Effect",
          summary: "Invitations, sharing, & collaboration organic growth.",
          icon: (
            <Waypoints
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Brand Partnerships",
          summary: "Software Integrations & Industry Partners.",
          icon: (
            <Megaphone
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
    {
      variable: (
        <div className="flex items-center space-x-1 relative">
          <X
            className="stroke-indigo-400 absolute top-4 -left-12"
            size={24}
            strokeWidth={4}
          />
          <X
            className="stroke-indigo-400 absolute top-4 -right-14"
            size={24}
            strokeWidth={4}
          />
          <span className="font-light opacity-50">(</span>
          <span>CR</span>
          <Minus
            className="stroke-indigo-400 relative top-1"
            size={24}
            strokeWidth={4}
          />
          <span>Churn</span>
          <span className="font-light opacity-50">)</span>
        </div>
      ),
      variableSub: (
        <>
          <div className="grid grid-cols-2">
            <span className="text-right">Pre-seed:</span>
            <span className="font-semibold pl-2">~4% CR</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-right">Seed:</span>{" "}
            <span className="font-semibold pl-2">~3.5% CR</span>
          </div>
        </>
      ),
      case: (
        <>
          <span>Customer Acquisition</span>
          <br />
          <span>& Retention Strategy</span>
        </>
      ),
      problems: [
        {
          key: "Direct Enterprise Sales",
          summary: "agencies, content networks & large teams.",
          icon: (
            <Users
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Flexible pricing structure",
          summary: "for solo professionals & small teams.",
          icon: (
            <UserCheck
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Sales Partners",
          summary: "Affiliates, Resellers & Systems Integrators.",
          icon: (
            <Handshake
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Vendor lock-in",
          summary:
            "from workflow adoption & assets storage volume increasing LTV (Lifetime Value).",
          icon: (
            <Lock
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
    {
      variable: "ARPU",
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
          key: "Subscriptions",
          summary: "Free, Pro, & Teams.",
          icon: (
            <RefreshCw
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Enterprise",
          summary: "Plan & Services.",
          icon: (
            <Building2
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: "Pay-as-You-Go",
          summary: "for additional Storage, Bandwidth, AI Analysis.",
          icon: (
            <CreditCard
              className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: <span className="text-indigo-400">Future Revenue Streams</span>,
          summary: "",
          icon: <></>,
        },
        {
          key: <span className="text-slate-400">Marketplace</span>,
          summary: (
            <span className="opacity-70">
              SDK & ecosystem for third-party extensions.
            </span>
          ),
          icon: (
            <Package
              className="stroke-slate-400 opacity-60 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: <span className="text-slate-400">Data Insights</span>,
          summary: <span className="opacity-70">Telemetry & Analytics.</span>,
          icon: (
            <FileChartColumn
              className="stroke-slate-400 opacity-60 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
      ],
    },
    ,
    {
      variable: (
        <div className="flex items-center space-x-1 relative">
          <Equal
            className="stroke-emerald-400 absolute top-4 -left-20"
            size={24}
            strokeWidth={4}
          />
          <span>Revenue</span>
        </div>
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
        // {
        //   key: "Cost Efficient.",
        //   summary:
        //     "Direct costs primarily tied to pay-as-you-go usage, enabling revenue to scale faster than infrastructure costs.",
        //   icon: (
        //     <X
        //       className="stroke-indigo-400 shrink-0 grow-0 mr-1 relative top-0.5"
        //       size={14}
        //     />
        //   ),
        // },
        {
          key: (
            <>
              Scalable Snowball Effect.
              <br />
            </>
          ),
          summary:
            "User growth drives network value, accelerating acquisition & retention while reducing UAC over time.",
          icon: (
            <svg
              className="fill-emerald-400 stroke-emerald-400 stroke-2 shrink-0 grow-0 mr-1 relative top-0.5"
              height="14"
              viewBox="0 0 48 48"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="graph_up">
                <path d="m42.94 41.69h-34.88c-.965 0-1.75-.785-1.75-1.75v-34.88c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25v34.88c0 2.344 1.907 4.25 4.25 4.25h34.88c.69 0 1.25-.56 1.25-1.25s-.559-1.25-1.25-1.25zm-24.775-7.415c.154 0 .311-.028.463-.089 5.638-2.252 13.801-7.861 21.148-21.644l.355 4.927c.048.658.597 1.16 1.246 1.16.03 0 .061-.001.091-.003.688-.049 1.207-.648 1.157-1.336l-.62-8.597c-.029-.402-.251-.766-.596-.977-.343-.21-.77-.242-1.14-.084l-7.934 3.37c-.636.27-.932 1.003-.662 1.639.27.635 1.001.935 1.639.662l4.171-1.771c-6.967 12.998-14.556 18.245-19.784 20.333-.641.257-.953.983-.697 1.625.197.489.666.785 1.163.785zm-8.401 1.486c.031.005.431.057 1.129.057.658 0 1.583-.047 2.713-.226.682-.107 1.147-.748 1.04-1.43-.108-.683-.749-1.149-1.43-1.039-1.917.304-3.09.164-3.118.16-.678-.081-1.309.388-1.402 1.069-.094.685.384 1.315 1.068 1.409z" />
              </g>
            </svg>
          ),
        },
        {
          key: (
            <>
              Broad Revenue Model.
              <br />
            </>
          ),
          summary:
            "Combination of subscriptions and usage-based pricing captures value across user spectrum, from individuals to enterprises.",
          icon: (
            <Target
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          key: (
            <>
              Expansion Options.
              <br />
            </>
          ),
          summary:
            "Marketplace & data insights create additional high-margin streams, increasing ARPU without proportional cost increases.",
          icon: (
            <Expand
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
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
        Scalable Revenue, Controlled Costs.
      </p>
      <div className="grid grid-cols-4 gap-6 items-start justify-start pb-4">
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
                <div className="flex flex-col mx-auto text-center items-center justify-center">
                  <div className="font-semibold text-[3.5rem] font-narrow uppercase tracking-tighter text-white flex items-end leading-[0.9]">
                    {item?.variable}
                  </div>
                </div>
                {item?.variableSub && (
                  <div
                    className={clsx(
                      "text-[11px] font-normal tracking-wide flex flex-col items-center relative top-2 opacity-70 leading-none"
                    )}
                  >
                    {item.variableSub}
                  </div>
                )}
              </div>
            </div>
            <div
              className={clsx(
                "border-b border-dashed grow my-2",
                item?.highlighted ? "border-emerald-400" : "border-indigo-400"
              )}
            ></div>
            <div className="flex flex-col relative">
              {!item?.highlighted ? (
                <div className="text-lg leading-[1.1] my-4 text-slate-200 text-center flex items-center justify-center border rounded-xl border-slate-700 h-20">
                  <span>{item?.case}</span>
                </div>
              ) : (
                <div className="absolute -inset-4 top-4 border rounded-xl border-slate-600 bg-slate-950"></div>
              )}
              <ol
                className={clsx(
                  "flex flex-col items-left mb-4 space-y-2",
                  item?.highlighted && "pt-8 relative top-3"
                )}
              >
                {item?.problems?.map((subitem, index) => (
                  <li
                    key={`traction-${index}`}
                    className="text-xs text-slate-400 flex space-x-1 items-start"
                  >
                    {subitem.icon}
                    <div>
                      <span
                        className={clsx(
                          "text-white mr-1",

                          item?.highlighted
                            ? "text-base font-narrow uppercase relative bottom-1 mb-0.5 font-semibold"
                            : "text-xs"
                        )}
                      >
                        {subitem.key}
                      </span>
                      <span
                        className={clsx(
                          item?.highlighted &&
                            "mb-0.5 relative bottom-1 text-slate-300"
                        )}
                      >
                        {subitem.summary}
                      </span>
                    </div>
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
