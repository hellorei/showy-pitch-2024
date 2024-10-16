import { ChevronsRight } from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);

  return (
    <div className="pt-16">
      <p className="text-indigo-400 uppercase text-2xl tracking-wide font-medium pb-6 mr-auto text-left">
        What if creators could just...
      </p>
      <div className="grid grid-cols-2 h-80">
        <div className="text-left mb-0 flex flex-col pt-0">
          {/* 
          <p className="text-slate-400 text-4xl tracking-tight font-normal pb-1 mr-auto text-left">
            And could just...
          </p>
           */}
          <div className="text-[9.9rem] font-narrow font-semibold leading-[0.8] uppercase tracking-tighter relative right-2 pb-4">
            Focus on
            <br />
            creating
          </div>
          {/* 
          <div className="flex space-x-2 items-center my-2">
            <p className="text-emerald-400 text-4xl tracking-tight font-normal pb-1 ">
              Together on
            </p>
            <div className="uppercase tracking-wide text-xs text-emerald-400 flex">
              {
                // make an array of 20 chevrons
                Array.from({ length: 12 }, (_, i) => i + 1).map((i) => (
                  <ChevronRight
                    key={`chevron-${i}`}
                    className={clsx(
                      "text-emerald-300 shrink-0 grow-0",
                      `delay-[${i * 0.1}s]`
                    )}
                    size={20}
                  />
                ))
              }
            </div>
          </div>
           */}
        </div>
        <div className="flex flex-col text-lg text-left items-start justify-start pl-10 relative bottom-28">
          <img src="/pot.gif" className="h-auto" alt="Pot Icon" />
        </div>
      </div>
      <div className="flex space-x-12 my-2 tracking-tight text-xl w-full items-center">
        <div className="">
          <ChevronsRight
            className="text-fuchsia-400 grow-0 shrink-0 inline-block mb-1"
            size={24}
            strokeWidth={2}
          />
          Less tools
        </div>
        {/* <div className="">
          <ChevronsRight
            className="text-fuchsia-400 grow-0 shrink-0 inline-block mb-1"
            size={24}
            strokeWidth={2}
          />
          Made for Creatives
        </div> */}
        <div className="">
          <ChevronsRight
            className="text-fuchsia-400 grow-0 shrink-0 inline-block mb-1"
            size={24}
            strokeWidth={2}
          />
          Easy to Roll
        </div>
        <div className="">
          <ChevronsRight
            className="text-fuchsia-400 grow-0 shrink-0 inline-block mb-1"
            size={24}
            strokeWidth={2}
          />
          All in one place
        </div>
      </div>
      {/* 
      <ul className="grid grid-cols-4 space-x-4">
        {keyPoints.map((keyPoint, index) => (
          <li
            key={index}
            className="py-4 flex flex-col items-start justify-start space-y-4"
          >
            <div className="flex-none text-left">
              <div className="font-semibold text-emerald-300 text-xl tracking-tight font-sans mb-1 flex">
                {keyPoint.icon}

                <div className="text-white">
                  <span className="text-emerald-300">
                    {keyPoint.leadingWord}{" "}
                  </span>
                  <br />
                  <span className="font-sans font-normal ">
                    {keyPoint.title}
                  </span>
                </div>
              </div>
              <div className="text-[1rem] leading-4 text-slate-400">
                {keyPoint.summary}
              </div>
            </div>
          </li>
        ))}
      </ul>
       */}
    </div>
  );
}
