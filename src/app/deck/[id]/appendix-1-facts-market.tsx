import clsx from "clsx";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);

  const sources = [
    {
      reference:
        "The global creator economy market size is expected to grow from $250.04 billion in 2023 to $560.17 billion by 2030, at a CAGR of 12.2% during the forecast period (2023-2030).",
      source: "The Brainy Insights",
      year: 2023,
    },
    {
      reference:
        "The global Digital Asset Management market size was valued at USD 4.80 billion in 2022 and is expected to reach USD 12.8 billion by 2028, growing at a CAGR of 17.8% during the forecast period (2023-2028).",
      source:
        "MarketsandMarkets, Digital Asset Management Market Global Forecast to 2028",
      year: 2023,
    },
    {
      reference:
        "The Creative Project Management Software Market size was estimated at USD 4.2 billion in 2023 and is projected to grow at a CAGR of 13.2% reaching USD 8.9 billion by 2028.",
      source:
        "Grand View Research, Creative Project Management Software Market Size & Share Report, 2023-2028",
      year: 2023,
    },
    {
      reference:
        "The Content Collaboration Platform Market size is expected to grow from USD 11.61 billion in 2022 to USD 29.72 billion by 2027, at a CAGR of 20.7%.",
      source:
        "MarketsandMarkets, Content Collaboration Platform Market - Global Forecast to 2027",
      year: 2022,
    },
  ];

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Appendix 1.2 - Market Analysis
      </p>
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Sources: Market Data
      </p>
      <div className="grid grid-cols-2 gap-6 items-start justify-start">
        {sources.map((item, index) => (
          <div
            key={`market-${index}`}
            className={clsx(
              "text-left flex flex-col w-full pt-4 border-t border-slate-600 border-dotted"
            )}
          >
            <p className="text-[14px] leading-tight">{item.reference}</p>
            <p className="text-xs text-slate-300 mt-1 italic">
              {item.source}, {item.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
