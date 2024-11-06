import clsx from "clsx";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);

  const sources = [
    {
      reference:
        "Creative teams use an average of 19 different software tools to manage their work.",
      source: "Airtable Creative Teams Report",
      year: 2023,
    },
    {
      reference:
        "Companies are losing up to 40% of their productivity due to task switching and context shifting, costing the global economy an estimated $450 billion annually",
      source: "Asana Anatomy of Work Global Index",
      year: 2023,
    },
    {
      reference:
        "60% of creatives spend more time on administrative tasks than actual creative work.",
      source: "Adobe Creative Cloud survey",
      year: 2022,
    },
    {
      reference:
        "Creatives waste up to 20 hours per month searching for digital assets.",
      source: "Bynder Digital Asset Management Report",
      year: 2023,
    },
    {
      reference:
        "83% of creative professionals report that poor collaboration tools negatively impact their productivity.",
      source: "Wrike Creative Management Report",
      year: 2023,
    },
    {
      reference:
        "Organizations lose 20-30% of revenue annually due to inefficient processes.",
      source: "IDC Research",
      year: 2022,
    },
    {
      reference:
        "47% of creative teams report missing deadlines due to workflow inefficiencies.",
      source: "Workfront State of Work Report",
      year: 2023,
    },
    {
      reference:
        "Content marketers waste an average of 8 hours per week on non-productive content-related tasks, translating to a potential loss of $50,000 per employee annually in larger organizations.",
      source: "Casted Content Marketing Efficiency Report",
      year: 2023,
    },
  ];

  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        Appendix 1.2 - Market Analysis
      </p>
      {/*
       */}
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Sources: Workflow & Productivity Data
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
