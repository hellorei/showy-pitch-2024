import clsx from "clsx";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);

  const calculationMethodology = [
    {
      column: "Calculation Methodology",
      items: [
        {
          key: "Market Segmentation",
          values: [
            "Identified relevant segments within each market",
            "Applied industry-standard vertical breakdowns",
            "Validated against competitor market shares",
          ],
        },
        {
          key: "Growth Adjustments",
          values: [
            "Applied current CAGR to baseline figures",
            "Weighted average for combined growth rates",
            "Conservative estimates for overlapping segments",
          ],
        },
        {
          key: "Validation Approach",
          values: [
            "Cross-referenced multiple sources",
            "Compared against competitor revenues",
            "Validated with industry expert interviews",
          ],
        },
      ],
    },
    {
      column: "Assumptions & Limitations",
      items: [
        {
          key: "Market Overlap",
          values: [
            "Acknowledged potential overlap between segments",
            "Weighted estimates to avoid double-counting",
            "Clear segment definitions and boundaries",
          ],
        },
        {
          key: "Growth Projections",
          values: [
            "Based on historical data and current trends",
            "Accounts for market maturity differences",
            "Considers technological advancement and AI impact",
          ],
        },
        {
          key: "Validation Approach",
          values: [
            "Based on competitive analysis",
            "Validated against similar platform adoption rates",
            "Conservative penetration assumptions",
          ],
        },
      ],
    },
  ];

  const sources = [
    {
      column: "Digital Asset Management (DAM)",
      sources: [
        {
          source: "MarketsandMarkets, DAM Market Report 2023",
          keys: [
            "Global market size: $4.80Bn (2022)",
            "CAGR: 17.8% (2023-2028)",
          ],
        },
        {
          source: "Gartner, Market Guide for Digital Asset Management 2023",
          keys: [
            "Industry vertical breakdown",
            "M&E and Marketing segments share",
          ],
        },
      ],
    },
    {
      column: "Content Production Management",
      sources: [
        {
          source: "Grand View Research, Creative PM Software Report 2023",
          keys: ["Market size: $4.2Bn (2023)", "CAGR: 13.2% (2023-2028)"],
        },
        {
          source: "Project Management Institute, Industry Analysis 2023",
          keys: [
            "Creative industry utilization rates",
            "Vertical market shares",
          ],
        },
      ],
    },
    {
      column: "Collaboration Tools",
      sources: [
        {
          source:
            "MarketsandMarkets, Content Collaboration Platform Market 2023",
          keys: ["Market size: $11.61Bn (2022)", "CAGR: 20.7% (2023-2027)"],
        },
        {
          source: "Forrester, Creative Work Management Tools Q4 2023",
          keys: ["Industry adoption rates", "Market segmentation"],
        },
      ],
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-5 items-start justify-start">
        <div className="col-span-3">
          <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
            Appendix 1.1 - Market Analysis
          </p>
          <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
            Market Size Calculation Methodology
          </p>
          <div className="grid grid-cols-2 gap-2">
            {calculationMethodology.map((item, index) => (
              <div
                key={`market-${index}`}
                className={clsx("text-left flex flex-col w-full pt-4 pr-6")}
              >
                <p className="text-lg font-narrow font-bold uppercase pb-2">
                  {item.column}
                </p>
                <div className="flex flex-col items-start justify-start text-xs">
                  {item.items.map((subitem, index) => (
                    <div
                      key={`market-${index}`}
                      className={clsx(
                        "text-left flex flex-col w-full py-2 border-t border-slate-500 border-dotted"
                      )}
                    >
                      <p className="text-sm font-medium mb-1">{subitem.key}</p>
                      <ul className="flex flex-col items-start justify-start space-y-1">
                        {subitem.values.map((value, index) => (
                          <li
                            key={`market-${index}`}
                            className={clsx("text-left flex flex-col w-full")}
                          >
                            <span className="text-xs">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-start justify-start border-2 p-4 border-slate-700 rounded-xl">
          <p className="text-lg font-narrow font-bold uppercase pb-2">
            Sources
          </p>
          {sources.map((item, index) => (
            <div
              key={`market-${index}`}
              className={clsx(
                "text-left flex flex-col w-full pt-4 border-t border-slate-500 border-dotted"
              )}
            >
              <p className="text-xs font-bold leading-tight">{item.column}</p>
              <div className="flex flex-col items-start justify-start text-xs">
                {item.sources.map((subitem, index) => (
                  <div
                    key={`market-${index}`}
                    className={clsx(
                      "text-left flex flex-col w-full py-2 border-t border-slate-500 border-dotted"
                    )}
                  >
                    <p className="text-[12px] font-medium mb-1">
                      {subitem.source}
                    </p>
                    <div className="">
                      {subitem.keys.map((value, index) => (
                        <span
                          key={`market-${index}`}
                          className="text-[11px] leading-none mr-1"
                        >
                          <span className="mr-1">•</span>
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
