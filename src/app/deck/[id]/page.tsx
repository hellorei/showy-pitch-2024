"use client";
// import { Metadata } from "next";
import accessCodes from "@/app/lib/accessCodes";
import { useParams, useRouter } from "next/navigation";
import Deck from "./Deck";

// export const metadata: Metadata = pageMetadata;

export default function DeckPage() {
  const { id } = useParams();
  const router = useRouter();
  const accessCode = accessCodes.find((code) => code.accessCode === id);

  if (!accessCode) {
    router.push("/");
  }
  return <Deck />;
}
