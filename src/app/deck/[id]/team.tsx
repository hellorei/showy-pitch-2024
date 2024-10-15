import {
  Award,
  Clapperboard,
  Lightbulb,
  PocketKnife,
  Rocket,
  Tv,
} from "lucide-react";

export default function DeckPage({ current }: { current?: boolean }) {
  console.log(current);
  const founders = [
    {
      name: "Rei Romero",
      title: "Co-Founder & CEO",
      image: "/rei.jpg",
      bio: [
        {
          summary:
            "Innovation consultant expert in digital products & technology.",
          icon: (
            <Lightbulb
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          summary:
            "10+ years building & launching F500 products in 30+ countries.",
          icon: (
            <Rocket
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          summary:
            "Specialist in innovation strategy, design thinking, user experience, and solutions engineering.",
          icon: (
            <PocketKnife
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
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
      bio: [
        {
          summary:
            "Award-winning producer, director, and technical solutions expert.",
          icon: (
            <Award
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          summary: "15+ years in Television and Broadcasting in Hollywood.",
          icon: (
            <Clapperboard
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
        {
          summary:
            "Specialist in real-time graphics, interactive media,  AR/VR, and web technologies for broadcast.",
          icon: (
            <Tv
              className="stroke-emerald-400 shrink-0 grow-0 mr-1 relative top-0.5"
              size={14}
            />
          ),
        },
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
      <p className="text-indigo-400 uppercase text-2xl tracking-wider font-medium pb-2 mr-auto text-left">
        The Team
      </p>
      <p className="text-slate-400 text-xl font-base pb-2 mr-auto text-left">
        Industry insiders with technical expertise.
      </p>
      <div className="grid grid-cols-2 gap-10 items-start justify-start py-4">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-narrow mb-2 ">Founders</h1>
          <div className="grid grid-cols-2 gap-6 w-full">
            {founders.map((item, index) => (
              <div
                key={`founder-${index}`}
                className="flex flex-col space-y-2 items-start justify-start"
              >
                <img
                  src={item.image}
                  className="w-40 aspect-square rounded-[3rem] mx-auto"
                  alt={`${item.name}'s Picture`}
                />
                <div className="my-4 flex flex-col items-start justify-start">
                  <h1 className="text-xl text-emerald-400 tracking-tight font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="text-sm tracking-tight font-normal">
                    {item.title}
                  </h1>
                </div>
                <div className="border-b border-dashed border-slate-700 w-full shrink-0 my-4"></div>
                <ol className="flex flex-col items-left text-left space-y-2 pt-3 pb-1">
                  {item?.bio?.map((subitem, index) => (
                    <li
                      key={`traction-${index}`}
                      className="text-xs text-slate-300 flex space-x-1 items-start"
                    >
                      {subitem.icon}
                      <div>{subitem.summary}</div>
                    </li>
                  ))}
                </ol>
                {item?.logos}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-narrow mb-2 ">Team</h1>
          <div className="text-sm text-left">
            Key Partnerships & Planned Hires:
            <br />• Strategic staffing partnership with Webstarted
            <br />• Global hiring enabled through Deel
            <br />• Actively recruiting: CTO, Lead Engineer, Head of Product
            <br />• Direct access to top Erlang and Go talent
            <br />• Supported by GCP partner agencies and Google contacts
            <br />
            <br />
            Team Strategy:
            <br />• 16% ESOP to attract and retain top talent
            <br />• Dedicated pools for key employees and future advisors
            <br />• Focus on building a diverse, global team of industry experts
            <br />
            <br />
            Advisory Network:
            <br />• we talked to many industry experts and consulted with, we
            are now in the process of selecting the right advisors that balance
            the different areas we want to cover: A, B, C AREAS
            <br />
            <br />
            Ronen:
            <br />• Someone with deep understanding of the creators world
            (YouTube / Twitch / Instagram / TikTok)
            <br />• Someone on Agencies & Advertising
            <br />• Hires: Lead Engineer, AI Guy
            <br />• People from Discord, StreamDeck, Creator Space...
            <br />• Humility: tried multiple ways, learned a lot, we persevered,
            fuck up a lot, we think this is the right way
          </div>
        </div>
      </div>
    </div>
  );
}
