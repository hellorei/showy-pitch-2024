"use client";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "nextjs-google-analytics";
export default function Analytics() {
  return (
    <>
      <VercelAnalytics mode={"production"} />
      <GoogleAnalytics trackPageViews />
    </>
  );
}
