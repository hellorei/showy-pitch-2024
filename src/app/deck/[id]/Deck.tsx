"use client";
// App.tsx
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
import Market from "./market";
import Market2 from "./market-2";
import Team from "./team";

function App() {
  const [isCurrent, setIsCurrent] = useState(0);

  const path = usePathname();
  const searchParams = useSearchParams();

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

  // set current slide when the slide changes
  useEffect(() => {
    const lastCharOfPath = window.location.href;
    setIsCurrent(Number(lastCharOfPath));
  }, [window.location.href]);

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
      content: <Journey />,
    },
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
      title: "Slide 3",
      content: (
        <div>
          <h1>Slide 3</h1>
          <p>This is the third slide.</p>
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
        </ul>
      </div>
      // Your presentation is sized based on the width and height of // our
      parent element. Make sure the parent is not 0-height.
     */}
      <div
        className="reveal text-indigo-200  bg-gradient-to-tl from-slate-950 via-black to-slate-950"
        ref={deckDivRef}
      >
        <div className="slides font-sans">
          {slides.map((slide, index) => (
            <section key={index}>{slide.content}</section>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
