// import { Metadata } from "next";
import Deck from "./Deck";

// export const metadata: Metadata = pageMetadata;

export default function DeckPage({ current }: { current?: boolean }) {
  return <Deck />;
}
