"use client";
// App.tsx
import { cloneElement, useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
// import "reveal.js/dist/theme/black.css";
import Beat1 from "./beat-1";
import Beat2 from "./beat-2";
import Beat2b from "./beat-2b";
import Beat3 from "./beat-3";
import Beat4 from "./beat-4";
import Beat4b from "./beat-4b";
import BusinessModel from "./business-model";
import Cover from "./cover";
import Journey from "./journey";
import JourneyExtended from "./journey-extended";
import Market from "./market";
import Market2 from "./market-2";
import Team from "./team";

function App() {
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
      content: <Cover />,
    },
    {
      title: "Problem",
      content: <Beat1 />,
    },
    {
      title: "Pain Points",
      content: <Beat2 />,
    },
    {
      title: "The Sh*w Must Go On!",
      content: <Beat2b />,
    },
    {
      title: "Solution",
      content: <Beat3 />,
    },
    {
      title: "The Content Production Hub",
      content: <Beat4 />,
    },
    {
      title: "Core Features",
      content: <Beat4b />,
    },
    {
      title: "Our Journey",
      content: (
        <>
          <section>
            <Journey />
          </section>
          <section>
            <JourneyExtended />
          </section>
        </>
      ),
    },
    // {
    //   title: "Our Journey 2",
    //   content: <JourneyExtended />,
    // },
    {
      title: "Market",
      content: <Market />,
    },
    {
      title: "Market SOM",
      content: <Market2 />,
    },
    {
      title: "Business Model",
      content: <BusinessModel />,
    },
    {
      title: "Team",
      content: <Team />,
    },
    {
      title: "The Ask",
      content: (
        <div>
          <h1>The Ask</h1>
          <p className="text-lg">
            Funding amount
            <br />
            What we are looking for beyond funding (contacts, mentors, advisors,
            operative support)
            <br />
            How the funding will be used.
          </p>
        </div>
      ),
    },
    {
      title: "Vision",
      content: (
        <div>
          <h1>Vision (Closing slide)</h1>
          <p className="text-lg">
            Big picture impact of Showy
            <br />
            What it means for investors, the industry, and the world
          </p>
        </div>
      ),
    },
    {
      title: "Contact Information",
      content: (
        <div>
          <h1>Contact Information</h1>
          <p className="text-lg">
            LOGO
            <br />
            Positioning statement or power words,
            <br />
            <br />
            Thank you,
            <br />
            Rei Romero
            <br />
            rei@showy.tv
            <br />
            phone
          </p>
        </div>
      ),
    },
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
      <div className="absolute inset-0 p-4 bg-gradient-to-tl from-slate-950 via-black to-slate-950">
        <div className="reveal text-indigo-200 " ref={deckDivRef}>
          <div className="slides font-sans">
            {slides.map((slide, index) => (
              <section key={index}>
                {cloneElement(slide.content, {
                  current: current === 0 || current === index,
                })}
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
