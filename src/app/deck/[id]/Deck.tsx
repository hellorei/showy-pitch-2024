"use client";
// App.tsx
import { cloneElement, useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
// import "reveal.js/dist/theme/black.css";
import Appendix1FactsAi from "./appendix-1-facts-ai";
import Appendix1FactsMarket from "./appendix-1-facts-market";
import Appendix1FactsMarketCalculations from "./appendix-1-facts-market-calculations";
import Appendix1FactsWorkflow from "./appendix-1-facts-workflow";
import Ask from "./ask";
import Beat1 from "./beat-1";
import Beat2 from "./beat-2";
import Beat3 from "./beat-3";
import Beat4b from "./beat-4b";
import Beat4bDemo from "./beat-4bDemo";
import Beat4bFeatures from "./beat-4bFeatures";
import BeatContentHow from "./beat-content-how";
import BusinessModel from "./business-model";
import BusinessModelAllFit from "./business-model-allFit";
import Closing from "./closing";
import Closing2 from "./closing2";
import Cover from "./cover";
import End from "./end";
import FinancesGoals1 from "./finances-goals-1";
import FinancesGoals2 from "./finances-goals-2";
import FinancesLtvCac from "./finances-ltv-cac";
import JourneyExtended from "./journey-extended";
import Journey1 from "./journey1";
import Market from "./market";
import Market2 from "./market-2";
import Opening from "./opening";
import Opening2 from "./opening2";
import Team from "./team";

function Deck() {
  const [current, setCurrent] = useState(0);

  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      // other config options
      hash: true,
      hashOneBasedIndex: true,
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
      // on slide change
      deckRef.current?.on("slidechanged", (event: any) => {
        const index = event.indexh;

        setCurrent(index);
      });
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.", e);
      }
    };
  }, []);

  const slides = [
    {
      title: "Introduction",
      content: [<Cover key={"Cover"} />],
      multiple: false,
    },
    {
      title: "Opening",
      content: [<Opening key="Opening" />],
      multiple: false,
    },
    {
      title: "Opening",
      content: [<Opening2 key="Opening2" />],
      multiple: false,
    },
    {
      title: "Problem",
      content: [<Beat1 key={"Beat1"} />],
      multiple: false,
    },
    {
      title: "Problem",
      content: [
        <BeatContentHow key={"BeatContentHow"} />,
        // <BeatContentHowPro key={"BeatContentHowPro"} />,
      ],
      multiple: false,
      // multiple: true,
    },
    // {
    //   title: "The Sh*w Must Go On!",
    //   content: [<Beat2b />],
    // multiple: false,
    // },
    {
      title: "Pain Points",
      content: [
        // <Beat2Elephant key="Beat2Elephant" />,
        <Beat2 key="Beat2" />,
      ],
      multiple: false,
    },
    {
      title: "Solution",
      content: [<Beat3 key="Beat3" />],
      multiple: false,
    },
    // {
    //   title: "The Content Production Hub",
    //   content: [<Beat4 key="Beat4" />],
    // multiple: false,
    // },
    {
      title: "Core Features",
      content: [
        <Beat4b key="Beat4b" />,
        <Beat4bFeatures key="Beat4bFeatures" />,
        <Beat4bDemo key="Beat4bDemo" />,
      ],
      multiple: true,
    },
    {
      title: "Our Journey",
      content: [
        <Journey1 key="Journey1" />,
        <JourneyExtended key="JourneyExtended" />,
      ],
      multiple: true,
    },
    // {
    //   title: "Insights",
    //   content: [<Insights key="Insights" />],
    // multiple: false,
    // },
    {
      title: "Market",
      content: [
        <Market key="Market" />,
        <Market2 key="Market2" />,
        <Appendix1FactsMarketCalculations key="Appendix1FactsMarketCalculations" />,
        <Appendix1FactsMarket key="Appendix1FactsMarket" />,
        <Appendix1FactsWorkflow key="Appendix1FactsWorkflow" />,
        <Appendix1FactsAi key="Appendix1FactsAi" />,
      ],
      multiple: true,
    },
    {
      title: "Business Model",
      content: [
        <BusinessModel key="BusinessModel" />,
        <BusinessModelAllFit key="BusinessModelAllFit" />,
      ],
      multiple: true,
    },
    {
      title: "Team",
      content: [<Team key="Team" />],
      multiple: false,
    },
    {
      title: "The Ask",
      content: [
        <Ask key="Ask" />,
        // <AskFinances key="AskFinances" />,
        <FinancesLtvCac key="FinancesLtvCac" />,
        <FinancesGoals1 key="FinancesGoals1" />,
        <FinancesGoals2 key="FinancesGoals2" />,
      ],
      multiple: true,
    },
    {
      title: "Vision",
      content: [<Closing key="Closing" />],
      multiple: false,
    },
    {
      title: "Vision",
      content: [<Closing2 key="Closing2" />],
      multiple: false,
    },
    {
      title: "Contact Information",
      content: [<End key="End" />],
      multiple: false,
    },
    // {
    //   title: "Appendix 1 - Market Analysis",
    //   content: [
    //     <Appendix1FactsMarketCalculations key="Appendix1FactsMarketCalculations" />,
    //     <Appendix1FactsMarket key="Appendix1FactsMarket" />,
    //     <Appendix1FactsWorkflow key="Appendix1FactsWorkflow" />,
    //     <Appendix1FactsAi key="Appendix1FactsAi" />,
    //   ],
    //   multiple: true,
    // },
    // {
    //   title: "Contact Information",
    //   content: [<Beat4bDemo key="Beat4bDemo" />],
    //   multiple: false,
    // },
  ];

  return (
    <>
      {/* 
      <div className="absolute top-2 right-2 rounded bg-slate-600 z-20 text-white p-2 text-xs leading-normal">
        <h1 className="font-bold">Form</h1>
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Company</li>
          <li>Role (select): VC, Angel, LP, GP, Operator</li>
          <li>current: {current}</li>
        </ul>
      </div>
      // Your presentation is sized based on the width and height of // our
      parent element. Make sure the parent is not 0-height.
     */}
      <span className="hidden absolute -z-40">{current}</span>
      <div className="absolute h-screen w-screen inset-0 p-4 bg-gradient-to-tl from-slate-950 via-black to-slate-950">
        <div className="reveal text-indigo-200 " ref={deckDivRef}>
          <div className="slides font-sans">
            {slides?.map((slide, index) => {
              if (slide.multiple) {
                return (
                  <section key={`slide-${index}`}>
                    {slide.content.map((content, indexV) => {
                      return (
                        <section key={`slide-${index}-${indexV}`}>
                          {cloneElement(content, {
                            current:
                              current === 0 ||
                              current === indexV ||
                              current === index,
                          })}
                        </section>
                      );
                    })}
                  </section>
                );
              }
              return slide.content.map((content, indexV) => {
                return (
                  <section key={`slide-${index}`}>
                    {cloneElement(content, {
                      current:
                        current === 0 ||
                        current === indexV ||
                        current === index,
                    })}
                  </section>
                );
              });
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Deck;
