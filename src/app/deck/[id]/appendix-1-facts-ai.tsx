import clsx from "clsx";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);

  const sources = [
    {
      reference:
        "75% of marketers feel pressure to use AI in content creation, despite budget cuts of up to 20%.",
      source: "Marketing AI Institute",
      year: 2023,
    },
    {
      reference:
        "87% of creative professionals express concern over AI's impact on creative rights and job security.",
      source: "Creative Union Survey",
      year: 2023,
    },
    {
      reference:
        "Only 35% of content creators feel they have the necessary skills to effectively use AI tools in their workflow.",
      source: "Adobe Digital Trends Report",
      year: 2023,
    },
  ];

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Appendix 1.3 - Market Analysis
      </p>
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Sources: AI in the Creative Industry
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
