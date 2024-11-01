import { Check, Clapperboard, PocketKnife } from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  const founders = [
    {
      name: "Rei Romero",
      title: "Co-Founder & CEO",
      image: "/rei.jpg",
      functions: (
        <>
          Designer & Engineer in tech,
          <br />
          digital products, and innovation
        </>
      ),
      bio: [
        // {
        //   summary:
        //     "Innovation consultant expert in digital products & technology.",
        //   icon: (
        //     <Lightbulb
        //       className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
        //       size={14}
        //     />
        //   ),
        // },
        {
          summary: (
            <>
              10+ years in Strategy, Products,
              <br />& Tech for brands in 30+ countries.
            </>
          ),
          icon: (
            <PocketKnife
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        // {
        //   summary:
        //     "Specialist in innovation strategy, design thinking, UXD, and solutions engineering.",
        //   icon: (
        //     <PocketKnife
        //       className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
        //       size={14}
        //     />
        //   ),
        // },
      ],
      logos: (
        <div className="transform scale-75">
          <div className="flex space-x-4 items-center justify-center h-10 w-full text-center mx-auto">
            <img
              src={`/${"PnG"}_Logo.svg`}
              className="opacity-50 text-xs max-h-6"
              alt="P&G"
            />
            <img
              src={`/${"Harley-Davidson"}_Logo.svg`}
              className="opacity-50 text-xs max-h-8"
              alt="Harley-Davidson"
            />
            <img
              src={`/${"OtterBox"}_Logo.svg`}
              className="opacity-50 text-xs max-h-4"
              alt="OtterBox"
            />
          </div>
          <div className="flex space-x-4 items-center justify-center h-10 w-full text-center mx-auto">
            <img
              src={`/${"Mondelez"}_Logo.svg`}
              className="opacity-50 text-xs max-h-5"
              alt="Mondelez"
            />
            <img
              src={`/${"Apantac"}_Logo.svg`}
              className="opacity-50 text-xs max-h-3"
              alt="Apantac"
            />
          </div>
        </div>
      ),
      logosX: ["P&G", "Mondelez", "Harley-Davidson", "Apantac", "OtterBox"],
    },
    {
      name: "Ronen Lasry",
      title: "Co-Founder & COO",
      image: "/ronen.jpg",
      functions: (
        <>
          Award-winning producer, director
          <br />& broadcast solutions expert
        </>
      ),
      bio: [
        // {
        //   summary:
        //     "Award-winning producer, director, and technical solutions expert.",
        //   icon: (
        //     <Award
        //       className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
        //       size={14}
        //     />
        //   ),
        // },
        {
          summary: <>15+ years in Television and Broadcasting in Hollywood</>,
          icon: (
            <Clapperboard
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        // {
        //   summary:
        //     "Specialist in real-time graphics, interactive media,  AR/VR, and web tech for broadcast.",
        //   icon: (
        //     <Tv
        //       className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
        //       size={14}
        //     />
        //   ),
        // },
      ],
      logos: (
        <div className="transform scale-75">
          <div className="flex space-x-4 items-center justify-center h-10 w-full text-center mx-auto">
            <img
              src={`/${"NBC"}_Logo.svg`}
              className="opacity-50 text-xs max-h-10"
              alt="NBC"
            />
            <img
              src={`/${"E"}_Logo.svg`}
              className="opacity-50 text-xs max-h-10"
              alt="E!"
            />
            <img
              src={`/${"ABC"}_Logo.svg`}
              className="opacity-50 text-xs max-h-10"
              alt="American Broadcasting Company"
            />
            <img
              src={`/${"TNT"}_Logo.svg`}
              className="opacity-50 text-xs max-h-10 invert"
              alt="TNT"
            />
            <img
              src={`/${"Fox"}_Logo.svg`}
              className="opacity-50 text-xs max-h-6 invert"
              alt="Fox"
            />
          </div>
          <div className="flex space-x-4 items-center justify-center h-10 w-full text-center mx-auto">
            <img
              src={`/${"UFC"}_Logo.svg`}
              className="opacity-50 text-xs max-h-4"
              alt="UFC"
            />
            <img
              src={`/${"CBS"}_Logo.svg`}
              className="opacity-50 text-xs max-h-5 invert"
              alt="CBS"
            />
            <img
              src={`/${"KQED"}_Logo.svg`}
              className="opacity-50 text-xs max-h-6"
              alt="KQED"
            />
          </div>
        </div>
      ),
      logosx: ["NBC", "E!", "ABC", "UFC", "KQED"],
    },
  ];
  return (
    <div>
      <p className="text-indigo-400 uppercase text-2xl tracking-wide font-medium pb-2 mr-auto text-left">
        The Team
      </p>
      {/* 
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Industry insiders with technical expertise.
      </p>
        */}
      <div className="grid grid-cols-4 gap-8 items-start justify-start py-4">
        <div className="flex flex-col items-start justify-start col-span-2">
          <div className="text-sm text-left pt-2">
            <h1 className="font-narrow text-8xl uppercase leading-[0.9] tracking-tighter font-semibold mb-8">
              For Creators
              <br />
              by Creatives
            </h1>
            <div className="text-3xl tracking-tight">
              We{"'"}ve been in the trenches with
              <br />
              all the content value chain.
            </div>
            <div className="border-b border-dashed border-slate-700 w-full shrink-0 my-4"></div>
            <div className="grid grid-cols-2 text-lg pt-2 text-white/70 tracking-tight gap-4 leading-[1.2]">
              <div>
                <div className="text-base text-indigo-400">
                  From working with:
                </div>
                <ul className="space-y-1 py-1">
                  <li>
                    <Check
                      className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative bottom-0.5 inline-block"
                      size={16}
                    />
                    Creative agencies
                  </li>
                  <li>
                    <Check
                      className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative bottom-0.5 inline-block"
                      size={16}
                    />
                    Marketing departments
                  </li>
                  <li>
                    <Check
                      className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative bottom-0.5 inline-block"
                      size={16}
                    />
                    Product teams
                  </li>
                </ul>
              </div>
              <div className="pl-8">
                <div className="text-base text-indigo-400">To producing:</div>
                <ul className="space-y-1 py-1">
                  <li>
                    <Check
                      className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative bottom-0.5 inline-block"
                      size={16}
                    />
                    Web content
                  </li>
                  <li>
                    <Check
                      className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative bottom-0.5 inline-block"
                      size={16}
                    />
                    TV shows
                  </li>
                  <li>
                    <Check
                      className="stroke-indigo-400 shrink-0 grow-0 mr-2 relative bottom-0.5 inline-block"
                      size={16}
                    />
                    Films
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start col-span-2">
          <div className="grid grid-cols-2 gap-4 w-full">
            {founders.map((item, index) => (
              <div
                key={`founder-${index}`}
                className="flex flex-col space-y-2 items-start justify-start"
              >
                <img
                  src={item.image}
                  className="w-48 aspect-square rounded-[3rem] mx-auto"
                  alt={`${item.name}'s Picture`}
                />
                <div className="my-4 flex flex-col items-center justify-center mx-auto">
                  <h1 className="text-xl text-white tracking-tight font-semibold py-2 ">
                    {item.name}
                  </h1>
                  <h1 className="text-sm tracking-tight font-normal mb-2 text-slate-300">
                    {/* {item.title} */}
                    {item.functions}
                  </h1>
                </div>
                <div className="border-b border-dashed border-slate-700 w-full shrink-0 my-4"></div>
                <ol className="flex flex-col items-center px-1 mx-auto text-center space-y-2 pt-3 pb-1">
                  {item?.bio?.map((subitem, index) => (
                    <li
                      key={`traction-${index}`}
                      className="text-xs text-white/70 flex space-x-1 items-start"
                    >
                      {/* {subitem.icon} */}
                      <div>{subitem.summary}</div>
                    </li>
                  ))}
                </ol>
                {/* <p className="text-[10px] text-center mx-auto uppercase tracking-widest text-slate-500">
                  Clients
                </p> */}
                {item?.logos}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// numeros actualizados

// FOCUS ON CREATING !!!!
// seamless  AI

// By creators

// REI ->

// MARKET Million

// Cual es el revenue CUANTO COBRAR Y COMO LLEGO A DUPLICAR VALOR O DINERO

// REI agregar creator
